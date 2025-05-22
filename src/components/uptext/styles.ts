import { Dimensions, StyleSheet} from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
    range:{
        width:'90%',
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop:30,
        marginBottom: 10
    },
    textone:{
        fontSize:32,
        //fontWeight:'bold',
        color:themes.colors.bluefosco,
    },
    texttwo:{
        fontSize:24,
        color:themes.colors.bluefosco,
    }
    
})