/* eslint-disable no-unused-vars */
/* eslint-disable no-dupe-keys */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import React, {useState, useEffect} from 'react';
import Headers from '../components/Header';
import {Icon, Header, Button, Item, Input} from 'native-base';

const data = [
  {
    id: '1',
    title: ' Name',
    disctription:
      'Lorem ipsem dolor sit amet, consetetur sadsipscing elitr, sed nomumy eirmod',
    flag: require('../../assets/image.png'),
    seleted: false,
    price: '$20.00',
  },
  {
    id: '2',
    title: 'Product ',
    disctription:
      'Lorem ipsem dolor sit amet, consetetur sadsipscing elitr, sed nomumy eirmod',
    flag: require('../../assets/image.png'),
    seleted: false,
    price: '$20.00',
  },
  {
    id: '3',
    title: 'Abcdefgh',
    disctription:
      'Lorem ipsem dolor sit amet, consetetur sadsipscing elitr, sed nomumy eirmod',
    flag: require('../../assets/image.png'),
    seleted: false,
    price: '$20.00',
  },
  {
    id: '4',
    title: 'Were are',
    disctription:
      'Lorem ipsem dolor sit amet, consetetur sadsipscing elitr, sed nomumy eirmod',
    flag: require('../../assets/image.png'),
    seleted: false,
    price: '$20.00',
  },
];

const ProductList = () => {
  const [value, setValue] = useState('');
  const [cancel, setCancel] = useState(false);

  const [selected, setSelected] = useState('');

  const [products, setProducts] = useState(data);

  const handleSelection = (item) => {
    console.log(item);
    var selectedId = selected;

    if (selectedId === item.id) setSelected(item.id);
    else setSelected(item.id);
  };

  const searchFilterFunction = (text) => {
    setCancel(true);
    setValue(text);

    const newData = products.filter((item) => {
      const itemData = `${item.title.toUpperCase()} `;
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    console.log('New', newData);
    setProducts(newData);
    if (!text || text === '') {
      setProducts(data);
    }
  };

  useEffect(() => {
    setProducts(data);
  }, []);

  return (
    <View>
      <Header searchBar rounded style={{backgroundColor: 'white'}}>
        <Item
          style={{backgroundColor: '#F2F2F2', height: 40, borderRadius: 10}}>
          <Icon name="ios-search" style={{fontSize: 20}} />
          <Input
            placeholder="Product Name"
            style={{fontSize: 14}}
            onChangeText={(text) => searchFilterFunction(text)}
            value={value}
          />
          <Icon
            name="microphone-outline"
            type="MaterialCommunityIcons"
            style={{fontSize: 20}}
          />
          <Icon style={{fontSize: 20}} name="camera" type="SimpleLineIcons" />
        </Item>
        {cancel ? (
          <TouchableOpacity
            onPress={() => {
              setCancel(false);
              setValue('');
              setProducts(data);
            }}
            style={{
              backgroundColor: 'white',
              borderColor: 'white',
              marginHorizontal: 4,
              justifyContent: 'center',
            }}>
            <Text style={{fontFamily:'HKGrotesk-Regular'}}>Cancel</Text>
          </TouchableOpacity>
        ) : null}
      </Header>
      <View style={{marginHorizontal: 15, marginVertical: 8}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{fontSize: 16, fontFamily:'HKGrotesk-Bold'}}>RESULTS</Text>
          <TouchableOpacity>
            <Text style={{color: '#FB4B7B',fontFamily:'HKGrotesk-Regular'}}>Select Shipping Method</Text>
          </TouchableOpacity>
        </View>
        <Text style={{fontSize: 14, color: 'black', marginVertical: 3,fontFamily:'HKGrotesk-Regular'}}>
          Price & Other Deals May Vary On Size & Color
        </Text>
      </View>

      <FlatList
        extraData={selected}
        data={products}
        renderItem={({item}) => {
          return (
            <View
              style={{
                flexDirection: 'row',
                marginVertical: 3,
                marginHorizontal: 10,
                backgroundColor: '#FFF',
                borderRadius: 10,
                alignItems: 'center',
                elevation: 1,
              }}>
              <Image
                style={{
                  height: hp('18%'),
                  width: wp('20%'),
                  borderRadius: 7,
                  marginHorizontal: 5,
                  marginVertical: 8,
                }}
                source={item.flag}
              />

              <View
                style={{
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  marginHorizontal: 5,
                  width: 250,
                }}>
                <Text style={{fontSize: 16, fontFamily:'HKGrotesk-Regular'}}>
                  {item.title}
                </Text>
                <Text
                  style={{
                    color: 'grey',
                    fontSize: 12,
                    fontFamily:'HKGrotesk-Regular',
                    alignItems: 'flex-start',
                    // marginEnd: 20,
                  }}>
                  {item.disctription}
                </Text>

                <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                  <Text
                    style={{
                      fontFamily:'HKGrotesk-Bold',
                      fontSize: 16,
                    }}>
                    {item.price}
                  </Text>
                  <View style={{flexDirection: 'row', marginVertical: 3}}>
                    <Text
                      style={{
                        textDecorationLine: 'line-through',
                        color: 'grey',
                        marginHorizontal: 5,
                        fontSize: 10,
                        fontFamily:'HKGrotesk-Regular'
                      }}>
                      $25.00{' '}
                    </Text>
                    <Text style={{color: 'green', fontSize: 10,fontFamily:'HKGrotesk-Regular'}}>
                      Save $25.00(5%)
                    </Text>
                  </View>
                  <Icon
                    style={{
                      fontSize: 18,
                      marginHorizontal: 5,
                      color: '#3FAD72',
                    }}
                    name="star"
                  />
                  <Text style={{fontSize: 10,fontFamily:'HKGrotesk-Regular'}}>5.0 (25)</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginVertical: 5,
                    alignItems: 'center',
                  }}>
                  <View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginVertical: 4,
                      }}>
                      <Image
                        style={{
                          height: hp('3%'),
                          width: wp('3%'),
                          resizeMode: 'contain',
                        }}
                        source={require('../../assets/Shipping.png')}
                      />

                      <Text
                        style={{
                          fontSize: 10,
                          color: 'green',
                          marginHorizontal: 4,
                          fontFamily:'HKGrotesk-Regular'
                        }}>
                        FREE SHIPPING
                      </Text>
                    </View>
                    <Text style={{color: 'grey', fontSize: 8,fontFamily:'HKGrotesk-Regular'}}>
                      (Guaranty Redelivery)
                    </Text>
                  </View>

                  <TouchableOpacity
                    style={{
                      borderRadius: 6,
                      backgroundColor: '#3FAD72',
                      width: 100,
                      height: 30,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginHorizontal: 8,
                      marginTop: 5,
                    }}>
                    <Text
                      style={{
                        textAlign: 'center',
                        color: '#FFF',
                        fontSize: 13,
                        fontFamily:'HKGrotesk-Regular'
                      }}>
                      Add to cart
                    </Text>
                  </TouchableOpacity>
                  <View
                    style={{
                      borderRadius: 4,
                      backgroundColor: '#F2F2F2',
                      height: 30,
                      width: 30,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginTop: 5,
                    }}>
                    <Icon
                      name={selected.includes(item.id) ? 'heart' : 'hearto'}
                      type="AntDesign"
                      style={{fontSize: 20, color: '#FB4B7B'}}
                      // onPress={() => handleSelection(item.id)}
                    />
                  </View>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default ProductList;
