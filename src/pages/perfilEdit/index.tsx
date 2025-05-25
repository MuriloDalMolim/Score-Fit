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

export default function PerfilEdit(){

    return(
        <>
        <Upper
            title="Editar Perfil"
            Icon={AntDesign}
            IconName="doubleleft"
        />
        <View style={style.mid}>
            <TouchableOpacity style={style.user}>       
                <FontAwesome 
                    name="user" 
                    size={170} 
                    color="white" 
                />
            </TouchableOpacity>
            <Input
                title="Nome Completo:"
            />
            <Input
                title="E-Mail:"
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