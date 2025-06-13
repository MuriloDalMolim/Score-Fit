import React from "react";
import { View, Text, TextProps, TouchableOpacity } from "react-native";
import { style } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

type IconComponent = React.ComponentType<
  React.ComponentProps<typeof MaterialIcons>
>;

type Props = TextProps & {
  Icon?: IconComponent;
  Iconname?: string;
  train?: string;
  series?: string;
  time?: string;
  weight?: string;
  hour?: string;
  marcado?: boolean; // <- novo: vem do Firebase
  onToggle?: () => void; // <- novo: atualiza o Firebase e o streak
};

export const TrainItem = ({
  Icon,
  Iconname,
  train,
  series,
  time,
  weight,
  hour,
  marcado = false,
  onToggle,
  ...rest
}: Props) => {
  const currentIcon = marcado
    ? "check-circle-outline"
    : Iconname ?? "panorama-fisheye";

  return (
    <View style={marcado ? style.itenMarked : style.iten}>
      {Icon && (
        <TouchableOpacity onPress={onToggle}>
          <Icon
            style={style.icon}
            name={currentIcon as any}
            size={40}
            color={"black"}
          />
        </TouchableOpacity>
      )}
      <View style={style.infos}>
        <View style={style.boxTrain}>
          <Text style={style.train}>{train}</Text>
        </View>
        <View style={style.boxAtach}>
          <Text style={style.atach}>{series}</Text>
          <Text style={style.atach}>{time}</Text>
          <Text style={style.atach}>{weight}</Text>
        </View>
      </View>
    </View>
  );
};
