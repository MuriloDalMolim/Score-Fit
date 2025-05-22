import { Dimensions, StyleSheet} from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
    upper:{
        width:'100%',
        backgroundColor:themes.colors.darkblue,
        height:Dimensions.get('window').height/5.5,
        flexDirection:'row',
        alignItems:'center',
    },
    uppertext:{
        fontWeight:'bold',
        fontSize:30,
        color: '#FFFF',
        marginLeft: 15, 
        justifyContent:'flex-end',   
        marginTop:50,
    },
    icon:{
        marginTop:50,
        marginLeft: 15, 
    }
    
})