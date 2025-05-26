import { Dimensions, StyleSheet} from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({

    container:{
    flex: 1,
    backgroundColor:'rgba(0,0,0,0.4)',
    justifyContent:'center',
    alignItems:'center',
  },
  modalContainer:{
    width:'90%',
    backgroundColor:themes.colors.backgroud,
    borderRadius:10,
    paddingBottom:16,
  },
  upper:{
    backgroundColor:themes.colors.darkblue,
    paddingVertical:40,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    alignItems:'center',
  },
  upperText:{
    color:'white',
    fontWeight:'bold',
    fontSize:32,
  },
  itemRow:{
    backgroundColor:'white',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:14,
    marginHorizontal:14,
    marginVertical:5,
    borderRadius:15,
  },
  itemText:{
    fontSize:32,
    fontWeight:'500',
  },
  itemSubText:{
    color:themes.colors.bluefosco,
    fontSize:30,
  },
  textContainer:{
    flexDirection:"column"
  },
  iconGroup:{
    flexDirection:'row',
    alignItems:'center',
  },
  icon:{
    color:themes.colors.bluefosco,
    marginLeft:10
  },
  createButton:{
    backgroundColor:themes.colors.ciano,
    marginHorizontal:20,
    paddingVertical:15,
    marginTop:10,
    borderRadius:15,
    alignItems:'center',
  },
  createButtonText: {
    color:'white',
    fontWeight:'bold',
    fontSize:28
  },
  saveButton: {
    backgroundColor:themes.colors.ciano,
    marginHorizontal:20,
    paddingVertical:15,
    marginTop:30,
    borderRadius:15,
    alignItems:'center',
  },
  saveButtonText: {
    color:'white',
    fontWeight:'bold',
    fontSize:28
  }
})