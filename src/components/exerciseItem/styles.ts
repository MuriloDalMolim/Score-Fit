import { Dimensions, StyleSheet} from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
    iten:{
        backgroundColor:'#FFFF',
        width:'90%',
        height:'12%',
        borderRadius:15,
        flexDirection:'row',
        marginTop:10
    },
    itenmarked:{
        backgroundColor:themes.colors.offiten,
        width:'90%',
        height:'12%',
        borderRadius:15,
        flexDirection:'row',
        marginTop:10
    },
    icon:{
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        height:'100%',
        marginTop:'50%'
        
    },
    info:{
        marginLeft:'3%',
        marginRight:'2%',
        width:'85%',
    },
    train:{
        fontSize:28,
        color:'black'
    },
    atach:{
        fontSize:28,
        color:themes.colors.bluefosco,
    },
    boxtrain:{
        height:'50%',
        width:'100%'
    },
    boxatach:{
        justifyContent:"space-between",
        flexDirection:'row',
        height:'50%',
        margin:0
    }
    
})