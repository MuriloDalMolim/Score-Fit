import { Dimensions, StyleSheet} from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
    iten:{
        backgroundColor:'#FFFF',
        width:'90%',
        height:'12%',
        borderRadius:15,
        flexDirection:'row',
        marginTop:'5%',
        alignItems:'center'
    },
    icon:{
        marginTop:'1%',
        marginLeft:5,
        width:'15%'
             
    },
    configText:{
        fontSize:36,
        marginLeft:25
    }
})