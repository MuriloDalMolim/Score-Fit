import React from "react";
import{
    View,
} 
from 'react-native';
import { style } from "./styles";
import { Bottom } from "../../components/bottom";
import {AntDesign, FontAwesome, MaterialIcons, Ionicons} from '@expo/vector-icons';
import { SocialItem } from "../../components/socialItem";
import { SocialUpper } from "../../components/socialUpper";
import { SocialUpText } from "../../components/socialUpperInput";

export default function Social(){

    return(
        <>
        <SocialUpper
            title="Social"
            Icon={AntDesign}
            IconName="doubleleft"
            IconAdd={Ionicons}
            IconNameAdd="person-add"
        />
        <View style={style.mid}>
            <SocialUpText
                
            />
            <SocialItem
                name="Murilo"
                Icon={FontAwesome}
                Iconname="user-circle-o"
                IconFire={MaterialIcons}
                IconNameFire="local-fire-department"
            />
            <SocialItem
                name="Eduardo"
                Icon={FontAwesome}
                Iconname="user-circle-o"
                IconFire={MaterialIcons}
                IconNameFire="local-fire-department"
            />
            <SocialItem
                name="Individuo"
                Icon={FontAwesome}
                Iconname="user-circle-o"
                IconFire={MaterialIcons}
                IconNameFire="local-fire-department"
            />
        </View>
        <Bottom/>
        </>
    )
}