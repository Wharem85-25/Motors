import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import MenuScreen from '../screens/MenuScreen';
import { StackActions } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function NavigationStack() {
	return (
		<Stack.Navigator initialRouteName="Home">
			<Stack.Screen name="Home" component={HomeScreen} />
			<Stack.Screen name="Menu" component={MenuScreen} />
		</Stack.Navigator>
	)
}
