import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { Treino, Exercicio } from "../../@types/treino";
import { style } from "./styles";
import { firebase } from "../../services/firebase";

type Props = {
  visible: boolean;
  onClose: () => void;
  treino: Treino;
  onSave: () => void;
};

export const TrainEditModal = ({ visible, onClose, treino, onSave }: Props) => {
  const [step, setStep] = useState(1);
  const [nomeTreino, setNomeTreino] = useState(treino.nome);
  const [exercicios, setExercicios] = useState<Exercicio[]>([
    ...treino.exercicios,
  ]);
  const [editando, setEditando] = useState<Exercicio | null>(null);

  const [form, setForm] = useState<Omit<Exercicio, "id">>({
    nome: "",
    series: "",
    descanso: "",
    carga: "",
    feito: false,
  });

  const userId = firebase.auth().currentUser?.uid;

  const salvarExercicio = () => {
    if (!form.nome.trim())
      return Alert.alert("Erro", "Preencha o nome do exercício.");

    if (editando) {
      setExercicios((prev) =>
        prev.map((ex) => (ex.id === editando.id ? { ...ex, ...form } : ex))
      );
    } else {
      setExercicios((prev) => [
        ...prev,
        { id: String(Date.now()), ...form, feito: false },
      ]);
    }

    setForm({ nome: "", series: "", descanso: "", carga: "", feito: false });
    setEditando(null);
    setStep(1);
  };

  const removerExercicio = (id: string) => {
    Alert.alert("Remover exercício", "Deseja remover este exercício?", [
      { text: "Cancelar", style: "cancel" },
      {
        text: "Remover",
        style: "destructive",
        onPress: () => setExercicios((prev) => prev.filter((e) => e.id !== id)),
      },
    ]);
  };

  const editarExercicio = (ex: Exercicio) => {
    setEditando(ex);
    setForm({
      nome: ex.nome,
      series: ex.series,
      descanso: ex.descanso,
      carga: ex.carga,
      feito: ex.feito ?? false,
    });
    setStep(2);
  };

  const salvarAlteracoes = async () => {
    if (!userId) return;

    await firebase
      .firestore()
      .collection("users")
      .doc(userId)
      .collection("workouts")
      .doc(treino.id)
      .update({
        nome: nomeTreino,
        exercicios: exercicios,
      });

    onSave(); 
    onClose();
  };

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={style.container}>
        <View style={style.modalContainer}>
          {step === 1 ? (
            <>
              <TextInput
                style={style.inputNomeTreino}
                value={nomeTreino}
                onChangeText={setNomeTreino}
                placeholder="Nome do treino"
              />

              <FlatList
                data={exercicios}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <View style={style.itemRow}>
                    <Text style={style.itemText}>{item.nome}</Text>
                    <View style={style.iconGroup}>
                      <TouchableOpacity onPress={() => editarExercicio(item)}>
                        <Feather name="edit" size={28} style={style.icon} />
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => removerExercicio(item.id)}
                      >
                        <FontAwesome
                          name="trash-o"
                          size={28}
                          style={style.icon}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                )}
                style={{ marginBottom: 10, maxHeight: 250 }}
              />

              <TouchableOpacity
                style={style.createButton}
                onPress={() => setStep(2)}
              >
                <Text style={style.ButtonText}>+ Adicionar exercício</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={style.saveButton}
                onPress={salvarAlteracoes}
              >
                <Text style={style.ButtonText}>Salvar alterações</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={style.cancelButton}
                onPress={() => {
                  setStep(1);
                  setEditando(null);
                }}
              >
                <Text style={style.ButtonText}>Cancelar</Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <Text style={style.upperText}>
                {editando ? "Editar exercício" : "Novo exercício"}
              </Text>

              <TextInput
                style={style.input}
                placeholder="Nome do exercício"
                value={form.nome}
                onChangeText={(text) => setForm({ ...form, nome: text })}
              />
              <TextInput
                style={style.input}
                placeholder="Séries"
                keyboardType="numeric"
                value={form.series}
                onChangeText={(text) => setForm({ ...form, series: text })}
              />
              <TextInput
                style={style.input}
                placeholder="Carga (kg, Br, etc)"
                value={form.carga}
                onChangeText={(text) => setForm({ ...form, carga: text })}
              />
              <TextInput
                style={style.input}
                placeholder="Descanso (minutos)"
                keyboardType="numeric"
                value={form.descanso}
                onChangeText={(text) => setForm({ ...form, descanso: text })}
              />

              <TouchableOpacity
                style={style.saveButton}
                onPress={salvarExercicio}
              >
                <Text style={style.ButtonText}>Salvar exercício</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={style.cancelButton}
                onPress={() => {
                  setStep(1);
                  setEditando(null);
                }}
              >
                <Text style={style.ButtonText}>Voltar</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>
    </Modal>
  );
};