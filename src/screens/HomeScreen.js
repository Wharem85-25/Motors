import React from 'react'
import { View, StyleSheet, SafeAreaView} from 'react-native'
import ImagesTitle from '../components/ImagesTitle';
import Info from '../components/Info';
import FeaturedItems from '../components/FeaturedItems';
import Inventario from '../components/Inventario';
import InfoCar from '../components/InfoCar';
import Datos from '../components/Datos';
import Texto from '../components/Texto';
import Accesorios from '../components/Accesorios';
import AccesoriosImage from '../components/AccesoriosImage';
import Contactanos from '../components/Contactanos';
import Mapa from '../components/Mapa';
import Contactos from '../components/Contactos';
import { useFonts } from 'expo-font'

export default function HomeScreen() {
	const [loaded] = useFonts({
		rubik: require('../../assets/fonts/Rubik-VariableFont_wght.ttf'),
	});

	if(!loaded) {
		return null;
	}

	return (
		<SafeAreaView style={styles.font}>
			<View style={styles.imagesTitle}>
				<ImagesTitle />
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	font: {
		fontFamily: "rubik",
	},
	imagesTitle: {
		height: 800
	},
	info: {
		height: 600
	}
})
