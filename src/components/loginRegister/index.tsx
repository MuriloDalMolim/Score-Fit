import React from "react";
import{
    View,
    Text,
    TextProps
} 
from 'react-native';
import { style } from "./styles";

type Props = TextProps&{
    title?: string
}
export const LoginRegister = ((Props:Props)=>{

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