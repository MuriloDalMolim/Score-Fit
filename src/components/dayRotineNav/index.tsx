import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { style } from './styles'; 

type Props = { 
  currentDayName: string;
  onPrev: () => void;
  onNext: () => void;
}

export const DayRoutineNav: React.FC<Props> = ({ currentDayName, onPrev, onNext }) => {
  return (
    <View style={style.container}>
      <Text style={style.title}>Gerenciar Rotina</Text>
      <View style={style.daySelection}>
        <TouchableOpacity onPress={onPrev} style={style.button}>
          <AntDesign name="left" size={35} color={'white'} />
        </TouchableOpacity>
        <Text style={style.dayText}>{currentDayName}</Text>
        <TouchableOpacity onPress={onNext} style={style.button}>
          <AntDesign name="right" size={35} color={'white'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};