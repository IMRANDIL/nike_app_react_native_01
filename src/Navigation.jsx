import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductDetailsScreen from './screens/ProductDetailsScreen';
import ProductsScreen from './screens/ProductsScreen';
import ShopingCart from './screens/ShopingCart';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Products"
          component={ProductsScreen}
          options={{
            headerTitleAlign: 'center',
            headerRight: () => (
              <Pressable>
                <FontAwesome5 name="shopping-cart" size={18} color="gray" />
              </Pressable>
            ),
          }}
        />
        <Stack.Screen
          name="Product Details"
          component={ProductDetailsScreen}
          options={{
            presentation: 'modal',
          }}
        />
        <Stack.Screen
          name="Cart"
          component={ShopingCart}
          options={{presentation: 'modal'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
