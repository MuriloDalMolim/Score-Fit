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
        padding: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        overflow: 'hidden',
    },
    itenmarked:{
        backgroundColor:themes.colors.offiten,
        width:'100%',
        height:'12%',
        minHeight: 80,
        maxHeight: 120,
        borderRadius:15,
        flexDirection:'row',
        marginTop:10,
        alignSelf: 'center',
        padding: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        overflow: 'hidden',
    },
    checkIconContainer: {
      padding: 5,
    },
    textContainer: {
        flex: 1,
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
    descriptionText: {
        fontSize: 22,
        color: themes.colors.bluefosco,
        marginLeft: 15, 
        flexShrink: 1,
    },
    boxAtach:{
        flexDirection:'row', // Alterado para 'row' para colocar hora e descrição na mesma linha
        alignItems: 'center', // Alinha verticalmente os itens na linha
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