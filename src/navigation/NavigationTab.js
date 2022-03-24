import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen';
import MenuScreen from '../screens/MenuScreen';
import { View, Text } from 'react-native'

const Tab = createBottomTabNavigator();

export default function NavigationTab() {
	return (
		<Tab.Navigator>
			<Tab.Screen name="Home" component={HomeScreen} />
			<Tab.Screen name="Menu" component={MenuScreen} />
		</Tab.Navigator>
	)
}
