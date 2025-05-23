import { Dimensions, StyleSheet} from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
    but:{
        backgroundColor:themes.colors.ciano,
        width:'90%',
        height:'12%',
        borderRadius:15,
        marginTop:'10%',
        justifyContent:'center',
        alignItems:'center'
    },
    textBut:{
        color:'#FFFF',
        fontWeight:'bold',
        fontSize:24

    }
    
})