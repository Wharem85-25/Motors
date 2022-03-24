import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import MenuScreen from '../screens/MenuScreen';
import { Image, View, StyleSheet,Text } from 'react-native';

const Stack = createStackNavigator();

export default function NavigationStack() {
	return (
		<Stack.Navigator initialRouteName="Home">
			<Stack.Screen name="Home" component={HomeScreen} options={{
				headerStyle: {
					backgroundColor: '#878f92'
				},
				headerTitle: (props) => <Logo {...props} />
			}} >
			</Stack.Screen>
			<Stack.Screen name="Menu" component={MenuScreen} options={{

			}} />
		</Stack.Navigator>
	)
}

function Logo() {
	return(
		<View>
		 	{/* <View style={styles.logo}> */}
				<Image source={require('../assets/logo.png')} style={{width: 200, height: 50,}} />
		   {/* </View> */}
			{/* <View style={styles.menu}> */}
				<Image source={require('../assets/menu.png')} style={{widht: 10, height: 25}} />
			{/* </View> */}
		</View>
	)
}
