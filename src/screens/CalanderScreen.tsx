import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../theme/theme';
import {SafeAreaView} from 'react-native-safe-area-context';

const CalanderScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>CalanderScreen</Text>
    </SafeAreaView>
  );
};

export default CalanderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.SecondaryLightOrange,
  },
});
