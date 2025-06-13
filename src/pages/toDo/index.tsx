import React, { useState, useEffect, useCallback } from "react";
import { View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../@types/navigation';
import { Upper } from "../../components/upper";
import { Bottom } from "../../components/bottom";
import { ScheduleItem } from "../../components/scheduleItem";
import { DayRoutineNav } from "../../components/dayRotineNav";
import { ScheduleEdit } from "../../components/scheduleEdit";
import { firebase } from '../../services/firebase';
import { Atividade, DayOfWeek } from '../../@types/rotina';
import { style } from "./styles";
import { AntDesign, MaterialIcons, FontAwesome, FontAwesome6, Octicons } from '@expo/vector-icons';
import { daysOrder, getDayName, getDayKeyForFirebase, getCurrentDayPortuguese } from '../../@types/dateHelpers';


type ToDoScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'ToDo'>;

export default function ToDo() {
  const navigation = useNavigation<ToDoScreenNavigationProp>();
  const [currentDay, setCurrentDay] = useState<DayOfWeek>(getCurrentDayPortuguese());
  const [activities, setActivities] = useState<Atividade[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [activityToEdit, setActivityToEdit] = useState<Atividade | null>(null);

  const userId = firebase.auth().currentUser?.uid;

  const fetchActivities = useCallback(async () => {
    if (!userId) {
      console.log('Usuário não logado.');
      setActivities([]);
      return;
    }
    const activitiesRef = firebase.firestore()
      .collection('users')
      .doc(userId)
      .collection('routine')
      .doc(getDayKeyForFirebase(currentDay));

    const doc = await activitiesRef.get();
    if (doc.exists) {
      setActivities((doc.data()?.activities || []) as Atividade[]);
    } else {
      setActivities([]);
    }
  }, [userId, currentDay]);

  useFocusEffect(
    useCallback(() => {
      if (!userId) {
        console.log('Usuário não logado ou userId indisponível para listener.');
        setActivities([]);
        return;
      }

      const dayKeyForFirebase = getDayKeyForFirebase(currentDay);
      console.log(`Configurando listener para o dia Firebase: ${dayKeyForFirebase}`);

      const dayDocumentRef = firebase.firestore()
        .collection('users')
        .doc(userId)
        .collection('routine')
        .doc(dayKeyForFirebase);

      const unsubscribe = dayDocumentRef.onSnapshot(snapshot => {
          if (snapshot.exists) {
            const fetchedActivities = (snapshot.data()?.activities || []) as Atividade[];
            setActivities(fetchedActivities);
            console.log(`Atividades lidas para ${dayKeyForFirebase}:`, fetchedActivities);
          } else {
            setActivities([]);
            console.log(`Documento não existe para o dia Firebase: ${dayKeyForFirebase}. Nenhuma atividade.`);
          }
        }, (error) => {
            console.error("Erro no listener de rotina:", error);
            setActivities([]);
        });

      return () => {
        console.log(`Desinscrevendo listener para o dia Firebase: ${dayKeyForFirebase}`);
        unsubscribe();
      };
    }, [userId, currentDay])
  );

  const handleNextDay = () => {
    const currentIndex = daysOrder.indexOf(currentDay);
    const nextIndex = (currentIndex + 1) % daysOrder.length;
    setCurrentDay(daysOrder[nextIndex]);
    console.log(`Navegando para o próximo dia: ${daysOrder[nextIndex]}`);
  };

  const handlePrevDay = () => {
    const currentIndex = daysOrder.indexOf(currentDay);
    const prevIndex = (currentIndex - 1 + daysOrder.length) % daysOrder.length;
    setCurrentDay(daysOrder[prevIndex]);
    console.log(`Navegando para o dia anterior: ${daysOrder[prevIndex]}`);
  };

  const handleSaveActivity = async (activity: Atividade) => {
    if (!userId) {
      console.log('userId não disponível para salvar atividade.');
      return;
    }

    const dayKeyForFirebase = getDayKeyForFirebase(currentDay);
    const activitiesRef = firebase.firestore()
      .collection('users')
      .doc(userId)
      .collection('routine')
      .doc(dayKeyForFirebase);

    console.log(`Tentando salvar atividade para: User ID: ${userId}, Dia Firebase: ${dayKeyForFirebase}`);

    const doc = await activitiesRef.get();
    let currentActivities: Atividade[] = [];
    if (doc.exists) {
      currentActivities = (doc.data()?.activities || []) as Atividade[];
    }

    const activityExists = currentActivities.some(a => a.id === activity.id);

    let updatedActivities: Atividade[];
    if (activityExists) {
      updatedActivities = currentActivities.map(a =>
        a.id === activity.id ? activity : a
      );
      console.log('Atividade existente atualizada localmente:', updatedActivities);
    } else {
      updatedActivities = [...currentActivities, activity];
      console.log('Nova atividade adicionada localmente:', updatedActivities);
    }

    updatedActivities.sort((a, b) => a.hora.localeCompare(b.hora));

    try {
      await activitiesRef.set({ activities: updatedActivities }, { merge: true });
      Alert.alert('Sucesso', 'Atividade salva!');
      console.log('Atividade salva com sucesso no Firebase.');
    } catch (error) {
      console.error('Erro ao salvar atividade no Firebase:', error);
      Alert.alert('Erro', 'Falha ao salvar atividade.');
    }
    setActivityToEdit(null);
    setModalVisible(false);
  };

  const handleDeleteActivity = async (activityId: string) => {
    Alert.alert(
      "Confirmar exclusão",
      "Tem certeza que deseja excluir esta atividade?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Excluir",
          onPress: async () => {
            if (!userId) {
              console.log('userId não disponível para excluir atividade.');
              return;
            }

            const dayKeyForFirebase = getDayKeyForFirebase(currentDay);
            const activitiesRef = firebase.firestore()
              .collection('users')
              .doc(userId)
              .collection('routine')
              .doc(dayKeyForFirebase);

            console.log(`Tentando excluir atividade para: User ID: ${userId}, Dia Firebase: ${dayKeyForFirebase}`);

            const doc = await activitiesRef.get();
            if (doc.exists) {
              const currentActivities = (doc.data()?.activities || []) as Atividade[];
              const updatedActivities = currentActivities.filter(
                activity => activity.id !== activityId
              );
              try {
                await activitiesRef.set({ activities: updatedActivities }, { merge: true });
                Alert.alert('Sucesso', 'Atividade excluída!');
                console.log('Atividade excluída com sucesso no Firebase.');
              } catch (error) {
                console.error('Erro ao excluir atividade no Firebase:', error);
                Alert.alert('Erro', 'Falha ao excluir atividade.');
              }
            }
          },
          style: "destructive"
        }
      ]
    );
  };

  const openAddModal = () => {
    setActivityToEdit(null);
    setModalVisible(true);
  };

  const openEditModal = (activity: Atividade) => {
    setActivityToEdit(activity);
    setModalVisible(true);
  };

  return (
    <>
      <Upper
        title="A Fazer"
        Icon={AntDesign}
        IconName="doubleleft"
        onPress={() => navigation.navigate('HomePage')}
      />

      <View style={style.mid}>
        <DayRoutineNav
          currentDayName={getDayName(currentDay)}
          onPrev={handlePrevDay}
          onNext={handleNextDay}
        />

        <ScrollView style={style.activityList}>
          {activities.length === 0 ? (
            <Text style={style.noActivitiesText}>Nenhuma atividade para {getDayName(currentDay)}. Clique em "+ Nova atividade" para adicionar.</Text>
          ) : (
            activities.map(activity => (
              <ScheduleItem
                key={activity.id}
                Icon={MaterialIcons}
                Iconname="panorama-fisheye"
                act={activity.nome}
                hour={activity.hora}
                description={activity.descricao} // Adicionar esta linha
                onEdit={() => openEditModal(activity)}
                onDelete={() => handleDeleteActivity(activity.id)}
              />
            ))
          )}
        </ScrollView>

        <View style={style.buttonContainer}>
          <TouchableOpacity style={style.addButton} onPress={openAddModal}>
            <Text style={style.addButtonText}>+ Nova atividade</Text>
          </TouchableOpacity>
        </View>

        <ScheduleEdit
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          onSave={handleSaveActivity}
          activityToEdit={activityToEdit}
        />
      </View>

      <Bottom
        ListMark={Octicons}
        listNameMark="checklist"
        Dumbbell={FontAwesome6}
        dumbellName="dumbbell"
        User={FontAwesome}
        userName="user-circle-o"
        onPressList={() => navigation.navigate('ToDo')}
        onPressDumbbell={() => navigation.navigate('PlanilhaTreino')}
        onPressUser={() => navigation.navigate('Social')}
      />
    </>
  );
}