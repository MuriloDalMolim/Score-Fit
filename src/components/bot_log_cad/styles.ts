import { Dimensions, StyleSheet} from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
    bot:{
        height:Dimensions.get('window').height/7.98,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:themes.colors.darkblue
    }
    
})