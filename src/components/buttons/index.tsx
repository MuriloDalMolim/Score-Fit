import React from "react";
import{
    View,
    Text,
    TouchableOpacity,
    TouchableOpacityProps,
    ActivityIndicator
} 
from 'react-native';
import { style } from "./styles";
import {} from '@expo/vector-icons'

type Props = TouchableOpacityProps &{
    text?: string;
    loading?:boolean;
}

export function Buttons(Props:Props){

    const{text,loading,...rest}=Props;

    return(
        <>
            <TouchableOpacity 
                style={style.but}
                activeOpacity={0.6}
                {...rest} 
            ><Text style={style.textbut}>{text}</Text>
            </TouchableOpacity>
        </>
    );
}