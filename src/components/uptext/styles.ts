import { Dimensions, StyleSheet} from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
    range:{
        width:'90%',
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop:10,
        marginBottom: 10,
        paddingTop: 20
    },
    textOne:{
        fontSize:30,
        color:themes.colors.bluefosco,
    },
    textTwo:{
        fontSize:24,
        color:themes.colors.bluefosco,
    }
    
})