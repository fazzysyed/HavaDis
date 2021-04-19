import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Header, Left, Icon, Center, Right, Body} from 'native-base';
import StepIndicator from 'react-native-step-indicator';
import Button from '../../components/Button';

const labels = [
  'Tracking Provided',
  'In transit',
  'Out for delivery',
  'Estimated delivery wed, mar 17',
];
const stepIndicatorStyles = {
  stepIndicatorSize: 22,
  currentStepIndicatorSize: 22,
  separatorStrokeWidth: 3,
  currentStepStrokeWidth: 4,
  stepStrokeCurrentColor: '#3FAD72',
  stepStrokeWidth: 4,
  separatorStrokeFinishedWidth: 3,
  stepStrokeFinishedColor: '#3FAD72',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#3FAD72',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#FFFFFF',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 0,
  currentStepIndicatorLabelFontSize: 0,
  stepIndicatorLabelCurrentColor: '#fe7013',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#707070',
  labelSize: 15,
  labelAlign: 'center',

  currentStepLabelColor: '#3FAD72',
};

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

const OrderStatus = ({navigation}) => {
  const renderLabel = ({position, label, currentPosition}) => {
    return (
      <View style={{alignItems: 'center'}}>
        <Text
          style={
            position === currentPosition
              ? styles.stepLabelSelected
              : styles.stepLabel
          }>
          {label}
        </Text>
      </View>
    );
  };
  return (
    <View>
      <Header style={{backgroundColor: 'transparent', elevation: 0}}>
        <Left style={{flex: 0.3}}>
          <Icon name="arrow-back" onPress={() => navigation.goBack()} />
        </Left>
        <Body style={{width: '80%', alignItems: 'center'}}>
          <Text style={{fontFamily: 'HKGrotesk-Regular', fontSize: 16}}>
            Order Detail
          </Text>
        </Body>
        <Right style={{flex: 0.3}}></Right>
      </Header>

      <ScrollView>
        <View>
          <View style={{alignItems: 'center', marginTop: hp('4%')}}>
            <Text style={{fontSize: 16, fontFamily: 'HKGrotesk-Regular'}}>
              Your order code: <Text style={{color: '#3FAD72'}}>#63134236</Text>
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginTop: hp('2%'),
              justifyContent: 'center',
            }}>
            <View style={styles.item}>
              <Text style={{color: '#3FAD72', fontFamily: 'HKGrotesk-Regular'}}>
                3 ITEMS
              </Text>
            </View>
            <View style={styles.total}>
              <Text style={{color: '#3FAD72', fontFamily: 'HKGrotesk-Regular'}}>
                $264.74
              </Text>
            </View>
          </View>

          <View
            style={{
              marginTop: hp('5%'),
              alignItems: 'flex-start',
              marginHorizontal: wp('10%'),
              height: 200,
            }}>
            <StepIndicator
              customStyles={stepIndicatorStyles}
              currentPosition={1}
              labels={labels}
              direction="vertical"
              stepCount={4}
              renderLabel={renderLabel}
            />
          </View>

          <View style={{alignItems: 'center', marginTop: hp('3%')}}
            >
            <Button title="Need Any Help?" onPress={() => navigation.navigate('Chat')} />
          </View>

          {/* Bottom FlatList */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: wp('2%'),
              marginTop: hp('3%'),
            }}>
            <View>
              <Text style={{fontFamily: 'HKGrotesk-Bold', color: '#5E5E5E'}}>
                Promotion Items
              </Text>
            </View>
            <View style={{alignItems: 'center', paddingRight: 5}}>
              <Text style={{color: '#3FAD72', fontFamily: 'HKGrotesk-Regular'}}>
                View All
              </Text>
            </View>
          </View>

          <View style={{alignItems: 'center', marginHorizontal: wp('2%')}}>
            <FlatList
              data={data2}
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
                      <View style={{flexDirection: 'row'}}>
                        <Text
                          style={{color: 'grey', fontFamily: 'HKGrotesk-Bold'}}>
                          {item.Price}
                        </Text>
                        <Icon
                          style={{
                            fontSize: 18,
                            paddingLeft: 3,
                            color: '#3FAD72',
                          }}
                          name="truck-fast-outline"
                          type="MaterialCommunityIcons"
                        />
                      </View>
                    </View>
                  </View>
                );
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    height: hp('5%'),
    width: wp('38%'),
    backgroundColor: '#E4F2F0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  total: {
    height: hp('5%'),
    width: wp('38%'),
    backgroundColor: '#E4F2F0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginLeft: wp('3%'),
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
  stepLabel: {
    fontSize: 19,
    marginHorizontal: 30,
    textAlign: 'center',
    color: '#707070',
    fontFamily: 'HKGrotesk-Medium',
  },
  stepLabelSelected: {
    fontSize: 19,
    marginHorizontal: 30,
    fontFamily: 'HKGrotesk-Medium',
    textAlign: 'center',
    color: '#3FAD72',
  },
});

export default OrderStatus;
