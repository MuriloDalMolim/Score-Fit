import { Dimensions, StyleSheet} from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
    titleInput:{
        fontSize:28,
        marginBottom: 0,
        marginTop: 20,
        marginLeft: 10,
        color:themes.colors.dkgrayy
    },
    input:{
        backgroundColor:themes.colors.grayy,
        width:'100%',
        height:60,
        borderRadius:15,
        marginTop:0,
        alignItems:'center',
        justifyContent:'space-around',
        fontSize:30,
        color:themes.colors.dkgrayy,
        paddingLeft: 10
    },
    big:{
        width:'90%'
    }
    
})