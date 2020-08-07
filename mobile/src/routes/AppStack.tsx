import React from 'react';

import Landing from '../pages/Landing';
import GiveClasses from '../pages/GiveClasses';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import StudyTabs from './StudyTabs';

const { Navigator, Screen } = createStackNavigator();

export default function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{
        headerShown: false,
      }}>
        <Screen name="Landing" component={Landing} />
        <Screen name="GiveClasses" component={GiveClasses} />
        <Screen name="Study" component={StudyTabs} />
      </Navigator>
    </NavigationContainer>
  )
}