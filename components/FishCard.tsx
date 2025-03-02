import React, { useEffect, useRef } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { Animated, Easing } from 'react-native';

const { width } = Dimensions.get('window');

// FishCard component accepts name, info, and type as props
const FishCard = ({ name, info, type }) => {
  // Dynamically choose the image based on the type of fish
  const getFishImage = (type) => {
    switch (type) {
      case 'baby-fish':
        return require('../assets/images/baby-fish.png');
      case 'clownfish':
        return require('../assets/images/clownfish.png');
      case 'pufferfish':
        return require('../assets/images/pufferfish.png');
      default:
        return require('../assets/images/baby-fish.png'); // Default image
    }
  };

  // Create references for the animated values
  const translateY = useRef(new Animated.Value(0)).current;
//   const translateX = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(1)).current;
  const rotate = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(1)).current;

  // Function to apply a random animation effect
  const applyRandomAnimation = () => {
    const randomAnimation = Math.floor(Math.random() * 4); // Choose a random animation

    switch (randomAnimation) {
      case 0:
        // Up and Down Animation (Vertical Movement)
        return Animated.loop(
            Animated.sequence([
                Animated.timing(translateY, {
                    toValue: 10, // Move up
                    duration: 600, // Faster duration
                    easing: Easing.inOut(Easing.ease), // Smoother easing function
                    useNativeDriver: true,
                }),
                Animated.timing(translateY, {
                    toValue: -10, // Move down
                    duration: 600, // Faster duration
                    easing: Easing.inOut(Easing.ease), // Smoother easing function
                    useNativeDriver: true,
                }),
                Animated.timing(translateY, {
                    toValue: 0, // Reset to original position
                    duration: 600, // Faster duration
                    easing: Easing.inOut(Easing.ease), // Smoother easing function
                    useNativeDriver: true,
                }),
            ])
        );

      case 1:
        return Animated.loop(
            Animated.sequence([
                Animated.timing(translateY, {
                    toValue: -10, // Move up
                    duration: 600, // Faster duration
                    easing: Easing.inOut(Easing.ease), // Smoother easing function
                    useNativeDriver: true,
                }),
                Animated.timing(translateY, {
                    toValue: 10, // Move down
                    duration: 600, // Faster duration
                    easing: Easing.inOut(Easing.ease), // Smoother easing function
                    useNativeDriver: true,
                }),
                Animated.timing(translateY, {
                    toValue: 0, // Reset to original position
                    duration: 600, // Faster duration
                    easing: Easing.inOut(Easing.ease), // Smoother easing function
                    useNativeDriver: true,
                }),
            ])
        );

      case 2:
        return Animated.loop(
            Animated.sequence([
                Animated.timing(translateY, {
                    toValue: 10, // Move up
                    duration: 600, // Faster duration
                    easing: Easing.inOut(Easing.ease), // Smoother easing function
                    useNativeDriver: true,
                }),
                Animated.timing(translateY, {
                    toValue: -10, // Move down
                    duration: 600, // Faster duration
                    easing: Easing.inOut(Easing.ease), // Smoother easing function
                    useNativeDriver: true,
                }),
                Animated.timing(translateY, {
                    toValue: 0, // Reset to original position
                    duration: 600, // Faster duration
                    easing: Easing.inOut(Easing.ease), // Smoother easing function
                    useNativeDriver: true,
                }),
            ])
        );

      case 3:
        return Animated.loop(
            Animated.sequence([
                Animated.timing(translateY, {
                    toValue: -10, // Move up
                    duration: 600, // Faster duration
                    easing: Easing.inOut(Easing.ease), // Smoother easing function
                    useNativeDriver: true,
                }),
                Animated.timing(translateY, {
                    toValue: 10, // Move down
                    duration: 600, // Faster duration
                    easing: Easing.inOut(Easing.ease), // Smoother easing function
                    useNativeDriver: true,
                }),
                Animated.timing(translateY, {
                    toValue: 0, // Reset to original position
                    duration: 600, // Faster duration
                    easing: Easing.inOut(Easing.ease), // Smoother easing function
                    useNativeDriver: true,
                }),
            ])
        );

      default:
        return null;
    }
  };

  useEffect(() => {
    // Start the random animation effect
    const animation = applyRandomAnimation();

    if (animation) {
      animation.start();
    }

    // Clean up animation when component unmounts
    return () => {
      if (animation) {
        animation.stop();
      }
    };
  }, []);

  return (
    <View style={styles.card}>
      <Text style={styles.fishName}>{name}</Text>
      <Animated.View
        style={{
          transform: [
            { translateY },
            // { translateX },
          ],
          opacity, // Apply opacity animation
        }}
      >
        <Image style={styles.fishImage} source={getFishImage(type)} />
      </Animated.View>
      <Text style={styles.fishInfo}>{info}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    margin: 15,
    padding: 20,
    minWidth: width / 5,
    minHeight: '20%',
    maxWidth: 250,
    maxHeight: 250,
    backgroundColor: '#a1c6ea',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  fishName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  fishImage: {
    maxWidth: 60,
    maxHeight: 40,
  },
  fishInfo: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
});

export default FishCard;
