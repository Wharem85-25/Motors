import React from 'react'
import { Dimensions, StyleSheet, ScrollView, Platform } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { mapStyle } from '../utils/mapStyle';

export default function Mapa() {
	return (
		<ScrollView style={styles.container}>
			<MapView
        customMapStyle={mapStyle}
        provider={PROVIDER_GOOGLE}
        style={styles.mapStyle}
        initialRegion={{
          latitude: 41.3995345,
          longitude: 2.1909796,
          latitudeDelta: 0.003,
          longitudeDelta: 0.003,
        }}
        mapType="standard"
      ></MapView>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
  container: {
		height: Platform.OS === "web" ? 0 : 400,
    flex: Platform.OS === "web" ? 0 : 1,
  },
  mapStyle: {
    width: Platform.OS === "web" ? 0 : Dimensions.get('window').width,
    height: Platform.OS === "web" ? 0 : 400,
  },
});
