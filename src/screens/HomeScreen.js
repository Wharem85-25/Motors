import React from 'react'
import { View, ScrollView, StyleSheet} from 'react-native'
import ImagesTitle from '../components/ImagesTitle';
import Info from '../components/Info';
import FeaturedItems from '../components/FeaturedItems';
import Inventario from '../components/Inventario';
import InfoCar from '../components/InfoCar';
import Datos from '../components/Datos';
import Text from '../components/Texto';
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
		<View style={styles.font}>
			<ScrollView>
				<ImagesTitle />
				<Info />
				<FeaturedItems />
				<Inventario />
				<InfoCar />
				<Datos />
				<Text />
				<Accesorios />
				<AccesoriosImage />
				<Contactanos />
				<Mapa />
				<Contactos />
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	font: {
		fontFamily: "rubik"
	},
})
