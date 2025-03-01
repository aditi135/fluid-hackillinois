import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Animated, Easing } from 'react-native';
import NavBar from '../../components/NavBar'; // Import the NavBar component
import styles from '../styles';

interface Fish {
  x: Animated.Value;
  y: Animated.Value;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
}

export default function Home() {
  const [fish, setFish] = useState<Fish[]>([]); // Explicitly define the state type

  const tankWidth = 200; // Width of the fish tank (adjust as needed)
  const tankHeight = 200; // Height of the fish tank (adjust as needed)

  // Function to create a few fish with random starting positions and random movement ranges
  const createFish = () => {
    let newFish: Fish[] = [];

    // Create multiple fish
    for (let i = 0; i < 5; i++) {
      const startX = Math.random() * tankWidth; // Random starting X position
      const startY = Math.random() * tankHeight; // Random starting Y position
      const endX = Math.random() * tankWidth; // Random ending X position
      const endY = Math.random() * tankHeight; // Random ending Y position

      newFish.push({
        x: new Animated.Value(startX), // Starting position
        y: new Animated.Value(startY), // Starting position
        startX,
        startY,
        endX,
        endY,
      });
    }

    setFish(newFish);
  };

  // Function to animate fish moving at 1 pixel per second
  const animateFish = () => {
    fish.forEach((fishItem) => {
      const distanceX = Math.abs(fishItem.endX - fishItem.startX);
      const distanceY = Math.abs(fishItem.endY - fishItem.startY);

      const durationX = distanceX * 100; // Duration for X movement in milliseconds
      const durationY = distanceY * 100; // Duration for Y movement in milliseconds

      const moveFish = (startX: number, startY: number, endX: number, endY: number) => {
        Animated.timing(fishItem.x, {
          toValue: endX,
          duration: durationX,
          easing: Easing.linear,
          useNativeDriver: false, // Use JS-based animation for cross-platform consistency
        }).start();

        Animated.timing(fishItem.y, {
          toValue: endY,
          duration: durationY,
          easing: Easing.linear,
          useNativeDriver: false, // Use JS-based animation for cross-platform consistency
        }).start();
      };

      // Animate fish continuously
      Animated.loop(
        Animated.sequence([
          // Move fish from start to end
          Animated.parallel([
            Animated.timing(fishItem.x, {
              toValue: fishItem.endX,
              duration: durationX,
              easing: Easing.linear,
              useNativeDriver: false,
            }),
            Animated.timing(fishItem.y, {
              toValue: fishItem.endY,
              duration: durationY,
              easing: Easing.linear,
              useNativeDriver: false,
            }),
          ]),
          // Move fish back to start
          Animated.parallel([
            Animated.timing(fishItem.x, {
              toValue: fishItem.startX,
              duration: durationX,
              easing: Easing.linear,
              useNativeDriver: false,
            }),
            Animated.timing(fishItem.y, {
              toValue: fishItem.startY,
              duration: durationY,
              easing: Easing.linear,
              useNativeDriver: false,
            }),
          ]),
        ])
      ).start();
    });
  };

  useEffect(() => {
    createFish();
  }, []);

  useEffect(() => {
    if (fish.length > 0) {
      animateFish();
    }
  }, [fish]);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>fluid</Text>
      <Text style={styles.text}>Home Page</Text>

      {/* Fishbowl Container */}
      <View style={styles_local.fishbowl}>
        {/* Animate each fish (dot) */}
        {fish.map((fishItem, index) => (
          <Animated.View
            key={index}
            style={[
              styles_local.fish,
              {
                transform: [
                  { translateX: fishItem.x },
                  { translateY: fishItem.y },
                ],
              },
            ]}
          />
        ))}
      </View>
      <NavBar />
    </View>
  );
}

const styles_local = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  text: {
    fontFamily: 'Lexend',
    fontSize: 20,
    marginBottom: 20,
  },
  fishbowl: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    position: 'relative',
    marginBottom: 30,
  },
  fish: {
    position: 'absolute',
    width: 10,
    height: 10,
    backgroundColor: '#3498db',  // Fish color (blue)
    borderRadius: 5,
  },
});
