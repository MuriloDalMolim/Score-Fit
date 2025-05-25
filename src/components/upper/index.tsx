import React from "react";
import{
    View,
    Text,
    TouchableOpacity,
    TouchableOpacityProps
} 
from 'react-native';
import { style } from "./styles";
import {AntDesign} from '@expo/vector-icons';

type IconComponent = React.ComponentType<React.ComponentProps<typeof AntDesign>>;

type Props= TouchableOpacityProps &{
    Icon?:IconComponent,
    IconName?: string,
    title?: string
}

export const Upper = ((Props:Props)=>{
    const{title,Icon,IconName, ...rest} = Props

    return(
    <>
    <View style={style.upper}>
         {Icon && IconName && (
            <TouchableOpacity>
                <Icon
                    style={style.icon}
                    name={IconName as any}
                    size={40}
                    color={'white'}
                    {...rest}
                />
            </TouchableOpacity>
        )}
        <Text style={style.upperText}>{title}</Text>   
    </View>
    </>
    )
})