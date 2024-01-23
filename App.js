// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppHome from './AppHome';  // Renommez votre composant App à AppHome
import SurveyScreen from './SurveyScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" headerMode="none">
        <Stack.Screen name="Home" component={AppHome} />
        <Stack.Screen name="Survey" component={SurveyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
