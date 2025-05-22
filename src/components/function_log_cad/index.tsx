import React from "react";
import{
    View,
    Text,
    TextProps
} 
from 'react-native';
import { style } from "./styles";
import {} from '@expo/vector-icons'

type Props = TextProps&{
    title?: string
}
export const Function_log_cad = ((Props:Props)=>{

const {title,...rest } = Props;

    return(
    <>
    <View style={style.bkground}>
        {title && <Text style={style.text}>{title}</Text>}
        <View style={style.line}> </View>
    </View>
    </>
    )
})