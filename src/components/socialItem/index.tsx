import React from "react";
import { View, Text, TextProps, TouchableOpacity } from "react-native";
import { style } from "./styles";
import { themes } from "../../global/themes";

import { FontAwesome, MaterialIcons, AntDesign } from "@expo/vector-icons";

type IconComponent =
  | React.ComponentType<React.ComponentProps<typeof FontAwesome>>
  | React.ComponentType<React.ComponentProps<typeof MaterialIcons>>;

type Props = TextProps & {
  Icon?: IconComponent;
  Iconname?: string;
  IconFire?: IconComponent;
  IconNameFire?: string;
  name?: string;
  streak?: number;
  onRemove?: () => void; // callback ao clicar em remover
};

export const SocialItem = ({
  Icon,
  Iconname,
  IconFire,
  IconNameFire,
  name,
  streak = 0,
  onRemove,
  ...rest
}: Props) => {
  const isFired = streak <= 0;

  return (
    <View style={style.iten}>
      <View style={style.userColumn}>
        <Icon style={style.icon} name={Iconname as any} size={70} />
      </View>

      <View style={style.textColumn}>
        <Text style={style.itenText}>{name}</Text>
      </View>

      {IconFire && IconNameFire && (
        <View style={style.fireColumn}>
          <IconFire
            style={isFired ? style.firedFire : style.fire}
            name={IconNameFire as any}
            size={65}
          />
          <Text style={style.streakText}>{streak}</Text>
        </View>
      )}

      {onRemove && (
        <TouchableOpacity onPress={onRemove} style={style.removeButton}>
          <AntDesign name="closecircle" size={24} color="#1B3F5C" />
        </TouchableOpacity>
      )}
    </View>
  );
};
