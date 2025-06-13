import { Dimensions, StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
  iten: {
    backgroundColor: "#ffff",
    width: "90%",
    minHeight: 100, 
    borderRadius: 15,
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 5,
    justifyContent: "space-between", 
    alignItems: "center", 
    padding: 15, 
    position: "relative",
    shadowColor: "#000", 
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
    fontSize: 28, 
    fontWeight: "bold",
    marginLeft: 10,
    color: themes.colors.darkblue, 
    flexShrink: 1, 
  },
  userColumn: {
    width: "25%", 
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10, 
  },
  textColumn: {
    flex: 1, 
    justifyContent: "center", 
  },
  fireColumn: {
    width: "20%", 
    alignItems: "center",
    justifyContent: "center",
  },
  streakText: {
    fontSize: 28, 
    fontWeight: "bold",
    marginTop: -5, 
    textAlign: "center",
    color: themes.colors.darkblue, 
  },
  removeButton: {
    position: "absolute",
    top: 8, 
    right: 8, 
    zIndex: 1, 
  },
});