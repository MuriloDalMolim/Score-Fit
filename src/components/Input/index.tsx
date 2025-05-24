import React from "react";
import{
    View,
    Text,
    TextInput,
    TextInputProps
} 
from 'react-native';
import { style } from "./styles";

type Props = TextInputProps &{
    title?: string;
    value?: string;
    onChangeText?: (text: string) => void;
}

export const Input = ((Props:Props)=>{

    const{title,value,onChangeText,...rest}=Props;

    return(
        <>
        <View style={style.big}>
            {title && <Text style={[style.titleInput]}>{title}</Text>}
            <TextInput 
                style={style.input}
                value={value}
                onChangeText={onChangeText}
                {...rest}
            />
        </View>
        </>
    )
})