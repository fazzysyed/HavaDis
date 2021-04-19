import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import Header from '../components/Header';
import {Card, CardItem, Body, Icon, Row, Left, Right} from 'native-base';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Button from '../components/Button';

export default function App({navigation}) {
  return (
    <>
      <Header left={() => navigation.goBack()} />
      <ScrollView>
        {/* <StatusBar barStyle="#FFF" /> */}

        <View style={styles.logo}>
          <Image
            source={require('../../assets/logopluss.png')}
            style={{height: hp('3%'), width: wp('60%')}}
          />
        </View>

        <View>
          <Card style={styles.card2}>
            <CardItem style={styles.carditem1}>
              <Image
                source={require('../../assets/passport.png')}
                style={{height: 100, width: wp('50%')}}
              />
            </CardItem>
            <CardItem style={styles.cardtextw}>
              <Text
                style={{
                  textAlign: 'center',
                  bottom: hp('4%'),
                  fontFamily: 'HKGrotesk-Regular',
                }}>
                Customer must be 21 or older {'\n'} to purchase items
              </Text>
            </CardItem>
            <CardItem style={styles.cardtext1}>
              <Text
                style={{
                  textAlign: 'center',
                  bottom: hp('4%'),
                  fontFamily: 'HKGrotesk-Regular',
                }}>
                Take a passport or ID to check{'\n'}your information
              </Text>
            </CardItem>

            <CardItem>
              <Left>
                <View style={styles.cardicon}>
                  <TouchableWithoutFeedback
                    onPress={() => navigation.navigate('IdVerification')}>
                    <Image source={require('../../assets/icon.png')} />
                  </TouchableWithoutFeedback>
                </View>
                <View style={{marginLeft: wp('5%')}}>
                  <Text style={{fontFamily: 'HKGrotesk-Bold'}}>
                    ID Verification
                  </Text>
                  <Text
                    style={{color: '#3FAD72', fontFamily: 'HKGrotesk-Regular'}}>
                    Uploaded
                  </Text>
                </View>
              </Left>
              {/* <Body> */}

              {/* </Body> */}
              <Right>
                <View>
                  <View>
                    <Image
                      source={require('../../assets/good.png')}
                      resizeMode="contain"
                      style={{height: 25, width: 30}}
                    />
                  </View>
                </View>
              </Right>
            </CardItem>
          </Card>
        </View>

        <View>
          <Card style={styles.card2}>
            <CardItem style={styles.carditem2}>
              <Image source={require('../../assets/user.png')} />
            </CardItem>
            <CardItem style={styles.cardtext1}>
              <Text
                style={{
                  textAlign: 'center',
                  bottom: hp('4%'),
                  fontFamily: 'HKGrotesk-Regular',
                }}>
                Selfie with your front camera{'\n'}to verify your identity
              </Text>
            </CardItem>

            <CardItem>
              <Left>
                <View style={styles.cardicon}>
                  <TouchableWithoutFeedback
                    onPress={() => navigation.navigate('SelfieVerification')}>
                    <Image
                      source={require('../../assets/Shape.png')}
                      style={{height: 20, width: 20}}
                    />
                  </TouchableWithoutFeedback>
                </View>
                <View style={{marginLeft: wp('5%')}}>
                  <Text style={{fontFamily: 'HKGrotesk-Bold'}}>
                    Selfie Verification
                  </Text>
                  <Text
                    style={{color: '#3FAD72', fontFamily: 'HKGrotesk-Regular'}}>
                    Uploading...
                  </Text>
                </View>
              </Left>
              {/* <Body> */}

              {/* </Body> */}
            </CardItem>
          </Card>
        </View>
        <View style={styles.button}>
          <Button
            title="Submit"
            onPress={() => navigation.navigate('Pending')}
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
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  logo: {marginVertical: hp('2%'), alignSelf: 'center'},
  card: {
    width: wp('90%'),
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: '#FFF',
    // height:hp('35%'),
    justifyContent: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 0.5,
  },

  card2: {
    marginTop: hp('3%'),
    width: wp('90%'),
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: '#FFF',
    borderColor: 'transparent',
    // height:hp('35%'),

    shadowColor: '#FFF',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 8,
  },
  carditem1: {
    alignSelf: 'center',
    bottom: hp('3%'),
    backgroundColor: 'transparent',
  },
  carditem2: {
    alignSelf: 'center',
    bottom: '7%',
    backgroundColor: 'transparent',
  },
  cardtext1: {
    borderBottomWidth: 0.5,
    justifyContent: 'center',
    borderColor: 'lightgrey',
  },
  cardtextw: {
    justifyContent: 'center',
  },
  cardicon: {
    backgroundColor: '#F8F8FA',
    height: 60,
    width: 60,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    marginVertical: hp('1%'),

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
});
