/* eslint-disable no-dupe-keys */
/* eslint-disable no-labels */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useRef, useEffect} from 'react';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import {Header, Left, Icon, Center, Right, Body} from 'native-base';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Button from '../components/Button';

import Headers from '../components/Header';
const ENTRIES1 = [
  {
    title: 'Professional Modification of racing car Steering Wheel',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration:
      'https://media.istockphoto.com/photos/steering-wheel-picture-id507984911?k=6&m=507984911&s=612x612&w=0&h=Qcr0bGMqXYi2b1rBgjtD8l6eiPXchaSoXS-CjuyHG3E=',
  },
  {
    title: 'Professional Modification of racing car Steering Wheel',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQoPg93EpMK7o6-E708DDMOZhkWFFN3c7l5g&usqp=CAU',
  },
  {
    title: 'Professional Modification of racing car Steering Wheel',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    illustration:
      'https://images.pexels.com/photos/3401900/pexels-photo-3401900.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },

  {
    title: 'Professional Modification of racing car Steering Wheel',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    illustration:
      'https://images.pexels.com/photos/3401900/pexels-photo-3401900.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
];
const Cash = ({navigation}) => {
  const [selected, setSelected] = useState('');
  const [state, setState] = useState({
    // Products: [
    //   {
    //     id: 1,
    //     title: 'Product Name',
    //     disctription:
    //       'Lorem ipsem dolor sit amet, consetetur sadsipscing elitr, sed nomumy eirmod',
    //     flag: require('./Assets/WhatsApp.jpeg'),
    //     price: '$20.00',
    //   },
    //   {
    //     id: 2,
    //     title: 'Product Name',
    //     disctription:
    //       'Lorem ipsem dolor sit amet, consetetur sadsipscing elitr, sed nomumy eirmod',
    //     flag: require('./Assets/WhatsApp.jpeg'),
    //     price: '$20.00',
    //   },
    //   {
    //     id: 3,
    //     title: 'Product Name',
    //     disctription:
    //       'Lorem ipsem dolor sit amet, consetetur sadsipscing elitr, sed nomumy eirmod',
    //     flag: require('./Assets/WhatsApp.jpeg'),
    //     price: '$20.00',
    //   },
    //   {
    //     id: 4,
    //     title: 'Product Name',
    //     disctription:
    //       'Lorem ipsem dolor sit amet, consetetur sadsipscing elitr, sed nomumy eirmod',
    //     flag: require('./Assets/WhatsApp.jpeg'),
    //     price: '$20.00',
    //   },
    // ],
    balance: [
      {
        id: '1',
        bl: '25.00',
      },
      {
        id: '2',
        bl: '50.00',
      },
      {
        id: '3',
        bl: '100.00',
      },
      {
        id: '4',
        bl: '200.00',
      },
      {
        id: '5',
        bl: '300.00',
      },
      {
        id: '6',
        bl: '400.00',
      },
    ],
  });
  const handleSelection = (id) => {
    console.log(id);
    var selectedId = selected;

    if (selectedId === id) setSelected(null);
    else setSelected(id);
  };
  return (
    <>
      <Header style={{backgroundColor: '#fff', elevation: 0}}>
        <Left style={{flex: 0.3}}>
          <Icon name="menu" onPress={() => navigation.toggleDrawer()} />
        </Left>
        <Body style={{width: '80%', alignItems: 'center'}}>
          <Text style={{fontSize: 14}}>Havause Cash</Text>
        </Body>
        <Right style={{flex: 0.3}}></Right>
      </Header>
      <ScrollView style={{backgroundColor: '#FFFFFF'}}>
        <View
          style={{
            marginHorizontal: 15,
            marginVertical: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 16, fontFamily: 'HKGrotesk-Bold'}}>
            Reload Your Balance
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: '#3FAD72',
              fontFamily: 'HKGrotesk-Bold',
            }}>
            Current Balance
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            // alignItems: 'center',
            marginHorizontal: 7.5,
          }}>
          <FlatList
            numColumns={2}
            data={state.balance}
            renderItem={({item}) => {
              return (
                <View
                  style={{
                    margin: 5,

                    marginTop: 6,
                  }}>
                  <TouchableOpacity
                    onPress={() => handleSelection(item.id)}
                    style={{
                      width: 110,
                      borderRadius: 8,

                      backgroundColor: selected.includes(item.id)
                        ? '#3FAD72'
                        : '#FFFFFF',
                      borderWidth: 0.3,
                      borderColor: '#C5C5C5',
                      alignItems: 'center',
                      paddingVertical: hp('1.7%'),
                    }}>
                    <Text
                      style={{
                        fontSize: 12,
                        fontFamily: 'HKGrotesk-Regular',
                        color: selected.includes(item.id) ? '#FFFFFF' : 'grey',
                      }}>
                      ${item.bl}
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
          <View
            style={{
              margin: 5,

              marginTop: 6,
            }}>
            <Text style={{fontSize: 24, fontFamily: 'HKGrotesk-Bold'}}>
              $0.00
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              marginHorizontal: 7.5,
              marginVertical: 7.5,
              alignItems: 'center',
            }}
          />
        </View>
        <View style={{marginHorizontal: 15, marginVertical: 15}}>
          <Text style={{fontSize: 13, fontFamily: 'HKGrotesk-Bold'}}>
            Enter amount
          </Text>
          <TextInput
            style={{
              paddingVertical: hp('2%'),
              borderWidth: 0.5,
              borderColor: '#C5C5C5',
              borderRadius: 12,
              marginVertical: 15,
            }}
            placeholder="$ Enter amount here"
          />
        </View>
        <View style={{marginBottom: 5}}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: 'HKGrotesk-Bold',
              marginHorizontal: 15,
            }}>
            Payment Option
          </Text>
        </View>

        {/* ********** */}
        <View style={{marginHorizontal: wp('3%'), marginVertical: 10}}>
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
          </TouchableOpacity>
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
                source={require('../../assets/paypal.jpg')}
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
                source={require('../../assets/mastercard.png')}
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
        </View>
        <View style={{alignSelf:'center', marginVertical:hp('2%')}}>
          <Button  title="Reload Balance"   />
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              borderBottomColor: 'grey',
              borderBottomWidth: 1,
              flex: 1,
              marginHorizontal: 15,
            }}
          />

          <Text>OR</Text>
          <View
            style={{
              flex: 1,
              borderBottomColor: 'grey',
              borderBottomWidth: 1,
              marginHorizontal: 15,
            }}
          />
        </View>

        <View style={{marginHorizontal: 15}}>
          <Text style={{fontSize: 13, fontFamily: 'HKGrotesk-Bold'}}>
            Redeem gift card
          </Text>
          <TextInput
            style={{
              paddingVertical: hp('2%'),
              borderWidth: 0.5,
              borderColor: '#C5C5C5',
              borderRadius: 12,
              marginVertical: 7.5,
            }}
            placeholder="$ Enter gift card number"
          />
        </View>
        <TouchableOpacity
          style={{
            borderRadius: 12,
            marginHorizontal: 15,
            marginVertical: 7.5,
            backgroundColor: '#FFF',
            borderWidth: 1,
            borderColor: '#3FAD72',
            alignItems: 'center',
            paddingVertical: hp('3%'),
          }}>
          <Text
            style={{
              fontSize: 16,
              color: '#3FAD72',
              fontFamily: 'HKGrotesk-Regular',
            }}>
            Redeem gift card
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 15,
            marginVertical: 5,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 15}}>Promotion Items</Text>
          <TouchableOpacity>
            <Text style={{color: '#00BE3D', fontFamily: 'HKGrotesk-Regular'}}>
              View All{' '}
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={ENTRIES1}
          horizontal={true}
          renderItem={({item, index}) => {
            return (
              <View>
                <View style={styles.flatlistContainer}>
                  <View style={styles.imageConatiner}>
                    <Image
                      resizeMode="contain"
                      style={styles.flatlistImage}
                      source={{uri: item.illustration}}
                    />
                    <View style={{flexDirection: 'row'}}>
                      <View style={styles.onSale}>
                        <Text
                          style={{
                            fontSize: 11,
                            color: '#fff',
                            fontFamily: 'HKGrotesk-Regular',
                          }}>
                          On Sale
                        </Text>
                      </View>
                      <View
                        style={{marginLeft: wp('18%'), marginTop: hp('1%')}}>
                        <Icon name="heart" />
                      </View>
                    </View>
                  </View>
                  <View style={{marginLeft: wp('2.5%')}}>
                    <View>
                      <Text style={{fontFamily: 'HKGrotesk-Bold'}}>
                        Product Name
                      </Text>
                    </View>

                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginVertical: hp('0.8%'),
                      }}>
                      <View style={styles.flatlistbadge}>
                        <Icon
                          name="star"
                          style={{
                            color: '#fff',
                            fontSize: 15,
                            marginHorizontal: wp('1%'),
                          }}
                        />
                        <Text
                          style={{
                            color: '#fff',
                            fontFamily: 'HKGrotesk-Regular',
                          }}>
                          5.0{' '}
                        </Text>
                      </View>
                      <View style={{marginLeft: wp('1.5%')}}>
                        <Text style={{fontFamily: 'HKGrotesk-Regular'}}>
                          (409)
                        </Text>
                      </View>
                    </View>

                    <View>
                      <Text style={{fontFamily: 'HKGrotesk-Regular'}}>
                        $60.00 - $70.00
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </ScrollView>
    </>
  );
};

export default Cash;
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
  flatlistImage: {
    height: hp('22%'),
    width: wp('45.5%'),
    position: 'absolute',
  },
  onSale: {
    height: hp('3.5%'),
    width: wp('14%'),
    backgroundColor: '#FF0303',
    justifyContent: 'center',
    borderRadius: 10,
    alignItems: 'center',
    marginTop: hp('1%'),
    marginLeft: wp('1%'),
  },
  flatlistbadge: {
    flexDirection: 'row',
    width: wp('14%'),
    height: hp('3.5%'),
    backgroundColor: 'orange',
    borderRadius: 7,
    alignItems: 'center',
  },
  imageConatiner: {
    width: wp('100%'),
    height: hp('23%'),
  },
  flatlistContainer: {
    height: hp('35%'),
    width: wp('46%'),
    borderWidth: 1,

    borderRadius: 10,
    borderColor: 'lightgrey',
    marginHorizontal: wp('2%'),
    marginVertical: hp('1%'),
  },
});
