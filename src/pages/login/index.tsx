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

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation<NavigationProps>();

  return (
    <>
      <BigUpper />
      <View style={style.mid}>
        <LoginRegister title="LOGIN" />
        <Input title="E-Mail:" value={email} onChangeText={setEmail} />
        <Input
          title="Senha:"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          multiline={false}
        />
        <Buttons
          title="Entrar"
          onPress={async () => {
            try {
              await firebase.auth().signInWithEmailAndPassword(email, password);
              navigation.navigate("HomePage");
            } catch (error: any) {
              alert("Erro ao fazer login " + error.mensage);
            }
          }}
        />
        <Text style={style.little}>Ainda não possui uma conta?</Text>
        <TouchableOpacity>
          <Text
            style={style.big}
            onPress={() => navigation.navigate("Register")}
          >
            Cadastre-se aqui!
          </Text>
        </TouchableOpacity>
      </View>
      <DarkBot />
    </>
  );
}