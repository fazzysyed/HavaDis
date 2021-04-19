import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Header, Left, Icon, Center, Right, Body} from 'native-base';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Container, Tab, Tabs} from 'native-base';
import ReviewsTab from './ReviewsTab';
import DropDownPicker from 'react-native-dropdown-picker';
import StoreDetailtab from './StoreDetailtab';

const DetailsReview = () => {
  const [items, setItems] = useState([
    {label: 'USA', value: 'usa'},
    {label: 'UK', value: 'uk'},
    {label: 'France', value: 'france'},
  ]);
  return (
    <ScrollView>
      <Header style={{backgroundColor: 'transparent', elevation: 0}}>
        <Left style={{flex: 0.3}}>
          <Icon name="arrow-back" />
        </Left>
        <Body style={{width: '80%', alignItems: 'center'}}>
          <Text>Details</Text>
        </Body>
        <Right style={{flex: 0.3}}>
          <Icon name="cart" />
        </Right>
      </Header>
      {/* Heroo Banner */}

      <View style={{marginTop: hp('3%')}}>
        <View style={{marginHorizontal: wp('2.5%')}}>
          <Image
            style={styles.heroImage}
            source={{
              uri:
                'https://images.pexels.com/photos/3401900/pexels-photo-3401900.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            }}
          />
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: hp('2%'),
          marginHorizontal: wp('2.5%'),
          justifyContent: 'space-between',
        }}>
        <View>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>Name of</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={styles.Followbutton}>
            <Text style={{color: '#3FAD72'}}>Follow</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Categorybutton}>
            <View
              style={{
                // The solution: Apply zIndex to any device except Android
                ...(Platform.OS === 'android' && {
                  zIndex: 10,
                }),
              }}>
              <DropDownPicker
                items={items}
                containerStyle={{height: hp('5%'), width: wp('25%')}}
                placeholder="Catogery"
                placeholderStyle={{fontSize: 12, color: 'grey'}}
                style={{backgroundColor: '#fff'}}
                dropDownStyle={{backgroundColor: '#fafafa'}}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* End of hero banner and Button */}

      <View
        style={{
          backgroundColor: '#fff',
          borderTopWidth: 1,
          borderTopColor: 'lightgrey',
          marginTop: hp('2%'),
        }}>
        <Tabs
          locked={true}
          tabBarUnderlineStyle={{backgroundColor: '#3FAD72', height: 2}}
          tabContainerStyle={{
            backgroundColor: 'transparent',
            borderWidth: 1,
            borderBottomWidth: 1,
            elevation: 0,
          }}>
          <Tab
            heading="Havazuse product"
            textStyle={{color: 'lightgrey', fontWeight: '900'}}
            tabStyle={{backgroundColor: 'transparent'}}
            activeTabStyle={{backgroundColor: 'transparent'}}
            activeTextStyle={{color: '#3FAD72ed'}}>
            <View>
              <Text>Screen 1</Text>
            </View>
          </Tab>
          <Tab
            heading="Reviews"
            textStyle={{color: 'lightgrey', fontWeight: '900'}}
            tabStyle={{backgroundColor: 'transparent'}}
            activeTabStyle={{backgroundColor: 'transparent'}}
            activeTextStyle={{color: '#3FAD72ed'}}>
            <View>
              <ReviewsTab />
            </View>
          </Tab>

          <Tab
            heading="Store details"
            textStyle={{color: 'lightgrey', fontWeight: '900'}}
            tabStyle={{backgroundColor: 'transparent'}}
            activeTabStyle={{backgroundColor: 'transparent'}}
            activeTextStyle={{color: '#3FAD72ed'}}>
            <View>
              <StoreDetailtab />
            </View>
          </Tab>
        </Tabs>
      </View>

      {/* ****** */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  heroImage: {
    height: hp('23%'),
    width: wp('95%'),
    borderRadius: 10,
  },
  Followbutton: {
    height: hp('4%'),
    width: wp('20%'),
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderColor: '#3FAD72',
    marginRight: wp('2%'),
  },
  Categorybutton: {
    height: hp('4%'),
    width: wp('25%'),
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});
export default DetailsReview;
