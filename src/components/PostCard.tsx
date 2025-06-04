import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Post} from '../types/Post';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';

const PostCard = ({item}: {item: Post}) => {
  const createAtDate = new Date(item.createdAt);
  const date = createAtDate.getDate().toString().padStart(2, '0');
  const month = createAtDate.toLocaleString('default', {month: 'short'});
  return (
    <View style={styles.mainContainer}>
      <View style={styles.card}>
        <View style={styles.cardContainer}>
          <View style={styles.dateAndMonth}>
            <Text style={styles.date}>{date}</Text>
            <Text style={styles.month}>{month}</Text>
          </View>
          <View style={styles.separator} />
          <View style={styles.contentContainer}>
            <View style={styles.titleAndEmoji}>
              <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
                {item.title}
              </Text>
              <Text style={styles.emoji}>😍</Text>
            </View>
            <Text
              style={styles.description}
              numberOfLines={1}
              ellipsizeMode="tail">
              {item.description}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PostCard;

const styles = StyleSheet.create({
  mainContainer: {},
  card: {
    backgroundColor: 'yellow',
    height: 90,
    width: '100%',
    borderRadius: BORDERRADIUS.radius_15,
    paddingHorizontal: SPACING.space_20,
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.space_18,
    flex: 1,
  },
  dateAndMonth: {
    alignItems: 'center',
  },
  date: {
    fontFamily: FONTFAMILY.poppins_bold,
    fontSize: FONTSIZE.size_24,
  },
  month: {
    color: COLORS.SecondaryBlackText,
    marginTop: -SPACING.space_8,
  },
  separator: {
    height: 55,
    width: 1,
    backgroundColor: COLORS.SecondaryBlackText,
  },
  contentContainer: {
    flex: 1,
    minWidth: 0,
  },
  title: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_18,
    flex: 1,
    marginRight: SPACING.space_8,
  },
  description: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_12,
    color: COLORS.SecondaryBlackText,
    marginTop: SPACING.space_4,
  },
  titleAndEmoji: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  emoji: {
    fontSize: FONTSIZE.size_20,
  },
});
