import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const IngredientInput = ({ onSubmit }) => {
    const [ingredient, setIngredient] = useState('');
    const [maxCarbs, setMaxCarbs] = useState('');


    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Enter ingredient"
                value={ingredient}
                onChangeText={setIngredient}
                placeholderTextColor="#666"
            />
            <TextInput
                style={styles.input}
                placeholder="Max Carbs (grams)"
                value={maxCarbs}
                onChangeText={setMaxCarbs}
                keyboardType="numeric"
                placeholderTextColor="#666"
            />
            <Button title="Submit" onPress={() => onSubmit(ingredient, maxCarbs)} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    input: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        marginBottom: 10,
        fontSize: 16,
        color: '#333',
    },
});

export default IngredientInput;
