import {
  View,
  FlatList,
  Image,
  StyleSheet,
  ActivityIndicator,
  Pressable,
  Text,
} from 'react-native';
import React from 'react';
// import products from '../data/products';
import {useSelector, useDispatch} from 'react-redux';
import {productsSlice} from '../store/productSlice';

const ProductsScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const {products} = useSelector(state => state.products);

  if (!products.length) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'gray'}}>
          No products found!
        </Text>
      </View>
    );
  }

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
            onPress={() => {
              dispatch(productsSlice.actions.setSelectedProduct(item.id));
              navigation.navigate('Product Details');
            }}>
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
