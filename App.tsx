import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/pages/login';
import Register from './src/pages/register';
import PlanilhaTreino from './src/pages/planilhatreino';
import ToDo from './src/pages/to_do';
import Social from './src/pages/social';

export default function App() {
  return (
    //<Login/>
    //<Register/> 
    <PlanilhaTreino/>
    //<ToDo/>
    //<Social/>
  );
}

const styles = StyleSheet.create({
});
