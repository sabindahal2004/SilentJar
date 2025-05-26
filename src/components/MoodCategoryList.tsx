import {StyleSheet, View, FlatList} from 'react-native';
import React from 'react';
import MoodCategoryData from '../data/MoodCategoryData';
import MoodCategotyCard from './MoodCategotyCard';
import {SPACING} from '../theme/theme';

const MoodCategoryList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={MoodCategoryData}
        renderItem={({item}) => <MoodCategotyCard item={item} />}
        keyExtractor={item => item.id.toString()}
        numColumns={3}
        contentContainerStyle={styles.categoryContainer}
      />
    </View>
  );
};

export default MoodCategoryList;

const styles = StyleSheet.create({
  container: {
    paddingVertical: SPACING.space_18,
  },
  categoryContainer: {
    justifyContent: 'center',
    gap: SPACING.space_12,
  },
});
