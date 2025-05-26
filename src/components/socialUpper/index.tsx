import React from "react";
import{
    View,
    Text,
    TouchableOpacity,
    TouchableOpacityProps
} 
from 'react-native';
import { style } from "./styles";
import {} from '@expo/vector-icons'
import {AntDesign, Ionicons} from '@expo/vector-icons';

type IconComponent = React.ComponentType<React.ComponentProps<typeof AntDesign>> | 
                     React.ComponentType<React.ComponentProps<typeof Ionicons>>;

type Props= TouchableOpacityProps &{
    Icon?:IconComponent,
    IconName?: string,
    IconAdd?:IconComponent
    IconNameAdd?: string,
    title?: string
    onPressSub?: () => void
}

export const SocialUpper = ((Props:Props)=>{
    const{onPressSub,title,Icon,IconName,IconAdd,IconNameAdd, ...rest} = Props

    return(
    <>
    <View style={style.upper}>
        <View style={style.leftUpper}>
            {Icon && IconName && (
                <TouchableOpacity {...rest}>
                    <Icon
                        style={style.icon}
                        name={IconName as any}
                        size={40}
                        color={'white'}
                    />
                </TouchableOpacity>
            )}
            <Text style={style.upperText}>{title}</Text>   
        </View>
        {IconAdd && IconNameAdd && (
            <TouchableOpacity onPress={onPressSub}>
                <IconAdd
                    style={style.iconAdd}
                    name={IconNameAdd as any}
                    size={60}
                    color={'white'}
                />
            </TouchableOpacity>
        )}
    </View>
    </>
    )
})