import {
  View,
  FlatList,
  Image,
  StyleSheet,
  ActivityIndicator,
  Pressable,
} from 'react-native';
import React from 'react';
import products from '../data/products';
import {TouchableOpacity} from 'react-native-gesture-handler';
const ProductsScreen = ({navigation}) => {
  return (
    <FlatList
      data={products}
      keyExtractor={(item, index) => item + index}
      renderItem={({item}) => {
        return !item && !item.image ? (
          <ActivityIndicator />
        ) : (
          <Pressable
            style={styles.imageContainer}
            onPress={() => navigation.navigate('Product Details')}>
            <Image source={{uri: item.image}} style={styles.image} />
          </Pressable>
        );
      }}
      numColumns={2}
      showsVerticalScrollIndicator={false}
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
