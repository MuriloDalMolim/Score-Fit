import React,{ useState } from "react";
import{
    View,
    Text,
    TouchableOpacity,
} 
from 'react-native';
import { style } from "./styles";
import {} from '@expo/vector-icons'
import { BigUpper } from "../../components/bigUpper";
import { DarkBot } from "../../components/darkBot";
import {LoginRegister} from "../../components/loginRegister"
import { Input } from "../../components/Input";
import { Buttons } from "../../components/buttons";

export default function Register(){

    const [email,setEmail] = useState('Murilo@gmail.com')
    const [name,setName] = useState('Murilo')
    const [password,setPassword] = useState('123');

    return(
        <>
        <BigUpper/>
        <View style={style.mid}>
            <LoginRegister
                title="CADASTRO"
            />
            <Input
                title="Nome Completo:"
                value={name}
                onChangeText={setName}
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
                title="CADASTRAR"
            />
            <Text style={style.little}>Já possui uma conta?</Text>
            <TouchableOpacity>
                <Text style={style.big}>Faça login aqui!</Text>
            </TouchableOpacity>
        </View>
        <DarkBot
        />       
        </>
    )
}