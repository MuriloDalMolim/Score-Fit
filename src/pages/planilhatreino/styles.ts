import { Dimensions, StyleSheet} from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({

    container:{
        alignItems:'center',
        justifyContent:'center'
    },
    mid:{
        height:Dimensions.get('window').height/1.27,
        width:'100%',
        alignItems:'center',
        backgroundColor:themes.colors.backgroud
    },
    modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)', // fundo escurecido
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '85%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  button: {
    marginTop: 20,
    backgroundColor: '#2E6B8A',
    padding: 12,
    borderRadius: 6,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  }

})