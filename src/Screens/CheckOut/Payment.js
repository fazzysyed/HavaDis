import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Header, Left, Icon, Center, Right, Body, Card} from 'native-base';
import Button from '../../components/Button';
import OrderComplete from '../../popups/OrderComplete';

const Payment = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <Header style={{backgroundColor: 'transparent', elevation: 0}}>
        <Left style={{flex: 0.3}}>
          <Icon name="arrow-back" />
        </Left>
        <Body style={{width: '80%', alignItems: 'center'}}>
          <Text style={{fontSize: 16, fontFamily: 'HKGrotesk-Regular'}}>
            Checkout
          </Text>
        </Body>
        <Right style={{flex: 0.3}}></Right>
      </Header>
      <View style={{marginHorizontal: wp('2%')}}>
        <OrderComplete
          visible={modalVisible}
          handler={() => setModalVisible(false)}
        />
        {/* ********** */}
        <View>
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 17,
              color: '#444444',
              fontFamily: 'HKGrotesk-Regular',
            }}>
            Order Details
          </Text>
        </View>
        <View>
          <Card
            style={{
              padding: 10,
              marginTop: hp('1.5%'),
              paddingHorizontal: 15,
              backgroundColor: '#fff',
              borderRadius: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={styles.check}>
                  <Icon
                    name="check"
                    style={{color: '#FFF', fontSize: 21}}
                    type="AntDesign"
                  />
                </View>
                <View style={{paddingLeft: 4}}>
                  <Text
                    style={{
                      fontSize: 16,
                      color: '#828282',
                      fontFamily: 'HKGrotesk-Regular',
                    }}>
                    Item Name can go here{' '}
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: '#828282',
                      fontFamily: 'HKGrotesk-Regular',
                    }}>
                    Sub-heading or feature here..
                  </Text>
                </View>
              </View>
              <View>
                <Text
                  style={{
                    color: '#4C4C4C',
                    fontSize: 15,
                    fontFamily: 'HKGrotesk-Regular',
                  }}>
                  $250
                </Text>
              </View>
            </View>

            <View style={styles.underline}></View>

            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text
                style={{
                  color: '#828282',
                  fontSize: 16,
                  fontFamily: 'HKGrotesk-Regular',
                }}>
                Delivery Date
              </Text>
              <Text
                style={{
                  color: '#828282',
                  fontSize: 16,
                  fontFamily: 'HKGrotesk-Regular',
                }}>
                Sun, Nov,19, 2020
              </Text>
            </View>

            <View style={styles.underline}></View>

            <View>
              <Text style={{color: '#828282', fontSize: 16}}>
                Order Summary
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingTop: 3,
                }}>
                <Text
                  style={{
                    color: '#828282',
                    fontSize: 12,
                    fontFamily: 'HKGrotesk-Regular',
                  }}>
                  Sub Total
                </Text>
                <Text
                  style={{
                    color: '#828282',
                    fontSize: 12,
                    fontFamily: 'HKGrotesk-Regular',
                  }}>
                  $250
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingTop: 2,
                }}>
                <Text
                  style={{
                    color: '#828282',
                    fontSize: 12,
                    fontFamily: 'HKGrotesk-Regular',
                  }}>
                  Service Fee
                </Text>
                <Text
                  style={{
                    color: '#828282',
                    fontSize: 12,
                    fontFamily: 'HKGrotesk-Regular',
                  }}>
                  $50
                </Text>
              </View>
            </View>

            <View style={styles.underline}></View>

            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text
                style={{
                  color: '#828282',
                  fontSize: 15,
                  fontFamily: 'HKGrotesk-Regular',
                }}>
                Total
              </Text>
              <Text
                style={{
                  color: '#828282',
                  fontSize: 15,
                  fontFamily: 'HKGrotesk-Regular',
                }}>
                $300
              </Text>
            </View>
          </Card>
        </View>
        <View>
          <TouchableOpacity
            style={styles.shippingbutton}
            onPress={() => navigation.navigate('ShippingMethod')}>
            <Text
              style={{
                color: '#fff',
                fontSize: 15,
                fontFamily: 'HKGrotesk-Regular',
              }}>
              Shipping
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text
            style={{
              fontFamily: 'HKGrotesk-Regular',
              alignSelf: 'center',
              fontSize: 17,
              marginVertical: hp('1%'),
              color: '#444444',
            }}>
            Additional Comments
          </Text>
        </View>

        <View>
          <Card style={{padding: 10, paddingBottom: 18, borderRadius: 10}}>
            <Text
              style={{
                lineHeight: 18,
                fontSize: 12,
                color: '#828282',
                fontFamily: 'HKGrotesk-Regular',
              }}>
              What is Lorem Ipsum Lorem Ipsum is sim ply dummy text of the
              printing and typesetting industry Lorem Ipsum has been the
              industry's
            </Text>
          </Card>
        </View>

        <View style={{alignItems: 'center', marginTop: hp('6%')}}>
          <Button
            title="Confirm Payment"
            onPress={() => setModalVisible(true)}
          />
        </View>

        {/* ********** */}
      </View>

      {/* ********** */}
    </View>
  );
};

const styles = StyleSheet.create({
  underline: {
    width: wp('50%'),
    borderWidth: 0.5,
    alignSelf: 'center',
    borderColor: 'lightgrey',
    marginVertical: hp('1.5%'),
  },
  check: {
    width: wp('8%'),
    height: hp('4%'),
    backgroundColor: '#3FAD72',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shippingbutton: {
    height: hp('6%'),
    width: '60%',
    backgroundColor: '#3FAD72',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: hp('2%'),
  },
});

export default Payment;
