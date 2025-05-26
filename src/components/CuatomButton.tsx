import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE} from '../theme/theme';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

interface CustomButtonProps {
  btnTitle: string;
  onPress?: () => void;
  titleStyle?: object;
  btnStyle?: object;
  btnIcon?: React.ReactNode;
  btnIconStyle?: object;
}
const CustomButton: React.FC<CustomButtonProps> = ({
  btnTitle,
  onPress,
  titleStyle,
  btnStyle,
  btnIcon,
  btnIconStyle,
}) => {
  const navigation = useNavigation();
  const handleNext = () => {
  };
  return (
    <TouchableOpacity
      style={styles.customBtn}
      activeOpacity={0.8}
      onPress={handleNext}>
      <LinearGradient
        colors={['#000', '#222', '#444', '#666']}
        style={styles.gradient}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <Text style={styles.btnTitle}>{btnTitle}</Text>
        <Icon
          name="chevron-forward-outline"
          size={20}
          color={COLORS.PrimaryWiteBackground}
        />
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
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  customBtn: {
    width: '30%',
    height: 50,
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
