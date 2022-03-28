import React from 'react'
import { StatusBar, SafeAreaView, StyleSheet } from 'react-native'
import AccesoriosImage from '../components/AccesoriosImage';

export default function InfoCarScreen() {
	return (
		<SafeAreaView style={styles.container}>
			<AccesoriosImage></AccesoriosImage>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  }
})
