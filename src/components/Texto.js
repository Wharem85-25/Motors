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
				<View style={styles.flex}>
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
				</View>
				<View style={styles.contentImg}>
					<Image style={styles.nissan} source={{ uri: "https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/12/nissan-logo-white.png"}} />
					<Image style={styles.tesla} source={{ uri: "https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/12/Tesla_Motors.png"}} />
					<Image style={styles.volkswagen} source={{ uri: "https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/12/Path_109.png"}} />
					<Image style={styles.group} source={{ uri: "https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/12/Group_454.png"}} />
					<Image style={styles.bmw} source={{ uri: "https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/12/BMW-logo-fallback.png"}} />
					<Image style={styles.audi} source={{ uri: "https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/12/audi@1x.png"}} />
				</View>
			</ScrollView>
		</ImageBackground>
	)
}

const styles = StyleSheet.create({
	background: {
		flex: 7
	},
	flex: {
		flex: 1,
		flexDirection: Platform.OS === "web" ? "row" : "column"
	},
	content: {
		height: Platform.OS === "web" ? 1400 : 800,
	},
	containerText: {
		width: Platform.OS === "web" ? 600 : "100%",
		height: 200,
		alignItems: Platform.OS === "web" ? "center" : "flex-start"
	},
	title: {
		color: "white",
		fontWeight: "bold",
		paddingLeft: 20,
		marginBottom: 28,
		fontSize: Platform.OS === "web" ? 20 : 24,
		fontFamily: "rubik",
		paddingTop: Platform.OS === "web" ? 100 : 75
	},
	text: {
		paddingLeft: 20,
		paddingRight: Platform.OS === "web" ? 0 : 30,
		fontSize: Platform.OS === "web" ? 16 : 16,
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
		left: Platform.OS === "web" ? "5%" : 50
	},
	tesla: {
		height: 85,
		width: 65,
		position: "absolute",
		top: Platform.OS === "web" ? 100 : 50,
		left: Platform.OS === "web" ? "20%" : 240,
	},
	volkswagen: {
		width: Platform.OS === "web" ? 85 : 0,
		height: Platform.OS === "web" ? 85 : 0,
		position: "absolute",
		top: Platform.OS === "web" ? 100 : 50,
		left: Platform.OS === "web" ? "35%" : 240,
	},
	group: {
		width: Platform.OS === "web" ? 85 : 0,
		height: Platform.OS === "web" ? 85 : 0,
		position: "absolute",
		top: Platform.OS === "web" ? 100 : 50,
		left: Platform.OS === "web" ? "50%" : 240,
	},
	bmw: {
		width: Platform.OS === "web" ? 85 : 0,
		height: Platform.OS === "web" ? 85 : 0,
		position: "absolute",
		top: Platform.OS === "web" ? 100 : 50,
		left: Platform.OS === "web" ? "65%" : 240,
	},
	audi: {
		width: Platform.OS === "web" ? 145 : 0,
		height: Platform.OS === "web" ? 85 : 0,
		position: "absolute",
		top: Platform.OS === "web" ? 100 : 50,
		left: Platform.OS === "web" ? "80%" : 240,
	}
})
