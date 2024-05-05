import React from 'react';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

import Colors from '../../constants/Colors';
import { useColorScheme } from '../../components/useColorScheme';
import { useClientOnlyValue } from '../../components/useClientOnlyValue';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Calendar',
          tabBarIcon: ({ color, size, focused }) => (
            <AntDesign
              name="calendar"
              size={24}
              color={focused ? "red" : "white"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="event"
        options={{
          title: 'Event',
          tabBarIcon: ({ color, size, focused }) => (
            <FontAwesome
              name="calendar-plus-o"
              size={24}
              color={focused ? "red" : "white"}
            />
          ),
        }}
      />
    </Tabs>
  );
}
