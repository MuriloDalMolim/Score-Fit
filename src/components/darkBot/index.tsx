import React from "react";
import{
    View,
    TextProps,
} 
from 'react-native';
import { style } from "./styles";

type Props = TextProps&{
}

export const DarkBot = ((Props:Props)=>{
    return(
    <>
    <View style={style.bot}></View>
    </>
    )
})