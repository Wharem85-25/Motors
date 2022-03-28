import React from 'react'
import { View, Text, TouchableOpacity, Image, FlatList, StyleSheet, Platform, SafeAreaView, StatusBar } from 'react-native'
import { DATA } from '../utils/inventarioDb';

const Item = ({ marca, modelo, velocidad, consumo, carga, tiempo, image1 }) => (
	<View style={styles.contentInfo}>
		<TouchableOpacity style={styles.contentImage}>
			<Image style={styles.imageCar} source={{ uri: image1 }} />
			<Image style={styles.imageAdd} source={require('../assets/iconShopping.png')} />
		</TouchableOpacity>
		<View style={styles.center}>
			<View style={styles.car}>
				<TouchableOpacity style={styles.infCar}>
					<Text style={styles.marcaStyle}>{marca}</Text>
					<Text style={styles.modeloStyle}>{modelo}</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.contentInfoCar}>
					<View>
						<Image source={require('../assets/bandera.png')} style={styles.icon} />
						<Text style={styles.text}>{velocidad}</Text>
						<Image source={require('../assets/rayo.png')} style={styles.icon2} />
						<Text style={styles.text}>{carga}</Text>
					</View>
					<View>
						<Image source={require('../assets/bateria.png')} style={styles.icon} />
						<Text style={styles.text}>{consumo}</Text>
						<Image source={require('../assets/velocimetro.png')} style={styles.icon2} />
						<Text style={styles.text}>{tiempo}</Text>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	</View>
)

export default function InfoCar() {
	const renderItem = ({item}) => (
		<Item
			marca={item.marca}
			modelo={item.modelo}
			velocidad={item.velocidad}
			consumo={item.consumo}
			carga={item.carga}
			tiempo={item.tiempo}
			image1={item.image1}
		/>
	)

	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				data={DATA}
				renderItem={renderItem}
				keyExtractor={item => item.id}
			/>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		// height: Platform.OS === "web" ? 5700 : 3500,
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
	},
	contentInfo: {
		width: "95%",
		height: Platform.OS === "web" ? 700 : 400,
		paddingLeft: 10,
		marginBottom: 25,
		top: 0
	},
	contentImage: {
		alignItems: "center"
	},
	center: {
		alignItems: "center"
	},
	imageCar: {
		width: Platform.OS === "web" ? "50%" : "100%",
		height: Platform.OS === "web" ? 400 : 200,
	},
	imageAdd: {
		width: Platform.OS === "android" ? 40 : 60,
		height: Platform.OS === "android" ? 40 : 60,
		position: "absolute",
		top: Platform.OS ===	"android" ? 154 : 330,
		left: Platform.OS === "web" ? 450 : 0
	},
	car: {
		top: 10,
		width: Platform.OS === "web" ? "50%" : "100%",
		height: 200,
		borderWidth: 1,
		borderColor: "#889093",
	},
	infCar: {
		left: Platform.OS === "web" ? 60 : 30,
		top: Platform.OS === "web" ? 20 : 35
	},
	marcaStyle: {
		color: "#0d46ff",
		fontWeight: "bold",
		fontSize: Platform.OS === "web" ? 22 : 14,
		textTransform: "uppercase"
	},
	modeloStyle: {
		fontWeight: "bold",
		top: 2,
		paddingTop: Platform.OS === "web" ? 5 : 0,
		fontSize: Platform.OS === "web" ? 20 : 14
	},
	contentInfoCar: {
		top: Platform.OS === "web" ? 30 : 60,
		width: "70%",
		left: Platform.OS === "web" ? 60 : 30,
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between"
	},
	icon: {
		width: Platform.OS === "web" ? 30 : 24,
		height: Platform.OS === "web" ? 30 : 24,
		position: "absolute",
		top: Platform.OS === "web" ? 15 : 10
	},
	icon2: {
		width: Platform.OS === "web" ? 30 : 24,
		height: Platform.OS === "web" ? 30 : 24,
		position: "absolute",
		top: Platform.OS === "web" ? 55 : 50
	},
	text: {
		fontSize: Platform.OS === "web" ? 18 : 14,
		paddingTop: Platform.OS === "web" ? 20 : 15,
		paddingLeft: Platform.OS === "web" ? 40 : 30,
	}
})
