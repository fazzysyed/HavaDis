import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Header, Left, Icon, Center, Right, Body} from 'native-base';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
import Button from '../components/Button';
import CountryPicker, {
  getAllCountries,
  getCallingCode,
} from 'react-native-country-picker-modal';

const ContactSupport = () => {
  const [cca2, setCca2] = useState('Us');
  const [visible, setVisible] = useState(false);

  const [callingCode, setCallingCode] = useState('1');
  return (
    <View>
      <Header
        style={{
          backgroundColor: 'transparent',
          elevation: 0,
          borderBottomWidth: 1,
          borderBottomColor: 'lightgrey',
        }}>
        <Left style={{flex: 0.3}}>
          <Icon name="arrow-back" />
        </Left>
        <Body style={{width: '80%', alignItems: 'center'}}>
          <Text style={{fontFamily:'HKGrotesk-Regular', fontSize:16}}>Support</Text>
        </Body>
        <Right style={{flex: 0.3}}></Right>
      </Header>

      <View style={{marginHorizontal: wp('3%')}}>
        <View style={{marginTop: hp('2%')}}>
          <Text style={{fontFamily:'HKGrotesk-Bold', fontSize: 16}}>
            Or Write us your queries
          </Text>

          <Text style={{marginTop: hp('1%'), color: '#686565',fontFamily:'HKGrotesk-Regular'}}>
            Your words mean a lot to us.
          </Text>
        </View>

        <View>
          <View style={{marginTop: hp('2%')}}>
            <Text style={{fontSize: 13, color: '#686565',fontFamily:'HKGrotesk-Regular'}}>
              Enter your name
            </Text>
          </View>
          <View style={styles.input1}>
            <TextInput
              style={{paddingLeft: 10, width: wp('93%')}}
              placeholder="Christie Cheyne"
            />
          </View>
        </View>

        <View>
          <View style={{marginTop: hp('2%')}}>
            <Text style={{fontSize: 13, color: '#686565',fontFamily:'HKGrotesk-Regular'}}>
              Enter your phone number
            </Text>
          </View>

          <View
            style={{
              borderWidth: 1,
              borderRadius: 10,
              borderColor: '#EDECEC',
              alignItems: 'center',
              // paddingVertical: 15,
              height: 54,
              flexDirection: 'row',
            }}>
            <CountryPicker
              withFilter
              withCallingCode
              renderFlagButton={() => {
                return <Text />;
              }}
              visible={visible}
              onSelect={(value) => {
                console.log(value);

                setCca2(value.cca2);
                setCallingCode(value.callingCode);
              }}
              cca2={cca2}
              translation="eng"
            />
            <TouchableOpacity
              onPress={() => setVisible(!visible)}
              style={{marginHorizontal: 5}}>
              <Text
                style={{
                  fontFamily:'HKGrotesk-Regular',
                  fontSize: 16,
                  // padding: 3,
                }}>
                {`+${callingCode}`}
              </Text>
            </TouchableOpacity>

            <TextInput
              placeholder="Phone Number"
              keyboardType="number-pad"
              style={{width: '100%'}}
              focusable={true}
            />
          </View>
        </View>

        <View>
          <View style={{marginTop: hp('2%'), color: '#686565'}}>
            <Text style={{fontSize: 13,fontFamily:'HKGrotesk-Regular'}}>Enter Email</Text>
          </View>
          <View style={styles.input1}>
            <TextInput
              style={{paddingLeft: 10, width: wp('93%')}}
              placeholder="email@email.com"
            />
          </View>
        </View>

        <View>
          <View style={{marginTop: hp('2%')}}>
            <Text style={{fontSize: 13, color: '#686565',fontFamily:'HKGrotesk-Regular'}}>Message</Text>
          </View>
          <View style={styles.input4}>
            <TextInput
              multiline={true}
              style={{paddingLeft: 10, width: wp('93%')}}
              placeholder="Christie Cheyne"
            />
          </View>
        </View>

        <View style={{marginTop: hp('4%'), alignItems: 'center'}}>
          <Button title="Submit" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input1: {
    marginTop: hp('1%'),
    width: wp('93%'),
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#EAEAEA',
    height: hp('7%'),
    justifyContent: 'center',
  },
  input2: {
    flexDirection: 'row',
    marginTop: hp('1%'),
    width: wp('93%'),
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#EAEAEA',
    height: hp('7%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  input4: {
    marginTop: hp('1%'),
    width: wp('93%'),
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#EAEAEA',
    height: hp('20%'),
  },
});

export default ContactSupport;
