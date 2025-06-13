import Toast from "react-native-toast-message";
import { DateTime } from "luxon";
import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { style } from "./styles";
import { Upper } from "../../components/upper";
import { Bottom } from "../../components/bottom";
import {
  AntDesign,
  MaterialIcons,
  FontAwesome,
  FontAwesome6,
  Octicons,
} from "@expo/vector-icons";
import { Uptext } from "../../components/uptext";
import { TrainItem } from "../../components/trainItem";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../@types/navigation";
import { TrainModal } from "../../components/trainModal";
import { firebase } from "../../services/firebase";
import { Treino } from "../../@types/treino";
import { TrainSelectModal } from "../../components/trainSelectModal";

type NavigationProps = NativeStackNavigationProp<RootStackParamList, "Login">;

export default function PlanilhaTreino() {
  const navigation = useNavigation<NavigationProps>();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectModalVisible, setSelectModalVisible] = useState(false);
  const [workouts, setWorkouts] = useState<Treino[]>([]);
  const userId = firebase.auth().currentUser?.uid;
  const [treinoSelecionado, setTreinoSelecionado] = useState<Treino | null>(
    null
  );

  useEffect(() => {
    if (!userId) return;

    const unsubscribe = firebase
      .firestore()
      .collection("users")
      .doc(userId)
      .collection("workouts")
      .onSnapshot((snapshot) => {
        const treinos = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Treino[];

        setWorkouts(treinos);

        // Se ainda não existe treino selecionado, seleciona o primeiro
        if (!treinoSelecionado && treinos.length > 0) {
          setTreinoSelecionado(treinos[0]);
          return;
        }

        // Se já existe treino selecionado, tenta atualizar ele com o dado mais recente
        if (treinoSelecionado) {
          const treinoAtualizado = treinos.find(
            (t) => t.id === treinoSelecionado.id
          );
          if (treinoAtualizado) {
            setTreinoSelecionado(treinoAtualizado);
          }
        }
      });

    return () => unsubscribe();
  }, [userId, treinoSelecionado]);

  const salvarTreino = async (novoTreino: Omit<Treino, "id">) => {
    await firebase
      .firestore()
      .collection("users")
      .doc(userId)
      .collection("workouts")
      .add(novoTreino);
  };

  const marcarExercicioFeito = async (
    treinoId: string,
    exercicioId: string
  ) => {
    if (!userId || !treinoSelecionado) return;

    const treinoRef = firebase
      .firestore()
      .collection("users")
      .doc(userId)
      .collection("workouts")
      .doc(treinoId);

    const doc = await treinoRef.get();
    if (!doc.exists) {
      console.log("Treino não encontrado:", treinoId);
      return;
    }

    const treino = doc.data() as Treino;

    // Inverte o feito do exercício clicado
    const exerciciosAtualizados = treino.exercicios.map((ex) =>
      ex.id === exercicioId ? { ...ex, feito: !ex.feito } : ex
    );

    await treinoRef.update({ exercicios: exerciciosAtualizados });

    const todosFeitos = exerciciosAtualizados.every((ex) => ex.feito);

    if (todosFeitos) {
      const userRef = firebase.firestore().collection("users").doc(userId);
      const userDoc = await userRef.get();
      const userData = userDoc.data();

      const hoje = DateTime.now().toISODate(); // '2025-06-12'
      const ultima = userData?.ultimaConclusao || null;

      if (ultima !== hoje) {
        if (ultima) {
          const dataUltima = DateTime.fromISO(ultima);
          const dataOntem = DateTime.now().minus({ days: 1 });

          if (dataUltima.hasSame(dataOntem, "day")) {
            // Continuou sequência
            const novaStreak = (userData?.streak || 0) + 1;
            await userRef.update({
              streak: novaStreak,
              ultimaConclusao: hoje,
            });
            Toast.show({
              type: "success",
              text1: "🔥 Treino concluído!",
              text2: `Sua sequência aumentou para ${novaStreak}!`,
              position: "top",
              visibilityTime: 4000,
            });
          } else {
            // Pulou dia, zera
            await userRef.update({
              streak: 1,
              ultimaConclusao: hoje,
            });
            Toast.show({
              type: "error",
              text1: "⚠️ Streak reiniciada!",
              text2: "Você pulou um dia. Tente manter o ritmo!",
              position: "top",
              visibilityTime: 4000,
            });
          }
        } else {
          // Primeiro treino
          await userRef.update({
            streak: 1,
            ultimaConclusao: hoje,
          });
          Toast.show({
            type: "success",
            text1: "🔥 Primeiro treino registrado!",
            text2: "Começando sua streak hoje!",
            position: "top",
            visibilityTime: 4000,
          });
        }
      } else {
        console.log("Streak já incrementada hoje, sem atualização.");
      }
    }
  };

  return (
    <>
      <Upper
        title="Planilha de treino"
        Icon={AntDesign}
        IconName="doubleleft"
        onPress={() => navigation.navigate("HomePage")}
      />
      <View style={style.mid}>
        <Uptext
          text={treinoSelecionado?.nome || "Selecionar treino"}
          subtext="Gerenciar"
          onPress={() => setSelectModalVisible(true)}
          onPressSub={() => setModalVisible(true)}
        />
        <TrainModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          workouts={workouts}
          setWorkouts={setWorkouts}
          onSalvarTreino={salvarTreino}
        />
        <TrainSelectModal
          visible={selectModalVisible}
          onClose={() => setSelectModalVisible(false)}
          treinos={workouts}
          onSelecionarTreino={(treino) => {
            console.log("Treino selecionado:", treino.nome); // ✅ pode remover depois
            setTreinoSelecionado(treino);
          }}
        />
        {treinoSelecionado?.exercicios.map((ex) => (
          <TrainItem
            key={ex.id}
            Icon={MaterialIcons}
            Iconname="panorama-fisheye"
            train={ex.nome}
            series={ex.series}
            time={ex.descanso}
            weight={ex.carga}
            marcado={ex.feito}
            onToggle={() => marcarExercicioFeito(treinoSelecionado.id, ex.id)}
          />
        ))}
      </View>

      <Bottom
        List={Octicons}
        listName="checklist"
        DumbbellMark={FontAwesome6}
        dumbellNameMark="dumbbell"
        User={FontAwesome}
        userName="user-circle-o"
        onPressList={() => navigation.navigate("ToDo")}
        onPressDumbbell={() => navigation.navigate("PlanilhaTreino")}
        onPressUser={() => navigation.navigate("Social")}
      />
    </>
  );
}
