import { Dimensions, StyleSheet} from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({

    container:{
        alignItems:'center',
        justifyContent:'center'
    },
    mid:{
        height:Dimensions.get('window').height/1.35,
        width:'100%',
        alignItems:'center',
        backgroundColor:themes.colors.backgroud
    },
    little:{
        marginTop:5,
        color:themes.colors.dkgrayy,
        fontSize: 17,
        fontWeight:'bold'
    },
    big:{
        color:'solid balck',
        fontSize: 18,
        fontWeight:'bold'
    }

})