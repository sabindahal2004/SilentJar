import React from 'react';
import {StyleSheet, View, Image, useWindowDimensions, Text} from 'react-native';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/theme';

const OnboardingItem = ({item}: {item: any}) => {
  const {width} = useWindowDimensions();

  return (
    <View style={[styles.container, {width}]}>
      <Image
        source={item.image}
        style={[styles.image, {width: width * 0.95, resizeMode: 'contain'}]}
      />
      <View style={{flex: 0.3}}>
        <Text style={styles.title}>
          {item.title1} <Text style={styles.heroText}>{item.heroText}</Text>
          <Text style={styles.title}> {item.title2}</Text>
        </Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};

export default OnboardingItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 0.7,
    justifyContent: 'center',
  },
  title: {
    fontFamily: FONTFAMILY.poppins_extrabold,
    fontWeight: 800,
    fontSize: FONTSIZE.size_28,
    textAlign: 'center',
    marginBottom: SPACING.space_10,
    color: COLORS.PrimaryBlackText,
  },
  description: {
    fontWeight: 300,
    textAlign: 'center',
    paddingHorizontal: 64,
    color: COLORS.SecondaryBlackText,
    fontFamily: FONTFAMILY.poppins_regular,
  },
  heroText: {
    fontFamily: FONTFAMILY.poppins_extrabold,
    fontWeight: 800,
    fontSize: FONTSIZE.size_28,
    textAlign: 'center',
    marginBottom: SPACING.space_10,
    color: COLORS.OnboardingPurple,
  },
});
