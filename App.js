import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/home';
import Login from './src/screens/login';
import Registro from './src/screens/registro';
const LoginStack = createStackNavigator();
const HomeStack = createStackNavigator();

function LoginStackScreen() {
  return (
    <LoginStack.Navigator screenOptions={{ headerShown: false }}>
      <LoginStack.Screen name="Login" component={Login} />
      <LoginStack.Screen name="Registro" component={Registro} />
    </LoginStack.Navigator>
  );
}
function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  );
}
  function AppNavigator() {
    const { isAuthenticated } = useAuth();
  
    return (
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        {isAuthenticated ? (
          <>
            <AppStack.Screen name="HomeStack" component={HomeStackScreen} />
          </>
        ) : (
          <AppStack.Screen name="LoginStack" component={LoginStackScreen} />
        )}
      </AppStack.Navigator>
    );
  }
 
export default function App() {
  return (
      <NavigationContainer>
        <AppNavigator/>
      </NavigationContainer>
  );
}