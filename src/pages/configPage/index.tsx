import React from "react";
import{
    View,
} 
from 'react-native';
import { style } from "./styles";
import { Upper } from "../../components/upper";
import {AntDesign, Ionicons,FontAwesome,} from '@expo/vector-icons';
import { DarkBot } from "../../components/darkBot";
import { ConfigItem } from "../../components/configItem";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../@types/navigation'

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'Login'>;

export default function ConfigPage(){

    const navigation = useNavigation<NavigationProps>();

    return(
        <>
        <Upper
            title="Configurações"
            Icon={AntDesign}
            IconName="doubleleft"
            onPress={() => navigation.navigate('HomePage')}
        />
        <View style={style.mid}>
            <ConfigItem
                Icon={FontAwesome}
                IconName="user"
                title="Editar Perfil"
                onPress={() => navigation.navigate('PerfilEdit')}
            />
            <ConfigItem
                Icon={Ionicons}
                IconName="exit-outline"
                title="Sair"
                onPress={() => navigation.navigate('Login')}
            />
        </View>
        <DarkBot/>
        </>
    )
}