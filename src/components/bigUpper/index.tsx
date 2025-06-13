import React from "react";
import { View, Text, Image } from "react-native";
import { style } from "./styles";
import WhiteLogo from "../../assets/WhiteLogo.png";

export const BigUpper = () => {
  return (
    <>
      <View style={style.upper}>
        <Image style={style.logo} source={WhiteLogo} resizeMode="contain" />
        <Text style={style.logoText}>ScoreFit</Text>
      </View>
    </>
  );
};