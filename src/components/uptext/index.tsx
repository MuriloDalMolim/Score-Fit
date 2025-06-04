import React from "react";
import{
    View,
    Text,
    TextProps,
    TouchableOpacity
} 
from 'react-native';
import { style } from "./styles";

type Props = TextProps&{
    text?: string
    subtext?: string
    onPress?: () => void
    onPressSub?: () => void
}

export const Uptext = ((Props:Props)=>{
    const{text,subtext,onPressSub, onPress,...rest} = Props

    return(
    <>
    <View style={style.range}>
        <TouchableOpacity onPress={onPress}>
            <Text style={style.textOne} >{text}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressSub}>
            <Text style={style.textTwo} >{subtext}</Text>
        </TouchableOpacity>    
    </View>    
    </>
    )
})