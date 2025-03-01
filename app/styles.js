// styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    fontFamily: 'Lexend',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    position: 'relative',
  },
  gradientBackground: {
    flex: 1,
    width: '100%',
    borderRadius: 20,
  },
  waveContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 200, // Height of the wave
    overflow: 'hidden',
    zIndex: -1, // Ensure it stays behind the login form
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    fontFamily: 'Zain',
    color: 'white', // White text for the title
    marginBottom: 40,
    zIndex: 1,
  },
  loginSection: {
    fontFamily: 'Lexend',
    width: '100%',
    maxWidth: 400,
    zIndex: 1,
  },
  input: {
    fontFamily: 'Lexend',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  text: {
    fontFamily: 'Lexend',
    fontSize: 20,
    marginBottom: 20,
  },
});

export default styles;
