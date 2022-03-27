import { View, Text, ScrollView, StyleSheet, Platform } from 'react-native'
import React from 'react'

export default function Datos() {
	return (
		<ScrollView style={styles.container}>
			<View style={styles.contentTitle}>
				<Text style={styles.title}>{`Over 10 years we sell\nelectric cars`}</Text>
			</View>
			<View style={styles.line}></View>
			<View style={styles.contentDatos}>
				<View style={styles.flex}>
					<Text style={styles.num}>15 514</Text>
					<Text style={styles.text}>Cars sold</Text>
				</View>
				<View style={styles.flex}>
					<Text style={styles.num}>1 201</Text>
					<Text style={styles.text}>cars for sale</Text>
				</View>
				<View style={styles.flex}>
					<Text style={styles.num}>2 150</Text>
					<Text style={styles.text}>reviews</Text>
				</View>
				<View style={styles.flex}>
					<Text style={styles.num}>3 800+</Text>
					<Text style={styles.text}>visitors for day</Text>
				</View>
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		height: Platform.OS === "web" ? 500 : 1000,
		backgroundColor: "#0d46ff",
	},
	contentTitle: {
		paddingTop: 80,
		marginBottom: 30,
		alignItems: "center"
	},
	title: {
		color: "white",
		fontSize: 50,
		fontWeight: "bold",
		fontFamily: "rubik",
		textTransform: "uppercase"
	},
	line: {
		width: "100%",
		height: Platform.OS === "web" ? 0.1 : 1,
		backgroundColor: "#889093"
	},
	contentDatos: {
		height: 700,
		top: Platform.OS === "web" ? 100 : 60,
		alignItems: Platform.OS ==="web" ? "center" : "flex-start",
		left: Platform.OS === "web" ? 0 : 20,
		flex: 1,
		flexDirection: Platform.OS === "web" ? "row" : "column"
	},
	flex: {
		marginLeft: Platform.OS === "web" ? 220 : 0,
	},
	num: {
		color: "white",
		fontSize: Platform.OS === "web" ? 60 :50,
		fontWeight: "bold",
		marginBottom: 10,
		fontFamily: "rubik"
	},
	text: {
		color: "white",
		fontSize: Platform.OS === "web" ? 30 : 20,
		textTransform: "uppercase",
		fontWeight: "bold",
		marginBottom: 60,
		fontFamily: "rubik"
	}
})
