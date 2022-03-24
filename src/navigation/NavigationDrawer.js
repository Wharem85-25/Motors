import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeScreen from '../screens/HomeScreen';
import MenuScreen from '../screens/MenuScreen';

const Drawer = createDrawerNavigator();

export default function NavigationDrawer() {
	return (
		<Drawer.Navigator>
			<Drawer.Screen name="Home" component={HomeScreen} />
			<Drawer.Screen name="Menu" component={MenuScreen} />
		</Drawer.Navigator>
	)
}
