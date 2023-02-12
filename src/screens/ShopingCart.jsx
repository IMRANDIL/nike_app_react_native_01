import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Alert,
} from 'react-native';
import React from 'react';
import CartListItem from '../components/CartListItem';
import {useDispatch, useSelector} from 'react-redux';
import {
  cartSlice,
  selectDeliveryPrice,
  selectSubTotal,
} from '../store/cartSlice';

const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');

const ShoppingCartTotals = () => {
  const subTotal = useSelector(selectSubTotal);
  const deliveryFee = useSelector(selectDeliveryPrice);
  return (
    <View style={styles.totalContainer}>
      <View style={styles.row}>
        <Text style={styles.text}>Subtotal</Text>
        <Text style={styles.text}>{subTotal} US$</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Delivery</Text>
        <Text style={styles.text}>{deliveryFee} US$</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.textBold}>Total</Text>
        <Text style={styles.textBold}>{subTotal + deliveryFee} US$</Text>
      </View>
    </View>
  );
};

const ShopingCart = () => {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  if (!items || !items.length) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'gray'}}>
          Cart is empty!
        </Text>
      </View>
    );
  }

  return (
    <View style={{height: height - 60}}>
      <FlatList
        data={items}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => <CartListItem cartItem={item} />}
        ListFooterComponent={items && items.length && ShoppingCartTotals}
        showsVerticalScrollIndicator={false}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          dispatch(cartSlice.actions.resetCartItems());
          Alert.alert('Your Checkout Successful!');
        }}
        activeOpacity={0.9}
        disabled={!items || !items.length}>
        <Text style={styles.buttonTxt}>Checkout</Text>
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
