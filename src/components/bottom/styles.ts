import { Dimensions, StyleSheet} from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
    bottom:{
        width:'100%',
        backgroundColor:themes.colors.ciano,
        height:Dimensions.get('window').height/8.4,
        alignItems:'center',
        justifyContent:'space-around',
        flexDirection:'row'
    },
    mark:{
        backgroundColor:themes.colors.selected,
        borderRadius:30,
        width:'30%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
    },
    unMark:{
        width:'30%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:30,
    }
    
})