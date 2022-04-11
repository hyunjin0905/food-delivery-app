import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Ing from './Ing';
import Complete from './Complete';
const Stack = createNativeStackNavigator();

function Delivery() {
  return (
    <Stack.Navigator initialRouteName="Ing">
      <Stack.Screen name="ing" component={Ing} options={{headerShown: false}} />
      <Stack.Screen
        name="complete"
        component={Complete}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
export default Delivery;
