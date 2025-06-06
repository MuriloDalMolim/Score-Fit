import React,{ useState, useEffect } from "react";
import{
    View,
    Alert
} 
from 'react-native';
import { style } from "./styles";
import {AntDesign, FontAwesome} from '@expo/vector-icons'
import { DarkBot } from "../../components/darkBot";
import { Input } from "../../components/Input";
import { Buttons } from "../../components/buttons";
import { Upper } from "../../components/upper";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../@types/navigation'
import {firebase} from "../../services/firebase"

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'Login'>;

export default function PerfilEdit(){

    const navigation = useNavigation<NavigationProps>();
    const auth = firebase.auth(); 
    const currentUser = auth.currentUser;
    const [name, setName] = useState(currentUser?.displayName || ''); 
    const [email, setEmail] = useState(currentUser?.email || '');

    useEffect(() => {
        if (currentUser) {
            setName(currentUser.displayName || '');
            setEmail(currentUser.email || '');
        }
    }, [currentUser]);

    const handleSaveChanges = async () => {
        try {
            let changesMade = false;

            if (name !== currentUser.displayName) {
                await currentUser.updateProfile({ displayName: name });
                changesMade = true;
            }

            if (email !== currentUser.email) {
                await currentUser.updateEmail(email);
                changesMade = true;
            }

            if (changesMade) {
                Alert.alert("Sucesso", "Perfil atualizado com sucesso!");
            } else {
                Alert.alert("Nenhuma alteração", "Nenhuma mudança detectada para salvar.");
            }

        } catch (error: any) {
            console.error("Erro ao atualizar perfil:", error);
            let errorMessage = "Ocorreu um erro ao salvar o perfil.";
            if (error.code === 'auth/invalid-email') {
                errorMessage = "E-mail inválido.";
            } else if (error.code === 'auth/email-already-in-use') {
                errorMessage = "Este e-mail já está em uso por outra conta.";
            }
            Alert.alert("Erro", errorMessage + `\nDetalhes: ${error.message}`);
        }
    };

    return(
        <>
        <Upper
            title="Editar Perfil"
            Icon={AntDesign}
            IconName="doubleleft"
            onPress={() => navigation.navigate('ConfigPage')}
        />
        <View style={style.mid}>
            <View style={style.user}>       
                <FontAwesome 
                    name="user" 
                    size={170} 
                    color="white" 
                />
            </View>
            <Input
                title="Nome Completo:"
                value={name}
                onChangeText={setName}
            />
            <Input
                title="E-Mail:"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
            />
            <Buttons
                title="Salvar"
                onPress={handleSaveChanges}
            />
        </View>
        <DarkBot
        />       
        </>
    )
}