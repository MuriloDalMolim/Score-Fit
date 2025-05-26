import React from "react";
import{
    View,
    Text,
    TextProps,
    Image,
} 
from 'react-native';
import { style } from "./styles";
import {} from '@expo/vector-icons'
import WhiteLogo from "../../assets/WhiteLogo.png"

type Props = TextProps&{
    title?: string
}

export const BigUpper = ((Props:Props)=>{
    const{title, ...rest} = Props

    return(
    <>
    <View style={style.upper}>
            <Image
                style={style.logo}
                source={WhiteLogo}
                resizeMode="contain"
            />
            <Text style={style.logoText}>ScoreFit</Text>
    </View>
    </>
    )
})