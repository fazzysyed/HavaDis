import React from 'react';
import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Navigation from '../navigation';

const WelcomeScreen = ({navigation}) => {
  return (
    <View>
      <ImageBackground
        style={{height: '100%', width: '100%'}}
        source={require('../../assets/welcome.png')}>
        <View>
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 19,
              marginTop: hp('7%'),
              color: '#FFF',
            }}>
            Welcome to
          </Text>
          <View style={{marginHorizontal: wp('10%')}}>
            <View style={{marginTop: hp('1%')}}>
              <Image
                style={{height: hp('6%'), width: wp('80%')}}
                resizeMode="contain"
                source={require('../../assets/bemowhite.png')}
              />
            </View>

            <View style={{marginTop: hp('2.5%')}}>
              <Text style={{fontWeight: 'bold', fontSize: 15, color: '#FFF'}}>
                What is HAVAZUSE BEMO?
              </Text>
              <Text style={{marginTop: hp('1%'), color: '#FFF'}}>
                BEMO stand for best exclusive manufacture item on demand
              </Text>
            </View>

            <View style={{marginTop: hp('2%')}}>
              <Text style={{fontWeight: 'bold', fontSize: 15, color: '#FFF'}}>
                What kind of services does {'\n'}bemo promote
              </Text>
              <Text style={{marginTop: hp('1%'), color: '#FFF'}}>
                1. Fast Supplies
              </Text>
              <Text style={{marginTop: hp('0.3%'), color: '#FFF'}}>
                2. 100% authenticity
              </Text>
              <Text style={{marginTop: hp('0.3%'), color: '#FFF'}}>
                3. Best quality
              </Text>
              <Text style={{marginTop: hp('0.3%'), color: '#FFF'}}>
                4. Warranty and free replacement
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: hp('8%'),
              }}>
              <View style={{alignItems: 'center'}}>
                <View style={styles.circle1}>
                  <Text style={{color: '#999999'}}>100%</Text>
                </View>
                <Text style={{marginTop: hp('2%'), color: '#666E75'}}>
                  Good Value
                </Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <View style={styles.circle1}>
                  <Text style={{color: '#999999'}}>100%</Text>
                </View>
                <Text style={{marginTop: hp('2%'), color: '#666E75'}}>
                  Good Qaulity
                </Text>
              </View>

              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Bemo')}>
                <Text style={{color: '#FFF'}}>Next</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  circle1: {
    height: hp('9%'),
    width: wp('18.5%'),
    borderWidth: 5,
    borderRadius: 35,
    borderColor: '#3FAD72',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  button: {
    height: hp('4%'),
    width: wp('24%'),
    borderRadius: 5,
    backgroundColor: '#3FAD72',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('2%'),
  },
});

export default WelcomeScreen;
