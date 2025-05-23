import { Dimensions, StyleSheet} from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
    iten:{
        backgroundColor:'#FFFF',
        width:'90%',
        height:'15%',
        borderRadius:15,
        flexDirection:'row',
        marginTop:10,
        marginBottom:5,
        justifyContent:"space-between",
        alignItems: 'flex-start',
        padding: 10
    },
    icon:{
        color:themes.colors.darkblue
    },
    fire:{
        marginTop:5,
        color:themes.colors.fire,
    },
    firedFire:{
        marginTop:5,
        color:themes.colors.fired,
    },
    itenText:{
        fontSize:36,
        fontWeight:'bold',
        marginLeft:5
    },
    userColumn:{
        width: '20%',
        alignItems: 'center',
    },
    textColumn:{
        width: '60%',
        justifyContent: 'flex-start',
    },
    fireColumn:{
        alignItems: 'center',
        justifyContent: 'center',
    }
    
})