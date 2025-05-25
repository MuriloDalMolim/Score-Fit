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
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../@types/navigation'

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'Login'>;

export default function Login(){

    const [email,setEmail] = useState('Murilo@gmail.com')
    const [password,setPassword] = useState('123');
    const navigation = useNavigation<NavigationProps>();


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
                onPress={() => navigation.navigate('HomePage')}
            />
            <Text style={style.little}>Ainda não possui uma conta?</Text>
            <TouchableOpacity>
                <Text 
                    style={style.big}
                    onPress={() => navigation.navigate('Register')}
                >Cadastre-se aqui!</Text>
            </TouchableOpacity>
        </View>
        <DarkBot/>
        </>
    )
}