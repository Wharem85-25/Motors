import React from 'react'
import { View, ScrollView } from 'react-native'
import ImagesTitle from '../components/ImagesTitle';
import Info from '../components/Info';
import FeaturedItems from '../components/FeaturedItems';

export default function HomeScreen() {
	return (
		<View>
			<ScrollView>
				<ImagesTitle />
				<Info />
				<FeaturedItems />
			</ScrollView>
		</View>
	)
}
