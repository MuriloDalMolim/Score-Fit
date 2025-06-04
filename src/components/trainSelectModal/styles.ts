import { Dimensions, StyleSheet} from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'rgba(0,0,0,0.4)'
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '85%',
    maxHeight: '70%',
  },
  itemText: {
    fontSize: 30,
    paddingVertical: 10,
    margin:10,
    textAlign: 'center',
    color:themes.colors.bluefosco,
    backgroundColor:themes.colors.backgroud,
    borderRadius:20,
    fontWeight: 'bold'
  },
  upperText: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  trainList: {
    maxHeight: '100%',
  }
});
