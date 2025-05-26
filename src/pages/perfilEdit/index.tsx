import React,{ useState } from "react";
import{
    View,
    Text,
    TouchableOpacity,
} 
from 'react-native';
import { style } from "./styles";
import {AntDesign, FontAwesome} from '@expo/vector-icons'
import { DarkBot } from "../../components/darkBot";
import { Input } from "../../components/Input";
import { Buttons } from "../../components/buttons";
import { Upper } from "../../components/upper";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../@types/navigation'

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'Login'>;

export default function PerfilEdit(){

    const navigation = useNavigation<NavigationProps>();

    return(
        <>
        <Upper
            title="Editar Perfil"
            Icon={AntDesign}
            IconName="doubleleft"
            onPress={() => navigation.navigate('ConfigPage')}
        />
        <View style={style.mid}>
            <View style={style.user}>       
                <FontAwesome 
                    name="user" 
                    size={170} 
                    color="white" 
                />
            </View>
            <Input
                title="Nome Completo:"
                value="name"
            />
            <Input
                title="E-Mail:"
                value="email"
            />
            <Buttons
                title="Salvar"
            />
        </View>
        <DarkBot
        />       
        </>
    )
}