import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
           title: 'Acceille',
          headerShown:false
        }}
      />
      <Tabs.Screen
        name="Rechercher"
        options={{
          tabBarIcon: ({ color }) => <FontAwesome name="search" size={28} color="black" />,
          title: 'Rechercher',
          headerShown:false
        }}
      />
            <Tabs.Screen
        name="Demander"
        options={{
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
          title: 'Demander',
          headerShown:false
        }}
      />
            <Tabs.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
          title: 'Profile',
          headerShown:false
        }}
      />
    </Tabs>
  );
}
