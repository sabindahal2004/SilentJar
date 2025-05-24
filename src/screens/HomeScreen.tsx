import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import HeaderBar from '../components/HeaderBar';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/theme';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContent}>
        {/* Header Bar Section */}
        <HeaderBar />
        {/* Greeting Section */}
        <View style={styles.greetingContainer}>
          <Text style={styles.greetingTitile}>Good Morning!</Text>
          <Text style={styles.greetingSubtitle}>
            Don't let a bad day make you feel like you have a bad life
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainContent: {},
  greetingContainer: {
    paddingHorizontal: SPACING.space_24,
    marginTop: SPACING.space_4,
  },
  greetingTitile: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_36,
  },
  greetingSubtitle: {
    fontFamily: FONTFAMILY.poppins_regular,
    color: COLORS.SecondaryBlackText,
    letterSpacing: 0.5,
    marginTop: -SPACING.space_4,
  },
});
