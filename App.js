import { Text, SafeAreaView, StyleSheet,View,FlatList,ScrollView} from 'react-native';
import React,{useState,useEffect} from 'react';
import {fetchRecipeByRandom, fetchRecipesByComplexSearch, fetchRecipesByIngredients} from './service/fetchRecipes';
import RecipeCard from "./component/recipeCard";
import {calculateCarbsByProtein, calculateProteinByCarbs} from "./helper/calculatePercent";
import IngredientInput from "./component/IngredientInput";
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './component/appNavigator';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './component/home';
import Recipe from "./component/recipe";
import Icon from 'react-native-vector-icons/FontAwesome';
import RecipeRandomComponent from "./component/randomRecipe";
import FadeInScrollComponent from "./component/FadeInScrollComponent";

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

const data = Array.from({ length: 30 }, (_, index) => ({
    id: String(index),
    text: `Item ${index + 1}`
}));


export default function App() {
    const [randomRecipe,setRandomRecipe] = useState(null);
    useEffect(() => {
        fetchRecipeByRandom().then(recipe => {
            if (recipe && recipe.recipes && recipe.recipes.length > 0) {
                setRandomRecipe(recipe.recipes);
            }
        }).catch(console.error);
    }, []);
    return(
        <SafeAreaView style={styles.container}>
            {randomRecipe && randomRecipe.length > 0 && <FadeInScrollComponent data={randomRecipe} />}
        </SafeAreaView>
    )

  /*return (
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
  );*/
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
