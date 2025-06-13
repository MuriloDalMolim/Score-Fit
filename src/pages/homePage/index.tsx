import Toast from "react-native-toast-message";
import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { style } from "./styles";
import {
  FontAwesome,
  Octicons,
  FontAwesome6,
  MaterialIcons,
} from "@expo/vector-icons";
import WhiteLogo from "../../assets/WhiteLogo.png";
import { themes } from "../../global/themes";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../@types/navigation";
import { firebase } from "../../services/firebase";

type NavigationProps = NativeStackNavigationProp<RootStackParamList, "Login">;

export default function HomePage() {
  const navigation = useNavigation<NavigationProps>();
  const nomeCompleto = firebase.auth().currentUser?.displayName || "";
  const primeiroNome = nomeCompleto.split(" ")[0];

  const userId = firebase.auth().currentUser?.uid;
  const [streak, setStreak] = useState<number>(0);
  const [treinoHoje, setTreinoHoje] = useState<boolean>(false);

  useEffect(() => {
    if (!userId) return;

    const userRef = firebase.firestore().collection("users").doc(userId);

    const fetchStreak = async () => {
      const doc = await userRef.get();
      const data = doc.data();

      if (!data) return;

      const hoje = new Date();
      const dataHojeStr = `${hoje.getFullYear()}-${String(
        hoje.getMonth() + 1
      ).padStart(2, "0")}-${String(hoje.getDate()).padStart(2, "0")}`;

      const ultimaConclusao: string | null = data.ultimaConclusao ?? null;

      if (ultimaConclusao) {
        const [ano, mes, dia] = ultimaConclusao.split("-");
        const dataUltima = new Date(Number(ano), Number(mes) - 1, Number(dia));

        const diffMs = hoje.setHours(0, 0, 0, 0) - dataUltima.getTime();
        const diffDias = diffMs / (1000 * 60 * 60 * 24);

        if (diffDias >= 2) {
          await userRef.update({
            streak: 0,
            ultimaConclusao: null,
          });
          setStreak(0);
          setTreinoHoje(false);
          Toast.show({
            type: "error",
            text1: "Streak reiniciada",
            text2: "Você ficou mais de um dia sem treinar.",
            position: "top",
            visibilityTime: 4000,
          });
          return;
        }

        setTreinoHoje(ultimaConclusao === dataHojeStr);
      } else {
        setTreinoHoje(false);
      }

      if (typeof data.streak === "number") {
        setStreak(data.streak);
      } else {
        setStreak(0);
      }
    };

    fetchStreak();
  }, [userId]);

  return (
    <>
      <View style={style.hello}>
        <View>
          <Text style={style.helloText}>
            Bem vindo de volta,
            {"\n"}
            {primeiroNome}!
          </Text>
        </View>
        <TouchableOpacity
          style={style.user}
          onPress={() => navigation.navigate("ConfigPage")}
        >
          <FontAwesome name="user" size={80} color="white" />
        </TouchableOpacity>
      </View>

      <View style={style.body}>
        <Image style={style.logo} source={WhiteLogo} resizeMode="contain" />
        <Text style={style.logoTitle}>ScoreFit</Text>

        <View style={style.row}>
          <View style={style.square}>
            <View style={style.fireContainer}>
              <Text style={style.streak}>{streak}</Text>
              <MaterialIcons
                style={style.icon}
                name="local-fire-department"
                size={70}
                color={
                  streak > 0 && treinoHoje
                    ? themes.colors.fire
                    : themes.colors.fired
                }
              />
            </View>
            <Text style={style.squareText}>Streak</Text>
          </View>
          <TouchableOpacity
            style={style.square}
            onPress={() => navigation.navigate("PlanilhaTreino")}
          >
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
          <TouchableOpacity
            style={style.square}
            onPress={() => navigation.navigate("ToDo")}
          >
            <Octicons
              style={style.icon}
              name="checklist"
              size={60}
              color={themes.colors.lightbluu}
            />
            <Text style={style.squareText}>A fazer</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.square}
            onPress={() => navigation.navigate("Social")}
          >
            <FontAwesome
              style={style.icon}
              name="user-circle-o"
              size={60}
              color={themes.colors.lightbluu}
            />
            <Text style={style.squareText}>Social</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}