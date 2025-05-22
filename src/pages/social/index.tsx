import React,{ useState } from "react";
import{
    View,
    Text,
    Image,
} 
from 'react-native';
import { style } from "./styles";
import { Upper } from "../../components/upper";
import { Bottom } from "../../components/bottom";
import {AntDesign, FontAwesome,} from '@expo/vector-icons';
import { Uptext } from "../../components/uptext";
import { SocialItem } from "../../components/socialItem";

export default function Social(){

    return(
        <>
        <Upper
            title="Social"
            Icon={AntDesign}
            IconName="doubleleft"
        />
        <View style={style.mid}>
            <Uptext
                text="Dia da semana"
                subtext="Editar"
            />
            <SocialItem
                Icon={FontAwesome}
                Iconname="user-circle-o"
                act="Fazer marmita"
                hour="10:00"
            />
            <SocialItem
                Icon={FontAwesome}
                Iconname="user-circle-o"
                act="Almoço"
                hour="12:00"
            />
            <SocialItem
                Icon={FontAwesome}
                Iconname="user-circle-o"
                act="Treinar"
                hour="14:00"
            />
            <SocialItem
                Icon={FontAwesome}
                Iconname="user-circle-o"
                act="Café"
                hour="6:30"
            />
        </View>
        <Bottom/>
        </>
    )
}