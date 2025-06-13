import { Dimensions, StyleSheet} from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({

    mid:{
        height:Dimensions.get('window').height/1.28,
        width:'100%',
        alignItems:'center',
        backgroundColor:themes.colors.backgroud
    },
    user:{
        width: '50%',
        height: '30%',
        borderRadius: 500,
        borderWidth: 3,
        borderColor:themes.colors.lightbluu,
        backgroundColor:themes.colors.darkblue,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:'10%',
        marginRight:'5%'
    },
     pendingEmailVerificationText: { 
        marginTop: 10,
        color: themes.colors.fire,
        fontSize: 16,
        textAlign: 'center',
        marginHorizontal: 20,
    }

})