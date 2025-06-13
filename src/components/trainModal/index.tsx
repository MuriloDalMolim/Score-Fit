import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { FontAwesome, Feather } from "@expo/vector-icons";
import { style } from "./styles";
import { Treino } from "../../@types/treino";
import { TrainEditModal } from "../trainEditModal";
import { firebase } from "../../services/firebase";

type Props = {
  visible: boolean;
  onClose: () => void;
  workouts: Treino[];
  setWorkouts: React.Dispatch<React.SetStateAction<Treino[]>>;
  onSalvarTreino: (novo: Omit<Treino, "id">) => void;
};

export const TrainModal = ({
  visible,
  onClose,
  workouts,
  setWorkouts,
  onSalvarTreino,
}: Props) => {
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [treinoEditando, setTreinoEditando] = useState<Treino | null>(null);

  const criarNovoTreino = () => {
    const novoTreino: Omit<Treino, "id"> = {
      nome: `Treino ${String.fromCharCode(65 + workouts.length)}`,
      exercicios: [
        {
          id: String(Date.now()),
          nome: "",
          series: "",
          descanso: "",
          carga: "",
          feito: false,
        },
      ],
    };

    onSalvarTreino(novoTreino);
  };

  const excluirTreino = async (id: string) => {
    const userId = firebase.auth().currentUser?.uid;
    if (!userId) return;

    Alert.alert(
      "Excluir Treino",
      "Tem certeza que deseja excluir este treino?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Excluir",
          style: "destructive",
          onPress: async () => {
            await firebase
              .firestore()
              .collection("users")
              .doc(userId)
              .collection("workouts")
              .doc(id)
              .delete();
          },
        },
      ]
    );
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
            <Text style={style.upperText}>Gerenciar Treinos</Text>
          </View>

          <FlatList
            data={workouts}
            keyExtractor={(item) => item.id || String(item.nome)}
            renderItem={({ item }) => (
              <View style={style.itemRow}>
                <Text style={style.itemText}>{item.nome}</Text>
                <View style={style.iconGroup}>
                  <TouchableOpacity
                    onPress={() => {
                      setTreinoEditando(item);
                      setEditModalVisible(true);
                    }}
                  >
                    <Feather name="edit" size={40} style={style.icon} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => excluirTreino(item.id)}>
                    <FontAwesome name="trash-o" size={40} style={style.icon} />
                  </TouchableOpacity>
                </View>
              </View>
            )}
            style={{ marginBottom: 10, flexGrow: 0, maxHeight: 300 }}
          />

          <TouchableOpacity
            style={style.createButton}
            onPress={criarNovoTreino}
          >
            <Text style={style.createButtonText}>+ Criar novo treino</Text>
          </TouchableOpacity>

          <TouchableOpacity style={style.saveButton} onPress={onClose}>
            <Text style={style.saveButtonText}>Salvar</Text>
          </TouchableOpacity>
        </View>

        {treinoEditando && (
          <TrainEditModal
            visible={editModalVisible}
            onClose={() => setEditModalVisible(false)}
            treino={treinoEditando}
            onSave={() => {
              setEditModalVisible(false);
              setTreinoEditando(null);
              onClose();
            }}
          />
        )}
      </View>
    </Modal>
  );
};
