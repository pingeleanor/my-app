import {Text, SafeAreaView, StyleSheet, View, FlatList, ScrollView, Button} from 'react-native';
import React,{useState,useEffect} from 'react';
import {fetchRecipesByComplexSearch, fetchRecipesByIngredients,fetchRecipeById} from '../service/fetchRecipes';
import RecipeCard from "./recipeCard";
import {calculateCarbsByProtein, calculateProteinByCarbs} from "../helper/calculatePercent";
import IngredientInput from "./IngredientInput";
import RecipeDetail from "./RecipeDetail";


export default function Home() {
    const [recipes,setRecipes] = useState(null);
    const [recipe,setRecipe] = useState(null);
    const handleSubmission = (ingredient, maxCarbs) => {
        // Here you can handle the submitted data, e.g., make an API call
        let maxProtein = calculateProteinByCarbs(maxCarbs);
        fetchRecipesByComplexSearch(ingredient,maxProtein,maxCarbs)
            .then(recipes => {
                console.log("recipes",recipes)
                if(recipes && recipes.results){
                    setRecipes(recipes.results);
                }

            })
            .catch(console.error);
    };

    const clickHandler = (id) => {
        if(id){
            fetchRecipeById(id)
                .then(recipe => {
                    console.log("recipe",recipe)
                    if(recipe){
                        setRecipe(recipe);
                    }

                })
                .catch(console.error);
        }
    }

    const backHandler = () => {
        setRecipe(null);
    }
    const backToSearch = () => {
        setRecipes(null);
    }

    useEffect(() => {

    }, []);
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.container}>
                { recipes && !recipe && <Text style={styles.header}>
                    All Recipes
                </Text>}
                {recipes && recipes.length > 0 && !recipe ? recipes.map((recipe) => {
                    return (
                        <RecipeCard recipe={recipe} key={recipe.id} clickEvent={clickHandler}/>
                    )
                }) : recipe? null: <IngredientInput onSubmit={handleSubmission} />}
                {recipe && <RecipeDetail clickBack={backHandler} recipe={recipe}/>}
                {!recipe && recipes && <Button title="Go Back" onPress={() => backToSearch()} />}
            </ScrollView>
        </SafeAreaView>
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
