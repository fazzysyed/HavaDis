import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Icon} from 'native-base';
import RateExperince from '../popups/RateExperince'
import RefundRequest1 from '../popups/RefundRequest';
import RefundRequest from '../Screens/ReturnAndRefund/RefundRequest';

const onDelivered = (props,) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);

  
  return (
    <View>
        <RateExperince visible={modalVisible}  handler={() => setModalVisible(false)} />
        <RefundRequest visible={modalVisible1}  handler={() => setModalVisible1(false)} />

      <View>
        <TouchableOpacity style={styles.ratebutton}
        onPress={() => setModalVisible(true)}>
          <Icon style={{color: '#3FAD72', fontSize: 20}} name="star" />
          <Text style={{color: '#3FAD72', fontFamily: 'HKGrotesk-Regular'}}>
            {' '}
            Rate your experience
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity
          style={styles.Buttonask}
          onPress={() => setModalVisible1(true)}
          >
          <Text style={{color: '#FFF', fontFamily: 'HKGrotesk-Regular'}}>
            Ask for refund
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Buttonhelp}
        onPress={() => props.navigation.navigate('Chat')}>
          <Text style={{color: '#FFF', fontFamily: 'HKGrotesk-Regular'}}>
            Need Any Help?
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{alignItems: 'center', marginTop: hp('5%')}}>
        <Text style={{color: '#A9AFBD', fontFamily: 'HKGrotesk-Regular'}}>
          Proof of delivery
        </Text>
        {/* Image of Prooof */}
        <View style={{marginTop: hp('1%')}}>
          <Image
            style={{height: hp('40%'), width: wp('100%')}}
            source={require('../../assets/img2.jpg')}
          />
        </View>

        {/* Map */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default onDelivered;
