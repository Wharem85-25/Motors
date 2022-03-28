import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Platform, ScrollView } from 'react-native';
import { useFonts } from 'expo-font'
import { useNavigation } from '@react-navigation/native';

export default function Inventario() {
	const navigation = useNavigation();
	const [loaded] = useFonts({
		rubik: require('../../assets/fonts/Rubik-VariableFont_wght.ttf'),
	});

	if(!loaded) {
		return null;
	}

	return (
		<ScrollView style={styles.container}>
			<View style={styles.contentTitle}>
				<Text style={styles.title}>Recently Added</Text>
				<TouchableOpacity style={styles.contentButton} onPress={() => navigation.navigate("Car")}>
					<Text style={styles.textButton}>View All Inventary</Text>
				</TouchableOpacity>
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		height: Platform === "web" ? 100 : 300
	},
	contentTitle: {
		width: "100%",
		height: 250,
		alignItems: "center",
		paddingTop: 80
	},
	title: {
		fontSize: 30,
		fontWeight: "bold",
		textTransform: "uppercase",
		fontFamily: 'rubik'
	},
	contentButton: {
		marginTop: 30,
		width: 250,
		height: 60,
		borderWidth: 2,
		borderColor: "#0d46ff",
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		borderBottomLeftRadius: 30,
		borderBottomRightRadius: 30,
		alignItems: "center"
	},
	textButton: {
		fontSize: 18,
		paddingTop: 16,
		color: "#0d46ff",
		fontFamily: 'rubik',
		fontWeight: "bold",
		textTransform: "uppercase"
	}
})
