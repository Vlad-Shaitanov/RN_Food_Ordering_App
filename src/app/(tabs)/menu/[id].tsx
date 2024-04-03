import { Stack, useLocalSearchParams } from 'expo-router'
import React from 'react'
import { View, Text } from 'react-native'

const ProductDetailsScreen = () => {
	const { id } = useLocalSearchParams();

	return (

		<View>
			<Stack.Screen options={{ title: "Details", headerTitleAlign: "center" }} />
			<Text>{id}</Text>
		</View>
	)
}

export default ProductDetailsScreen