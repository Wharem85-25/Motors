import React from 'react'
import { View, Text, TouchableOpacity, Image, FlatList, StyleSheet, SafeAreaView } from 'react-native'
import { DATAaccesories } from '../utils/inventarioDb'

const Item = ({ name, price, image }) => (
	<View style={styles.containerAccesories}>
		<View>
			<TouchableOpacity >
				<Image source={{ uri: image }} style={styles.img} />
			</TouchableOpacity>
			<View style={styles.datos}>
				<Text style={styles.names} >{name}</Text>
				<Text style={styles.prices} >{price}</Text>
			</View>
		</View>
	</View>
)

export default function AccesoriosImage() {
	const renderItem = ({item}) => (
		<Item
			name={item.name}
			price={item.price}
			image={item.image}
		/>
	)

	return (
		<SafeAreaView style={styles.content}>
			<FlatList
				data={DATAaccesories}
				renderItem={renderItem}
				keyExtractor={item => item.id}
				style={styles.cont}
			/>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	content: {
		height: 1600,
	},
	containerAccesories: {
		alignItems: "center",
		marginBottom: 100,
	},
	img: {
		width: 300,
		height: 300
	},
	datos: {
		marginTop: 40,
		alignItems: "center"
	},
	names: {
		fontSize: 26,
		fontWeight: "bold",
		fontFamily: "rubik"
	},
	prices: {
		marginTop: 10,
		color: "#0d46ff",
		fontWeight: "bold",
		fontSize: 20
	}
})
