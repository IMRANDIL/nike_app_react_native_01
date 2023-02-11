import {View, Text, FlatList} from 'react-native';
import React from 'react';
import CartListItem from '../components/CartListItem';
import cart from '../data/cart';

const ShopingCart = () => {
  return (
    <FlatList
      data={cart}
      renderItem={({item}) => <CartListItem cartItem={item} />}
    />
  );
};

export default ShopingCart;
