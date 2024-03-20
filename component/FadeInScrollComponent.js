import React, { useState, useRef } from 'react';
import { View, FlatList, Text, Animated } from 'react-native';
import RecipeRandomComponent from "./randomRecipe";

const FadeInScrollComponent = ({ data }) => {
    const [viewableItems, setViewableItems] = useState([]);
    const [activeIndex, setActiveIndex] = useState(null);
    const [activeItem, setActiveItem] = useState(null);
    const animatedValues = useRef([]);

    // Initialize an animated value for each item
    data.forEach((_, index) => {
        animatedValues.current[index] = new Animated.Value(0);
    });

    const fadeInItem = (index) => {
        console.log("fadeInItem",index,animatedValues.current[index])
        Animated.timing(animatedValues.current[index], {
            toValue: 1,
            duration: 1500,
            useNativeDriver: true,
        }).start();
    };

    const onViewableItemsChanged = useRef(({ viewableItems }) => {
        viewableItems.forEach(item => {
            setActiveIndex(item.index);
            setActiveItem(animatedValues.current[item.index]);
            fadeInItem(item.index);
        });
        setViewableItems(viewableItems.map(item => item.key));
    });

    const renderItem = ({ item, index }) => {
        const opacity = animatedValues.current[index];
        console.log("opacity",opacity)

        return (
            <Animated.View style={{ opacity: activeIndex == index ?  activeItem : 0 , margin: 10, backgroundColor: '#f0f0f0', padding: 20, borderRadius: 5  }}>
                <RecipeRandomComponent recipe={item}/>
            </Animated.View>
        );
    };

    return (
        <FlatList
            data={data}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            onViewableItemsChanged={onViewableItemsChanged.current}
            viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
        />
    );
};

export default FadeInScrollComponent;
