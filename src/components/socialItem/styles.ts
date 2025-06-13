import { Dimensions, StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
  iten: {
    backgroundColor: "#ffff",
    width: "90%",
    minHeight: 100, // Aumentei um pouco a altura mínima para melhor visualização
    borderRadius: 15,
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 5,
    justifyContent: "space-between", // Distribui o espaço entre os elementos
    alignItems: "center", // Alinha os itens verticalmente ao centro
    padding: 15, // Aumentei o padding para mais espaço interno
    position: "relative",
    shadowColor: "#000", // Adicionado sombra para dar um efeito de card
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
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
    fontSize: 28, // Ajustei o tamanho da fonte do nome
    fontWeight: "bold",
    marginLeft: 10,
    color: themes.colors.darkblue, // Cor do texto do nome
    flexShrink: 1, // Permite que o texto quebre linha se for muito longo
  },
  userColumn: {
    width: "25%", // Aumentei um pouco a largura para o ícone do usuário
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10, // Adiciona espaço entre o ícone e o nome
  },
  textColumn: {
    flex: 1, // Permite que esta coluna ocupe o espaço restante
    justifyContent: "center", // Centraliza o texto verticalmente
  },
  fireColumn: {
    width: "20%", // Ajustei a largura para a streak
    alignItems: "center",
    justifyContent: "center",
  },
  streakText: {
    fontSize: 28, // Ajustei o tamanho da fonte da streak
    fontWeight: "bold",
    marginTop: -5, // Ajuste para posicionar o número mais próximo da chama
    textAlign: "center",
    color: themes.colors.darkblue, // Cor do texto da streak
  },
  removeButton: {
    position: "absolute",
    top: 8, // Ajusta a posição vertical do botão
    right: 8, // Ajusta a posição horizontal do botão
    zIndex: 1, // Garante que o botão esteja acima de outros elementos
  },
});