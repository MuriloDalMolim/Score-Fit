import React from "react";
import{
    View,
    Text,
    TextProps,
    Image,
    TextInput
} 
from 'react-native';
import { style } from "./styles";
import {} from '@expo/vector-icons'
import WhiteLogo from "../../assets/WhileLogo.png"

type Props = TextProps&{
    title?: string
}

export const Upper_log_cad = ((Props:Props)=>{
    const{title, ...rest} = Props

    return(
    <>
    <View style={style.upper}>
            <Image
                style={style.logo}
                source={WhiteLogo}
                resizeMode="contain"
            />
            <Text style={style.logotext}>NOME APP</Text>
    </View>
    </>
    )
})