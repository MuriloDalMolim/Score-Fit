import { Dimensions, StyleSheet} from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({

    hello:{
        backgroundColor:themes.colors.darkblue,
        width:'100%',
        height:Dimensions.get('window').height/5,
        flexDirection:'row',
        justifyContent:'space-between',

    },
    helloText:{
        fontSize:32,
        marginTop:'20%',
        fontWeight:'bold',
        marginLeft:'5%',
        color:'white'
    },
    user:{
        width: '25%',
        height: '60%',
        borderRadius: 50,
        borderWidth: 3,
        borderColor:themes.colors.lightbluu,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:'10%',
        marginRight:'5%'
    },
    body:{
        backgroundColor:themes.colors.darkblue,
        width:'100%',
        height:'100%',
        alignItems:'center'

    },
    logo:{
        width:'40%',
        height:'30%',
        marginTop:'-10%'
    },
    logoTitle:{
        marginTop:'-20%',
        fontSize:50,
        fontStyle:'italic',
        fontWeight:'bold',
        color:'white',
        marginBottom:'15%',
    },
    row:{
        flexDirection:'row',
        justifyContent:'center',
        height:'18%',
        width:'45%',
        marginBottom:'3%'
    },
    square:{
        margin:'3%',
        borderRadius:10,
        borderWidth:5,
        borderColor:themes.colors.lightbluu,
        width:'100%',
        height:'100%',
        alignItems:'center',
    },
    squareText:{
        fontSize: 30,
        fontWeight:'bold',
        color:'white',
        marginTop:'17%'
    },
    icon:{
        marginTop:10,
    },
    fireContainer:{
        flexDirection:'row',
        marginBottom:-15
    },
    streak:{
        fontSize:65,
        fontWeight:'bold',
        color:'white'
    }


})