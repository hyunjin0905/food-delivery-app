import {Pressable, Text, View} from 'react-native';
import React, {useState} from 'react';

function Setting() {
  const [count, setCount] = useState(1);
  return (
    <View>
      <Pressable onPress={() => setCount(p => p + 1)}>
        <Text>{count}</Text>
      </Pressable>
    </View>
  );
}
export default Setting;
