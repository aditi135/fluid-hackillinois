import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

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

  return (
    <View style={styles.card}>
      <Text style={styles.fishName}>{name}</Text>
      <Image source={getFishImage(type)} style={styles.fishImage} />
      <Text style={styles.fishInfo}>{info}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    margin: 15,
    padding: 20,
    minWidth: '20%',
    minHeight: '20%',
    maxWidth: 250,
    maxHeight: 250,
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
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
