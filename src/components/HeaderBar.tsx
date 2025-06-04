import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {BORDERRADIUS, COLORS, SPACING} from '../theme/theme';

const HeaderBar = () => {
  return (
    <View style={styles.headerContainer}>
      <Image
        source={require('../assets/images/avatar.jpg')}
        style={styles.avatar}
      />
      <View style={styles.icons}>
        <Icon name="search-outline" size={28} color={COLORS.PrimaryBlackText} />
        <Icon name="menu-outline" size={28} color={COLORS.PrimaryBlackText} />
      </View>
    </View>
  );
};

export default HeaderBar;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#fff',
    width: '100%',
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:SPACING.space_24,
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: BORDERRADIUS.radius_25,
  },
  icons: {
    flexDirection: 'row',
    gap:SPACING.space_18,
    alignItems:'center',
  },
});
