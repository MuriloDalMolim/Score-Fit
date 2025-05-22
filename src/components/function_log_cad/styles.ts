import { Dimensions, StyleSheet} from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
    bkground:{
        marginTop:10,
        marginBottom:20,
        backgroundColor:themes.colors.grayy,
        width:'85%',
        height:'10%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text:{
        fontSize:30,
        color:'solid black', 
        margin:10
    },
    line: {
    width: '100%',
    height: 3,
    backgroundColor: 'black',
  },
    
})