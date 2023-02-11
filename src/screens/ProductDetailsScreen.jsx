import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  Dimensions,
  ActivityIndicator,
  ScrollView,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React, {useMemo} from 'react';
import products from '../data/products';

const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');

//   const product = products[1];

//   return (
//     <View style={{height: height}}>
//       <FlatList
//         data={product.images}
//         keyExtractor={(item, index) => item + index}
//         renderItem={({item}) =>
//           !item ? (
//             <ActivityIndicator />
//           ) : (
//             <Image source={{uri: item}} style={styles.image} />
//           )
//         }
//         horizontal
//         pagingEnabled
//         showsHorizontalScrollIndicator={false}
//       />
//       <ScrollView
//         style={{
//           padding: 20,
//         }}
//         showsVerticalScrollIndicator={false}>
//         <View style={{paddingBottom: 100}}>
//           <Text style={styles.title}>{product.name}</Text>
//           <Text style={styles.price}>${product.price}</Text>
//           <Text style={styles.description}>{product.description}</Text>
//         </View>
//       </ScrollView>
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => {}}
//         activeOpacity={0.9}>
//         <Text style={styles.buttonTxt}>Add to cart</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };
const ProductDetailsScreen = () => {
  const product = products[0];

  if (!product) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Error: Product not found!</Text>
      </View>
    );
  }

  const images = useMemo(() => product.images || [], [product]);

  if (!images.length) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Error: Images not found!</Text>
      </View>
    );
  }

  return (
    <View style={{height: height - 60}}>
      <FlatList
        data={images}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) =>
          item === null ? (
            <ActivityIndicator />
          ) : (
            <Image source={{uri: item}} style={styles.image} />
          )
        }
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      />
      <ScrollView
        style={{
          padding: 20,
        }}
        showsVerticalScrollIndicator={false}>
        <View style={{paddingBottom: 100}}>
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.price}>${product.price}</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {}}
        activeOpacity={0.9}>
        <Text style={styles.buttonTxt}>Add to cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  image: {
    width: width,
    aspectRatio: 1,
    marginBottom: height * 0.5,
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
  button: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
    width: width * 0.9,
    backgroundColor: 'black',
    paddingVertical: 10,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTxt: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
  },
});
