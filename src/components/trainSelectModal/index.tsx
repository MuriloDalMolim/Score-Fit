import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  FlatList
} from 'react-native';
import { Treino } from '../../@types/treino';
import { style } from './styles'; 

type Props = {
  visible: boolean;
  onClose: () => void;
  treinos: Treino[];
  onSelecionarTreino: (treino: Treino) => void;
};

export const TrainSelectModal = ({ visible, onClose, treinos, onSelecionarTreino }: Props) => {
  return (
    <Modal
      transparent
      animationType="fade"
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={style.modalBackground}>
        <View style={style.modalContainer}>
          <Text style={style.upperText}>Selecionar Treino</Text>
          <FlatList
            data={treinos}
            keyExtractor={(item) => item.id}
            style={style.trainList} 
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  onSelecionarTreino(item);
                  onClose();
                }}
              >
                <Text style={style.itemText}>{item.nome}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </Modal>
  );
};