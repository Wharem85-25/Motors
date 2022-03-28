import React from 'react'
import { View, StyleSheet, SafeAreaView, ScrollView} from 'react-native'
import ImagesTitle from '../components/ImagesTitle';
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
			<View>
				<ImagesTitle />
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	font: {
		fontFamily: "rubik",
	},
})
