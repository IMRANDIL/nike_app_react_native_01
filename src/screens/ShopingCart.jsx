import {View, Text, FlatList, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import CartListItem from '../components/CartListItem';
import cart from '../data/cart';

const ShopingCart = () => {
  return (
    <FlatList
      data={cart}
      keyExtractor={(item, index) => item + index}
      renderItem={({item}) => <CartListItem cartItem={item} />}
      ListFooterComponent={() => (
        <ScrollView>
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
              <Text style={styles.text}>Total</Text>
              <Text style={styles.text}>410.00 US$</Text>
            </View>
          </View>
        </ScrollView>
      )}
    />
  );
};

export default ShopingCart;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  totalContainer: {
    margin: 20,
    paddingTop: 10,
    borderColor: 'gainsboro',
    borderTopWidth: 1,
  },
  text: {
    fontSize: 16,
    color: 'gray',
  },
});
