import React from 'react'
import { View, Text, Image, StyleSheet, Platform } from 'react-native'
import { useFonts } from 'expo-font'

export default function Contactos() {
	const [loaded] = useFonts({
		rubik: require('../../assets/fonts/Rubik-VariableFont_wght.ttf'),
	});

	if(!loaded) {
		return null;
	}
	return (
		<View style={styles.content} >
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
		</View>
	)
}

const styles = StyleSheet.create({
	content: {
		alignItems: "center",
		height: 1000,
		backgroundColor: "#000"
	},
	containerContacts: {
		alignItems: "center",
		height: 100,
		marginTop: 100,
		width: 220,
		marginBottom: 10
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
		top: 130,
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
		width: "80%",
		height: 1,
		backgroundColor: "#889093",
		position: "absolute",
		top: 850
	},
	footer: {
		height: 300,
		width: "80%",
	},
	textFooter: {
		color: "#889093",
		fontSize: 14,
		fontWeight: "bold",
		position: "relative",
		top: 200
	}
})
