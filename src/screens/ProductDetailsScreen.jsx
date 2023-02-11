import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import React from "react";
import products from "../data/products";

const ProductDetailsScreen = () => {
  const product = products[0];
  return (
    <View>
      <FlatList
        data={product.images}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={styles.image} />
        )}
      />
    </View>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    aspectRatio: 1,
  },
});
