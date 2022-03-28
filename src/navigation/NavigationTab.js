import React from 'react'
import HomeScreen from '../screens/HomeScreen';
import MenuScreen from '../screens/MenuScreen';
import InfoCarScreen from '../screens/InfoCarScreen';
import ImagesTitleScreen from '../screens/ImagesTitleScreen';
import { Image, Platform, StyleSheet } from 'react-native'
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
					width: "100%"
				},
				tabBarIcon: () => renderLogo()
			}} />
			<Tab.Screen name="Car" component={InfoCarScreen} options={{
				tabBarLabel: "Inventario",
				tabBarStyle: {
					backgroundColor: "#102127",
					paddingTop: 0,
				},
				tabBarLabelStyle: {
					color: "#fff",
					fontWeight: "bold",
					fontSize: 12,
					paddingLeft: 1
				}
			}} />
			<Tab.Screen name="Accesorios" component={ImagesTitleScreen} options={{
				tabBarLabel: "Accesorios",
				tabBarStyle: {
					backgroundColor: "#102127",
					paddingTop: 0,
				},
				tabBarLabelStyle: {
					color: "#fff",
					fontWeight: "bold",
					fontSize: 12
				}
			}} />
			<Tab.Screen name="Menu" component={MenuScreen} options={{
				tabBarLabel: "",
				tabBarStyle: {
					backgroundColor: "#102127",
					paddingTop: 15,
				},
				tabBarIcon: () => renderMenu()
			}} />
		</Tab.Navigator>
	)
}

function renderLogo() {
	return(
		<Image source={require('../assets/logo.png')} style={styles.motors} />
	)
}

function renderMenu() {
	return(
		<Image source={require('../assets/menun.png')} style={{width: 30, height: 30, left: 10, top: 10}} />
	)
}

const styles = StyleSheet.create({
	motors: {
		width: Platform.OS === "web" ? 120 : 80,
		height: Platform.OS === "web" ? 30 : 20,
		marginLeft: Platform.OS === "web" ? 0 : -30,
		top: Platform.OS === "web" ? 0 : 20
	}
})
