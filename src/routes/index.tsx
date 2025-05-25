import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../pages/login';
import Register from '../pages/register';
import HomePage from '../pages/homePage';
import { RootStackParamList } from '../@types/navigation'; 
import ConfigPage from '../pages/configPage';
import PerfilEdit from '../pages/perfilEdit';
import PlanilhaTreino from '../pages/planilhatreino';
import Social from '../pages/social';
import ToDo from '../pages/toDo';

const Stack = createNativeStackNavigator<RootStackParamList>(); 

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator id={undefined} initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="ConfigPage" component={ConfigPage} />
        <Stack.Screen name="PerfilEdit" component={PerfilEdit} />
        <Stack.Screen name="PlanilhaTreino" component={PlanilhaTreino} />
        <Stack.Screen name="Social" component={Social} />
        <Stack.Screen name="ToDo" component={ToDo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
