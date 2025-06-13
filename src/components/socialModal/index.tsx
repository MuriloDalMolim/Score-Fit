import React, { useState, useEffect } from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  TextInput,
  ActivityIndicator,
} from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { style } from "./styles";
import { firebase } from "../../services/firebase";

type Props = {
  visible: boolean;
  onClose: () => void;
};

type UserSearchResult = {
  id: string;
  nome: string;
};

export const SocialModal = ({ visible, onClose }: Props) => {
  const [searchText, setSearchText] = useState("");
  const [results, setResults] = useState<UserSearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [meusAmigos, setMeusAmigos] = useState<string[]>([]);

  const userId = firebase.auth().currentUser?.uid;

  useEffect(() => {
    if (userId && visible) {
      firebase
        .firestore()
        .collection("users")
        .doc(userId)
        .get()
        .then((doc) => {
          const data = doc.data();
          setMeusAmigos(data?.amigos || []);
        });
    }
  }, [userId, visible]);

  const buscarUsuarios = async () => {
    if (searchText.trim().length === 0) {
      setResults([]);
      return;
    }

    setLoading(true);
    try {
      const usersRef = firebase.firestore().collection("users");
      const querySnapshot = await usersRef
        .where("nome", ">=", searchText)
        .where("nome", "<=", searchText + "\uf8ff")
        .limit(10)
        .get();

      const users: UserSearchResult[] = [];
      querySnapshot.forEach((doc) => {
        if (doc.id !== userId) {
          users.push({ id: doc.id, nome: doc.data().nome });
        }
      });

      setResults(users);
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
    }
    setLoading(false);
  };

  const adicionarAmigo = async (amigoId: string) => {
    if (!userId) return;
    if (meusAmigos.includes(amigoId)) {
      alert("Esse usuário já está na sua lista de amigos.");
      return;
    }

    try {
      const userRef = firebase.firestore().collection("users").doc(userId);
      await userRef.update({
        amigos: firebase.firestore.FieldValue.arrayUnion(amigoId),
      });

      setMeusAmigos((prev) => [...prev, amigoId]);
      setResults((prev) => prev.filter((r) => r.id !== amigoId));
      alert("Amigo adicionado!");
    } catch (error) {
      alert("Erro ao adicionar amigo.");
      console.error(error);
    }
  };

  return (
    <Modal
      transparent
      animationType="fade"
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={style.container}>
        <View style={style.modalContainer}>
          <View style={style.upper}>
            <Text style={style.upperText}>Gerenciar Amigos</Text>
          </View>

          <View style={style.searchContainer}>
            <TextInput
              placeholder="Buscar usuários por nome"
              value={searchText}
              onChangeText={(text) => {
                setSearchText(text);
                buscarUsuarios();
              }}
              style={style.searchInput}
              returnKeyType="search"
              autoCorrect={false}
            />
          </View>

          {loading && <ActivityIndicator size="small" color="#1B3F5C" />}

          <FlatList
            data={results}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={style.itemRow}>
                <View style={style.left}>
                  <FontAwesome
                    name="user-circle-o"
                    size={40}
                    style={style.user}
                  />
                  <Text style={style.itemText}>{item.nome}</Text>
                </View>
                <TouchableOpacity onPress={() => adicionarAmigo(item.id)}>
                  <MaterialIcons name="add-box" size={30} style={style.icon} />
                </TouchableOpacity>
              </View>
            )}
            style={{ marginBottom: 10 }}
            ListEmptyComponent={() =>
              !loading && (
                <Text style={style.listEmptyText}> {/* APLICADO O ESTILO CORRETAMENTE AQUI */}
                  Nenhum resultado encontrado
                </Text>
              )
            }
          />

          <TouchableOpacity style={style.saveButton} onPress={onClose}>
            <Text style={style.saveButtonText}>Finalizar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};