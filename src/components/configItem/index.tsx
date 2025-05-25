import React, {useState} from "react";
import{
    Text,
    TouchableOpacity,
    TouchableOpacityProps
} 
from 'react-native';
import { style } from "./styles";

import {FontAwesome, MaterialIcons, Ionicons} from '@expo/vector-icons';

type IconComponent = React.ComponentType<React.ComponentProps<typeof FontAwesome>> |
                    React.ComponentType<React.ComponentProps<typeof MaterialIcons>> |
                    React.ComponentType<React.ComponentProps<typeof Ionicons>>;

type Props = TouchableOpacityProps &{
    Icon?: IconComponent,
    IconName?: string,
    title?: string,
}

export const ConfigItem = ((Props:Props)=>{
    const{Icon,IconName,title,...rest} = Props


    return(
    <>
        <TouchableOpacity style={style.iten} {...rest}>
            {Icon &&(
                <Icon
                    style={style.icon}
                    name={IconName as any}
                    size={60}
                    color={'black'}
                />
            )}
            <Text style={style.configText} {...rest}>{title}</Text>
        </TouchableOpacity>
    </>
    )
})