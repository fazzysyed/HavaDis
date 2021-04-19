import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import Video from 'react-native-video';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Continue');
    }, 4500);
  });
  return (
    <Video
      source={require('../../assets/splash.mp4')}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
      muted={true}
      resizeMode="cover"
    />
  );
};

export default Splash;
