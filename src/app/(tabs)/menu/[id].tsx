import { Stack, useLocalSearchParams } from 'expo-router'
import { useState } from 'react'
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import products from '@assets/data/products';
import { defaultPizzaImage } from '@/components/ProductListItem';
import Button from '@/components/Button';

const sizes = ["S", "M", "L", "XL"];

const ProductDetailsScreen = () => {
	const { id } = useLocalSearchParams();
	const [selectedSize, setSelectedSize] = useState("M");

	const product = products.find((el) => el.id.toString() === id);

	const addToCart = () => {
		console.warn("added to cart", selectedSize);

	}

	if (!product) {
		return <Text>Product is not found</Text>
	}

	return (

		<View style={styles.container}>
			<Stack.Screen options={{ title: product.name, headerTitleAlign: "center" }} />
			<Image source={{ uri: product.image || defaultPizzaImage }} style={styles.image} />

			<Text>Select size:</Text>
			<View style={styles.sizes}>
				{sizes.map((size) => (
					<Pressable onPress={() => setSelectedSize(size)} key={size}>
						<View style={[styles.size, { backgroundColor: selectedSize === size ? "gainsboro" : "white" }]}>
							<Text style={[styles.sizeText, { color: selectedSize === size ? "black" : "gray" }]}>{size}</Text>
						</View>
					</Pressable>
				))}
			</View>

			<Text style={styles.price}>${product.price}</Text>
			<Button onPress={addToCart} text='Add to cart' />
		</View>
	)
}

export default ProductDetailsScreen;

const styles = StyleSheet.create({
	container: {
		backgroundColor: "white",
		flex: 1,
		padding: 10
	},
	image: {
		width: "100%",
		aspectRatio: 1
	},
	price: {
		fontSize: 18,
		fontWeight: 'bold',
		marginTop: "auto"
	},
	sizes: {
		flexDirection: "row",
		justifyContent: "space-around",
		marginVertical: 10
	},
	size: {
		backgroundColor: "gainsboro",
		width: 50,
		aspectRatio: 1,
		borderRadius: 25,
		alignItems: 'center',
		justifyContent: "center"
	},
	sizeText: {
		fontSize: 20,
		fontWeight: "500",
	}
});