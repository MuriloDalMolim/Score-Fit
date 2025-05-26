import React from "react";
import{ View,
        Text,
        Image,
        TouchableOpacity
 } 
from 'react-native';
import { style } from "./styles";
import {FontAwesome, Octicons, FontAwesome6, MaterialIcons} from '@expo/vector-icons'
import WhiteLogo from "../../assets/WhiteLogo.png"
import { themes } from "../../global/themes";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../@types/navigation'

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'Login'>;

export default function HomePage(){

    const navigation = useNavigation<NavigationProps>();

    return(
        <>
        <View style={style.hello}>
            <View>
                <Text style={style.helloText}>Bem vindo de volta,
                    {'\n'}Fulano!
                </Text>
            </View>   
            <TouchableOpacity style={style.user}
            onPress={() => navigation.navigate('ConfigPage')}>       
                <FontAwesome
                    name="user" 
                    size={80} 
                    color="white" 
                />
            </TouchableOpacity>
        </View>

        <View style={style.body}>
            <Image
                style={style.logo}
                source={WhiteLogo}
                resizeMode="contain"
            />
            <Text style={style.logoTitle}>ScoreFit</Text>

            <View style={style.row}>
                <View style={style.square}>
                    <View style={style.fireContainer}>
                        <Text style={style.streak}>7</Text>
                        <MaterialIcons
                            style={style.icon}
                            name="local-fire-department"
                            size={70}
                            color={themes.colors.fire}
                        />
                    </View>
                    <Text style={style.squareText}>Streak</Text>
                </View>
                <TouchableOpacity style={style.square} onPress={() => navigation.navigate('PlanilhaTreino')}>
                    <FontAwesome6
                        style={style.icon}
                        name="dumbbell"
                        size={60}
                        color={themes.colors.lightbluu}
                    />
                    <Text style={style.squareText}>Treino</Text>
                </TouchableOpacity>
            </View>
            <View style={style.row}>
                <TouchableOpacity style={style.square} onPress={() => navigation.navigate('ToDo')}>
                    <Octicons
                        style={style.icon}
                        name="checklist"
                        size={60}
                        color={themes.colors.lightbluu}
                    />
                    <Text style={style.squareText}>A fazer</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.square} onPress={() => navigation.navigate('Social')}>
                    <FontAwesome
                        style={style.icon}
                        name="user-circle-o"
                        size={60}
                        color={themes.colors.lightbluu}
                    />
                    <Text style={style.squareText}>Social</Text>
                </TouchableOpacity >
            </View>

        </View>
        </>
    )
}