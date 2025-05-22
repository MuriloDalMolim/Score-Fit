import React from "react";
import{
    View,
    Text,
    TextProps,
} 
from 'react-native';
import { style } from "./styles";
import {} from '@expo/vector-icons'

type Props = TextProps&{
    title?: string
}

export const Bot_log_cad = ((Props:Props)=>{

    const{title, ...rest} = Props

    return(
    <>
    <View style={style.bot}></View>
    </>
    )
})