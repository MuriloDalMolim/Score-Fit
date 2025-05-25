import React from "react";
import{
    View,
} 
from 'react-native';
import { style } from "./styles";
import { Upper } from "../../components/upper";
import { Bottom } from "../../components/bottom";
import {AntDesign, MaterialIcons, FontAwesome, FontAwesome6, Octicons} from '@expo/vector-icons';
import { Uptext } from "../../components/uptext";
import { ScheduleItem } from "../../components/scheduleItem";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../@types/navigation'

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'Login'>;

export default function ToDo(){

    const navigation = useNavigation<NavigationProps>();

    return(
        <>
        <Upper
            title="A Fazer"
            Icon={AntDesign}
            IconName="doubleleft"
            onPress={() => navigation.navigate('HomePage')}
        />
        <View style={style.mid}>
            <Uptext
                text="Dia da semana"
                subtext="Editar"
            />
            <ScheduleItem
                Icon={MaterialIcons}
                Iconname="panorama-fisheye"
                act="Fazer marmita"
                hour="10:00"
            />
            <ScheduleItem
                Icon={MaterialIcons}
                Iconname="panorama-fisheye"
                act="Almoço"
                hour="12:00"
            />
            <ScheduleItem
                Icon={MaterialIcons}
                Iconname="panorama-fisheye"
                act="Treinar"
                hour="14:00"
            />
            <ScheduleItem
                Icon={MaterialIcons}
                Iconname="panorama-fisheye"
                act="Café"
                hour="6:30"
            />
        </View>
        <Bottom
            List={Octicons}
            listName="checklist"
            Dumbbell={FontAwesome6}
            dumbellName="dumbbell"
            User={FontAwesome}
            userName="user-circle-o"
        />
        </>
    )
}