import React from 'react'
import { View, Text, StyleSheet, FlatList, Image, ScrollView } from 'react-native'
import {  Header, Left, Icon, Center, Right, Body, Card } from 'native-base';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

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

 const SavedForLater=({navigation}) => {
    return (
        <View>
            <Header style={{backgroundColor:'transparent', elevation:0}}>
                <Left style={{flex:0.3}}>
                    <Icon name='arrow-back' onPress={()=> navigation.goBack()} />
                </Left>
                <Body style={{width:'80%', alignItems:'center'}}>
                    <Text style={{fontSize:16,fontFamily:'HKGrotesk-Regular'}}>Saved For Later</Text>

                </Body>
                <Right style={{flex:0.3}}>
                    
                </Right>
            </Header>
            <ScrollView>
            <View style={{alignItems: 'center', marginTop:hp('2%') }} >
          <FlatList
            data={data3}
            showsHorizontalScrollIndicator={false}
            numColumns={3}
            renderItem={({item, index}) => {
              return (
                <View>
                  <View
                    style={{
                      marginHorizontal: wp('1%'),
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
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({

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

})

export default SavedForLater;