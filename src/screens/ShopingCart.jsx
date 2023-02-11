import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import CartListItem from '../components/CartListItem';
import cart from '../data/cart';
const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');
const ShopingCart = () => {
  return (
    <View style={{height: height}}>
      <FlatList
        data={cart}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => <CartListItem cartItem={item} />}
        ListFooterComponent={() => (
          <View style={styles.totalContainer}>
            <View style={styles.row}>
              <Text style={styles.text}>Subtotal</Text>
              <Text style={styles.text}>410.00 US$</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>Delivery</Text>
              <Text style={styles.text}>410.00 US$</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.textBold}>Total</Text>
              <Text style={styles.textBold}>410.00 US$</Text>
            </View>
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {}}
        activeOpacity={0.9}>
        <Text style={styles.buttonTxt}>Add to cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ShopingCart;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 2,
  },
  totalContainer: {
    margin: 20,
    paddingTop: 10,
    borderColor: 'gainsboro',
    borderTopWidth: 1,
    paddingVertical: 100,
  },
  text: {
    fontSize: 16,
    color: 'gray',
  },
  textBold: {
    fontSize: 16,
    fontWeight: '500',
  },
  button: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
    width: width * 0.9,
    backgroundColor: 'black',
    paddingVertical: 10,
    borderRadius: 10,
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
