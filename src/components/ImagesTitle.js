import { View, Text, Image, StyleSheet, ScrollView, Platform } from 'react-native'
import React from 'react'

export default function ImagesTitle() {
	return (
		<ScrollView style={styles.containerImage}  >
			<View style={styles.containerTitle}>
				<Text style={styles.title}>Why Electric Vehicles?</Text>
			</View>
			<View style={styles.containerImg}>
				<Image source={require('../assets/img1.jpg')} style={styles.img} />
				<Image source={require('../assets/img2.jpg')} style={styles.img2} />
				<Image source={require('../assets/img3.jpg')} style={styles.img3} />
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	containerImage:{
		width: "100%",
		height: 1150,
		fontFamily: "rubik",
	},
	containerTitle:{
		paddingTop: 25,
		marginBottom: 100,
		alignItems: "center"
	},
	title: {
		textTransform: "uppercase",
		fontSize: 42,
		fontWeight: "bold",
		lineHeight: 50,
		color: "#000"
	},
	containerImg: {
		paddingLeft: 15,
		height: 960,
		alignItems: "center"
	},
	img: {
		width: 300,
		height: 300,
		zIndex: 5,
		marginBottom: 130
	},
	img2: {
		width: 250,
		height: 340,
		zIndex: 5,
		position: "absolute",
		top: 179,
		right: Platform.OS === "web" ? 0 : 20,
		left: Platform.OS === "web" ? 920 : 170,
		borderWidth: 20,
		borderStyle: "solid",
		borderColor: "white",
	},
	img3: {
		width: 300,
		height: 300,
		zIndex: -5,
	}
})
