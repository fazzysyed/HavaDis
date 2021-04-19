import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Button = (props) => {
  return (
    <TouchableOpacity style={styles.Button} onPress={props.onPress}>
      <Text style={{color: '#FFF', fontFamily: 'HKGrotesk-Medium'}}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  Button: {
    height: hp('9%'),
    width: wp('90%'),
    backgroundColor: '#3FAD72',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 18,
  },
});

export default Button;
