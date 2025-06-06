import { StyleSheet} from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
    iten:{
        backgroundColor:'#FFFF',
        width:'100%',
        height:'12%',
        minHeight: 80,
        maxHeight: 120,
        borderRadius:15,
        flexDirection:'row',
        marginTop:10,
        alignSelf: 'center',
        padding: 15,
        justifyContent: 'space-between',
        alignItems: 'center',
        overflow: 'hidden',
    },
    itenmarked:{
        backgroundColor:themes.colors.offiten,
        width:'100  %',
        height:'12%',
        minHeight: 80,
        maxHeight: 120,
        borderRadius:15,
        flexDirection:'row',
        marginTop:10,
        alignSelf: 'center',
        padding: 15,
        justifyContent: 'space-between',
        alignItems: 'center',
        overflow: 'hidden',
    },
    checkIconContainer: {
      marginRight: 10,
      padding: 5,
    },
    textContainer: {
        flex: 1,
        marginRight: 10,
    },
    train:{
        fontSize:32,
        fontWeight: 'bold',
        color:'black',
        marginBottom: 5,
    },
    boxTrain:{
        width:'100%'
    },
    atach:{
        fontSize:22,
        color:themes.colors.bluefosco, 
    },
    boxAtach:{
        flexDirection:'row',
        justifyContent:"flex-start",
        margin:0
    },
    actionIconGroup: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    actionIcon: {
        marginLeft: 5,
        padding: 0,
    }
});