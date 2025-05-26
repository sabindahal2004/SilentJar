import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import AboutCategoryData from '../data/AboutCategoryData';
import {BORDERRADIUS, COLORS, FONTFAMILY, SPACING} from '../theme/theme';

const AboutCategoryList = () => {
  const [selectedCategory, setSelectedCategoty] = useState<number[]>([]);
  const handleCategorySelection = (index: number) => {
    if (selectedCategory.includes(index)) {
      setSelectedCategoty(selectedCategory.filter(item => item !== index));
    } else {
      setSelectedCategoty([...selectedCategory, index]);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>What was it about?</Text>
      <FlatList
        data={AboutCategoryData}
        renderItem={item => (
          <TouchableOpacity
            style={[
              selectedCategory.includes(item.index)
                ? styles.aboutBtnContainerSelected
                : styles.aboutBtnContainer,
            ]}
            key={item.index}
            onPress={() => handleCategorySelection(item.index)}>
            <Text
              style={[
                selectedCategory.includes(item.index)
                  ? styles.aboutBtnSelected
                  : styles.aboutBtn,
              ]}>
              {item.item}
            </Text>
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
    marginBottom: SPACING.space_12,
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
  aboutBtnContainerSelected: {
    paddingHorizontal: SPACING.space_10,
    borderRadius: BORDERRADIUS.radius_25,
    marginHorizontal: SPACING.space_4,
    backgroundColor: COLORS.PrimaryBlackText,
    borderWidth: 1,
  },
  aboutBtnSelected: {
    paddingVertical: SPACING.space_8,
    paddingHorizontal: SPACING.space_10,
    color: COLORS.PrimaryWiteBackground,
  },
});
