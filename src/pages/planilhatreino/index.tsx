import React, {useState, useEffect} from "react";
import{
    View,
} 
from 'react-native';
import { style } from "./styles"
import { Upper } from "../../components/upper";
import { Bottom } from "../../components/bottom";
import {AntDesign, MaterialIcons,FontAwesome,FontAwesome6,Octicons} from '@expo/vector-icons';
import { Uptext } from "../../components/uptext";
import { TrainItem } from "../../components/trainItem";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../@types/navigation'
import { TrainModal } from '../../components/trainModal';
import {firebase} from '../../services/firebase'
import { Treino } from "../../@types/treino";
import { TrainSelectModal } from "../../components/trainSelectModal";

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'Login'>;

export default function PlanilhaTreino(){

    const navigation = useNavigation<NavigationProps>();
    const [modalVisible, setModalVisible] = useState(false);
    const [selectModalVisible, setSelectModalVisible] = useState(false);
    const [workouts, setWorkouts] = useState<Treino[]>([]);
    const userId = firebase.auth().currentUser?.uid;
    const [treinoSelecionado, setTreinoSelecionado] = useState<Treino | null>(null);


    useEffect(() => {
        if (!userId) return;

        const unsubscribe = firebase.firestore()
            .collection('users')
            .doc(userId)
            .collection('workouts')
            .onSnapshot(snapshot => {
        const treinos = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        })) as Treino[];
        setWorkouts(treinos);

        if (!treinoSelecionado && treinos.length > 0) {
            setTreinoSelecionado(treinos[0]);
        }

        });

    return () => unsubscribe();
    }, [userId]);


    const salvarTreino = async (novoTreino: Omit<Treino, 'id'>) => {
        await firebase.firestore()
        .collection('users')
        .doc(userId)
        .collection('workouts')
        .add(novoTreino);
    };

    
    return(
        <>
        <Upper
            title="Planilha de treino"
            Icon={AntDesign}
            IconName="doubleleft"
            onPress={() => navigation.navigate('HomePage')}
        />
        <View style={style.mid}>
            <Uptext
                text={treinoSelecionado?.nome || 'Selecionar treino'}
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
                    console.log('Treino selecionado:', treino.nome); // ✅ pode remover depois
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
            onPressList={() => navigation.navigate('ToDo')}
            onPressDumbbell={() => navigation.navigate('PlanilhaTreino')}
            onPressUser={() => navigation.navigate('Social')}
        />
        </>
    );
}