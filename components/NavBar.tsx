// components/NavBar.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router'; // Import useRouter for navigation

const NavBar = () => {
  const router = useRouter(); // Use the useRouter hook for navigation
  const onMouseOver = (event: { target: any; }) => {
    const btn = event.target;
    btn.style.backgroundColor = "#A1C6EA";
  };
  const onMouseOut = (event: { target: any; }) => {
    const btn = event.target;
    btn.style.backgroundColor = '#507DBC';
  };
  return (
    <View style={styles.navContainer}>
    
      {/* Custom Touchable button for "Go to Home" */}
      <TouchableOpacity style={styles.button} onMouseEnter={(event: { target: any; }) => onMouseOver(event)} onMouseOut={(event: any) => onMouseOut(event)} onPress={() => router.push('pages/home')}>
        Home
      </TouchableOpacity>

      {/* Custom Touchable button for "Go to Past" */}
      <TouchableOpacity style={styles.button} onMouseEnter={(event: { target: any; }) => onMouseOver(event)} onMouseOut={(event: any) => onMouseOut(event)} onPress={() => router.push('pages/past')}>
        My Past
      </TouchableOpacity>

      {/* Custom Touchable button for "Go to Present" */}
      <TouchableOpacity style={styles.button} onMouseEnter={(event: { target: any; }) => onMouseOver(event)} onMouseOut={(event: any) => onMouseOut(event)} onPress={() => router.push('pages/present')}>
        My Present
      </TouchableOpacity>

      {/* Custom Touchable button for "Go to Future" */}
      <TouchableOpacity style={styles.button} onMouseEnter={(event: { target: any; }) => onMouseOver(event)} onMouseOut={(event: any) => onMouseOut(event)} onPress={() => router.push('pages/future')}>
        My Future
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onMouseEnter={(event: { target: any; }) => onMouseOver(event)} onMouseOut={(event: any) => onMouseOut(event)} onPress={() => router.push('pages/future')}>
        Log Out
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',  // Arrange buttons in a row
    justifyContent: 'space-around',  // Space buttons evenly
    paddingVertical: 10,  // Space around buttons vertically
    backgroundColor:'#507DBC',
    zIndex: 1000,  // Make sure the nav bar stays on top
  },
  button: {
    flex: 1,  // Make each button take equal space
    backgroundColor: '#507DBC',  // Darker blue for button background
    marginHorizontal: 1,  // Small gap between buttons
    marginBottom: 0,
    paddingVertical: 15,  // Vertical padding for the button
    justifyContent: 'center',  // Center the text vertically
    alignItems: 'center',  // Center the text horizontally
    color: '#fff',  // White text color
    fontSize: 18,  // Font size of the button text
    fontWeight: 'bold',  // Make text bold
    fontFamily: 'Lexend',
  },
  buttonText: {
    color: '#fff',  // White text color
    fontSize: 18,  // Font size of the button text
    fontWeight: 'bold',  // Make text bold
  },
});

export default NavBar;
