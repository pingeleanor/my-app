import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './home'; // Import your screen components


const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    );
};

export default AppNavigator;
