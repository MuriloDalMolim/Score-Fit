import { firebase } from "../../services/firebase.js";

import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { style } from "./styles";
import { BigUpper } from "../../components/bigUpper";
import { DarkBot } from "../../components/darkBot";
import { LoginRegister } from "../../components/loginRegister";
import { Input } from "../../components/Input";
import { Buttons } from "../../components/buttons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../@types/navigation";

type NavigationProps = NativeStackNavigationProp<RootStackParamList, "Login">;

export default function Register() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation<NavigationProps>();

  return (
    <>
      <BigUpper />
      <View style={style.mid}>
        <LoginRegister title="CADASTRO" />
        <Input title="Nome Completo:" value={name} onChangeText={setName} />
        <Input title="E-Mail:" value={email} onChangeText={setEmail} />
        <Input
          title="Senha:"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          multiline={false}
        />
        <Buttons
          title="CADASTRAR"
          onPress={async () => {
            try {
              // Cria usuário no Auth
              const userCredential = await firebase
                .auth()
                .createUserWithEmailAndPassword(email, password);

              // Atualiza o displayName do usuário no Auth
              await userCredential.user?.updateProfile({
                displayName: name,
              });

              // Cria documento no Firestore com campos iniciais
              await firebase
                .firestore()
                .collection("users")
                .doc(userCredential.user?.uid)
                .set({
                  nome: name,
                  streak: 0,
                  ultimaConclusao: null,
                  amigos: [],
                });

              navigation.navigate("Login");
            } catch (error: any) {
              alert(error.message);
            }
          }}
        />
        <Text style={style.little}>Já possui uma conta?</Text>
        <TouchableOpacity>
          <Text style={style.big} onPress={() => navigation.navigate("Login")}>
            Faça login aqui!
          </Text>
        </TouchableOpacity>
      </View>
      <DarkBot />
    </>
  );
}