import { StyleSheet } from 'react-native';
import { themes } from '../../global/themes';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: themes.colors.backgroud, // Fundo do modal igual ao background geral
    padding: 20,
    borderRadius: 10,
    width: '85%',
    maxHeight: '80%',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: themes.colors.darkblue, // Cor do título do modal igual aos cabeçalhos
  },
  input: {
    backgroundColor: themes.colors.grayy, // Fundo do input
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    fontSize: 18,
    color: themes.colors.darkblue, // Cor do texto do input
  },
  saveButton: {
    backgroundColor: themes.colors.ciano, // Cor do botão salvar
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cancelButton: {
    backgroundColor: themes.colors.darkblue, // Cor do botão cancelar
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
});