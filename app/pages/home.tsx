import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList, Dimensions } from 'react-native';
import NavBar from '../../components/NavBar'; // Import the NavBar component
import FishCard from '../../components/FishCard'; // Import the FishCard component
import styles from '../styles';

export default function Home() {
  const [numColumns, setNumColumns] = useState(getNumberOfColumns());

  // Function to determine the number of columns based on screen width
  function getNumberOfColumns() {
    const screenWidth = Dimensions.get('window').width;
    return screenWidth > 600 ? 3 : 1; // 3 columns for wider screens, 1 column for mobile
  }

  useEffect(() => {
    const handleResize = () => {
      setNumColumns(getNumberOfColumns());
    };

    // Add event listener for screen size changes
    Dimensions.addEventListener('change', handleResize);

    // Cleanup the event listener on unmount
    return () => {
      Dimensions.removeEventListener('change', handleResize);
    };
  }, []);

  const fishData = [
    { id: '1', name: 'Baby Fish', info: "This is a baby fish. It's small and cute.", type: 'baby-fish' },
    { id: '2', name: 'Clownfish', info: 'Clownfish are bright and have orange and white stripes.', type: 'clownfish' },
    { id: '3', name: 'Pufferfish', info: 'Pufferfish can inflate themselves when threatened.', type: 'pufferfish' },
    { id: '4', name: 'Angelfish', info: 'Angelfish are beautiful and come in many colors.', type: 'baby-fish' },
    // Add more fish data as needed
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>fluid</Text>
      <Text style={styles.title}>Home</Text>
      <NavBar />

      <Text style={styles.title}>Your Fish</Text>

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
        numColumns={numColumns} // Dynamically set number of columns
        contentContainerStyle={styles.innerContainer} // Apply styling to the inner content
        // Conditionally apply columnWrapperStyle only when numColumns > 1
        columnWrapperStyle={numColumns > 1 ? styles.columnWrapper : null}
      />
    </View>
  );
}

const styles_local = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  logo: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: '500',
    marginTop: 20,
    textAlign: 'center',
  },
  innerContainer: {
    flexGrow: 1, // Ensures the ScrollView expands to fill available space
    justifyContent: 'flex-start', // Align content to the top
    marginBottom: 20,
    alignItems: 'center', // Center content horizontally
  },
  columnWrapper: {
    justifyContent: 'space-between', // Adjust space between columns
    flexWrap: 'wrap',
  },
});
