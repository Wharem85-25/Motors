import React from 'react'
import { View, Text, Image, ScrollView, StyleSheet, Platform } from 'react-native'

export default function Info() {
	return (
		<ScrollView style={styles.contentInfo} >
			<View style={styles.contentView}>
				<Image source={require('../assets/safety.png')} style={styles.icon} />
				<Text style={styles.title}>Safety</Text>
				<Text style={styles.text}>
					{`Electric Cars are extremely reliable and secure. After all,electricity is not flammable!`}
				</Text>
			</View>
			<View style={styles.contentView}>
				<Image source={require('../assets/fuel.png')} style={styles.icon} />
				<Text style={styles.title}>Fuel Cost</Text>
				<Text style={styles.text}>
					{`Electricity is known for its relatively cheap cost and, as a result, will be much more affordable.`}
				</Text>
			</View>
			<View style={styles.contentView}>
				<Image source={require('../assets/car.png')} style={styles.icon} />
				<Text style={styles.title}>Driver Fatigue & Silence</Text>
				<Text style={styles.text}>
					{`Less noise means living in large cities with electric cars is much more comfortable.`}
				</Text>
			</View>
			<View style={styles.contentView}>
				<Image source={require('../assets/oil.png')} style={styles.icon} />
				<Text style={styles.title}>Maintenance</Text>
				<Text style={styles.text}>
					{`Simplified design – repairs are less expensive and take less time.`}
				</Text>
			</View>
			<View style={styles.contentView}>
				<Image source={require('../assets/eco.png')} style={styles.icon} />
				<Text style={styles.title}>Environment</Text>
				<Text style={styles.text}>
					{`Owners of electric or hybrid vehicles have a much lower cost to run. The fuel cost to run an EV is roughly one third the cost of a gasoline powered car.`}
				</Text>
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	contentInfo: {
		height: 1800
	},
	contentView: {
		alignItems: "center",
		marginBottom: 140
	},
	icon: {
		height: 100,
		width: 100,
		left: -5
	},
	title: {
		marginTop: 15,
		fontSize: 26,
		fontWeight: "bold",
		left: -5
	},
	text: {
		textAlign: "center",
		left: -10,
		fontSize: 18,
		width: Platform.OS === "web" ? 400 : 300
	}
})
