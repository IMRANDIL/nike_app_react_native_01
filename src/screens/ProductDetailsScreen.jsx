import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import products from '../data/products';

const {width} = Dimensions.get('window');
const ProductDetailsScreen = () => {
  const product = products[0];

  return (
    <View>
      <FlatList
        data={product.images}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) =>
          !item ? (
            <ActivityIndicator />
          ) : (
            <Image source={{uri: item}} style={styles.image} />
          )
        }
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  image: {
    width: width,
    aspectRatio: 1,
  },
});
