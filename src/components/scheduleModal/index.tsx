import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { FontAwesome} from '@expo/vector-icons';
import { style } from './styles';

type Activity = {
  name: string;
  hour: string;
};

type Props = {
  visible: boolean;
  onClose: () => void;
  activities: Activity[];
};

export const ScheduleModal = ({ visible, onClose, activities }:Props)=>{
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
            <Text style={style.upperText}>Gerenciar Rotina</Text>
            <Text style={style.upperText}> Segunda feira </Text>
          </View>

          <FlatList
            data={activities}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={style.itemRow}>
                <View style={style.textContainer}>
                  <Text style={style.itemText}>{item.name}</Text>
                  <Text style={style.itemSubText}>{item.hour}</Text>
                </View>
                <View style={style.iconGroup}>
                  <TouchableOpacity>
                    <FontAwesome name="trash-o" size={40} style={style.icon}/>
                  </TouchableOpacity>
                </View>
              </View>
            )}
            style={{ marginBottom: 10 }}
          />

          <TouchableOpacity style={style.createButton}>
            <Text style={style.createButtonText}>+ Nova atividade</Text>
          </TouchableOpacity>

          <TouchableOpacity style={style.saveButton} onPress={onClose}>
            <Text style={style.saveButtonText}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

