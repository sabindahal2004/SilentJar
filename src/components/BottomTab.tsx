import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  GestureResponderEvent,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';
import CalanderScreen from '../screens/CalanderScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AddPost from '../screens/AddPost';
import {BORDERRADIUS, COLORS, SPACING} from '../theme/theme';
import SettingScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

interface CustomAddButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  isFocused: boolean;
}

const CustomAddButton: React.FC<CustomAddButtonProps> = ({
  onPress,
  isFocused,
}) => (
  <View style={styles.buttonWrapper}>
    <View
      style={[
        styles.whiteBackground,
        isFocused && {backgroundColor: COLORS.OnboardingPurple},
      ]}
    />
    <TouchableOpacity
      style={styles.customButton}
      onPress={onPress}
      activeOpacity={0.9}>
      <LinearGradient
        colors={['#000', '#222', '#444', '#666']}
        style={styles.gradient}>
        <Icon name="add-outline" size={28} color={'#fff'} />
      </LinearGradient>
    </TouchableOpacity>
  </View>
);

interface IconContainerProps {
  focused: boolean;
  children: React.ReactNode;
}

const IconContainer: React.FC<IconContainerProps> = ({focused, children}) => (
  <View style={[styles.iconContainer, focused && styles.focusedIconContainer]}>
    {children}
  </View>
);

const BottomTab: React.FC = () => {
  const [isAddFocused, setAddFocused] = useState(false);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarBackground: () => (
          <LinearGradient
            colors={['#000', '#222', '#444', '#666']}
            style={{
              flex: 1,
              borderRadius: BORDERRADIUS.radius_15,
            }}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
          />
        ),
        tabBarStyle: {
          position: 'absolute',
          bottom: SPACING.space_20,
          width: '80%',
          marginLeft: '10%',
          height: 60,
          borderTopWidth: 0,
          elevation: 0,
          paddingTop: SPACING.space_10,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <IconContainer focused={focused}>
              <Icon
                name="home-outline"
                size={22}
                color={focused ? '#000' : '#fff'}
              />
            </IconContainer>
          ),
        }}
      />
      <Tab.Screen
        name="Calender"
        component={CalanderScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <IconContainer focused={focused}>
              <Icon
                name="calendar-number-outline"
                size={22}
                color={focused ? '#000' : '#fff'}
              />
            </IconContainer>
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={AddPost}
        options={{
          tabBarButton: props => (
            <CustomAddButton
              onPress={props.onPress as (event: GestureResponderEvent) => void}
              isFocused={isAddFocused}
            />
          ),
        }}
        listeners={{
          focus: () => setAddFocused(true),
          blur: () => setAddFocused(false),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <IconContainer focused={focused}>
              <Icon
                name="person-outline"
                size={22}
                color={focused ? '#000' : '#fff'}
              />
            </IconContainer>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <IconContainer focused={focused}>
              <Icon
                name="settings-outline"
                size={22}
                color={focused ? '#000' : '#fff'}
              />
            </IconContainer>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  buttonWrapper: {
    position: 'absolute',
    top: -30,
    left: '50%',
    transform: [{translateX: -35}],
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  whiteBackground: {
    position: 'absolute',
    width: 65,
    height: 65,
    borderRadius: 50,
    backgroundColor: '#fff',
    zIndex: 1,
  },
  customButton: {
    position: 'relative',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  gradient: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 55,
    height: 50,
    borderRadius: 14,
  },
  focusedIconContainer: {
    backgroundColor: '#fff',
  },
});
