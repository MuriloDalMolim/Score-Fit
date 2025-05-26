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
    ListMark?: IconComponent
    listNameMark?: string
    DumbbellMark?: IconComponent
    dumbellNameMark?: string
    UserMark?: IconComponent
    userNameMark?: string
    onPressList: () => void;
    onPressDumbbell: () => void;
    onPressUser: () => void;
}

export const Bottom = ((Props:Props)=>{
    const{onPressList, onPressDumbbell,onPressUser,List,listName,Dumbbell,dumbellName,User,userName,ListMark,listNameMark,DumbbellMark,dumbellNameMark,UserMark,userNameMark,...rest} = Props

    return(
    <>
    <View style={style.bottom}>
        {List && listName && (
            <TouchableOpacity style={style.unMark} onPress={onPressList}>
                <List
                    name={listName as any}
                    size={50}
                    color={'white'}
                />
            </TouchableOpacity>
        )}
        {ListMark && listNameMark && (
            <TouchableOpacity style={style.mark}>
                <ListMark
                    name={listNameMark as any}
                    size={50}
                    color={'white'}
                />
            </TouchableOpacity>
        )}



        {Dumbbell && dumbellName && (
            <TouchableOpacity style={style.unMark} onPress={onPressDumbbell}>
                <Dumbbell
                    name={dumbellName as any}
                    size={50}
                    color={'white'}
                />
            </TouchableOpacity>
        )}
        {DumbbellMark && dumbellNameMark && (
            <TouchableOpacity style={style.mark}>
                <DumbbellMark
                    name={dumbellNameMark as any}
                    size={50}
                    color={'white'}
                />
            </TouchableOpacity>
        )}



        {User && userName && (
            <TouchableOpacity style={style.unMark} onPress={onPressUser}>
                <User
                    name={userName as any}
                    size={50}
                    color={'white'}
                />
            </TouchableOpacity>
        )}
        {UserMark && userNameMark && (
            <TouchableOpacity style={style.mark}>
                <UserMark
                    name={userNameMark as any}
                    size={50}
                    color={'white'}
                />
            </TouchableOpacity>
        )}
    </View>
    </>
    )
})