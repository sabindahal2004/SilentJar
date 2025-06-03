import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import MoodCategoryList from '../components/MoodCategoryList';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/theme';
import AboutCategoryList from '../components/AboutCategoryList';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../components/CustomButton';

const AddPost = () => {
  const navigation = useNavigation();
  const handleClose = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.closeIcon} onPress={handleClose}>
        <Icon name="close" color={COLORS.SecondaryBlackText} size={20} />
      </TouchableOpacity>
      {/* Greeting Section */}
      <View>
        <Text style={styles.title}>Dear Sabin!</Text>

        <Text style={styles.subtitle}>How was your day?</Text>
      </View>
      {/* Mood Category Section */}
      <MoodCategoryList />
      {/* About Category Section */}
      <AboutCategoryList />
      {/* Next Button */}
      <CustomButton btnTitle={'Next'} />
    </SafeAreaView>
  );
};

export default AddPost;

const styles = StyleSheet.create({
  container: {
    paddingTop: SPACING.space_30,
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
  closeIcon: {
    position: 'absolute',
    top: SPACING.space_30,
    right: SPACING.space_30,
    zIndex: 1,
  },
});
