import React, { useState, useEffect } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { style } from './styles';
import { Atividade } from '../../@types/rotina';

type Props = {
  visible: boolean;
  onClose: () => void;
  onSave: (activity: Atividade) => void;
  activityToEdit?: Atividade | null;
}

export const ScheduleEdit: React.FC<Props> = ({
  visible,
  onClose,
  onSave,
  activityToEdit,
}) => {
  const [nome, setNome] = useState('');
  const [hora, setHora] = useState('');
  const [descricao, setDescricao] = useState('');

  useEffect(() => {
    if (activityToEdit) {
      setNome(activityToEdit.nome);
      setHora(activityToEdit.hora);
      setDescricao(activityToEdit.descricao || '');
    } else {
      setNome('');
      setHora('');
      setDescricao('');
    }
  }, [activityToEdit, visible]);

  const handleSave = () => {
    if (!nome.trim()) {
      Alert.alert('Erro', 'O nome da atividade é obrigatório.');
      return;
    }

    const newOrUpdatedActivity: Atividade = {
      id: activityToEdit ? activityToEdit.id : Date.now().toString(),
      nome,
      hora: hora.trim() === '' ? '00:00' : hora, 
    };

    if (descricao.trim() !== '') {
      newOrUpdatedActivity.descricao = descricao;
    }

    onSave(newOrUpdatedActivity);
    onClose();
  };

  return (
    <Modal transparent animationType="fade" visible={visible} onRequestClose={onClose}>
      <View style={style.container}>
        <View style={style.modalContent}>
          <Text style={style.modalTitle}>
            {activityToEdit ? 'Editar Atividade' : 'Nova Atividade'}
          </Text>

          <TextInput
            style={style.input}
            placeholder="Nome da Atividade"
            value={nome}
            onChangeText={setNome}
          />
          <TextInput
            style={style.input}
            placeholder="Hora (ex: 08:00)"
            value={hora}
            onChangeText={setHora}
            keyboardType="numbers-and-punctuation"
          />
          <TextInput
            style={style.input}
            placeholder="Descrição (opcional)"
            value={descricao}
            onChangeText={setDescricao}
            multiline
            numberOfLines={3}
          />

          <TouchableOpacity style={style.saveButton} onPress={handleSave}>
            <Text style={style.buttonText}>Salvar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={style.cancelButton} onPress={onClose}>
            <Text style={style.buttonText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};