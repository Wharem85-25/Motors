import React from 'react'
import { View, Text, StyleSheet, ScrollView, Image, ImageBackground, Platform } from 'react-native'
import { useFonts } from 'expo-font'

export default function Texto() {
	const [loaded] = useFonts({
		rubik: require('../../assets/fonts/Rubik-VariableFont_wght.ttf'),
		openSans: require('../../assets/fonts/OpenSans-Italic.ttf'),
	});

	if(!loaded) {
		return null;
	}
	return (
		<ImageBackground style={styles.background} source={{ uri: 'https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/parallax_bg.jpg?id=938'}}>
			<ScrollView style={styles.content}>
				<View style={styles.containerText}>
					<Text style={styles.title}>Financing made easy</Text>
					<Text style={styles.text}>Distilery succulents twee leggins thundercats. Shabby chic ramps gochujang pickled, pork belly milkshk irony tumeric</Text>
				</View>
				<View style={styles.containerText}>
					<Text style={styles.title}>Trusted By Thousands</Text>
					<Text style={styles.text}>Distilery succulents twee leggins thundercats. Shabby chic ramps gochujang pickled, pork belly milkshk irony tumeric</Text>
				</View>
				<View style={styles.containerText}>
					<Text style={styles.title}>Wide Range of Brands</Text>
					<Text style={styles.text}>Distilery succulents twee leggins thundercats. Shabby chic ramps gochujang pickled, pork belly milkshk irony tumeric</Text>
				</View>
				<View style={styles.contentImg}>
					<Image style={styles.nissan} source={{ uri: "https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/12/nissan-logo-white.png"}} />
					<Image style={styles.tesla} source={{ uri: "https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/12/Tesla_Motors.png"}} />
				</View>
			</ScrollView>
		</ImageBackground>
	)
}

const styles = StyleSheet.create({
	background: {
		flex: 7
	},
	content: {
		height: Platform.OS === "web" ? 2070 : 800,
	},
	containerText: {
		width: "100%",
		height: 200,
		alignItems: Platform.OS === "web" ? "center" : "flex-start"
	},
	title: {
		color: "white",
		fontWeight: "bold",
		paddingLeft: 20,
		marginBottom: 28,
		fontSize: Platform.OS === "web" ? 30 : 24,
		fontFamily: "rubik",
		paddingTop: Platform.OS === "web" ? 100 : 75
	},
	text: {
		paddingLeft: 20,
		paddingRight: Platform.OS === "web" ? 0 : 30,
		fontSize: Platform.OS === "web" ? 20 : 16,
		color: "white",
		fontFamily: "openSans",
		width: Platform.OS === "web" ? 500 : "100%"
	},
	contentImg: {
		width: "100%",
		height: 300
	},
	nissan: {
		width: 100,
		height: 85,
		position: "absolute",
		top: Platform.OS === "web" ? 100 : 50,
		left: Platform.OS === "web" ? 600 : 50
	},
	tesla: {
		height: 85,
		width: 65,
		position: "absolute",
		top: Platform.OS === "web" ? 100 : 50,
		left: Platform.OS === "web" ? 1100 : 240,
	}
})
