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
  FlatList,
  Alert
} from 'react-native';
import Button from './Button';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
import {Icon} from 'native-base';
import CheckBox from '@react-native-community/checkbox';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const types = [
  {
    id: '1',
    name: 'Havazuse',
    selected: false,
  },
  {
    id: '2',
    name: 'Havazuse Plus',
    selected: false,
  },
  {
    id: '3',
    name: 'Havazuse Bemo',
    selected: false,
  },
];
const Registration = ({navigation}) => {
  // const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(true);
  const [toggleCheckBox, setToggleCheckBox] = useState();
  const [toggleCheckBox2, setToggleCheckBox2] = useState();
  const [toggleCheckBox3, setToggleCheckBox3] = useState();
  const [havause, setHavause]= useState("")
  const [havausePlus, setHavausePlus]= useState("")
  const [havauseBemo, setHavauseBemo]= useState("")
  const [selected, setSelected] = useState('');
  const [Signupdata, setSignupdata]=useState({
    firstName : '',
    lastName : '',
    businessName : '',
    password : '',
    country : '',
    city : '',
    streetAddress : '',
    postalCode : '',
    phoneNumber : '',
    message : '',
    
  })

  const {firstName, lastName, businessName, password,
        country, city, streetAddress, postalCode, phoneNumber,message} = Signupdata;
       
       
 const Signup = () => {
          if(!firstName){
            Alert.alert('First Name is required')
        }
         else if(!lastName){
             Alert.alert('Last Name is required')
          }
          else if(!businessName){
             Alert.alert('Email is required')
          }
          else if (!password){
             Alert.alert('Password is required')
          }
          else if(!country){
            Alert.alert('Last Name is required')
            }
            else if(!city){
              Alert.alert('Last Name is required')
          }
          else if(!streetAddress){
            Alert.alert('Last Name is required')
        }
        else if(!postalCode){
          Alert.alert('Last Name is required')
      }
        else if(!phoneNumber){
          Alert.alert('Last Name is required')
      }
          else{
            auth()
            .createUserWithEmailAndPassword(businessName, password)
            .then(()=>{
              firestore()
              .collection('VendorUsers')
              .add({
                FirstName: firstName,
                LastName: lastName,
                BusinessName: businessName,
                Country: country,
                City: city,
                StreetAddress: streetAddress,
                PostalCode: postalCode,
                PhoneNumber: phoneNumber,
                Message: message,
                Havause: havause,
                HavausePlus: havausePlus,
                havauseBemo:havauseBemo,
                havauseBemo:false,

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
  // const handleSelection = (id) => {
  //   console.log(id);
  //   var selectedId = selected;

  //   if (selectedId === id) setSelected(null);
  //   else setSelected(id);
  // };
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
              onChangeText={(text) => handleOnChange('firstName', text)}
              value={firstName}
              placeholder="Alexander"
            />
          </View>
        </View>

        <View style={styles.input1}>
          <View style={styles.inputcontent}>
            <Text style={styles.inputtext}>Last Name</Text>
            <TextInput
              style={{width: wp('75%'), height: hp('5%'), alignItems: 'center'}}
              onChangeText={(text) => handleOnChange('lastName', text)}
              value={lastName}
              placeholder="Ben"
            />
          </View>
        </View>

        <View style={styles.input1}>
          <View style={styles.inputcontent}>
            <Text style={styles.inputtext}>Business Name</Text>
            <TextInput
              style={{width: wp('75%'), height: hp('5%'), alignItems: 'center'}}
              onChangeText={(text) => handleOnChange('businessName', text)}
              value={businessName}
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
                secureTextEntry={showPass}
                onChangeText={(text) => handleOnChange('password', text)}
              value={password}
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
            <Text style={styles.inputtext}> Country</Text>
            <TextInput
              style={{width: wp('75%'), height: hp('5%'), alignItems: 'center'}}
              onChangeText={(text) => handleOnChange('country', text)}
              value={country}
              placeholder="Brazil"
            />
          </View>
        </View>

        <View style={styles.input1}>
          <View style={styles.inputcontent}>
            <Text style={styles.inputtext}>City</Text>
            <TextInput
              style={{width: wp('75%'), height: hp('5%'), alignItems: 'center'}}
              onChangeText={(text) => handleOnChange('city', text)}
              value={city}
              placeholder="Rao"
            />
          </View>
        </View>

        <View style={styles.input1}>
          <View style={styles.inputcontent}>
            <Text style={styles.inputtext}>Street Address</Text>
            <TextInput
              style={{width: wp('75%'), height: hp('5%'), alignItems: 'center'}}
              onChangeText={(text) => handleOnChange('streetAddress', text)}
              value={streetAddress}
              placeholder="Rio"
            />
          </View>
        </View>

        <View style={styles.input1}>
          <View style={styles.inputcontent}>
            <Text style={styles.inputtext}>Postal Code</Text>
            <TextInput
              style={{width: wp('75%'), height: hp('5%'), alignItems: 'center'}}
              onChangeText={(text) => handleOnChange('postalCode', text)}
              value={postalCode}
              placeholder="01000"
            />
          </View>
        </View>

        <View style={styles.input1}>
          <View style={styles.inputcontent}>
            <Text style={styles.inputtext}>Phone Number</Text>
            <TextInput
              style={{width: wp('75%'), height: hp('5%'), alignItems: 'center'}}
              onChangeText={(text) => handleOnChange('phoneNumber', text)}
              value={phoneNumber}
              placeholder="01000"
            />
          </View>
        </View>

        <View style={styles.infotext}>
          <Text
            style={{
              fontSize: 17,
              color: 'grey',
              fontFamily: 'HKGrotesk-Regular',
            }}>
            Your Choice
          </Text>
        </View>

        <View style={styles.input3}>
          <View style={styles.inputcontent}>
            <Text style={styles.inputtext}>Tell Us What You Want to do</Text>
            <TextInput
              multiline={true}
              onChangeText={(text) => handleOnChange('message', text)}
              value={message}
              placeholder="01000"
            />
          </View>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <CheckBox
            value={toggleCheckBox}
            onValueChange={(value) => {
              setToggleCheckBox(value);
            }}
            
          />
          <View>
            <Text style={{paddingLeft: 10, fontFamily: 'HKGrotesk-Bold'}}>
              Havause
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <CheckBox
            value={toggleCheckBox2}
            onValueChange={(value) => {
              setToggleCheckBox2(value);
            }}
           

          />
          <View>
            <Text style={{paddingLeft: 10, fontFamily: 'HKGrotesk-Bold'}}>
              Havause PLUS
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <CheckBox
            value={toggleCheckBox3}
            onValueChange={(value) => {
              setToggleCheckBox3(value);
              
            }}
            


          />
          <View>
            <Text style={{paddingLeft: 10, fontFamily: 'HKGrotesk-Bold'}}>
              Havause BEMO
            </Text>
          </View>
        </View>

        <View style={{marginTop: hp('1%')}}>
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
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={{fontFamily: 'HKGrotesk-Regular'}}>Sign in</Text>
            </TouchableOpacity>
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
    justifyContent: 'space-between',
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

export default Registration;
