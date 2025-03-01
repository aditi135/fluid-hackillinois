import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    titleContainer: {
        fontSize: 40,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    textContainer: {
        fontSize: 20,
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
        backgroundColor: '#007BFF',
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
