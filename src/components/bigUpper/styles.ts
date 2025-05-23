import { Dimensions, StyleSheet} from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
    upper:{
        width:'100%',
        backgroundColor:themes.colors.darkblue,
        height:Dimensions.get('window').height/4.5,
        alignItems:'center',
        justifyContent:'center',
    },
    logo:{
        justifyContent:'center',
        width:'40%',
        height:'70%',
        marginTop:'-5%',   
        marginBottom:'-5%'
    },
    logoText:{
        fontStyle: 'italic',
        fontWeight:'bold',
        fontSize:45,
        color: '#FFFF', 
        marginTop: 0   
    }
    
})