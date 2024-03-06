import { Text, SafeAreaView, StyleSheet,View,FlatList,ScrollView} from 'react-native';
import React,{useState,useEffect} from 'react';
import {fetchRecipesByComplexSearch, fetchRecipesByIngredients} from './service/fetchRecipes';
import RecipeCard from "./component/recipeCard";
import {calculateCarbsByProtein, calculateProteinByCarbs} from "./helper/calculatePercent";
import IngredientInput from "./component/IngredientInput";
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './component/appNavigator';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './component/home';
import Recipe from "./component/recipe";
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();
const myIcon = <Icon name="home" size={30} color="#900" />;

function MyTabs() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ }) => (
              <Icon name="home" size={30} color="#900" />
          ),
        }} />
        <Tab.Screen name="recipes" component={Recipe}  options={{
          tabBarLabel: 'Recipes',
          tabBarIcon: ({ }) => (
              <Icon name="lemon-o" size={30} color="#900" />
          ),
        }}/>
      </Tab.Navigator>
  );
}


export default function App() {

  return (
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color:'#a00',
    padding: 20,
    textAlign: 'center'
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16
  },
  title: {
    fontSize: 18
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
