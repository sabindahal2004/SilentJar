import React from 'react';
import {View, StyleSheet, Animated, Dimensions} from 'react-native';
import {BORDERRADIUS, COLORS} from '../theme/theme';

const {width} = Dimensions.get('window');

const Paginator = ({data, scrollX}: {data: any[]; scrollX: Animated.Value}) => {
  return (
    <View style={styles.container}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

        const dotScale = scrollX.interpolate({
          inputRange,
          outputRange: [0.8, 1.4, 0.8],
          extrapolate: 'clamp',
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            key={i.toString()}
            style={[
              styles.dot,
              {
                opacity,
                transform: [{scale: dotScale}],
              },
            ]}
          />
        );
      })}
    </View>
  );
};

export default Paginator;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: BORDERRADIUS.radius_10,
    backgroundColor: COLORS.OnboardingPurple,
    marginHorizontal: 6,
  },
});
