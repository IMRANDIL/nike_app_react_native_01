import {View, Text, Pressable, TouchableOpacity} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductDetailsScreen from './screens/ProductDetailsScreen';
import ProductsScreen from './screens/ProductsScreen';
import ShopingCart from './screens/ShopingCart';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const Stack = createNativeStackNavigator();
import {selectNumberOfItems} from './store/cartSlice';
import {useSelector} from 'react-redux';

const Navigation = () => {
  //   const navigation = useNavigation();
  // const selectNumberOfItems = useSelector(selectNumberOfItems)
  const {items} = useSelector(state => state.cart);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{contentStyle: {backgroundColor: 'white'}}}>
        <Stack.Screen
          name="Products"
          component={ProductsScreen}
          options={({navigation}) => ({
            headerTitleAlign: 'center',
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                <FontAwesome5 name="shopping-cart" size={28} color="gray" />

                <Text
                  style={{
                    position: 'absolute',
                    right: -5,
                    top: -12,
                    fontSize: 18,
                    fontWeight: 'bold',
                  }}>
                  {items.length > 0 && items.length}
                </Text>
              </TouchableOpacity>
            ),
          })}
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
