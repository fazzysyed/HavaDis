import React from 'react';
import {View, Text, StyleSheet, FlatList, Image, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  Header,
  Left,
  Icon,
  Center,
  Right,
  Body,
  Item,
  Input,
} from 'native-base';

const data2 = [
  {
    id: '1',
    image:
      'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: 'Hello',
    quantity: '10,920',
  },
  {
    id: '2',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVoB3a_65P1uEA5W3EgOyAsCbsmkTmtmVF8Q&usqp=CAU',
    title: 'Man',
    quantity: '10,920',
  },
  {
    id: '3',
    image:
      'https://cdn.britannica.com/s:300x169,c:crop/36/123536-004-1780EFF1/Variety-fruits-vegetables.jpg',
    title: 'Women',
    quantity: '10,920',
  },
  {
    id: '4',
    image:
      'https://cdn.britannica.com/s:300x169,c:crop/36/123536-004-1780EFF1/Variety-fruits-vegetables.jpg',
    title: 'Kid',
    quantity: '10,920',
  },
];

const Following = ({navigation}) => {
  return (
    <View>
      <Header style={{backgroundColor: 'transparent', elevation: 0}}>
        <Left style={{flex: 0.3}}>
          <Icon
            style={{fontSize: 16}}
            name="left"
            type="AntDesign"
            onPress={() => navigation.goBack()}
          />
        </Left>
        <Body style={{width: '80%', alignItems: 'center'}}>
          <Text>Following</Text>
        </Body>
        <Right style={{flex: 0.3}}></Right>
      </Header>
      <View style={{marginHorizontal: wp('4%')}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: wp('2%'),
          }}>
          <Text style={{color: '#919191'}}>{data2.length} Sellers</Text>
          <View
            style={{
              flexDirection: 'row',
              width: wp('22%'),
              justifyContent: 'space-between',
            }}></View>
        </View>
        <FlatList
          data={data2}
          renderItem={({item, index}) => {
            return (
              <View>
                <TouchableOpacity
                onPress={()=>navigation.navigate('SellerDetail')}
                  style={{
                    height: hp('10%'),
                    borderTopWidth: 0.5,
                    borderColor: 'lightgrey',
                    justifyContent: 'center',
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <Image style={styles.img} source={{uri: item.image}} />
                    <View style={{paddingLeft: 10}}>
                      <Text style={{color: '#35393B'}}>{item.title}</Text>
                      <Text style={{color: '#35393B', paddingTop: 4}}>
                        {item.quantity} items for sale
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    height: hp('6%'),
    width: wp('12%'),
    borderRadius: 30,
    backgroundColor: 'black',
  },
});

export default Following;
