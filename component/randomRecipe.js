import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView, Platform} from 'react-native';
import {WebView} from "react-native-webview";

const RecipeRandomComponent = ({ recipe }) => {
    return (
        <ScrollView style={styles.container}>
            <Image source={{ uri: recipe.image }} style={styles.image} />
            <Text style={styles.title}>{recipe.title}</Text>
            <View style={styles.divider} />

            <Text style={styles.sectionTitle}>Ingredient</Text>
            {recipe.extendedIngredients.map((ingredient, index) => (
                <Text key={index} style={styles.ingredient}>{ingredient.original}</Text>
            ))}

            <Text style={styles.sectionTitle}>Instructions</Text>
            <Text style={styles.instructions}>{ Platform.OS === "web" ? <div dangerouslySetInnerHTML={{__html: recipe.instructions}}></div>: <WebView
                originWhitelist={['*']}
                source={{ html: recipe.instructions }}
            /> }</Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginBottom: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    divider: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginVertical: 10,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    ingredient: {
        fontSize: 16,
        color: '#666',
        marginBottom: 5,
    },
    instructions: {
        fontSize: 16,
        color: '#333',
        marginBottom: 10,
    },
});

export default RecipeRandomComponent;
