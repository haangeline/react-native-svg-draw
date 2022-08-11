import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Rect } from 'react-native-svg';
import type { OrderedDrawItem } from 'src/types';

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#C9C9C9',
    margin: 8,
    borderRadius: 5,
    width: 65,
    height: 50,
  },
});

export default function Miniature({ item }: { item: OrderedDrawItem }) {
  if (item.type === 'rectangle') {
    return (
      <View style={styles.container}>
        <Svg>
          <Rect
            x={item.data.x?.toString()}
            y={item.data.y?.toString()}
            width={item.data.width?.toString()}
            height={item.data.height?.toString()}
            stroke={item.color}
            strokeWidth={item.strokeWidth / 3}
          />
        </Svg>
      </View>
    );
  } else {
    return null;
  }
}
