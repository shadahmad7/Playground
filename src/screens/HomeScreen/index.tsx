import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, GestureResponderEvent } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainStackParamList } from '../../navigations/MainNavigator/types';
import { routes } from '../../navigations/MainNavigator/routes';
import { useNavigation } from '../../hooks';
import MenuCard from '../../components/MenuCard';

const HomeScreen = () => {
  const { navigate } = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Development Menu</Text>
      {routes.slice(1).map((menu) => (
          <MenuCard text={menu.name} onPress={() => navigate(menu.name)} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign:'center'
  },
  menuButton: {
    padding: 16,
    backgroundColor: '#f0f0f0',
    marginBottom: 12,
    borderRadius: 8,
  },
  menuText: {
    fontSize: 16,
    fontWeight: '500',
  },
});

export default HomeScreen;
