import React, {useState} from "react";
import{
    View,
    Text,
    TextProps,
    TouchableOpacity,
    TextInput,
    TextInputProps
} 
from 'react-native';
import { style } from "./styles";

type Props = TextInputProps&{
}

export const SocialUpText = ((Props:Props)=>{
    const{...rest} = Props
    const [text, setText] = useState('');

    return(
    <>
    <TextInput
        style={style.input}
        onChangeText={setText}
        placeholder="Pesquisar"
    >
    </TextInput>  
    </>
    )
})