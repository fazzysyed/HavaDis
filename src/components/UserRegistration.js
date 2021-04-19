import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Alert
} from 'react-native';
import Button from './Button';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
import {Icon} from 'native-base';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';



const UserRegistration = ({navigation}) => {
  // const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(true);

  const [Signupdata, setSignupdata]=useState({
                      firstName : '',
                      lastName : '',
                      email :'',
                      password : '',
                      
                    })

    const {firstName, lastName, email, password,} = Signupdata;
    const Signup = () => {
      if(!firstName){
        Alert.alert('First Name is required')
    }
     else if(!lastName){
         Alert.alert('Last Name is required')
      }
      else if(!email){
         Alert.alert('Email is required')
      }
      else if (!password){
         Alert.alert('Password is required')
      }

      else{
        auth()
        .createUserWithEmailAndPassword(email, password)
        .then(()=>{
        let uid = auth().currentUser.uid;
          firestore()
          .collection('SimpleUsers')
          .doc(uid)
          .set({
            firstName: firstName,
            lastName: lastName,
          })
          .then(() => {
              navigation.navigate('Havause')
          });
        })
      }
      
    }
    
    const handleOnChange = (name , value) => {
      setSignupdata({
          ...Signupdata,
          [name]: value,
      })
  }

  return (
    <ScrollView>
      <View style={styles.contianer}>
        <View style={styles.infotext}>
          <Text
            style={{
              fontSize: 17,
              color: 'grey',
              fontFamily: 'HKGrotesk-Regular',
            }}>
            Personal Information
          </Text>
        </View>
        <View style={styles.input1}>
          <View style={styles.inputcontent}>
            <Text style={styles.inputtext}>First Name</Text>
            <TextInput
              style={{width: wp('75%'), height: hp('5%'), alignItems: 'center'}}
              value={firstName}
              onChangeText={(text) => handleOnChange('firstName', text)}
               placeholder="Alexander"
            />
          </View>
        </View>

        <View style={styles.input1}>
          <View style={styles.inputcontent}>
            <Text style={styles.inputtext}>Last Name</Text>
            <TextInput
              style={{width: wp('75%'), height: hp('5%'), alignItems: 'center'}}
              value={lastName}
              onChangeText={(text) => handleOnChange('lastName', text)}
              placeholder="Ben"
            />
          </View>
        </View>

        <View style={styles.input1}>
          <View style={styles.inputcontent}>
            <Text style={styles.inputtext}>Email</Text>
            <TextInput
              style={{width: wp('75%'), height: hp('5%'), alignItems: 'center'}}
              value={email}
              onChangeText={(text) => handleOnChange('email', text)}
              placeholder="email@email.com"
            />
          </View>
        </View>

        <View style={styles.input2}>
          <View style={styles.inputcontent}>
            <Text style={styles.inputtext}>Password</Text>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <TextInput
                style={{
                  width: wp('75%'),
                  height: hp('5%'),
                  alignItems: 'center',
                }}
                value={password}
                secureTextEntry={showPass}
                onChangeText={(text) => handleOnChange('password', text)}
                placeholder="password"
              />
              <TouchableOpacity onPress={() => setShowPass(!showPass)}>
                <Icon
                  type="FontAwesome"
                  name="eye"
                  style={{fontSize: 20, marginHorizontal: 10}}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{alignItems: 'center', marginTop: hp('4%')}}>
          <Button
            title="Register"
            onPress={() => Signup()}
          />
        </View>

        <View
          style={{
            justifyContent: 'center',
            marginVertical: hp('2%'),
            marginHorizontal: hp('5%'),
          }}>
          <Text style={{textAlign: 'center', fontFamily: 'HKGrotesk-Regular'}}>
            By Signing in you agree with{' '}
            <Text style={{textDecorationLine: 'underline'}}>
              Privacy Policy
            </Text>{' '}
            &{' '}
            <Text style={{textDecorationLine: 'underline'}}>
              Terms of Services
            </Text>
          </Text>
        </View>

        <View style={styles.signintext}>
          <Text style={{fontFamily: 'HKGrotesk-Regular'}}>
            Already a member?{' '}
            <Text style={{fontFamily: 'HKGrotesk-Regular'}}>Sign in</Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contianer: {
    justifyContent: 'center',

    backgroundColor: '#FFF',
    marginHorizontal: wp('3%'),
  },
  infotext: {
    marginVertical: hp('1%'),
    alignItems: 'flex-start',
  },
  input1: {
    height: hp('9%'),
    borderColor: '#a9a9a9',
    borderWidth: 1,
    width: wp('93%'),
    borderRadius: 12,
    alignSelf: 'center',
    marginVertical: hp('0.7%'),
  },
  inputcontent: {
    marginVertical: wp('2%'),
    marginHorizontal: hp('2%'),
  },
  inputtext: {
    fontFamily: 'HKGrotesk-Bold',
  },
  input2: {
    height: hp('9%'),
    borderColor: 'gray',
    borderWidth: 1,
    width: wp('93%'),
    borderRadius: 12,
    marginTop: hp('1%'),
    flexDirection: 'row',
  },

  input3: {
    height: hp('25%'),
    borderColor: '#a9a9a9',
    borderWidth: 1,
    width: wp('93%'),
    borderRadius: 12,
    alignSelf: 'center',
    marginVertical: hp('0.7%'),
    marginBottom: hp('2%'),
  },
  signintext: {
    alignItems: 'center',
  },
});

export default UserRegistration;
