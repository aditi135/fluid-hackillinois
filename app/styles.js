// styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  banner: {
    top: 0,
    left: 0,
    right: 0,
    padding: 20,
    zIndex: 0,
  },
  logo: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    color:'#507DBC',
    fontSize: 72,
    fontWeight: 'bold',
    fontFamily: 'Zain',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    fontFamily: 'Zain',
    color: '#04080F',
    marginBottom: 20,
    zIndex: 1,
  },
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
  titleContainer: {
        fontSize: 40,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    textContainer: {
        fontSize: 20,
        fontFamily: 'Lexend',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        gap: 8,
    },
    stepContainer: {
        gap: 8,
        marginBottom: 100,
        marginLeft: 30,
        marginRight: 30,
        marginTop: 70,
    },
    reactLogo: {
        height: 178,
        width: 290,
        bottom: 0,
        left: 0,
        position: 'absolute',
    },
    button: {
        backgroundColor: '#507DBC',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginVertical: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
        width: '80%',
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
    },
    modalText: {
        fontSize: 18,
        marginBottom: 20,
    },
    inputText: {
        width: '100%',
        padding: 10,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
});


export default styles;
