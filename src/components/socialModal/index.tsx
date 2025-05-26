import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { style } from './styles';

type Props = {
  visible: boolean;
  onClose: () => void;
  names: string[];
};

export const SocialModal = ({ visible, onClose, names }:Props)=>{
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
            <Text style={style.upperText}>Gerenciar Amigos</Text>
          </View>

          <FlatList
            data={names}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={style.itemRow}>
                  <View style={style.left}>
                    <FontAwesome name="user-circle-o" size={60} style={style.user}/>
                    <Text style={style.itemText}>{item}</Text>
                  </View>
                  <TouchableOpacity>
                    <MaterialIcons name="add-box" size={40} style={style.icon}/>
                  </TouchableOpacity>
              </View>
            )}
            style={{ marginBottom: 10 }}
          />

          <TouchableOpacity style={style.saveButton} onPress={onClose}>
            <Text style={style.saveButtonText}>Finalizar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

