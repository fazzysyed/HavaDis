import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  Platform
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
import Button from '../components/Button';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-community/google-signin';
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
GoogleSignin.configure({
  webClientId:
    '898312628945-59g5q37ehsmi4mlm545bkfnq3hll7fb5.apps.googleusercontent.com',
});




export default function Continue({navigation}) {
  const [ios, setIos] = useState(false)
  const loginScreen = () => {
    navigation.navigate('Login');
  };

  const signupScreen = () => {
    navigation.navigate('Signup');
  };

  const googleLogin = async () => {
    try {
      const {idToken} = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      return auth().signInWithCredential(googleCredential);
    } catch (error) {
      console.log(error, 'Hello');
    }
  };

  useEffect(()=>{
    if (Platform.OS === 'ios') {
      setIos(true)
    }
  })
  

  return (
    <ImageBackground
      style={{width: width, height: height, flex: 1, backgroundColor: '#FFF'}}
      source={require('../../assets/backImage.png')}
      resizeMode="contain">
      <SafeAreaView style={styles.contianer}>
        <View style={{marginTop: hp('8%')}}>
          <Image source={require('../../assets/Main.png')} />
        </View>
        <Text style={styles.text}>Please sign in to continue</Text>
        <Button title="Sign up with Email" onPress={signupScreen} />

        <View style={styles.textcontianer}>
          <View style={styles.text2}>
            <TouchableOpacity onPress={loginScreen}>
              <Text style={{fontFamily: 'HKGrotesk-Regular'}}>
                Already a user?{' '}
                <Text
                  style={{
                    color: '#3FAD72',

                    fontSize: 14,
                    fontFamily: 'HKGrotesk-Bold',
                  }}>
                  {' '}
                  Log In
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.text2}>
          <Text style={{fontFamily: 'HKGrotesk-Regular'}}>Continue with</Text>
        </View>

        <View style={styles.loginImage}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              width: width / 2,
            }}>
            <TouchableOpacity >
              <Image source={require('../../assets/facebook.png')} />
            </TouchableOpacity>

            <TouchableOpacity onPress={googleLogin} style={{}}>
              <Image source={require('../../assets/google.png')} />
            </TouchableOpacity>
          { ios?
            <View>
              <Image source={require('../../assets/apple.png')} />
            </View> : null}
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  contianer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  textcontianer: {
    alignItems: 'center',
  },
  text: {
    fontFamily: 'HKGrotesk-Medium',
    marginVertical: hp('2%'),
    fontSize: 16,
  },
  text2: {
    marginTop: hp('3%'),
  },

  loginImage: {
    marginTop: hp('3%'),
  },
});
