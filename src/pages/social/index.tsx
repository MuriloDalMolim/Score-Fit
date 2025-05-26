import React, {useState} from "react";
import{
    View,
} 
from 'react-native';
import { style } from "./styles";
import { Bottom } from "../../components/bottom";
import {AntDesign, FontAwesome, MaterialIcons, Ionicons, FontAwesome6, Octicons} from '@expo/vector-icons';
import { SocialItem } from "../../components/socialItem";
import { SocialUpper } from "../../components/socialUpper";
import { SocialUpText } from "../../components/socialUpperInput";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../@types/navigation'
import { SocialModal } from "../../components/socialModal";

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'Login'>;

export default function Social(){

    const navigation = useNavigation<NavigationProps>();
    const [modalVisible, setModalVisible] = useState(false);
    const names = ['Marcos','Luiz']

    return(
        <>
        <SocialUpper
            title="Social"
            Icon={AntDesign}
            IconName="doubleleft"
            IconAdd={Ionicons}
            IconNameAdd="person-add"
            onPress={() => navigation.navigate('HomePage')}
            onPressSub={() => setModalVisible(true)}
        />
        <SocialModal
            visible={modalVisible}
            onClose={() => setModalVisible(false)}
            names={names}
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
        <Bottom
            List={Octicons}
            listName="checklist"
            Dumbbell={FontAwesome6}
            dumbellName="dumbbell"
            UserMark={FontAwesome}
            userNameMark="user-circle-o"
            onPressList={() => navigation.navigate('ToDo')}
            onPressDumbbell={() => navigation.navigate('PlanilhaTreino')}
            onPressUser={() => navigation.navigate('Social')}
        />
        </>
    )
}