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
    paddingBottom:20, // Aumentei um pouco o padding inferior
    maxHeight: '80%', // Limita a altura do modal para não ocupar a tela toda em dispositivos menores
  },
  upper:{
    backgroundColor:themes.colors.darkblue,
    paddingVertical:30, // Reduzi o padding vertical para um cabeçalho mais compacto
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    alignItems:'center',
    justifyContent: 'center', // Centraliza o texto verticalmente
  },
  upperText:{
    color:'white',
    fontWeight:'bold',
    fontSize:28, // Reduzi um pouco o tamanho da fonte para o título
    textAlign: 'center',
  },
  itemRow:{
    backgroundColor:'white',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:15, // Aumentei o padding horizontal
    paddingVertical:10, // Adicionei padding vertical para espaçamento interno dos itens
    marginHorizontal:15, // Aumentei a margem horizontal
    marginVertical:5,
    borderRadius:15,
    shadowColor: "#000", // Adicionado sombra para dar um efeito de card
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  itemText:{
    fontSize:22, // Ajustei o tamanho da fonte do nome do usuário
    fontWeight:'500',
    marginLeft:10,
    color: themes.colors.darkblue, // Cor do texto do nome do usuário
    flexShrink: 1, // Permite que o texto quebre linha se for muito longo
  },
  icon:{
    color:themes.colors.lightbluu, // Cor do ícone de adicionar
    marginLeft:10,
  },
  user:{
    color:themes.colors.darkblue,
  },
  createButton:{ // Mantido o nome para consistência, mas é o botão de adicionar amigo
    backgroundColor:themes.colors.ciano,
    marginHorizontal:20,
    paddingVertical:15,
    marginTop:20, // Aumentei a margem superior
    borderRadius:15,
    alignItems:'center',
  },
  createButtonText: {
    color:'white',
    fontWeight:'bold',
    fontSize:24, // Ajustei o tamanho da fonte
  },
  saveButton: { // O botão "Finalizar"
    backgroundColor:themes.colors.ciano, // Mudei para um azul mais escuro, para ser mais "finalizador"
    marginHorizontal:20,
    paddingVertical:15,
    marginTop:10, // Reduzi a margem superior para ficar mais próximo do botão de criar
    borderRadius:15,
    alignItems:'center',
  },
  saveButtonText: {
    color:'white',
    fontWeight:'bold',
    fontSize:24, // Ajustei o tamanho da fonte
  },
  left:{
    flexDirection:"row",
    alignItems: "center", // Alinha o ícone do usuário e o nome verticalmente
  },
  searchInput: { // Novo estilo para o TextInput de busca
    flex: 1,
    borderWidth: 1,
    borderColor: themes.colors.grayy, // Cor da borda
    backgroundColor: 'white', // Fundo branco
    padding: 12, // Aumentei o padding
    borderRadius: 8, // Borda arredondada
    marginHorizontal: 15,
    marginBottom: 15, // Espaçamento inferior
    fontSize: 18, // Tamanho da fonte
    color: themes.colors.darkblue, // Cor do texto
  },
  searchContainer: { // Container para o input de busca e, futuramente, um botão de busca
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 10,
    marginTop: 20, // Espaçamento superior
  },
  listEmptyText: { // Estilo para o texto "Nenhum resultado encontrado"
    textAlign: 'center',
    color: themes.colors.dkgrayy,
    fontSize: 16,
    marginTop: 20,
    marginBottom: 20,
  },
});