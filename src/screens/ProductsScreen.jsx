import {
  View,
  FlatList,
  Image,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import products from '../data/products';
const ProductsScreen = () => {
  return (
    <FlatList
      data={products}
      keyExtractor={(item, index) => item + index}
      renderItem={({item}) => {
        return !item && !item.image ? (
          <ActivityIndicator />
        ) : (
          <View style={styles.imageContainer}>
            <Image source={{uri: item.image}} style={styles.image} />
          </View>
        );
      }}
      numColumns={2}
    />
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({
  imageContainer: {
    width: '50%',
    padding: 5,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
});
