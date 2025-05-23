import React from "react";
import{
    View,
    Text,
    TextProps,
    TouchableOpacity
} 
from 'react-native';
import { style } from "./styles";
import {} from '@expo/vector-icons'

type Props = TextProps&{
    text?: string
    subtext?: string
}

export const Uptext = ((Props:Props)=>{
    const{text,subtext,...rest} = Props

    return(
    <>
    <View style={style.range}>
        <Text style={style.textOne} >{text}</Text>
        <TouchableOpacity>
            <Text style={style.textTwo} >{subtext}</Text>
        </TouchableOpacity>    
    </View>    
    </>
    )
})