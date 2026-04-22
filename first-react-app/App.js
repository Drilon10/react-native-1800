import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainScreen from './screens/MainScreen';
import TestScreen from './screens/TestScreen';
import ExerciseScreen from './screens/ExerciseScreen';
import ListScreen from './screens/ListScreen';
import Challenge5 from "./screens/Challenge5";
import ButtonScreen from './screens/ButtonScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator
        initialRouteName="Button"
        screenOptions={{
          title: 'App',
        }}
      >
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Test" component={TestScreen} />
        <Stack.Screen name="Exercise" component={ExerciseScreen} />
        <Stack.Screen name="List" component={ListScreen} />
        <Stack.Screen name="Challenge5" component={Challenge5} />
        <Stack.Screen name="Button" component={ButtonScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
