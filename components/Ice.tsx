import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { Float } from 'react-native/Libraries/Types/CodegenTypes';

const { width } = Dimensions.get('window');
const Ice = ({percent}) => {
  const percentage = percent*100;
  console.log(percentage);
  const getIceImage = require('../assets/images/ice_crop.svg');
  const getMysteryImage = require('../assets/images/orb.svg');
  return (
    <div style={styles.together}>
    <Image source={getMysteryImage} style={styles.mystery}/>
    <Image source={getIceImage} style={[{height: `${percentage}%`}, styles.ice]}/>
    </div>
  );
};
const styles = StyleSheet.create({
    together: {
        alignItems: 'flex-start',
        position: "relative",
        margin: 25,
        justifyContent: 'flex-start',
        top: -10,
        left: -120,
    },
    mystery: {
        position: "absolute",
        top: 50,
        left: 50,
    },
    ice: {
        maxWidth: 250,
        height: 250,
        width: 60,
        position: "absolute",
        top: 0,
        left: 0,
    },

});

export default Ice;
