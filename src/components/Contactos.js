import React from 'react'
import { View, Text, Image, StyleSheet, Platform, ScrollView } from 'react-native'
import { useFonts } from 'expo-font'

export default function Contactos() {
	const [loaded] = useFonts({
		rubik: require('../../assets/fonts/Rubik-VariableFont_wght.ttf'),
	});

	if(!loaded) {
		return null;
	}
	return (
		<ScrollView style={styles.content} >
			<View style={styles.flex}>
				<View style={styles.containerContacts}>
					<Image style={styles.imageContact} source={{ uri: "https://img.icons8.com/ios/50/ffffff/point-objects.png"}} />
					<Text style={styles.title}>Address</Text>
					<Text style={styles.text}>1010 Avenue of the Moon New York, NY 10018 US.</Text>
				</View>
				<View style={styles.containerContacts}>
					<Image style={styles.imageContact} source={{ uri: "https://img.icons8.com/ios-filled/50/ffffff/phone.png"}} />
					<Text style={styles.title}>Phone</Text>
					<Text style={styles.text}>+1 628 123 4000</Text>
				</View>
				<View style={styles.containerContacts}>
					<Image style={styles.imageContact} source={{ uri: "https://img.icons8.com/ios/50/ffffff/mail.png"}} />
					<Text style={styles.title}>Email</Text>
					<Text style={styles.text}>wharem85@hotmail.com</Text>
				</View>
			</View>
			<View style={styles.containerRedes}>
				<Image style={styles.imgRedes1} source={{ uri: "https://img.icons8.com/ios-glyphs/30/ffffff/facebook-new.png"}} />
				<Image style={styles.imgRedes} source={{ uri: "https://img.icons8.com/ios-glyphs/30/ffffff/twitter--v1.png"}} />
				<Image style={styles.imgRedes} source={{ uri: "https://img.icons8.com/ios-glyphs/30/ffffff/tiktok.png"}} />
				<Image style={styles.imgRedes} source={{ uri: "https://img.icons8.com/ios/50/ffffff/instagram-new--v1.png"}} />
				<Image style={styles.imgRedes} source={{ uri: "https://img.icons8.com/ios-glyphs/30/ffffff/linkedin.png"}} />
			</View>
			<View style={styles.line}></View>
			<View style={styles.footer}>
				<Text style={styles.textFooter}>2022 Wharem85 - is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</Text>
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	content: {
		height: Platform.OS === "web" ? 600 : 1300,
		backgroundColor: "#000"
	},
	flex: {
		flex: 1,
		flexDirection: Platform.OS === "web" ? "row" : "column",
		left: Platform.OS === "web" ? "10%" : 0,
		alignItems: "center",
		top: Platform.OS === "web" ? 100 : 0
	},
	containerContacts: {
		alignItems: "center",
		height: 100,
		marginTop: 100,
		width: 220,
		marginLeft: Platform.OS === "web" ? 200 : 0,
	},
	imageContact: {
		width: 60,
		height: 60
	},
	title: {
		color: "#889093",
		textTransform: "uppercase",
		paddingTop: 30,
		fontSize: 16,
		fontWeight: "bold",
		fontFamily: "rubik"
	},
	text: {
		color: "white",
		paddingTop: 5,
		fontWeight: "bold",
		fontSize: 18,
		fontFamily: "rubik"
	},
	containerRedes: {
		flex: 1,
		flexDirection: "row",
		top: Platform.OS === "web" ? 300 : 100,
		alignItems: "center",
		paddingLeft: Platform.OS === "web" ? 0 : 65,
		left: Platform.OS === "web" ? "40%" : 0,
	},
	imgRedes: {
		width: 30,
		height: 30,
		marginLeft: Platform.OS === "web" ? 60 : 30
	},
	imgRedes1: {
		width: 30,
		height: 30
	},
	line: {
		alignItems: "center",
		width: "100%",
		height: 1,
		backgroundColor: "#889093",
		position: "absolute",
		top: Platform.OS === "web" ? 550 : 800
	},
	footer: {
		height: Platform.OS === "web" ? 100 : 300,
		width: "100%",
	},
	textFooter: {
		color: "#889093",
		fontSize: Platform.OS === "web" ? 16 : 14,
		fontWeight: "bold",
		position: "relative",
		textAlign: "left",
		top: Platform.OS === "web" ? 380 : 200
	}
})
