import React,{ useState } from "react";
import{
    View,
    Text,
} 
from 'react-native';
import { style } from "./styles";
import {} from '@expo/vector-icons'
import { BigUpper } from "../../components/bigUpper";
import { DarkBot } from "../../components/darkBot";
import {LoginRegister} from "../../components/loginRegister"
import { Input } from "../../components/Input";
import { Buttons } from "../../components/buttons";

export default function Login(){

    const [email,setEmail] = useState('Murilo@gmail.com')
    const [password,setPassword] = useState('123');

    return(
        <>
        <BigUpper/>
        <View style={style.mid}>
            
            <LoginRegister
                title="LOGIN"
            />
            <Input
                title="E-Mail:"
                value={email}
                onChangeText={setEmail}
            />
            <Input
                title="Senha:"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
                multiline={false}
            />
            <Buttons
                title="Entrar"
            />
            <Text style={style.little}>Ainda não possui uma conta?</Text>
            <Text style={style.big}>Cadastre-se aqui!</Text>
        </View>
        <DarkBot/>   
        </>
    )
}