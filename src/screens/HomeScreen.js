import React from 'react'
import { View, ScrollView } from 'react-native'
import ImagesTitle from '../components/ImagesTitle';
import Info from '../components/Info';

export default function HomeScreen() {
	return (
		<View>
			<ScrollView>
				<ImagesTitle />
				<Info />
			</ScrollView>
		</View>
	)
}
