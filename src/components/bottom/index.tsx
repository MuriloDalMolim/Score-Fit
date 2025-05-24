import React from "react";
import{
    View,
    TouchableOpacity
} 
from 'react-native';
import { style } from "./styles";
import {FontAwesome,FontAwesome6,Octicons} from '@expo/vector-icons'

type IconComponent = React.ComponentType<React.ComponentProps<typeof FontAwesome6>> |
                    React.ComponentType<React.ComponentProps<typeof Octicons>>;


type Props ={
    List?: IconComponent
    listName?: string
    Dumbbell?: IconComponent
    dumbellName?: string
    User?: IconComponent
    userName?: string
}

export const Bottom = ((Props:Props)=>{
    const{List,listName,Dumbbell,dumbellName,User,userName,...rest} = Props

    return(
    <>
    <View style={style.bottom}>
        {List && listName && (
            <TouchableOpacity>
                <List
                    style={style.icon}
                    name={listName as any}
                    size={50}
                    color={'white'}
                />
            </TouchableOpacity>
        )}
        {Dumbbell && dumbellName && (
            <TouchableOpacity>
                <Dumbbell
                    style={style.icon}
                    name={dumbellName as any}
                    size={50}
                    color={'white'}
                />
            </TouchableOpacity>
        )}
        {User && userName && (
            <TouchableOpacity>
                <User
                    style={style.icon}
                    name={userName as any}
                    size={50}
                    color={'white'}
                />
            </TouchableOpacity>
        )}
    </View>
    </>
    )
})