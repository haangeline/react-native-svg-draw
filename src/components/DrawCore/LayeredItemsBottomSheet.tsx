import React, { useMemo, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import type { DrawItem, LayeredItem, OrderedDrawItem } from 'src/types';
import LayeredItemJSX from './LayeredItem';
import CurrentLayeredItemJSX from './CurrentLayeredItem';
import type { RectProps } from 'react-native-svg';

const styles = StyleSheet.create({
  bottomSheet: {
    flex: 1,
    // color: '#2E313B',
  },
  contentContainer: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 17,
  },
});

const miniWidth = 51;
const miniHeight = 41;

const startingPointMini = (miniItemWidth: number, miniItemHeight: number) => {
  'worklet';
  return {
    x: Math.abs(miniWidth - miniItemWidth) / 2,
    y: Math.abs(miniHeight - miniItemHeight) / 2,
  };
};

const rectMini = (data: RectProps): RectProps => {
  'worklet';
  const width = Number(data.width) / 10;
  const height = Number(data.height) / 10;
  return {
    width: width,
    height: height,
    ...startingPointMini(width, height),
  };
};

const orderedToLayered = (item: OrderedDrawItem): LayeredItem => {
  'worklet';
  switch (item.type) {
    case 'doubleHead':
      return {
        title: 'Double arrow',
        miniature: item.data,
        strokeWidth: item.strokeWidth,
        color: item.color,
      };
    case 'ellipse':
      return {
        title: 'Ellipse',
        miniature: item.data,
        strokeWidth: item.strokeWidth,
        color: item.color,
      };
    case 'pen':
      return {
        title: 'Hand draw',
        miniature: item.data,
        strokeWidth: item.strokeWidth,
        color: item.color,
      };
    case 'rectangle':
      return {
        title: 'Rectangle',
        miniature: rectMini(item.data),
        strokeWidth: item.strokeWidth,
        color: item.color,
      };
    case 'singleHead':
      return {
        title: 'Arrow',
        miniature: item.data,
        strokeWidth: item.strokeWidth,
        color: item.color,
      };
    case 'text':
      return {
        title: item.text ? item.text : 'Text',
        strokeWidth: item.strokeWidth,
        color: item.color,
      };
  }
};

const LayeredItemsBottomSheet = ({
  layeredItems,
  onPressItem,
  deleteItem,
}: {
  layeredItems: OrderedDrawItem[];
  onPressItem: (item: DrawItem, index: number) => () => void;
  deleteItem: (indice: number) => () => void;
}) => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => [50, '50%', '100%'], []);

  return (
    <>
      <BottomSheet
        style={styles.bottomSheet}
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        // onChange={handleSheetChanges}
      >
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Calques</Text>
          <Text style={styles.subtitle}>
            Sélectionnez et organisez vos items
          </Text>
          <BottomSheetScrollView>
            {layeredItems.map((item) => {
              if (item.indice === -1) {
                return (
                  <CurrentLayeredItemJSX
                    key={item.indice}
                    item={orderedToLayered(item)}
                    deleteItem={deleteItem(item.indice)}
                  />
                );
              } else {
                return (
                  <LayeredItemJSX
                    key={item.indice}
                    item={orderedToLayered(item)}
                    onPress={onPressItem(item, item.indice)}
                    deleteItem={deleteItem(item.indice)}
                  />
                );
              }
            })}
          </BottomSheetScrollView>
        </View>
      </BottomSheet>
    </>
  );
};

export default LayeredItemsBottomSheet;
