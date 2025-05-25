import React from "react";
import{
    View,
    Text,
    TouchableOpacity
} 
from 'react-native';
import { style } from "./styles";
import { Upper } from "../../components/upper";
import {AntDesign, Ionicons,FontAwesome,} from '@expo/vector-icons';
import { DarkBot } from "../../components/darkBot";
import { ConfigItem } from "../../components/configItem";

export default function ConfigPage(){

    return(
        <>
        <Upper
            title="Configurações"
            Icon={AntDesign}
            IconName="doubleleft"
        />
        <View style={style.mid}>
            <ConfigItem
                Icon={FontAwesome}
                IconName="user"
                title="Editar Perfil"
            />
            <ConfigItem
                Icon={Ionicons}
                IconName="exit-outline"
                title="Sair"
            />
        </View>
        <DarkBot/>
        </>
    )
}