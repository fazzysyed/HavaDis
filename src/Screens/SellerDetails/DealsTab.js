import React from 'react'
import { View, Text, StyleSheet, FlatList, Image, ScrollView } from 'react-native'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import {Icon} from 'native-base';

const data2 = [
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

const DealsTab=()=> {
    return (
        <ScrollView>
            <View>
            <FlatList
                style={{marginBottom: 10}}
                data={data2}
                numColumns={Math.ceil(data2.length / 2)}
                renderItem={({item}) => {
                    return (
                    <View>
                        <View style={styles.flatlistContainer}>
                        <View style={styles.imageConatiner}>
                            <Image
                            style={styles.flatlistImage1}
                            resizeMode="stretch"
                            source={{uri: item.image}}
                            />
                            <View>
                            <View
                                style={{marginLeft: wp('33%'), marginTop: hp('1%')}}>
                                <Icon name="heart" />
                            </View>
                            </View>
                        </View>
                        <View style={{marginLeft: wp('2.5%')}}>
                            <View>
                            <Text style={{fontFamily:'HKGrotesk-Bold'}}>Product Name</Text>
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
                                <Text style={{color: '#fff'}}>5.0 </Text>
                            </View>
                            <View style={{marginLeft: wp('1.5%')}}>
                                <Text style={{fontFamily:'HKGrotesk-Regular'}}>(409)</Text>
                            </View>
                            </View>

                            <View>
                            <Text style={{fontFamily:'HKGrotesk-Regular'}}>$60.00 - $70.00</Text>
                            </View>
                        </View>
                        </View>
                    </View>
                    );
                }}
                />
            </View>
        </ScrollView>
    )
}

const styles= StyleSheet.create({
    flatlistContainer: {
        height: hp('29%'),
        width: wp('46%'),
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'lightgrey',
        marginHorizontal: wp('2%'),
        marginVertical: hp('1%'),
      },
      imageConatiner: {
        width: wp('100%'),
        height: hp('17%'),
        resizeMode: 'contain',
      },
      flatlistImage1: {
        flex: 1,
        height: hp('17%'),
        width: wp('45.5%'),
        position: 'absolute',
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
      },
      flatlistbadge: {
        flexDirection: 'row',
        width: wp('14%'),
        height: hp('3.5%'),
        backgroundColor: 'orange',
        borderRadius: 7,
        alignItems: 'center',
      },


})


export default DealsTab;
