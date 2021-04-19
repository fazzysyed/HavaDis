import {Icon} from 'native-base';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Alert,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function ProductDetailAdttionalInformationTab({navigation}) {
  return (
    <ImageBackground
      resizeMode="stretch"
      style={{
        width: wp('90%'),
        height: 100,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 50,
      }}
      source={require('../../assets/black.png')}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '80%',
          alignItems: 'center',
        }}>
        <View>
          <Text style={{color: '#FFF', fontSize: 18}}>Store title</Text>
          <Text style={{fontSize: 17, color: '#AFAFAF'}}>Category</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('SellerDetail')}>
            <Text style={{color: '#000'}}>VISIT STORE</Text>
          </TouchableOpacity>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: hp('0.5%'),
            }}>
            <Icon style={{fontSize: 18, color: '#FFF'}} name="star" />
            <Text style={{color: '#FFF'}}>4.90</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  btn: {
    height: hp('5%'),
    width: wp('30%'),
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#FFF',
  },
});
