import React from "react";
import{
    Text,
    TouchableOpacity,
    TouchableOpacityProps,
} 
from 'react-native';
import { style } from "./styles";
import {} from '@expo/vector-icons'

type Props = TouchableOpacityProps &{
    title?: string;
    loading?:boolean;
}

export function Buttons(Props:Props){

    const{title,loading,...rest}=Props;

    return(
        <>
            <TouchableOpacity 
                style={style.but}
                activeOpacity={0.6}
                {...rest} 
            ><Text style={style.textBut}>{title}</Text>
            </TouchableOpacity>
        </>
    );
}