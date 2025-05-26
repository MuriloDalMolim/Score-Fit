import React, {useState} from "react";
import{
    View,
} 
from 'react-native';
import { style } from "./styles"
import { Upper } from "../../components/upper";
import { Bottom } from "../../components/bottom";
import {AntDesign, MaterialIcons,FontAwesome,FontAwesome6,Octicons} from '@expo/vector-icons';
import { Uptext } from "../../components/uptext";
import { ExerciseItem } from "../../components/exerciseItem";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../@types/navigation'
import { TrainModal } from '../../components/trainModal';

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'Login'>;

export default function PlanilhaTreino(){

    const navigation = useNavigation<NavigationProps>();
    const [modalVisible, setModalVisible] = useState(false);
    const workouts = ['Treino A', 'Treino B', 'Treino C'];

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
                text="Treino X"
                subtext="Gerenciar"
                onPressSub={() => setModalVisible(true)}
            />
            <TrainModal
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                workouts={workouts}
            />
            <ExerciseItem
                Icon={MaterialIcons}
                Iconname="panorama-fisheye"
                train="Supino inclinado c/ halter"
                series="4x12"
                time="2min"
                weight="18kg"
            />
            <ExerciseItem
                Icon={MaterialIcons}
                Iconname="panorama-fisheye"
                train="Voador"
                series="4x12"
                time="2min"
                weight="6Br"
            />
            <ExerciseItem
                Icon={MaterialIcons}
                Iconname="panorama-fisheye"
                train="Supino Declinado"
                series="4x12"
                time="3min"
                weight="25kg"
            />
            <ExerciseItem
                Icon={MaterialIcons}
                Iconname="panorama-fisheye"
                train="Triceps Corda"
                series="3X15"
                time="1min"
                weight="5Br"
            />
            <ExerciseItem
                Icon={MaterialIcons}
                Iconname="panorama-fisheye"
                train="Triceps Francês"
                series="3X15"
                time="1,5min"
                weight="12kg"
            />
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
    )
}