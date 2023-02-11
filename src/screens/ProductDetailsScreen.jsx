import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  Dimensions,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import React from 'react';
import products from '../data/products';

const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');
const ProductDetailsScreen = () => {
  const product = products[0];

  return (
    <View>
      <ScrollView style={{padding: 20}} showsVerticalScrollIndicator={false}>
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
        <View style={{paddingBottom: 30}}>
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.price}>${product.price}</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  image: {
    width: width,
    aspectRatio: 1,
  },
  title: {
    fontSize: 34,
    fontWeight: '500',
    marginVertical: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: '500',
    letterSpacing: 1.5,
  },
  description: {
    marginVertical: 10,
    fontSize: 18,
    lineHeight: 30,
    fontWeight: '300',
  },
});
