import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AboutCategoryData from '../data/AboutCategoryData';
import {BORDERRADIUS, COLORS, FONTFAMILY, SPACING} from '../theme/theme';

const AboutCategoryList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>What was it about?</Text>
      <FlatList
        data={AboutCategoryData}
        renderItem={item => (
          <TouchableOpacity style={styles.aboutBtnContainer}>
            <Text style={styles.aboutBtn}>{item.item}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.categoryContainer}
        numColumns={3}
      />
    </View>
  );
};

export default AboutCategoryList;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SPACING.space_10,
  },
  categoryContainer: {
    gap: SPACING.space_8,
  },
  title: {
    fontFamily: FONTFAMILY.poppins_medium,
    marginTop: SPACING.space_24,
    marginBottom: SPACING.space_16,
    marginLeft: SPACING.space_4,
  },
  aboutBtnContainer: {
    paddingHorizontal: SPACING.space_10,
    borderColor: COLORS.PrimaryBlackText,
    borderWidth: 1,
    borderRadius: BORDERRADIUS.radius_25,
    marginHorizontal: SPACING.space_4,
  },
  aboutBtn: {
    paddingVertical: SPACING.space_8,
    paddingHorizontal: SPACING.space_10,
    color: COLORS.SecondaryBlackText,
  },
});
