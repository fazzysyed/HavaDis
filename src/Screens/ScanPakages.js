import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Header, Left, Icon, Center, Right, Body} from 'native-base';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import SwipeButton from 'rn-swipe-button';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

const ScanPakages = () => {
  const onSuccess = () => {
    console.log('compelte');
  };
  return (
    <View>
      <Header style={{backgroundColor: 'transparent', elevation: 0}}>
        <Left style={{flex: 0.3}}>
          <Icon name="menu" />
        </Left>
        <Body style={{width: '80%', alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold'}}>SCAN PAKAGES</Text>
        </Body>
        <Right style={{flex: 0.3}}></Right>
      </Header>
      <View>
        {/* ********* */}

        <QRCodeScanner
          onRead={onSuccess}
          cameraStyle={{overflow: 'hidden'}}
          cameraProps={{ratio: '1:1'}}
          containerStyle={{height: 400}}
          cameraStyle={{
            height: 60,
            marginTop: 0,
            width: 300,
            alignSelf: 'center',
            justifyContent: 'center',
          }}
          // flashMode={RNCamera.Constants.FlashMode.torch}
          // topContent={
          //   <Text style={styles.centerText}>
          //     Go to{' '}
          //     <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text>{' '}
          //     on your computer and scan the QR code.
          //   </Text>
          // }
          bottomContent={
            <TouchableOpacity style={styles.buttonTouchable}>
              <Text style={styles.buttonText}>OK. Got it!</Text>
            </TouchableOpacity>
          }
        />

        {/* ******** */}
      </View>
      {/* ********** */}
    </View>
  );
};

const styles = StyleSheet.create({
  centerText: {
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },

  count: {
    height: hp('2.5%'),
    width: wp('5.3%'),
    backgroundColor: '#000',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn1: {
    height: hp('8%'),
    width: wp('94%'),
    borderWidth: 1,
    borderRadius: 10,
    marginTop: hp('1%'),
    borderColor: 'lightgrey',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  check: {
    height: hp('2.5%'),
    width: wp('5.3%'),
    borderWidth: 1,
    backgroundColor: '#FFF',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn2: {
    height: hp('8%'),
    width: wp('94%'),
    borderWidth: 1,
    borderRadius: 10,
    marginTop: hp('2.5%'),
    borderColor: 'lightgrey',
    justifyContent: 'center',
    paddingLeft: 25,
  },
  btn3: {
    height: hp('8%'),
    width: wp('94%'),
    borderWidth: 1,
    borderRadius: 10,
    marginTop: hp('1%'),
    borderColor: '#3FAD72',
    justifyContent: 'center',
    paddingLeft: 25,
    paddingRight: 20,
  },
  btn4: {
    height: hp('8%'),
    width: wp('94%'),
    borderWidth: 1,
    borderRadius: 10,
    marginTop: hp('1%'),
    borderColor: 'lightgrey',
    justifyContent: 'center',
    paddingLeft: 25,
  },
});

export default ScanPakages;
