import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Platform } from 'react-native'
import React from 'react'

export default function ProductCar2() {
	return(
		<ScrollView style={styles.contentProduct}>
			<View style={styles.contentDetailCar}>
				<Image style={styles.image} source={{ uri: "https://gossipvehiculo.com/wp-content/uploads/2021/09/Toyota-Prius-2022-1.png"}} />
				<View style={styles.detailCar}>
					<Text style={styles.marca}>Toyota 2021</Text>
					<Text style={styles.modelo}>Prius 320</Text>
					<Text style={styles.precio}>Msrp:</Text>
					<Text style={styles.price}>$30,999</Text>
					<TouchableOpacity style={styles.button}>
						<Text style={styles.detailText}>Details</Text>
					</TouchableOpacity>
				</View>
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	contentProduct: {
		height: 600,
		marginTop: 50
	},
	contentDetailCar: {
		alignItems: "center"
	},
	image: {
		width: Platform.OS === "web" ? "50%" : "100%",
		height: Platform.OS === "web" ? 500 : 250
	},
	detailCar: {
		width: Platform.OS === "web" ? "50%" : "100%",
		height: Platform.OS === "web" ? 160 : 175,
		backgroundColor: "rgba(0,0,0,0.5)",
		position: "absolute",
		top: Platform.OS === "web" ? 340 : 140,
		paddingTop: Platform.OS === "web" ? 30 : 10,
		paddingLeft: 25
	},
	marca: {
		color: "#fff",
		fontSize: Platform.OS === "web" ? 14 : 10,
		textTransform: "uppercase"
	},
	modelo: {
		color: "#fff",
		fontSize: Platform.OS === "web" ? 20 : 16,
		fontWeight: "bold",
		textTransform: "uppercase",
		top: 2
	},
	precio: {
		color: "#fff",
		fontSize: Platform.OS === "web" ? 14 : 10,
		textTransform: "uppercase",
		top: 12,
		paddingTop: Platform.OS === "web" ? 30 : 0
	},
	price: {
		color: "#fff",
		fontSize: Platform.OS === "web" ? 20 : 16,
		fontWeight: "bold",
		textTransform: "uppercase",
		top: 12
	},
	detailText: {
		color: "#fff",
		textTransform: "uppercase",
		textAlign: "center",
		paddingTop: Platform.OS === "web" ? 10 : 5,
		fontWeight: "bold"
	},
	button: {
		width: 80,
		height: 40,
		backgroundColor: "#0d46ff",
		position: "absolute",
		right: 25,
		top: Platform.OS === "web" ? 80 : 40 ,
		borderWidth: 1,
		borderColor: "#0d46ff",
		backfaceVisibility: "hidden",
		borderTopLeftRadius: 15,
		borderTopRightRadius: 15,
		borderBottomLeftRadius: 15,
		borderBottomRightRadius: 15
	}
})
