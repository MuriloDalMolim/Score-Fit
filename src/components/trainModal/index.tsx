import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { FontAwesome, Feather } from '@expo/vector-icons';
import { style } from './styles';

type Props = {
  visible: boolean;
  onClose: () => void;
  workouts: string[];
};

export const TrainModal = ({ visible, onClose, workouts }:Props)=>{
  return(
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
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={style.itemRow}>
                <Text style={style.itemText}>{item}</Text>
                <View style={style.iconGroup}>
                  <TouchableOpacity>
                    <Feather name="edit" size={40} style={style.icon}/>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <FontAwesome name="trash-o" size={40} style={style.icon}/>
                  </TouchableOpacity>
                </View>
              </View>
            )}
            style={{ marginBottom: 10 }}
          />

          <TouchableOpacity style={style.createButton}>
            <Text style={style.createButtonText}>+ Criar novo treino</Text>
          </TouchableOpacity>

          <TouchableOpacity style={style.saveButton} onPress={onClose}>
            <Text style={style.saveButtonText}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

