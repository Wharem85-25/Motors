import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import SelectDropdown from 'react-native-select-dropdown'

const inventario = ["INVENTARIO", "STANDARD INVENTARY", "MODERN INVENTARY", "SOLD INVENTARY", "SINGLE INVENTARY PAGE"]
const pages = ["PAGES", "AUTO LOAN CALCULATOR", "SERVICES", "ABOUT US", "VEHICLE COMPARISION", "SELL A CAR", "FAQ", "COMMING SON"]
const blog = ["BLOG", "BLOG - GRID FULL WIDTH", " LIST WITH RIGHT SIDEBAR", "POST WITH LEFT SIDEBAR", "POST WITH RIGHT SIDEBAR"]


export default function VistaMenu() {
	return (
		<View style={styles.content}>
			<TouchableOpacity style={styles.home}>
				<Text style={styles.text}>Home</Text>
			</TouchableOpacity>
			<View style={styles.container}>
				<SelectDropdown
					data={inventario}
					defaultButtonText='INVENTARIO'
					buttonStyle={styles.select}
					buttonTextStyle={{color: "white", fontSize: 20}}
					dropdownStyle={{backgroundColor: "#000", width: "100%"}}
					rowTextStyle={{color: "white", fontSize: 16}}
					onSelect={(selectedItem, index) => {
						console.log(selectedItem, index)
					}}
					buttonTextAfterSelection={(selectedItem, index) => {
						return selectedItem
					}}
					rowTextForSelection={(item, index) => {
						return item
					}}
				/>
				<SelectDropdown
					data={pages}
					defaultButtonText='PAGES'
					buttonStyle={styles.select}
					buttonTextStyle={{color: "white", fontSize: 20}}
					dropdownStyle={{backgroundColor: "#000", width: "100%"}}
					rowTextStyle={{color: "white", fontSize: 16}}
					onSelect={(selectedItem, index) => {
						console.log(selectedItem, index)
					}}
					buttonTextAfterSelection={(selectedItem, index) => {
						return selectedItem
					}}
					rowTextForSelection={(item, index) => {
						return item
					}}
				/>
				<SelectDropdown
					data={blog}
					defaultButtonText='BLOG'
					buttonStyle={styles.select}
					buttonTextStyle={{color: "white", fontSize: 20}}
					dropdownStyle={{backgroundColor: "#000", width: "100%"}}
					rowTextStyle={{color: "white", fontSize: 16}}
					onSelect={(selectedItem, index) => {
						console.log(selectedItem, index)
					}}
					buttonTextAfterSelection={(selectedItem, index) => {
						return selectedItem
					}}
					rowTextForSelection={(item, index) => {
						return item
					}}
				/>
				<Text style={styles.text}>Mega Menu</Text>
				<Text style={styles.text}>Shop</Text>
				<Text style={styles.text}>Contact</Text>
				<Text style={styles.text}>Compare</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	content: {
		width: "100%",
		height: 900,
		backgroundColor: "#000"
	},
	home: {
		marginTop: 40
	},
	text: {
		color: "white",
		fontSize: 20,
		paddingLeft: 50,
		paddingBottom: 50,
		textTransform: "uppercase"
	},
	select: {
		backgroundColor: "#000",
		marginBottom: 40
	}
})
