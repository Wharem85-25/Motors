import React from 'react'
import { StatusBar, SafeAreaView, StyleSheet } from 'react-native'
import InfoCar from '../components/InfoCar';

export default function InfoCarScreen() {
	return (
		<SafeAreaView style={styles.container}>
			<InfoCar></InfoCar>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  }
})
