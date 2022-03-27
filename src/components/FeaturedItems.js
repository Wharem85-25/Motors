import React, {useState} from 'react'
import { View, Text, ScrollView, StyleSheet, Image, Platform, TouchableOpacity } from 'react-native'
import ProductsCar from '../components/ProductsCar';
import ProductCar2 from '../components/ProductCar2';

export default function FeaturedItems() {
	const [toggleCar, setToggleCar] = useState(true);
	const [toggleCar2, setToggleCar2] = useState(false);

	const handlePress2 = () => {
		setToggleCar2(!toggleCar2);
		setToggleCar(!toggleCar)
	}

	return (
		<ScrollView style={styles.contentFeatured} >
			<View style={styles.contentArrow}>
				<Text style={styles.title} >Featured Items</Text>
				<TouchableOpacity style={styles.radiusArrow} onPress={handlePress2} >
					<Image style={styles.arrowLeft} source={require('../assets/arrowL.png')} />
				</TouchableOpacity>
				<TouchableOpacity style={styles.radiusArrowR} onPress={handlePress2}>
					<Image style={styles.arrowRight} source={require('../assets/arrowR.png')} />
				</TouchableOpacity>
			</View>
			{toggleCar2 && <ProductCar2 />}
			{toggleCar && <ProductsCar />}
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	contentFeatured: {
		height: Platform.OS === "web" ? 950 : 700,
		backgroundColor: "#102127"
	},
	contentArrow: {
		marginTop: 100,
		alignItems: "center"
	},
	title: {
		fontSize: 30,
		textAlign: "center",
		color: "white",
		textTransform: "uppercase",
		fontWeight: "bold"
	},
	radiusArrow: {
		marginTop: 45,
		width: 110,
		height: 110,
		backgroundColor: "#102127",
		right: Platform.OS === "web" ? "12%" : 0,
		left: Platform.OS === "android" ? -100 : -150,
		alignItems: "center",
		borderWidth: 3,
		borderColor: "#889093"
	},
	radiusArrowR: {
		alignItems: "center",
		marginTop: 45,
		width: 110,
		height: 110,
		backgroundColor: "#102127",
		right: Platform.OS === "web" ? "34%" : 0,
		left: Platform.OS === "android" ? 250 : 1020,
		top: 39,
		position: "absolute",
		borderWidth: 3,
		borderStyle: "solid",
		borderColor: "#889093"
	},
	arrowRight: {
		width: 80,
		height: 80,
		left: 18,
		top: 8,
		position: "absolute",
	},
	arrowLeft: {
		width: 80,
		height: 80,
		top: 8,
		left: 5,
		position: "absolute",
	}
})
