import React from 'react';
import { StyleSheet, Text, TouchableOpacity, ViewStyle, TextStyle, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE } from '../theme/theme';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation, NavigationProp } from '@react-navigation/native';

interface CustomButtonProps {
  btnTitle: string;
  onPress?: () => void;
  titleStyle?: TextStyle;
  btnStyle?: ViewStyle;
  btnIcon?: React.ReactNode;
  btnIconStyle?: ViewStyle;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  btnTitle,
  onPress,
  titleStyle,
  btnStyle,
  btnIcon,
  btnIconStyle,
}) => {
  const navigation = useNavigation<NavigationProp<any>>();

  const handleNext = () => {
    try {
      navigation.navigate('Writing');
    } catch (error) {
      console.error('Navigation error:', error);
    }
  };

  return (
    <TouchableOpacity
      style={[styles.customBtn, btnStyle]}
      activeOpacity={0.8}
      onPress={onPress || handleNext}>
      <LinearGradient
        colors={['#000', '#222', '#444', '#666']}
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}>
        <Text style={[styles.btnTitle, titleStyle]}>{btnTitle}</Text>
        {btnIcon ? (
          <View style={btnIconStyle}>{btnIcon}</View>
        ) : (
          <Icon
            name="chevron-forward-outline"
            size={20}
            color={COLORS.PrimaryWiteBackground}
          />
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  gradient: {
    borderRadius: BORDERRADIUS.radius_15,
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  customBtn: {
    width: '30%',
    height: 55,
    borderRadius: BORDERRADIUS.radius_15,
    alignSelf: 'center',
    marginTop: '40%',
  },
  btnTitle: {
    color: COLORS.PrimaryWiteBackground,
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_12,
  },
});
