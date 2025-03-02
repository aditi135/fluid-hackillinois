import React from 'react';
import { Text, View, StyleSheet, FlatList, Dimensions } from 'react-native';
import NavBar from '../../components/NavBar'; // Import the NavBar component
import FishCard from '../../components/FishCard'; // Import the FishCard component
import styles from '../styles';

export default function Home() {
  const fishData = [
    { id: '1', name: 'Baby Fish', info: "This is a baby fish. It's small and cute.", type: 'baby-fish' },
    { id: '2', name: 'Clownfish', info: 'Clownfish are bright and have orange and white stripes.', type: 'clownfish' },
    { id: '3', name: 'Pufferfish', info: 'Pufferfish can inflate themselves when threatened.', type: 'pufferfish' },
    { id: '4', name: 'Angelfish', info: 'Angelfish are beautiful and come in many colors.', type: 'baby-fish' },
    // Add more fish data as needed
  ];

  // Dynamically determine the number of columns based on screen width
  const numColumns = Dimensions.get('window').width > 600 ? 3 : 1; // 3 columns for wider screens, 1 column for mobile

  return (
    <View style={styles.container}>
      <div>
        <Text style={styles.logo}>fluid</Text>
        <br></br>
      </div>
      <Text style={styles.title}>Home</Text>
      <NavBar />
      <Text style={stylesLocal.header}>Your Fish</Text>

      <FlatList
        data={fishData}
        renderItem={({ item }) => (
          <FishCard
            name={item.name}
            info={item.info}
            type={item.type}
          />
        )}
        keyExtractor={(item) => item.id}
        numColumns={numColumns} // This makes the cards display in a grid
        contentContainerStyle={stylesLocal.innerContainer} // Apply styling to the inner content
        columnWrapperStyle={stylesLocal.columnWrapper} // Style for the columns
      />
    </View>
  );
}

const stylesLocal = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  logo: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  header: {
    fontSize: 20,
    fontWeight: '500',
  },
  innerContainer: {
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  columnWrapper: {
    justifyContent: 'space-evenly', // Adjust space between columns
  },
});
