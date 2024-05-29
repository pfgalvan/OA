import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import ProfileScreen from '../screens/Profile';
import CameraScreen from '../screens/Camera';
import PlanScreen from '../screens/Planos';
import PaymentScreen from '../screens/Pagamento';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Plan">
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Camera" component={CameraScreen} />
        <Stack.Screen name="Planos" component={PlanScreen} />
        <Stack.Screen name="Pagamento" component={PaymentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;