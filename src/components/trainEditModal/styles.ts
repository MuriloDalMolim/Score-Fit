import { StyleSheet } from 'react-native';
import { themes } from '../../global/themes';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: 'white',
    width: '85%',
    borderRadius: 10,
    padding: 20,
  },
  upperText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  inputNomeTreino: {
    fontSize: 26,
    borderBottomWidth: 1,
    borderColor: 'black',
    paddingVertical: 8,
    marginBottom: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: themes.colors.dkgrayy,
    padding: 10,
    borderRadius: 6,
    marginBottom: 10,
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: themes.colors.dkgrayy
  },
  itemText: {
    fontSize: 22,
    flex: 1,
  },
  iconGroup: {
    flexDirection: 'row',
    gap: 10,
  },
  icon: {
    marginHorizontal: 5,
  },
  createButton: {
    backgroundColor:themes.colors.ciano,
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  saveButton:{
    backgroundColor:themes.colors.ciano,
    padding: 12,
    borderRadius: 8,
    marginTop: 15,
  },
  cancelButton: {
    backgroundColor:themes.colors.darkblue,
    padding: 10,
    borderRadius: 8,
    marginTop: 8,
  },
  ButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize:20
  }
});
