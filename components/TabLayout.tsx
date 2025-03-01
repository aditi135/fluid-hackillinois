// app/layouts/TabLayout.tsx
import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import { HapticTab } from '@/components/HapticTab'; 
import { IconSymbol } from '@/components/ui/IconSymbol'; 
import TabBarBackground from '@/components/ui/TabBarBackground'; 
import { Colors } from '@/constants/Colors'; 
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: { position: 'absolute' },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="person.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="past"
        options={{
          title: 'Past',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="hourglass.tophalf.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="present"
        options={{
          title: 'Present',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="hourglass" color={color} />,
        }}
      />
      <Tabs.Screen
        name="future"
        options={{
          title: 'Future',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="hourglass.bottomhalf.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="game"
        options={{
          title: 'Rewards',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="largecircle.fill.circle" color={color} />,
        }}
      />
    </Tabs>
  );
}
