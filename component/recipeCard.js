import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const RecipeCard = ({ recipe }) => {
    return (
        <View style={styles.card}>
            <Image source={{ uri: recipe.image }} style={styles.image} />
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{recipe.title}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        overflow: 'hidden',
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
    },
    image: {
        width: '100%',
        height: 200,
    },
    infoContainer: {
        padding: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    description: {
        fontSize: 14,
        color: '#666',
    },
});

export default RecipeCard;
