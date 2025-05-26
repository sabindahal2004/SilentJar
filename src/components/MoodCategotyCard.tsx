import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import React from 'react';
import {BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/theme';

const {width} = Dimensions.get('window');
const CARD_WIDTH = width / 3 - 30;
const MoodCategotyCard = ({item}: any) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.card, {backgroundColor: item.color}]}
        activeOpacity={0.9}>
        <Text style={styles.emoji}>{item.emoji}</Text>
        <Text style={styles.categoryTitle}>{item.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MoodCategotyCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: CARD_WIDTH,
    height: CARD_WIDTH,
    borderRadius: BORDERRADIUS.radius_15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryTitle: {
    fontFamily:FONTFAMILY.poppins_medium,
    fontSize:FONTSIZE.size_12,
    marginTop:SPACING.space_15,
    color:COLORS.SecondaryBlackText,
  },
  emoji: {
    fontSize:FONTSIZE.size_24,
  },
});
