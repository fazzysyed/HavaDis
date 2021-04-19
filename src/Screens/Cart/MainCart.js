/* eslint-disable react-native/no-inline-styles */
import React,{useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import {
  Header,
  Left,
  Icon,
  Center,
  Right,
  Body,
  SwipeRow,
  Button,
} from 'native-base';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Counter from '../../components/Counter';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const data2 = [
  {
    shopName: 'Seller or Shop Name',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMgY8UUw96RhG-xftgCQ2Nj57sOrmAOM9QrQ&usqp=CAU',
    title: 'Product name',
    description: 'Description',
    Price: '$240',
  },
  {
    shopName: 'Seller or Shop Name',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMgY8UUw96RhG-xftgCQ2Nj57sOrmAOM9QrQ&usqp=CAU',
    title: 'Product name',
    description: 'Description',
    Price: '$250',
  },
  {
    shopName: 'Seller or Shop Name',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMgY8UUw96RhG-xftgCQ2Nj57sOrmAOM9QrQ&usqp=CAU',
    title: 'Product name',
    description: 'Description',
    Price: '$200',
  },
];

const data3 = [
  {
    image:
      'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: 'Product Title',
    Shipping: 'free shipping',
    Price: '$24.00',
  },
  {
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVoB3a_65P1uEA5W3EgOyAsCbsmkTmtmVF8Q&usqp=CAU',
    title: 'Product Title',
    Shipping: 'free shipping',
    Price: '$24.00',
  },
  {
    image:
      'https://cdn.britannica.com/s:300x169,c:crop/36/123536-004-1780EFF1/Variety-fruits-vegetables.jpg',
    title: 'Product Title',
    Shipping: 'free shipping',
    Price: '$24.00',
  },
  {
    image:
      'https://cdn.britannica.com/s:300x169,c:crop/36/123536-004-1780EFF1/Variety-fruits-vegetables.jpg',
    title: 'Product Title',
    Shipping: 'free shipping',
    Price: '$24.00',
  },
  {
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8yMIHkxs901EzRfpvMq6gIEfDADZcfbJxLw&usqp=CAU',
    title: 'Product Title',
    Shipping: 'free shipping',
    Price: '$24.00',
  },
  {
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo55BzgQWOmyScAZsMHdZePZ8Wdmtr8e6xPA&usqp=CAU',
    title: 'Product Title',
    Shipping: 'free shipping',
    Price: '$24.00',
  },
];

const MainCart = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [rating, setRating] = useState('');
  const [pic, setPic] = useState([]);
  const [shippingTime, setShippingTime]= useState('');
  const [stock, setStock] = useState('');


  useEffect(() => {
    // let source = 'data:image/jpeg;base64,' + image;
    let uid = auth().currentUser.uid
      firestore()
      .collection('Cart')
      .doc(uid)
      .get()
      .then((documentSnapshot)=>{
        setTitle(documentSnapshot.data().Title);
        setPrice(documentSnapshot.data().Price);
        setRating(documentSnapshot.data().Rating);
        setPic(documentSnapshot.data().Image);
        setShippingTime(documentSnapshot.data().ShippingTime);
        setStock(documentSnapshot.data().InStock);
        
        console.log(title)
      })
  }, [])
  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
      <View style={{borderBottomWidth: 0.3, borderBottomColor: 'lightgrey'}}>
        <Header style={{backgroundColor: 'transparent', elevation: 0}}>
          <Left style={{flex: 0.4}}>
            <Icon
              name="chevron-left"
              type="Entypo"
              onPress={() => navigation.goBack()}
            />
          </Left>
          <Body style={{width: '80%', alignItems: 'center'}}>
            <Text style={{fontFamily: 'HKGrotesk-Regular', fontSize: 16}}>
              Cart (3 item)
            </Text>
          </Body>
          <Right style={{flex: 0.4}}>
            <Text
              style={{
                color: '#FB4B7B',
                fontFamily: 'HKGrotesk-Regular',
                fontSize: 16,
              }}>
              Clear Cart
            </Text>
          </Right>
        </Header>
      </View>
      {/* End of Header */}
      {/* Main View After header */}

      {/* Flatlist 1 */}
      <View style={{marginHorizontal: wp('2%')}}>
        <FlatList
          data={data2}
          renderItem={({item, index}) => {
            return (
              <SwipeRow
                leftOpenValue={150}
                disableRightSwipe={true}
                rightOpenValue={-150}
                style={{borderBottomWidth: 0}}
                body={
                  <View style={styles.container}>
                    <View>
                      <Text
                        style={{
                          fontFamily: 'HKGrotesk-Bold',
                          paddingTop: 7,
                          paddingLeft: 9,
                        }}>
                        {item.shopName}
                      </Text>
                    </View>
                    <View style={{flexDirection: 'row', padding: 9}}>
                      <View>
                        <Image
                          style={styles.flat1image}
                          source={{uri: item.image}}
                        />
                      </View>
                      <View style={{paddingLeft: 9}}>
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                          }}>
                          <View>
                            <View>
                              <Text
                                style={{
                                  fontSize: 17,
                                  fontFamily: 'HKGrotesk-Bold',
                                }}>
                                {item.title}
                              </Text>
                            </View>
                            <View style={{marginVertical: hp('1%')}}>
                              <Text
                                style={{
                                  color: '#585858',
                                  fontFamily: 'HKGrotesk-Regular',
                                }}>
                                {item.description}
                              </Text>
                            </View>
                          </View>
                          <View>
                            <Text
                              style={{
                                fontFamily: 'HKGrotesk-Bold',
                                fontSize: 17,
                              }}>
                              {item.Price}
                            </Text>
                          </View>
                        </View>

                        <View>
                          <View style={{flexDirection: 'row'}}>
                            {/* Counter Button */}
                            <Counter />
                            {/* Save Button */}
                            <TouchableOpacity style={styles.savelaterbutton}>
                              <Text
                                style={{
                                  fontSize: 11,
                                  fontFamily: 'HKGrotesk-Regular',
                                }}>
                                Save for later
                              </Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                      </View>
                    </View>

                    <View
                      style={{
                        flexDirection: 'row',
                        padding: 10,
                        borderTopWidth: 1,
                        borderTopColor: 'lightgrey',
                      }}>
                      <View style={{marginLeft: wp('3%')}}>
                        <Text
                          style={{color: 'grey', fontFamily: 'HKGrotesk-Bold'}}>
                          Save up to 20%
                        </Text>
                      </View>
                    </View>
                  </View>
                }
                right={
                  // <Button danger onPress={() => alert('Trash')}>
                  //   <Icon active name="trash" />
                  // </Button>
                  <View
                    style={{
                      marginVertical: hp('4%'),
                      flexDirection: 'row',
                      height: hp('27.7%'),
                      justifyContent: 'center',

                      // top: 20,
                      // alignItems: 'center',
                    }}>
                    <View
                      style={{
                        backgroundColor: '#F4F4F4',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: wp('18%'),
                        // height: hp('28%'),
                      }}>
                      <TouchableOpacity>
                        <Icon name="heart" style={{fontSize: 23}} />
                      </TouchableOpacity>
                    </View>
                    <View
                      style={{
                        backgroundColor: '#E60023',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: wp('18%'),
                        // height: hp('30%'),
                      }}>
                      <TouchableOpacity>
                        <Icon
                          name="trash"
                          style={{color: '#fff', fontSize: 23}}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                }
              />
            );
          }}
        />
        {/* End of Flatlist 1 */}

        {/* Store Button And input field */}
        <View>
          <TouchableOpacity style={styles.creditbutton}>
            <Text style={{color: '#3FAD72', fontFamily: 'HKGrotesk-Regular'}}>
              Use Store Credit
            </Text>
          </TouchableOpacity>

          <View style={styles.input1}>
            <TextInput placeholder="Coupen Code" style={{width: wp('70%')}} />
            <TouchableOpacity style={styles.applybutton}>
              <Text style={{color: 'grey', fontFamily: 'HKGrotesk-Regular'}}>
                Apply
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* ******* */}

        {/* total and Proceed Button */}

        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: hp('2%'),
              marginHorizontal: wp('2%'),
            }}>
            <View>
              <Text style={{color: 'grey', fontFamily: 'HKGrotesk-Regular'}}>
                SubTotal {'  '}$1,350
              </Text>
              <Text style={{color: 'grey', fontFamily: 'HKGrotesk-Regular'}}>
                Coupen {'   '}-$10.00
              </Text>
            </View>
            <View style={{justifyContent: 'center'}}>
              <Text style={{fontFamily: 'HKGrotesk-Bold', fontSize: 24}}>
                $1,350
              </Text>
            </View>
          </View>
          <View>
            <TouchableOpacity
              style={styles.Buttonproceed}
              onPress={() => navigation.navigate('CheckOut')}>
              <Text style={{color: '#FFF', fontFamily: 'HKGrotesk-Regular'}}>
                Proceed To Checkout
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* FlatList Saved item later */}

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{fontFamily: 'HKGrotesk-Bold'}}>
            Saved for later items
          </Text>
          <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}
          onPress={()=> navigation.navigate('SavedForLater')}
          >
            <Text style={{color: '#3FAD72', fontFamily: 'HKGrotesk-Regular'}}>
              View All
            </Text>
            <Icon
              style={{
                color: '#3FAD72',
                fontSize: 15,
                paddingLeft: 4,
                marginRight: 2,
              }}
              name="right"
              type="AntDesign"
            />
          </TouchableOpacity>
        </View>

        <View style={{alignItems: 'center'}}>
          <FlatList
            data={data3}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            renderItem={({item, index}) => {
              return (
                <View>
                  <View
                    style={{
                      marginHorizontal: wp('1.5%'),
                      marginVertical: hp('1%'),
                    }}>
                    <View style={{height: hp('18%'), width: wp('31%')}}>
                      <Image
                        source={{uri: item.image}}
                        style={styles.flatimages4}
                      />
                      <View style={styles.flat4discount}>
                        <Text style={{fontFamily: 'HKGrotesk-Regular'}}>
                          15%
                        </Text>
                      </View>
                    </View>
                    <View>
                      <Text style={{fontFamily: 'HKGrotesk-Bold'}}>
                        {item.title}
                      </Text>
                    </View>
                    <View>
                      <Text
                        style={{color: 'grey', fontFamily: 'HKGrotesk-Bold'}}>
                        {item.Price}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        // justifyContent: 'space-evenly',
                        marginTop: 4,
                      }}>
                      <View style={styles.tick}>
                        <Icon
                          type="MaterialIcons"
                          style={{
                            fontSize: 15,

                            color: 'white',
                          }}
                          name="check"
                        />
                      </View>
                      <View style={styles.cross}>
                        <Icon
                          type="Entypo"
                          style={{
                            fontSize: 15,

                            color: 'white',
                          }}
                          name="cross"
                        />
                      </View>
                    </View>
                  </View>
                </View>
              );
            }}
          />
        </View>

        {/* **************** */}

        {/* Flatlist promotion Items */}

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{fontFamily: 'HKGrotesk-Bold'}}>Promotion items</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{color: '#3FAD72', fontFamily: 'HKGrotesk-Regular'}}>
              View All
            </Text>
            <Icon
              style={{
                color: '#3FAD72',
                fontSize: 15,
                paddingLeft: 4,
                marginRight: 2,
              }}
              name="right"
              type="AntDesign"
            />
          </View>
        </View>

        <View style={{alignItems: 'center'}}>
          <FlatList
            data={data3}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            renderItem={({item, index}) => {
              return (
                <View>
                  <View
                    style={{
                      marginHorizontal: wp('1.5%'),
                      marginVertical: hp('1%'),
                    }}>
                    <View style={{height: hp('18%'), width: wp('31%')}}>
                      <Image
                        source={{uri: item.image}}
                        style={styles.flatimages4}
                      />
                      <View style={styles.flat4discount}>
                        <Text style={{fontFamily: 'HKGrotesk-Regular'}}>
                          15%
                        </Text>
                      </View>
                    </View>
                    <View>
                      <Text style={{fontFamily: 'HKGrotesk-Bold'}}>
                        {item.title}
                      </Text>
                    </View>
                    <View>
                      <Text
                        style={{color: 'grey', fontFamily: 'HKGrotesk-Bold'}}>
                        {item.Price}
                      </Text>
                    </View>
                  </View>
                </View>
              );
            }}
          />
        </View>

        {/* *********** */}

        {/* Related Sponsored item flatlist */}

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{fontFamily: 'HKGrotesk-Bold'}}>
            Related Sponsored items
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{color: '#3FAD72', fontFamily: 'HKGrotesk-Regular'}}>
              View All
            </Text>
            <Icon
              style={{
                color: '#3FAD72',
                fontSize: 15,
                paddingLeft: 4,
                marginRight: 2,
              }}
              name="right"
              type="AntDesign"
            />
          </View>
        </View>

        <View style={{alignItems: 'center'}}>
          <FlatList
            data={data3}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            renderItem={({item, index}) => {
              return (
                <View>
                  <View
                    style={{
                      marginHorizontal: wp('1.5%'),
                      marginVertical: hp('1%'),
                    }}>
                    <View style={{height: hp('18%'), width: wp('31%')}}>
                      <Image
                        source={{uri: item.image}}
                        style={styles.flatimages4}
                      />
                      <View style={styles.flat4discount}>
                        <Text style={{fontFamily: 'HKGrotesk-Regular'}}>
                          15%
                        </Text>
                      </View>
                    </View>
                    <View>
                      <Text style={{fontFamily: 'HKGrotesk-Bold'}}>
                        {item.title}
                      </Text>
                    </View>
                    <View>
                      <Text
                        style={{color: 'grey', fontFamily: 'HKGrotesk-Bold'}}>
                        {item.Price}
                      </Text>
                    </View>
                  </View>
                </View>
              );
            }}
          />
        </View>

        {/* End of Main View */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'lightgrey',
    marginTop: hp('2%'),
  },
  flat1image: {
    height: hp('12.5%'),
    width: wp('20%'),
    borderRadius: 3,
  },
  savelaterbutton: {
    width: wp('27%'),
    height: hp('5%'),
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: wp('10%'),
  },
  creditbutton: {
    width: wp('94%'),
    alignSelf: 'center',
    height: hp('8%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'lightgrey',
    marginVertical: hp('2%'),
  },
  input1: {
    flexDirection: 'row',
    width: wp('94%'),
    height: hp('8%'),
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'lightgrey',
  },
  applybutton: {
    height: hp('8%'),
    justifyContent: 'center',
    borderLeftWidth: 1,
    borderLeftColor: 'lightgrey',
    width: wp('20%'),
    alignItems: 'center',
  },
  Buttonproceed: {
    height: hp('9%'),
    width: wp('94%'),
    backgroundColor: '#3FAD72',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 18,
    marginVertical: hp('2%'),
    alignSelf: 'center',
  },
  flatimages4: {
    marginTop: 1,
    height: hp('18%'),
    width: wp('31%'),
    borderRadius: 10,
    position: 'absolute',
  },
  flat4discount: {
    height: hp('3%'),
    width: wp('10%'),
    backgroundColor: 'red',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '7%',
    marginRight: '7%',
    alignSelf: 'flex-end',
  },
  tick: {
    width: wp('8%'),
    height: hp('4%'),
    backgroundColor: '#3FAD72',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  cross: {
    width: wp('8%'),
    height: hp('4%'),
    backgroundColor: '#FB4B7B',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
});

export default MainCart;
