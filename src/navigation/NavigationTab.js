import React from 'react'
import HomeScreen from '../screens/HomeScreen';
import MenuScreen from '../screens/MenuScreen';
import { Image } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export default function NavigationTab() {
	return (
		<Tab.Navigator initialRouteName="home">
			<Tab.Screen name="Home" component={HomeScreen} options={{
				tabBarLabel: "",
				tabBarStyle: {
					backgroundColor: "#102127",
					paddingTop: 15,
					paddingBottom: 10
				},
				tabBarIcon: () => renderLogo()
			}} />
			<Tab.Screen name="Menu" component={MenuScreen} options={{
				tabBarLabel: "",
				tabBarStyle: {
					backgroundColor: "#102127",
				},
				tabBarIcon: () => renderMenu()
			}} />
		</Tab.Navigator>
	)
}

function renderLogo() {
	return(
		<Image source={require('../assets/logo.png')} style={{width: 200, height: 50, marginLeft: -70,  top: -10}} />
	)
}

function renderMenu() {
	return(
		<Image source={require('../assets/menun.png')} style={{width: 30, height: 30, left: 45}} />
	)
}
