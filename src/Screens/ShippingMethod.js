/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import React, {useState} from 'react';
import Headers from '../components/Header';
import {Icon} from 'native-base';

const ShippingMethod = ({navigation}) => {
  const [selected, setSelected] = useState('');
  const [state, setState] = useState({
    methods: [
      {
        id: '1',
        title: 'Free shipping- $0.00',
        delivery: '3-5 day delivery',
        seleted: false,
      },
      {
        id: '2',
        title: 'Paid shipping',
        delivery: '3-5 day delivery',

        seleted: false,
      },
      {
        id: '3',
        title: 'Local shipping',
        delivery: 'Next day delivery',
      },
    ],
    nearestStores: [
      {
        placeName: 'Place Name',
        location: '16M Alex Road, California, USA',
        logo: require('../../assets/mask.png'),
      },
      {
        placeName: 'Place Name',
        location: '16M Alex Road, California, USA',
        logo: require('../../assets/mask.png'),
      },
      {
        placeName: 'Place Name',
        location: '16M Alex Road, California, USA',
        logo: require('../../assets/mask.png'),
      },
    ],
  });

  const handleSelection = (id) => {
    console.log(id);
    var selectedId = selected;

    if (selectedId === id) setSelected(id);
    else setSelected(id);
  };
  console.log(selected);
  return (
    <ScrollView style={{backgroundColor: '#FFFFFF'}}>
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          borderRadius: 10,
          marginVertical: 20,
          backgroundColor: '#3FAD72',
          alignItems: 'center',
          paddingVertical: 10,
          // marginHorizontal: 120,
          width: 100,
          alignSelf: 'center',
        }}
        onPress={()=>{
          navigation.navigate('')
        }}>
        <Text style={{textAlign: 'center', color: '#FFF', fontSize: 16,fontFamily:'HKGrotesk-Regular'}}>
          Delivery
        </Text>
      </TouchableOpacity>
      <View
        style={{
          marginHorizontal: 30,
          marginVertical: 9,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: 34,
            alignItems: 'center',
            textAlign: 'center',
            fontFamily:'HKGrotesk-Bold'
          }}>
          Select Shipping method
        </Text>
        <Text
          style={{
            fontSize: 17,
            color: 'black',
            marginTop: 10,
            textAlign: 'center',
            fontFamily:'HKGrotesk-Regular'
          }}>
          Select the preferred shipping option to speed up your checkout
        </Text>
      </View>

      <FlatList
        style={{marginHorizontal: 25, marginVertical: 20}}
        data={state.methods}
        renderItem={({item}) => {
          return (
            <View>
              <TouchableOpacity
                style={{
                  backgroundColor: '#FFF',
                  marginVertical: 10,
                  borderRadius: 15,
                  borderColor: 'lightgrey',
                  borderWidth: 1,
                }}
                onPress={() => handleSelection(item.id)}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    paddingVertical: hp('4%'),
                    marginHorizontal: 25,
                  }}>
                  <View
                    style={{flexDirection: 'column', alignItems: 'flex-start'}}>
                    <Text
                      style={{
                        color: selected.includes(item.id) ? '#3FAD72' : 'grey',
                        fontFamily:'HKGrotesk-Regular'
                      }}>
                      {item.title}
                    </Text>
                    <Text
                      style={{
                        color: selected.includes(item.id) ? '#3FAD72' : 'grey',
                        fontFamily:'HKGrotesk-Regular'
                      }}>
                      {item.delivery}
                    </Text>
                  </View>
                  <Icon name={item.seleted ? 'arrow-left' : null} />
                </View>
              </TouchableOpacity>
            </View>
          );
        }}
      />
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          borderRadius: 20,
          marginVertical: 10,
          backgroundColor: '#3FAD72',
          width: 300,
          height: 70,
          alignSelf: 'center',
        }}
        onPress={() =>navigation.navigate('BuyNow')}
        >
        <Text style={{textAlign: 'center', color: '#FFF', fontSize: 16,fontFamily:'HKGrotesk-Regular'}}>
          Continuous
        </Text>
      </TouchableOpacity>

      <View style={{marginHorizontal: 25}}>
        <Text style={{fontSize: 18,fontFamily:'HKGrotesk-Regular'}}>Nearest Places</Text>
      </View>

      <FlatList
        data={state.nearestStores}
        renderItem={({item}) => (
          <View
            style={{
              marginHorizontal: 25,
              backgroundColor: '#FFF',
              marginVertical: 10,
              borderRadius: 15,
              borderColor: 'lightgrey',
              borderWidth: 0.5,
              elevation: 1,
            }}>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <View
                style={{
                  height: 110,
                  width: 80,
                  borderRadius: 10,

                  margin: 4,
                }}>
                <Image
                  source={item.logo}
                  style={{height: '100%', width: '100%'}}
                  resizeMode="contain"
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{marginVertical: 10}}>
                  <Text style={{fontSize: 18, fontWeight: '700',fontFamily:'HKGrotesk-Regular'}}>
                    {item.placeName}
                  </Text>

                  <Text style={{fontSize: 10,fontFamily:'HKGrotesk-Regular'}}>{item.location}</Text>

                  <View style={{flexDirection: 'row', marginTop: 5}}>
                    <Icon
                      style={{
                        fontSize: 15,
                        marginVertical: -2,
                        color: '#3FAD72',
                      }}
                      name="star"
                    />
                    <Text style={{fontSize: 10,fontFamily:'HKGrotesk-Regular'}}>5.0 (25)</Text>
                  </View>

                  <View style={{flexDirection: 'row'}}>
                    <Text style={{marginVertical: 1,fontFamily:'HKGrotesk-Regular'}}>In Store Shopping</Text>
                    <TouchableOpacity
                      style={{
                        justifyContent: 'center',
                        borderRadius: 4,
                        // marginVertical: 10,
                        backgroundColor: '#3FAD72',
                        width: 90,
                        height: 40,
                        alignSelf: 'center',
                        marginHorizontal: 10,
                      }}>
                      <Text
                        style={{
                          textAlign: 'center',
                          color: '#FFF',
                          fontSize: 14,
                          fontFamily:'HKGrotesk-Regular'
                        }}>
                        Choose
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View>
                  <Text
                    style={{
                      right: 60,
                      marginTop: 10,
                      fontSize: 13,
                      color: '#3FAD72',
                      fontFamily:'HKGrotesk-Regular'
                    }}>
                    2 Miles
                  </Text>
                </View>
              </View>
            </View>
          </View>
        )}
      />
    </ScrollView>
  );
};

export default ShippingMethod;
