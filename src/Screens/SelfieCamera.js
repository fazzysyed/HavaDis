/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-undef */
import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {Icon, Header} from 'native-base';
import * as ImagePicker from 'react-native-image-picker';

export default App = ({navigation}) => {
  const [image, setImage] = useState('');
  const [isFaceDetected, setisFaceDetection] = useState(false);
  const getImage = () => {
    const options = {
      includeBase64: true,
      mediaType: 'photo',
    };
    ImagePicker.launchImageLibrary(options, (response) => {
      if (!response.didCancel) {
        navigation.navigate('Photo', {
          image2: response.uri,
        });
      }
    });
  };

  takePicture = async () => {
    if (camera) {
      const options = {quality: 0.5, base64: true};
      const data = await camera.takePictureAsync(options);
      console.log(data.uri);
      navigation.navigate('Photo', {
        image2: data.uri,
      });
    }
  };
  return (
    <View style={styles.container}>
      <RNCamera
        faceDetectionMode={RNCamera.Constants.FaceDetection.Mode.fast}
        ref={(ref) => {
          camera = ref;
        }}
        style={styles.preview}
        type={RNCamera.Constants.Type.front}
        flashMode={RNCamera.Constants.FlashMode.on}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        androidRecordAudioPermissionOptions={{
          title: 'Permission to use audio recording',
          message: 'We need your permission to use your audio',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
      />
      <View style={styles.buttons}>
        <TouchableOpacity
          style={{flex: 1, marginHorizontal: 15, marginVertical: 15}}
          onPress={() => navigation.goBack()}>
          <Image
            style={{
              height: 20,
              width: 20,
              resizeMode: 'contain',
              alignSelf: 'flex-start',
            }}
            source={require('../../assets/cameraback.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{flex: 1, marginHorizontal: 15}}>
          <Text
            style={{
              color: '#3FAD72',
              fontSize: 18,
              textAlign: 'right',
              fontFamily: 'HKGrotesk-Regular',
            }}>
            Help
          </Text>
        </TouchableOpacity>
      </View>
      <Text
        style={{
          color: '#FFF',
          textAlign: 'center',
          position: 'absolute',
          marginVertical: hp('11%'),
          marginHorizontal: 50,
          fontFamily: 'HKGrotesk-Regular',
        }}>
        Align your face in the center of the circle, and press the button
      </Text>
      <View
        style={{
          position: 'absolute',
          alignSelf: 'center',
          height: '10%',
          width: '20%',
          marginVertical: hp('25%'),
        }}>
        <View style={styles.ovel} />
      </View>

      <View
        style={{
          position: 'absolute',
          alignSelf: 'center',

          marginVertical: hp('80%'),
        }}>
        <TouchableOpacity onPress={takePicture.bind()} style={styles.capture}>
          <View style={styles.capture1}></View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={getImage}
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            borderRadius: 5,
            marginVertical: 10,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Icon
            name="image-outline"
            style={{color: '#FFFFFF', marginHorizontal: 3}}
          />
          <Text
            style={{
              width: 100,
              color: '#FFF',
              fontFamily: 'HKGrotesk-Regular',
            }}>
            Upload picture from photo
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  preview: {
    flex: 1,
  },
  capture: {
    backgroundColor: '#3FAD72',
    borderRadius: 60,

    alignSelf: 'center',
  },
  buttons: {
    flexDirection: 'row',
    position: 'absolute',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  capture1: {
    borderColor: '#FFF',
    borderWidth: 1,
    borderRadius: 30,
    padding: 30,
    paddingHorizontal: 30,
    alignSelf: 'center',
    margin: 6,
  },
  ovel: {
    flex: 0,

    borderColor: '#3FAD72',
    borderWidth: 3,

    alignSelf: 'center',
    width: 250,
    height: 250,
    borderRadius: 120,
    transform: [{scaleY: 1.2}],
  },
});
