import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, FlatList, ScrollView} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Header, Left, Icon, Center, Right, Body} from 'native-base';
import Button from '../../components/Button';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const data2 = [
  {
    id: '1',
    image:
      'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: 'Skinny Jeans With Ripped knees',
    Shipping: 'free shipping',
    Price: '$24.00',
  },
  {
    id: '2',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVoB3a_65P1uEA5W3EgOyAsCbsmkTmtmVF8Q&usqp=CAU',
    title: 'Nora Jogger Jean',
    Shipping: 'free shipping',
    Price: '$56.00',
  },
  {
    id: '3',
    image:
      'https://cdn.britannica.com/s:300x169,c:crop/36/123536-004-1780EFF1/Variety-fruits-vegetables.jpg',
    title: 'Skinny Jeans With Ripped',
    Shipping: 'free shipping',
    Price: '$24.00',
  },
  {
    id: '4',
    image:
      'https://cdn.britannica.com/s:300x169,c:crop/36/123536-004-1780EFF1/Variety-fruits-vegetables.jpg',
    title: 'Product Title',
    Shipping: 'free shipping',
    Price: '$24.00',
  }, 
]

const FavoriteList = ({navigation}) => {
  const [empty, setEmpty] = useState(false)
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);
  const [defaultRating, setDefaultRating] = useState(2);

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
      .collection('Wishlist')
      .doc(uid)
      .get()
      .then((documentSnapshot)=>{
        setTitle(documentSnapshot.data().Title);
        setPrice(documentSnapshot.data().Price);
        setRating(documentSnapshot.data().Rating);
        setPic(documentSnapshot.data().Image);
        setShippingTime(documentSnapshot.data().ShippingTime);
        setStock(documentSnapshot.data().InStock);
        
        console.log(pic)
      })
  }, [])
  return (
    <View>
      <Header style={{backgroundColor: 'transparent', elevation: 0}}>
        <Left style={{flex: 0.3}}>
          <Icon
            name="left"
            type="AntDesign"
            style={{fontSize: 22}}
            onPress={() => navigation.goBack()}
          />
        </Left>
        <Body style={{width: '80%', alignItems: 'center'}}>
          <Text style={{fontSize: 16,fontFamily: 'HKGrotesk-Regular',}}>My Wishlist</Text>
        </Body>
        <Right style={{flex: 0.3}}></Right>
      </Header>
      <ScrollView>
      { empty ? <View style={{marginBottom: hp('17%')}}>
                  <View style={{marginTop: hp('12%'),}}>
                    <Image
                      style={{height: hp('25%'), marginLeft: wp('19%'), width: wp('50%')}}
                      resizeMode="contain"
                      source={require('../../../assets/list.png')}
                      />
                  </View>
                  <View style={{alignItems: 'center', marginTop: hp('2%')}}>
                    <Text style={{fontSize: 17, color: '#212121',fontFamily: 'HKGrotesk-Regular',}}>No Favorites Yet</Text>
                  </View>
                  <View style={{alignItems: 'center', marginTop: hp('1%')}}>
                    <Text style={{color: '#212121',fontFamily: 'HKGrotesk-Regular',}}>
                      Explore the platform and save the favorite {'\n'}
                      articles by tapping on the heart icon next
                    </Text>
                  </View>   
                </View> 
                :
                <View>
                  <FlatList
                  numColumns={2}
                  data={data2}
                  renderItem={({item, index})=>(
                  <View style={{width:wp('45%'),marginLeft:wp('3%'), marginTop:hp('1%')}}>
                    <View style={{height:hp('24%'), width:wp('45%')}}>
                        <Image style={{height:hp('24%'), width:wp('45%'), position:'absolute'}} resizeMode='stretch' source={{uri: item.image}}   />
                        <Icon style={{alignSelf:'flex-end', marginTop:hp('1%'), marginRight:wp('2%')}} name="hearto"  type="AntDesign"  />
                    </View>
                    <View style={{marginTop:hp('1%'), height:hp('5%')}}>
                      <Text style={{lineHeight:16.5,fontSize:15, color:'#989A99',fontFamily: 'HKGrotesk-Regular',}}>{item.title}</Text>
                    </View>
                    <View>
                      <Text style={{color:'#717C7F', fontSize:17,fontFamily: 'HKGrotesk-Bold',}}>{item.Price}</Text>
                    </View>
                    <View style={{marginTop:hp('1%')}}>
                      <Text style={{color:'#96C6BE', fontSize:12,fontFamily: 'HKGrotesk-Regular',}}>In Stock</Text>
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                      <View style={{flexDirection:'row', alignItems:'center'}}>
                      {maxRating.map((item, key) => {
                            return (
                              <Icon
                                key={key}
                                onPress={() => setDefaultRating(item)}
                                style={{
                                  fontSize: 12,
                                  color: item <= defaultRating ? '#FABC41' : 'lightgrey',
                                }}
                                name="star"
                              />
                            );
                          })}
                        <Text style={{fontSize:12, paddingLeft:3, color:'#989A99'}}> 5</Text>
                      </View>
                      <Icon name="cart-plus" type="MaterialCommunityIcons" style={{fontSize:19, marginRight:5}}  />
                    </View>
                  </View>
                  )}
                  />
                </View>
                }
        <View style={{marginTop: hp('3%'),marginBottom: hp('9%')}}>
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity style={styles.Button}>
              <Text style={{color: '#3FAD72',fontFamily: 'HKGrotesk-Regular', fontSize:16}}>Search for items</Text>
            </TouchableOpacity>
          </View>

          <View style={{alignItems: 'center', marginTop: hp('1%')}}>
            <Button title="Start Shopping" />
          </View>
        </View>

        {/* <View style={{borderWidth:2, borderRadius:10, width:wp('50%'), alignSelf:'center', marginTop:hp('5%')}}>
                </View> */}
      </ScrollView>        
    </View>
  );
};

const styles = StyleSheet.create({
  Button: {
    height: hp('9%'),
    width: wp('90%'),
    borderWidth: 1,
    borderColor: '#3FAD72',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 18,
  },
});

export default FavoriteList;
