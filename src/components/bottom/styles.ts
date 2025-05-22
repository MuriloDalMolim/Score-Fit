import { Dimensions, StyleSheet} from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
    bottom:{
        width:'100%',
        backgroundColor:themes.colors.ciano,
        height:Dimensions.get('window').height/6.5,
        alignItems:'center',
        justifyContent:'center',
    }
    
})