import React from 'react';
import {ScrollView, View, Text, Image, StyleSheet, Platform, Button} from 'react-native';
import { WebView } from 'react-native-webview';

const RecipeDetail = ({ recipe,clickBack }) => {
    return (
        <ScrollView style={styles.container}>
            <Image source={{ uri: recipe.image }} style={styles.image} />
            <View style={styles.content}>
                <Text style={styles.title}>{recipe.title}</Text>
                <Text style={styles.sectionTitle}>Ingredients</Text>
                {recipe.extendedIngredients.map((ingredient, index) => (
                    <Text key={index} style={styles.text}>{ingredient.amount +" " + ingredient.name}</Text>
                ))}
                <Text style={styles.sectionTitle}>Instructions</Text>
                <Text style={styles.text}>{ Platform.OS === "web" ? <div dangerouslySetInnerHTML={{__html: recipe.instructions}}></div>: <WebView
                    originWhitelist={['*']}
                    source={{ html: recipe.instructions }}
                /> } </Text>
                <Button title="Go Back" onPress={() => clickBack()} />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
    image: {
        width: '100%',
        height: 300,
        resizeMode: 'cover',
    },
    content: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
        color: '#333',
    },
    text: {
        fontSize: 16,
        marginBottom: 10,
        color: '#666',
    },
});

export default RecipeDetail;
