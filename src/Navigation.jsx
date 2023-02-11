import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductDetailsScreen from './screens/ProductDetailsScreen';
import ProductsScreen from './screens/ProductsScreen';
import ShopingCart from './screens/ShopingCart';
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Products"
          component={ProductsScreen}
          options={{headerTitleAlign: 'center'}}
        />
        <Stack.Screen name="Details" component={ProductDetailsScreen} />
        <Stack.Screen name="Cart" component={ShopingCart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
