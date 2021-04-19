import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {Header, Left, Icon, Center, Right, Body} from 'native-base';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import StepIndicator from 'react-native-step-indicator';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import OnHold from '../components/OnHold';
import Delivered from '../components/Delivered';

const labels = ['Pending Payments', 'On Hold', 'Processing', 'Delivered'];
const stepIndicatorStyles = {
  stepIndicatorSize: 22,
  currentStepIndicatorSize: 22,
  separatorStrokeWidth: 3,
  currentStepStrokeWidth: 4,
  stepStrokeCurrentColor: '#3FAD72',
  stepStrokeWidth: 4,
  separatorStrokeFinishedWidth: 3,
  stepStrokeFinishedColor: '#3FAD72',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#3FAD72',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#FFFFFF',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 0,
  currentStepIndicatorLabelFontSize: 0,
  stepIndicatorLabelCurrentColor: '#fe7013',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#707070',
  labelSize: 15,
  labelAlign: 'center',

  currentStepLabelColor: '#3FAD72',
};

const TrackOrderDelivered = (props) => {
  const [onHold, setOnHold] = useState(true);
  const [delivered, setDeliverd] = useState(false);

  const renderLabel = ({position, label, currentPosition}) => {
    return (
      <View style={{alignItems: 'center'}}>
        <Text
          style={
            position === currentPosition
              ? styles.stepLabelSelected
              : styles.stepLabel
          }>
          {label}
        </Text>
      </View>
    );
  };
  useEffect(() => {
    if (props.route.params != undefined) {
      // console.log(props.route.params.values);
      setDeliverd(props.route.params.values);
      setOnHold(false);
    }
  });
  return (
    <>
      <Header style={{backgroundColor: 'transparent', elevation: 0}}>
        <Left style={{flex: 0.3}}>
          <Icon name="arrow-back" onPress={() => props.navigation.goBack()} />
        </Left>
        <Body style={{width: '80%', alignItems: 'center'}}>
          <Text style={{fontFamily: 'HKGrotesk-Regular', fontSize: 16}}>
            Order Detail
          </Text>
        </Body>
        <Right style={{flex: 0.3}}></Right>
      </Header>
      <ScrollView>
        <View>
          <View style={{alignItems: 'center', marginTop: hp('4%')}}>
            <Text style={{fontSize: 16, fontFamily: 'HKGrotesk-Regular'}}>
              Your order code:{' '}
              <Text style={{color: '#3FAD72', fontFamily: 'HKGrotesk-Regular'}}>
                #63134236
              </Text>
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginTop: hp('2%'),
              justifyContent: 'center',
            }}>
            <View style={styles.item}>
              <Text style={{color: '#3FAD72', fontFamily: 'HKGrotesk-Regular'}}>
                3 ITEMS
              </Text>
            </View>
            <View style={styles.total}>
              <Text style={{color: '#3FAD72', fontFamily: 'HKGrotesk-Regular'}}>
                $264.74
              </Text>
            </View>
          </View>

          <View
            style={{
              marginTop: hp('5%'),
              alignItems: 'flex-start',
              marginHorizontal: wp('10%'),
              height: 200,
            }}>
            <StepIndicator
              customStyles={stepIndicatorStyles}
              currentPosition={1}
              labels={labels}
              direction="vertical"
              stepCount={4}
              renderLabel={renderLabel}
            />
          </View>

          {onHold ? (
            <OnHold navigation={props.navigation} />
          ) : (
            <Delivered navigation={props.navigation} />
          )}
        </View>
        {/* ****** */}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  item: {
    height: hp('5%'),
    width: wp('38%'),
    backgroundColor: '#E4F2F0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  total: {
    height: hp('5%'),
    width: wp('38%'),
    backgroundColor: '#E4F2F0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginLeft: wp('3%'),
  },
  ratebutton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: wp('73%'),
    backgroundColor: '#E4F2F0',
    height: hp('5%'),
    borderRadius: 10,
    marginVertical: hp('2%'),
  },
  Buttonask: {
    height: hp('9%'),
    width: wp('90%'),
    backgroundColor: '#FB4B7B',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 18,
    marginTop: hp('2%'),
  },
  Buttonhelp: {
    height: hp('9%'),
    width: wp('90%'),
    backgroundColor: '#3FAD72',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 18,
    marginTop: hp('2%'),
  },
  mapcontainer: {
    height: hp('40%'),
    width: wp('100%'),
    marginTop: hp('4%'),
  },
  Buttontrack: {
    flexDirection: 'row',
    height: hp('9%'),
    width: wp('90%'),
    backgroundColor: '#3FAD72',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 18,
    marginTop: hp('2%'),
    alignSelf: 'center',
    marginBottom: hp('2%'),
  },
  stepLabel: {
    fontSize: 19,
    marginHorizontal: 30,

    color: '#707070',
    fontFamily: 'HKGrotesk-Medium',
  },
  stepLabelSelected: {
    fontSize: 19,
    marginHorizontal: 30,
    fontFamily: 'HKGrotesk-Medium',

    color: '#3FAD72',
  },
});

export default TrackOrderDelivered;
