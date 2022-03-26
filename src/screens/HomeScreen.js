import React from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import ImagesTitle from '../components/ImagesTitle';
import Info from '../components/Info';
import FeaturedItems from '../components/FeaturedItems';
import Inventario from '../components/Inventario';
import InfoCar from '../components/InfoCar';
import Datos from '../components/Datos';
import { useFonts } from 'expo-font'

export default function HomeScreen() {
	const [loaded] = useFonts({
		rubik: require('../../assets/fonts/Rubik-VariableFont_wght.ttf'),
	});

	if(!loaded) {
		return null;
	}

	return (
		<View style={styles.font}>
			<ScrollView>
				<ImagesTitle />
				<Info />
				<FeaturedItems />
				<Inventario />
				<InfoCar />
				<Datos />
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	font: {
		fontFamily: "rubik"
	}
})
