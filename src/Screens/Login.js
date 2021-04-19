import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
import Button from '../components/Button';
import {Icon} from 'native-base';
import auth from '@react-native-firebase/auth';


const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default function Login({navigation}) {
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [userName, setUserName] = useState()

  const Login = ()=>{
    console.log(userName)
    auth().signInWithEmailAndPassword(userName, password)
    .then(()=>{
      navigation.navigate('Havause')
    })
  }
  return (
    <ImageBackground
      style={{width: width, height: height, flex: 1}}
      source={require('../../assets/backImage.png')}
      resizeMode="contain">
      <SafeAreaView style={styles.contianer}>
        <View style={{marginTop: hp('8%')}}>
          <Image source={require('../../assets/Main.png')} />
        </View>

        <View style={styles.firsttext}>
          <Text style={{fontFamily: 'HKGrotesk-Medium', fontSize: 16}}>
            Please sign in to continue
          </Text>
        </View>

        <View style={styles.input1}>
          <View style={styles.inputcontent}>
            <Text style={styles.inputtext}>Email</Text>
            <TextInput
              onChangeText={(text) => setUserName(text)}
              placeholder="email@email.com"
              style={{fontFamily: 'HKGrotesk-Medium'}}
            />
          </View>
        </View>

        <View style={styles.input2}>
          <View style={styles.inputcontent}>
            <Text style={styles.inputtext}>Password</Text>
            <TextInput
              secureTextEntry={showPass}
              onChangeText={(text) => setPassword(text)}
              placeholder="password"
              style={{fontFamily: 'HKGrotesk-Medium'}}
            />
          </View>

          {/* <Image source = {require('./assets/google.png')}/>   */}
          <Icon
            name="eye"
            style={{fontSize: 18, marginTop: 30, padding: 10}}
            onPress={() => setShowPass(!showPass)}
          />
        </View>

        <View>
          <Text style={styles.textforgot}>Forgot Password?</Text>
        </View>

        <View style={styles.Button}>
          <Button
            title="Login"
            onPress={() => Login()}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate('Havause')}
            style={{
              alignSelf: 'center',
              fontFamily: 'HKGrotesk-Regular',
              marginTop: 4,
            }}>
            <Text style={{fontSize: 16, textDecorationLine: 'underline'}}>
              {' '}
              Skip
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.registertext}>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={{fontFamily: 'HKGrotesk-Regular'}}>
              Don't have account?{' '}
              <Text style={{fontFamily: 'HKGrotesk-Bold', color: '#3FAD72'}}>
                {' '}
                Register
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  contianer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  firsttext: {
    marginBottom: hp('3%'),
    fontFamily: 'HKGrotesk-Bold',
  },

  Button: {
    marginTop: hp('3%'),
  },
  input1: {
    height: hp('10%'),
    borderColor: '#a9a9a9',
    borderWidth: 0.5,
    width: wp('90%'),
    borderRadius: 12,
  },

  input2: {
    height: hp('10%'),
    borderColor: '#a9a9a9',
    borderWidth: 0.5,
    width: wp('90%'),
    borderRadius: 12,
    marginTop: hp('1%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  inputcontent: {
    paddingVertical: hp('1%'),
    marginHorizontal: hp('2%'),
  },
  inputtext: {
    fontFamily: 'HKGrotesk-Bold',
  },

  textforgot: {
    marginTop: hp('2%'),
    fontFamily: 'HKGrotesk-Medium',
  },

  registertext: {
    marginTop: hp('2%'),
  },
});
