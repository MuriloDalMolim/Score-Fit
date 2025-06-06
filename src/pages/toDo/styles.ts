import { Dimensions, StyleSheet} from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({

    mid:{
        flex: 1,
        width:'100%',
        alignItems:'center',
        backgroundColor:themes.colors.backgroud,
    },
    activityList: {
      flex: 1,
      width: '100%',
      paddingHorizontal: 15,
    },
    noActivitiesText: {
      textAlign: 'center',
      marginTop: 50,
      fontSize: 18,
      color: themes.colors.darkblue,
      paddingHorizontal: 20,
    },
    buttonContainer: {
      width: '100%',
      padding: 15,
      backgroundColor: themes.colors.backgroud,
      borderTopWidth: 1,
      borderTopColor: themes.colors.grayy,
    },
    addButton: {
      backgroundColor: themes.colors.ciano, // Cor do botão adicionar
      paddingVertical: 15,
      borderRadius: 8,
      alignItems: 'center',
      marginBottom: 10,
    },
    addButtonText: {
      color: '#fff',
      fontSize: 26,
      fontWeight: 'bold',
    },
});