import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import Svg, { Path, SvgProps } from 'react-native-svg';

const styles = StyleSheet.create({
  dotsContainer: {
    flexDirection: 'row',
  },
  centerDot: {
    marginLeft: 2,
  },
  rightDot: {
    marginLeft: 4,
  },
});

export default function ReorderSvg(props: SvgProps) {
  return (
    <>
      <Svg viewBox="0 0 12 9" {...props}>
        {/* <Svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg"> */}
        <Path
          d="M11.0415 7.22168L5.99984 1.17493L0.95817 7.22168"
          //   stroke="#A3A3B5"
          stroke-width="1.9"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
      <View style={styles.dotsContainer}>
        <Svg viewBox="0 0 3 3" width={3} height={3}>
          {/* <svg width="3" height="3" viewBox="0 0 3 3" fill="none" xmlns="http://www.w3.org/2000/svg"> */}
          <Path
            d="M1.23268 2.92435C1.89082 2.92435 2.42435 2.39082 2.42435 1.73268C2.42435 1.07454 1.89082 0.541016 1.23268 0.541016C0.574543 0.541016 0.0410156 1.07454 0.0410156 1.73268C0.0410156 2.39082 0.574543 2.92435 1.23268 2.92435Z"
            //   fill="#A3A3B5"
            fill={props.stroke}
          />
        </Svg>
        <Svg viewBox="0 0 3 3" width={3} height={3} style={styles.centerDot}>
          {/* <svg width="4" height="3" viewBox="0 0 4 3" fill="none" xmlns="http://www.w3.org/2000/svg"> */}
          <Path
            d="M1.99928 2.92435C2.65742 2.92435 3.19095 2.39082 3.19095 1.73268C3.19095 1.07454 2.65742 0.541016 1.99928 0.541016C1.34114 0.541016 0.807617 1.07454 0.807617 1.73268C0.807617 2.39082 1.34114 2.92435 1.99928 2.92435Z"
            fill={props.stroke}
          />
        </Svg>
        <Svg viewBox="0 0 3 3" width={3} height={3} style={styles.rightDot}>
          {/* <svg width="3" height="3" viewBox="0 0 3 3" fill="none" xmlns="http://www.w3.org/2000/svg"> */}
          <Path
            d="M1.76637 2.92435C2.42451 2.92435 2.95804 2.39082 2.95804 1.73268C2.95804 1.07454 2.42451 0.541016 1.76637 0.541016C1.10823 0.541016 0.574707 1.07454 0.574707 1.73268C0.574707 2.39082 1.10823 2.92435 1.76637 2.92435Z"
            fill={props.stroke}
          />
        </Svg>
      </View>
      <Svg viewBox="0 0 12 7" {...props}>
        {/* <Svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg"> */}
        <Path
          d="M0.958008 1.29199L5.99967 5.82705L11.0413 1.29199"
          //   stroke="#A3A3B5"
          stroke-width="1.83333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
    </>
  );
}
