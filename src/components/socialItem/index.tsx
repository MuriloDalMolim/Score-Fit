import React, {useState} from "react";
import{
    View,
    Text,
    TextProps,
    TouchableOpacity
} 
from 'react-native';
import { style } from "./styles";

import {FontAwesome} from '@expo/vector-icons';

type IconComponent = React.ComponentType<React.ComponentProps<typeof FontAwesome>>;

type Props = TextProps &{
    Icon?: IconComponent,
    Iconname?: string,
    act?: string,
    hour?: string
}

export const SocialItem = ((Props:Props)=>{
    const{Icon,Iconname,act,hour,...rest} = Props
    return(
    <>
        <View style={style.iten}>
            {Icon &&(
                <Icon
                    style={style.icon}
                    name={Iconname as any}
                    size={40}
                    color={'black'}
                />
            )}
        </View>
    </>
    )
})