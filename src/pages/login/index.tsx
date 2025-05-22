import React,{ useState } from "react";
import{
    View,
    Text,
    Image,
    Alert
} 
from 'react-native';
import { style } from "./styles";
import {} from '@expo/vector-icons'
import { Upper_log_cad } from "../../components/upper_log_cad";
import { Bot_log_cad } from "../../components/bot_log_cad";
import {Function_log_cad} from "../../components/function_log_cad"
import { BigInput } from "../../components/bigInput";
import { Buttons } from "../../components/buttons";

export default function Login(){

    const [email,setEmail] = useState('Murilo@gmail.com')
    const [password,setPassword] = useState('123');
    const [loading,setLoading] = useState(false);

    async function getLogin() {
        try {
            setLoading(true)
            
            if(!email ||!password){
                return Alert.alert('Atenção','Informe os campos obrigatórios!')
            }
        } catch (error) {
            console.log(error)
        }finally{
            setLoading(false)
        }
    }

    return(
        <>
        <Upper_log_cad/>
        <View style={style.mid}>
            
            <Function_log_cad
                title="LOGIN"
            />
            <BigInput
                title="E-Mail:"
                value={email}
                onChangeText={setEmail}
            />
            <BigInput
                title="Senha:"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
                multiline={false}
            />
            <Buttons
                text="Entrar"
                onPress={()=>getLogin()}
            />
            <Text style={style.little}>Ainda não possui uma conta?</Text>
            <Text style={style.big}>Cadastre-se aqui!</Text>
        </View>
        <Bot_log_cad
        />       
        </>
    )
}