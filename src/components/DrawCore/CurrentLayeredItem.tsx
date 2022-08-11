import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { runOnJS } from 'react-native-reanimated';
import type { LayeredItem } from 'src/types';
import ReorderSvg from '../DrawWithOptions/ReorderSvg';
import TrashSvg from '../DrawWithOptions/TrashSvg';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#797979',
    padding: 17,
    marginTop: 17,
    borderRadius: 8,
  },
  text: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    // padding: 20,
    // paddingLeft: 3,
  },
  reorder: {
    marginRight: 15,
  },
  bin: {
    // padding: 20,
  },
});

export default function CurrentLayeredItemJSX({
  item,
  deleteItem,
}: {
  item: LayeredItem;
  deleteItem: () => void;
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> {item.title} </Text>
      <Pressable
        style={styles.reorder}
        onPress={(event) => {
          event.stopPropagation();
          console.log(event);
        }}
      >
        <ReorderSvg width={15} height={8} stroke="#C9C9C9" />
      </Pressable>
      <Pressable
        onPress={() => {
          runOnJS(deleteItem)();
        }}
      >
        <TrashSvg width={20} height={20} fill="#C9C9C9" />
      </Pressable>
    </View>
  );
}
