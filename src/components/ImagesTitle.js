import React from 'react'
import { View, Text, Image, StyleSheet, ScrollView, Platform } from 'react-native'
import { useFonts } from 'expo-font'
import Info from "../components/Info"
import FeaturedItems from '../components/FeaturedItems'
import Inventario from '../components/Inventario';
import InfoCar from '../components/InfoCar';
import Datos from '../components/Datos';
import Texto from '../components/Texto';
import Accesorios from '../components/Accesorios';
import AccesoriosImage from '../components/AccesoriosImage';
import Contactanos from '../components/Contactanos';
import Mapa from '../components/Mapa';
import Contactos from '../components/Contactos';

export default function ImagesTitle() {
	const [loaded] = useFonts({
		rubik: require('../../assets/fonts/Rubik-VariableFont_wght.ttf'),
	});

	if(!loaded) {
		return null;
	}


	return (
		<ScrollView style={styles.containerImage}>
			<View style={styles.containerTitle}>
				<Text style={styles.title}>Why Electric Vehicles?</Text>
			</View>
			<View style={styles.containerImg}>
				<Image source={require('../assets/img1.jpg')} style={styles.img} />
				<Image source={require('../assets/img2.jpg')} style={styles.img2} />
				<Image source={require('../assets/img3.jpg')} style={styles.img3} />
			</View>
			<Info></Info>
			<FeaturedItems></FeaturedItems>
			<Inventario></Inventario>

			<Datos></Datos>
			<Texto></Texto>
			<Accesorios></Accesorios>

			<Contactanos></Contactanos>
			<Mapa></Mapa>

		</ScrollView>
	)
}

const styles = StyleSheet.create({
	containerImage:{
		width: "100%",
		height: 1100,
	},
	containerTitle:{
		paddingTop: 25,
		marginBottom: 100,
		alignItems: "center"
	},
	title: {
		textTransform: "uppercase",
		fontSize: 42,
		fontFamily: "rubik",
		fontWeight: "bold",
		lineHeight: 50,
		color: "#000"
	},
	containerImg: {
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
		left: Platform.OS === "web" ? 920 : 160,
		borderWidth: 20,
		borderColor: "white",
	},
	img3: {
		width: 300,
		height: 300,
		zIndex: -5,
	}
})
