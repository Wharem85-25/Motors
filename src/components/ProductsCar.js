import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Platform } from 'react-native'
import React from 'react'

export default function ProductsCar() {
	return (
		<ScrollView style={styles.contentProduct}>
			<View style={styles.contentDetailCar}>
				<Image style={styles.image} source={{ uri: "https://www.elcarrocolombiano.com/wp-content/uploads/2020/05/202015-NISSAN-KICK-2022-PORTADA.jpg"}} />
				<View style={styles.detailCar}>
					<Text style={styles.marca}>Nissan 2022</Text>
					<Text style={styles.modelo}>leaf 292</Text>
					<Text style={styles.precio}>Price</Text>
					<Text style={styles.price}>$32,400</Text>
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
		height: 750,
		marginTop: 50
	},
	contentDetailCar: {
		alignItems: "center"
	},
	image: {
		width: Platform.OS === "android" ? "100%" : "50%",
		height: Platform.OS === "android" ? 250 : 500
	},
	detailCar: {
		width: Platform.OS === "android" ? "100%" : "50%",
		height: Platform.OS === "android" ? 175 : 160,
		backgroundColor: "rgba(0,0,0,0.5)",
		position: "absolute",
		top: Platform.OS === "web" ? 340 : 140,
		paddingTop: Platform.OS === "android" ? 10 : 30,
		paddingLeft: 25
	},
	marca: {
		color: "#fff",
		fontSize: Platform.OS === "android" ? 10 : 14,
		textTransform: "uppercase"
	},
	modelo: {
		color: "#fff",
		fontSize: Platform.OS === "android" ? 16 : 20,
		fontWeight: "bold",
		textTransform: "uppercase",
		top: 2
	},
	precio: {
		color: "#fff",
		fontSize: Platform.OS === "android" ? 10 : 14,
		textTransform: "uppercase",
		top: 12,
		paddingTop: Platform.OS === "web" ? 30 : 0
	},
	price: {
		color: "#fff",
		fontSize: Platform.OS === "android" ? 16 : 20,
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
