import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { style } from "./styles";
import { Bottom } from "../../components/bottom";
import {
  AntDesign,
  FontAwesome,
  MaterialIcons,
  Ionicons,
  FontAwesome6,
  Octicons,
} from "@expo/vector-icons";
import { SocialItem } from "../../components/socialItem";
import { SocialUpper } from "../../components/socialUpper";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../@types/navigation";
import { SocialModal } from "../../components/socialModal";
import { firebase } from "../../services/firebase";

type NavigationProps = NativeStackNavigationProp<RootStackParamList, "Login">;

type Amigo = {
  id: string;
  nome: string;
  streak?: number;
};

export default function Social() {
  const navigation = useNavigation<NavigationProps>();
  const [modalVisible, setModalVisible] = useState(false);
  const [amigos, setAmigos] = useState<Amigo[]>([]);

  const userId = firebase.auth().currentUser?.uid;

  useEffect(() => {
    if (!userId) return;

    const fetchAmigos = async () => {
      try {
        const userDoc = await firebase
          .firestore()
          .collection("users")
          .doc(userId)
          .get();
        const data = userDoc.data();
        if (!data || !data.amigos || data.amigos.length === 0) {
          setAmigos([]);
          return;
        }

        const amigosIds: string[] = data.amigos;
        const amigosPromises = amigosIds.map(async (id) => {
          const doc = await firebase
            .firestore()
            .collection("users")
            .doc(id)
            .get();
          const d = doc.data();
          return {
            id,
            nome: d?.nome || "Sem nome",
            streak: d?.streak ?? 0,
          };
        });

        const amigosData = await Promise.all(amigosPromises);
        setAmigos(amigosData);
      } catch (error) {
        console.error("Erro ao carregar amigos:", error);
      }
    };

    fetchAmigos();
  }, [modalVisible]);

  const removerAmigo = async (amigoId: string) => {
    if (!userId) return;

    try {
      await firebase
        .firestore()
        .collection("users")
        .doc(userId)
        .update({
          amigos: firebase.firestore.FieldValue.arrayRemove(amigoId),
        });

      setAmigos((prev) => prev.filter((a) => a.id !== amigoId));
    } catch (error) {
      console.error("Erro ao remover amigo:", error);
    }
  };

  return (
    <>
      <SocialUpper
        title="Social"
        Icon={AntDesign}
        IconName="doubleleft"
        IconAdd={Ionicons}
        IconNameAdd="person-add"
        onPress={() => navigation.navigate("HomePage")}
        onPressSub={() => setModalVisible(true)}
      />

      <SocialModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />

      <View style={style.mid}>
        {amigos.map((amigo) => (
          <SocialItem
            key={amigo.id}
            name={amigo.nome}
            streak={amigo.streak}
            Icon={FontAwesome}
            Iconname="user-circle-o"
            IconFire={MaterialIcons}
            IconNameFire="local-fire-department"
            onRemove={() => removerAmigo(amigo.id)}
          />
        ))}
      </View>

      <Bottom
        List={Octicons}
        listName="checklist"
        Dumbbell={FontAwesome6}
        dumbellName="dumbbell"
        UserMark={FontAwesome}
        userNameMark="user-circle-o"
        onPressList={() => navigation.navigate("ToDo")}
        onPressDumbbell={() => navigation.navigate("PlanilhaTreino")}
        onPressUser={() => navigation.navigate("Social")}
      />
    </>
  );
}
