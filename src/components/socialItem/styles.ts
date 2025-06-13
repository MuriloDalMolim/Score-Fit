import { Dimensions, StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
  iten: {
    backgroundColor: "#ffff",
    width: "90%",
    height: "15%",
    borderRadius: 15,
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 5,
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: 10,
    paddingRight: 15, // Aumenta espaço à direita para o botão de remover
    position: "relative", // garante posicionamento correto do botão
  },
  icon: {
    color: themes.colors.darkblue,
  },
  fire: {
    marginTop: 5,
    color: themes.colors.fire,
  },
  firedFire: {
    marginTop: 5,
    color: themes.colors.fired,
  },
  itenText: {
    fontSize: 36,
    fontWeight: "bold",
    marginLeft: 10,
  },
  userColumn: {
    width: "20%",
    alignItems: "center",
  },
  textColumn: {
    width: "50%", // reduz um pouco para abrir espaço ao lado
    justifyContent: "flex-start",
  },
  fireColumn: {
    width: "25%", // aumentei de tamanho
    alignItems: "center",
    justifyContent: "center",
  },
  streakText: {
    fontSize: 32,
    fontWeight: "bold",
    marginTop: -10,
    textAlign: "center",
  },
  removeButton: {
    position: "absolute",
    top: 5,
    right: 5, // fica mais afastado com o paddingRight do container
  },
});
