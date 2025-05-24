import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import CalanderScreen from '../screens/CalanderScreen';
import ProfileScreen from '../screens/ProfileScreen';
import {BORDERRADIUS, SPACING} from '../theme/theme';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity, StyleSheet} from 'react-native';
import AddPost from '../screens/AddPost';

const Tab = createBottomTabNavigator();
const CustomAddButton = ({onPress}: any) => (
  <TouchableOpacity
    style={styles.customButton}
    onPress={onPress}
    activeOpacity={0.9}>
    <LinearGradient
      colors={['#000', '#222', '#444', '#666']}
      style={styles.gradient}>
      <Icon name="add-outline" size={28} color="#fff" />
    </LinearGradient>
  </TouchableOpacity>
);
const BottomTab = () => {
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
          backgroundColor: 'transparent',
          borderTopWidth: 0,
          elevation: 0,
          paddingTop: SPACING.space_10,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => (
            <Icon name="home-outline" size={24} color={'#fff'} />
          ),
        }}
      />
      <Tab.Screen
        name="Calender"
        component={CalanderScreen}
        options={{
          tabBarIcon: () => (
            <Icon name="calendar-number-outline" size={24} color={'#fff'} />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={AddPost}
        options={{
          tabBarButton: props => <CustomAddButton {...props} />,
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: () => (
            <Icon name="person-outline" size={24} color={'#fff'} />
          ),
        }}
      />

      <Tab.Screen
        name="dummy"
        component={ProfileScreen}
        options={{
          tabBarIcon: () => (
            <Icon name="person-outline" size={24} color={'#fff'} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  customButton: {
    position: 'absolute',
    top: -25,
    left: '50%',
    transform: [{translateX: -25}],
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradient: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
