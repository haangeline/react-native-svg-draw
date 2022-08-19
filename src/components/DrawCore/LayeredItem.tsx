import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { runOnJS } from 'react-native-reanimated';
import { G } from 'react-native-svg';
import type { LayeredItem } from 'src/types';
import ReorderSvg from '../DrawWithOptions/ReorderSvg';
import TrashSvg from '../DrawWithOptions/TrashSvg';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#C9C9C9',
    padding: 17,
    marginTop: 17,
    borderRadius: 8,
  },
  text: {
    flex: 1,
    fontSize: 16,
  },
  reorder: {
    marginRight: 15,
  },
});

export default function LayeredItemJSX({
  item,
  onPress,
  deleteItem,
  drag,
}: {
  item: LayeredItem;
  onPress: () => void;
  deleteItem: () => void;
  drag: () => void;
}) {
  return (
    <G onPressIn={onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>{item.title}</Text>
        <Pressable style={styles.reorder} onPressIn={drag}>
          <ReorderSvg width={15} height={8} stroke="white" />
        </Pressable>
        <Pressable
          onPress={() => {
            runOnJS(deleteItem)();
          }}
        >
          <TrashSvg width={20} height={20} fill="white" />
        </Pressable>
      </View>
    </G>
  );
}
