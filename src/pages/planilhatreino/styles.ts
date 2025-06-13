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
    }

})