import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {Header, Left, Icon, Center, Right, Body} from 'native-base';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Button from '../../components/Button';
import Cardc from '../../components/Cardc';

const PaymentMethod = ({navigation}) => {
  const [ios, setIos] = useState(false)

  useEffect(()=>{
    if (Platform.OS === 'ios') {
      setIos(true)
    }
  })
  return (
    <ScrollView>
      <Header
        style={{
          backgroundColor: 'transparent',
          elevation: 0,
          borderBottomWidth: 1,
          borderBottomColor: 'lightgrey',
        }}>
        <Left style={{flex: 0.3}}>
          <Icon name="arrow-back" onPress={() => navigation.goBack()} />
        </Left>
        <Body style={{width: '80%', alignItems: 'center'}}>
          <Text style={{fontFamily: 'HKGrotesk-Regular', fontSize: 16}}>
            Payment
          </Text>
        </Body>
        <Right style={{flex: 0.3}}></Right>
      </Header>
      <View style={{marginHorizontal: wp('4%')}}>
        {/* ********** */}
        <View>
          <Cardc />
        </View>
        {ios?
        <TouchableOpacity style={styles.firstrow}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="apple1" type="AntDesign" />
            <Text style={{paddingLeft: 10, fontFamily: 'HKGrotesk-Regular'}}>
              applepay@apple.com
            </Text>
          </View>

          <View>
            <TouchableOpacity style={styles.button1}>
              <Text style={{color: '#fff', fontFamily: 'HKGrotesk-Regular'}}>
                Default
              </Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity> : null}
        {/* 2Nd row */}
        <TouchableOpacity style={styles.firstrow2}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon style={{color: '#E2574C'}} name="google" type="AntDesign" />
            <Text style={{paddingLeft: 10, fontFamily: 'HKGrotesk-Regular'}}>
              google@googleplay.com
            </Text>
          </View>

          <View></View>
        </TouchableOpacity>

        {/* 3RD Row */}
        <TouchableOpacity style={styles.firstrow3}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              style={{height: wp('5%'), width: wp('10%')}}
              source={require('../../../assets/paypal.jpg')}
            />
            <Text style={{paddingLeft: 10, fontFamily: 'HKGrotesk-Regular'}}>
              email@paypal.com
            </Text>
          </View>

          <View>
            <TouchableOpacity>
              <Icon
                style={{color: '#AEAEBF', fontSize: 20}}
                name="right"
                type="AntDesign"
              />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        {/* 4th Row */}

        <TouchableOpacity style={styles.firstrow4}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              style={{height: wp('5%'), width: wp('10%')}}
              source={require('../../../assets/mastercard.png')}
            />
            <Text style={{paddingLeft: 10, fontFamily: 'HKGrotesk-Regular'}}>
              4221 **** **** 9018
            </Text>
          </View>

          <View>
            <TouchableOpacity>
              <Icon
                style={{color: '#AEAEBF', fontSize: 20}}
                name="right"
                type="AntDesign"
              />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>

        {/* 5th Row */}
        <TouchableOpacity
          style={styles.firstrow5}
          onPress={() => navigation.navigate('AddPayment')}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon
              style={{color: '#3FAD72'}}
              name="payment"
              type="MaterialIcons"
            />
            <Text style={{paddingLeft: 10, fontFamily: 'HKGrotesk-Regular'}}>
              Add new payment method
            </Text>
          </View>

          <View>
            <TouchableOpacity style={styles.plus}>
              <Icon
                style={{color: '#AEAEBF', fontSize: 20}}
                name="plus"
                type="AntDesign"
              />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>

        <View style={{alignSelf: 'center', marginVertical: hp('3%')}}>
          <Button title="Next" />
        </View>

        {/* ********** */}
      </View>
      {/* **************** */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  firstrow: {
    height: hp('8%'),
    borderWidth: 1,
    borderColor: '#3FAD72',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },

  firstrow2: {
    height: hp('8%'),
    borderWidth: 0.5,
    borderColor: 'lightgrey',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginTop: hp('1%'),
  },

  firstrow3: {
    height: hp('8%'),
    borderWidth: 0.5,
    borderColor: 'lightgrey',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginTop: hp('1%'),
  },

  firstrow4: {
    height: hp('8%'),
    borderWidth: 0.5,
    borderColor: 'lightgrey',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginTop: hp('1%'),
  },

  firstrow5: {
    height: hp('8%'),
    borderWidth: 0.5,
    borderColor: 'lightgrey',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginTop: hp('1%'),
  },
  button1: {
    height: hp('4%'),
    width: wp('23%'),
    backgroundColor: '#3FAD72',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  plus: {
    height: hp('3%'),
    width: wp('6%'),
    backgroundColor: '#F6F4F4',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PaymentMethod;
