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
    textOne:{
        fontSize:32,
        //fontWeight:'bold',
        color:themes.colors.bluefosco,
    },
    textTwo:{
        fontSize:24,
        color:themes.colors.bluefosco,
    }
    
})