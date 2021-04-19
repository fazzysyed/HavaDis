import React, {useState} from 'react';
import {Card, Icon} from 'native-base';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Modal from 'react-native-modal';

const OrderDetails = (props) => {
  return (
    <View>
      <Modal
        animationType={'slide'}
        transparent={true}
        // backdropColor={'black'}
        // backdropOpacity={1}
        style={{
          width: wp('100%'),
          marginLeft: 0,
          justifyContent: 'flex-end',
          marginBottom: 0,
        }}
        visible={props.visible}>
        <View>
          <Card style={{padding: 10, borderRadius: 15}}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <TouchableOpacity
                style={{alignSelf: 'flex-end'}}
                onPress={props.visibleHandler}>
                <Icon style={{color: 'grey'}} name="close-o" type="EvilIcons" />
              </TouchableOpacity>
              <View style={{alignSelf: 'center'}}>
                <Text style={{fontFamily: 'HKGrotesk-Bold', fontSize: 18}}>
                  Payment Information
                </Text>
              </View>
              {/* 2nd card */}
              <Card
                style={{
                  padding: 15,
                  marginTop: hp('2%'),
                  borderRadius: 10,
                  backgroundColor: '#3FAD72',
                }}>
                <View style={{flexDirection: 'row'}}>
                  <View style={{backgroundColor: '#fff', borderRadius: 10}}>
                    <Image style={styles.Image} source={{}} />
                  </View>
                  <View
                    style={{
                      borderWidth: 0.5,
                      borderColor: '#fff',
                      marginHorizontal: wp('4%'),
                    }}></View>
                  <View style={{paddingLeft: 10}}>
                    <Text
                      style={{
                        fontFamily: 'HKGrotesk-Bold',
                        fontSize: 15,
                        color: '#FFF',
                      }}>
                      Product Name
                    </Text>
                    <Text
                      style={{
                        fontSize: 13,
                        color: '#FFF',
                        fontFamily: 'HKGrotesk-Regular',
                      }}>
                      Description
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        marginVertical: hp('0.9%'),
                      }}>
                      <Icon
                        style={{fontSize: 24, color: '#FFF'}}
                        name="location"
                        type="EvilIcons"
                      />
                      <Text
                        style={{
                          fontSize: 13,
                          color: '#FFF',
                          fontFamily: 'HKGrotesk-Regular',
                        }}>
                        114 Village Post Road{' '}
                      </Text>
                    </View>

                    <Text
                      style={{
                        fontFamily: 'HKGrotesk-Bold',
                        fontSize: 15,
                        color: '#FFF',
                      }}>
                      $250
                    </Text>
                  </View>
                </View>
              </Card>

              <View style={{marginTop: hp('1%')}}>
                <TouchableOpacity style={styles.payment}>
                  <Text
                    style={{
                      color: '#FFF',
                      fontFamily: 'HKGrotesk-Bold',
                      fontSize: 16,
                    }}>
                    Payment {'\n'} Method
                  </Text>
                  <Icon
                    style={{color: '#FFF', fontSize: 25}}
                    name="rightcircle"
                    type="AntDesign"
                  />
                </TouchableOpacity>
              </View>

              <View style={{marginTop: hp('1.5%')}}>
                <TouchableOpacity style={styles.payment}>
                  <Text
                    style={{
                      color: '#FFF',
                      fontFamily: 'HKGrotesk-Bold',
                      fontSize: 16,
                    }}>
                    Payment {'\n'} Method
                  </Text>
                  <Icon
                    style={{color: '#FFF', fontSize: 25}}
                    name="rightcircle"
                    type="AntDesign"
                  />
                </TouchableOpacity>
              </View>

              <View style={{marginTop: hp('1.5%')}}>
                <TouchableOpacity style={styles.shipping}>
                  <Text
                    style={{
                      color: '#FFF',
                      fontFamily: 'HKGrotesk-Bold',
                      fontSize: 16,
                    }}>
                    Payment {'\n'} Method
                  </Text>
                  <View
                    style={{
                      borderWidth: 0.5,
                      height: hp('6%'),
                      borderColor: '#fff',
                      marginHorizontal: wp('4%'),
                    }}></View>
                  <View>
                    <Text
                      style={{color: '#FFF', fontFamily: 'HKGrotesk-Regular'}}>
                      77, Wallas Street
                    </Text>
                  </View>
                  <Icon
                    style={{color: '#FFF', fontSize: 25}}
                    name="leftcircle"
                    type="AntDesign"
                  />
                </TouchableOpacity>
              </View>

              <View>
                <Card
                  style={{padding: 10, borderRadius: 10, marginTop: hp('2%')}}>
                  <View style={{alignSelf: 'center'}}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontFamily: 'HKGrotesk-Bold',
                        color: 'grey',
                      }}>
                      Order Summary
                    </Text>
                  </View>
                  <View
                    style={{
                      borderWidth: 0.5,
                      borderColor: 'lightgrey',
                      marginTop: 5,
                    }}></View>

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginTop: 5,
                    }}>
                    <Text
                      style={{color: 'grey', fontFamily: 'HKGrotesk-Regular'}}>
                      Items
                    </Text>
                    <Text
                      style={{color: 'grey', fontFamily: 'HKGrotesk-Regular'}}>
                      $ 295.00
                    </Text>
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginTop: 5,
                    }}>
                    <Text
                      style={{color: 'grey', fontFamily: 'HKGrotesk-Regular'}}>
                      Shipping & Handling
                    </Text>
                    <Text
                      style={{color: 'grey', fontFamily: 'HKGrotesk-Regular'}}>
                      $ 10.15
                    </Text>
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginTop: 5,
                    }}>
                    <Text
                      style={{color: 'grey', fontFamily: 'HKGrotesk-Regular'}}>
                      Free Shipping
                    </Text>
                    <Text
                      style={{color: 'grey', fontFamily: 'HKGrotesk-Regular'}}>
                      -$ 10.15
                    </Text>
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginTop: 5,
                    }}>
                    <Text
                      style={{color: 'grey', fontFamily: 'HKGrotesk-Regular'}}>
                      Total Before Tax:
                    </Text>
                    <Text
                      style={{color: 'grey', fontFamily: 'HKGrotesk-Regular'}}>
                      $ 295.98
                    </Text>
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginTop: 5,
                    }}>
                    <Text
                      style={{color: 'grey', fontFamily: 'HKGrotesk-Regular'}}>
                      Estimated Tax Collected
                    </Text>
                    <Text
                      style={{color: 'grey', fontFamily: 'HKGrotesk-Regular'}}>
                      $ 14.75
                    </Text>
                  </View>
                  <View
                    style={{
                      borderWidth: 0.5,
                      borderColor: 'lightgrey',
                      marginTop: 5,
                    }}></View>

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginTop: hp('1%'),
                    }}>
                    <Text style={{fontFamily: 'HKGrotesk-Bold', fontSize: 18}}>
                      Order Total
                    </Text>
                    <Text
                      style={{
                        fontFamily: 'HKGrotesk-Bold',
                        fontSize: 18,
                        color: '#3FAD72',
                      }}>
                      $310.73
                    </Text>
                  </View>
                </Card>
              </View>
              {/* ***** */}
            </ScrollView>
          </Card>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  Image: {
    height: hp('11%'),
    width: wp('26%'),
    borderRadius: 10,
  },

  button8: {
    height: hp('11%'),
    width: wp('25%'),
    backgroundColor: '#3FAD72',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },

  buttonadd: {
    height: hp('11%'),
    width: wp('62%'),
    backgroundColor: '#3FAD72',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  payment: {
    height: hp('8%'),
    width: wp('40%'),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#3FAD72',
    alignItems: 'center',
    borderRadius: 10,
  },
  shipping: {
    height: hp('8%'),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#3FAD72',
    alignItems: 'center',
    borderRadius: 10,
  },
});

export default OrderDetails;
