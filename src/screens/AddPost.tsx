import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MoodCategoryList from '../components/MoodCategoryList';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FONTFAMILY, FONTSIZE, SPACING} from '../theme/theme';
import AboutCategoryList from '../components/AboutCategoryList';

const AddPost = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Greeting Section */}
      <View>
        <Text style={styles.title}>Dear Sabin!</Text>

        <Text style={styles.subtitle}>How was your day?</Text>
      </View>
      {/* Mood Category Section */}
      <MoodCategoryList />
      {/* About Category Section */}
      <AboutCategoryList />
    </SafeAreaView>
  );
};

export default AddPost;

const styles = StyleSheet.create({
  container: {
    paddingTop: SPACING.space_15,
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: SPACING.space_20,
  },
  title: {
    fontFamily: FONTFAMILY.juana_bold,
    fontSize: FONTSIZE.size_30,
    marginLeft: SPACING.space_10,
  },
  subtitle: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_14,
    marginLeft: SPACING.space_10,
  },
});
