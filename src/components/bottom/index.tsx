import React from "react";
import{
    View,
    TextProps,
} 
from 'react-native';
import { style } from "./styles";
import {} from '@expo/vector-icons'

type Props = TextProps&{
    title?: string
}

export const Bottom = ((Props:Props)=>{
    const{title, ...rest} = Props

    return(
    <>
    <View style={style.bottom}>
    </View>
    </>
    )
})