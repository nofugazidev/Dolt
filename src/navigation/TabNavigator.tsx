import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/main/Home';
import Focus from '../screens/main/Focus';
import Profile from '../screens/main/Profile';
import Calendar from '../screens/main/Calendar';

import HomeIcon from '../../assets/tab/home.svg';
import FocusIcon from '../../assets/tab/focus.svg';
import CalendarIcon from '../../assets/tab/calendar.svg';
import ProfileIcon from '../../assets/tab/profile.svg';

export type TabParamList = {
  Home: undefined;
  Focus: undefined;
  Profile: undefined;
  Calendar: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: '#ffffff',
        tabBarStyle: {
          backgroundColor: '#363636',
          height: 100,
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Focus" component={Focus} />
      <Tab.Screen name="Calendar" component={Calendar} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
