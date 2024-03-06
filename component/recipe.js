import { Text, SafeAreaView, StyleSheet,View,FlatList,ScrollView} from 'react-native';
import React,{useState,useEffect} from 'react';
import {fetchRecipesByComplexSearch, fetchRecipesByIngredients} from '../service/fetchRecipes';
import RecipeCard from "./recipeCard";
import {calculateCarbsByProtein, calculateProteinByCarbs} from "../helper/calculatePercent";
import IngredientInput from "./IngredientInput";


export default function Recipe() {


    useEffect(() => {

    }, []);
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>
                All Recipes
            </Text>
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
