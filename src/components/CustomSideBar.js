import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
  TouchableOpacity,
} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {Container, Accordion, Header, Content, Icon} from 'native-base';
import DropDownPicker from 'react-native-dropdown-picker';
const dataArray = [
  {
    title: 'By Category',
    content: 'Lorem ipsum dolor sit amet',
    icon: 'category',
  },
];
const CustomSidebarMenu = (props) => {
  const [state, setState] = useState(false);
  const BASE_PATH =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/';
  const proileImage = 'react_logo.png';

  return (
    <SafeAreaView style={{flex: 1}}>
      {/*Top Large Image */}
     <TouchableOpacity
        onPress={() => props.navigation.navigate('Main')}
      >
        <Image
          source={require('../../assets/logofordash.png')}
          style={styles.sideMenuProfileIcon}
          resizeMode="contain"
          />
        </TouchableOpacity>
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#3FAD72',
          height: 50,
          alignSelf: 'center',
          borderRadius: 10,
          width: 190,
          flexDirection: 'row',
        }}>
        <Image
          source={require('../../assets/logout.png')}
          style={{width: 20, height: 20}}
        />
        <Text style={{fontSize: 16, color: 'white', marginHorizontal: 10}}>
          Login
        </Text>
      </TouchableOpacity>
      <DrawerContentScrollView
        {...props}
        style={{marginHorizontal: 30}}
        showsVerticalScrollIndicator={false}>
        <DrawerItem
          icon={() => (
            <Image
              source={require('../../assets/explore.png')}
              resizeMode="contain"
              style={{height: 20, width: 20}}
            />
          )}
          label="Explore"
          labelStyle={{color: '#333333'}}
          // onPress={() => Linking.openURL('https://aboutreact.com/')}
        />
        <DrawerItem
          icon={() => (
            <Image
              source={require('../../assets/myorder.png')}
              resizeMode="contain"
              style={{height: 20, width: 20}}
            />
          )}
          labelStyle={{color: '#333333'}}
          label="My Orders"
          onPress={() => props.navigation.navigate('MyOrders')}
        />
        <DrawerItem
          icon={() => (
            <Image
              source={require('../../assets/followers.png')}
              resizeMode="contain"
              style={{height: 20, width: 20}}
            />
          )}
          labelStyle={{color: '#333333'}}
          label="Following"
          onPress={() => props.navigation.navigate('Following')}
        />
        <DrawerItem
          icon={() => (
            <Image
              source={require('../../assets/havacash.png')}
              resizeMode="contain"
              style={{height: 20, width: 20}}
            />
          )}
          labelStyle={{color: '#333333'}}
          label="Havause cash"
          // onPress={() => Linking.openURL('https://aboutreact.com/')}
          onPress={() => props.navigation.navigate('HavauseCash')}
        />

        <Content style={{marginHorizontal: 10, marginVertical: 10}}>
          <TouchableOpacity
            onPress={() => setState(!state)}
            style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../../assets/dashhava.png')}
                resizeMode="contain"
                style={{height: 20, width: 20, marginHorizontal: 10}}
              />
              <Text style={{marginHorizontal: 10}}>By Category</Text>
            </View>
            <Icon
              name={state ? 'up' : 'down'}
              type="AntDesign"
              style={{
                fontSize: 16,
                marginVertical: 6,
                marginLeft: 20,
                color: '#707070',
              }}
            />
          </TouchableOpacity>
          {state ? (
            <View style={{marginTop: 10}}>
              <Content style={{marginHorizontal: 10, marginVertical: 10}}>
                <TouchableOpacity
                  onPress={() => {}}
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      source={require('../../assets/allaccess.png')}
                      resizeMode="contain"
                      style={{height: 20, width: 20, marginHorizontal: 10}}
                    />
                    <Text style={{marginHorizontal: 0}}>All Accessories</Text>
                  </View>
                  <Icon
                    name={'down'}
                    type="AntDesign"
                    style={{
                      fontSize: 16,
                      marginVertical: 6,
                      marginLeft: 20,
                      color: '#707070',
                    }}
                  />
                </TouchableOpacity>
              </Content>
              <Content style={{marginHorizontal: 10, marginVertical: 10}}>
                <TouchableOpacity
                  onPress={() => {}}
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      source={require('../../assets/homeproduct.png')}
                      resizeMode="contain"
                      style={{height: 20, width: 20, marginHorizontal: 10}}
                    />
                    <Text style={{marginHorizontal: 0}}>Home Products</Text>
                  </View>
                  <Icon
                    name={'down'}
                    type="AntDesign"
                    style={{
                      fontSize: 16,
                      marginVertical: 6,
                      marginLeft: 20,
                      color: '#707070',
                    }}
                  />
                </TouchableOpacity>
              </Content>

              <Content style={{marginHorizontal: 10, marginVertical: 10}}>
                <TouchableOpacity
                  onPress={() => {}}
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      source={require('../../assets/clothing.png')}
                      resizeMode="contain"
                      style={{height: 20, width: 20, marginHorizontal: 10}}
                    />
                    <Text style={{marginHorizontal: 10}}>Clothing</Text>
                  </View>
                  <Icon
                    name={'down'}
                    type="AntDesign"
                    style={{
                      fontSize: 16,
                      marginVertical: 6,
                      marginLeft: 20,
                      color: '#707070',
                    }}
                  />
                </TouchableOpacity>
              </Content>
              <Content style={{marginHorizontal: 10, marginVertical: 10}}>
                <TouchableOpacity
                  onPress={() => {}}
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      source={require('../../assets/beauty.png')}
                      resizeMode="contain"
                      style={{height: 20, width: 20, marginHorizontal: 10}}
                    />
                    <Text style={{marginHorizontal: 0}}>Beauty Prodcuts</Text>
                  </View>
                  <Icon
                    name={'down'}
                    type="AntDesign"
                    style={{
                      fontSize: 16,
                      marginVertical: 6,
                      marginLeft: 20,
                      color: '#707070',
                    }}
                  />
                </TouchableOpacity>
              </Content>
              <Content style={{marginHorizontal: 10, marginVertical: 10}}>
                <TouchableOpacity
                  onPress={() => {}}
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      source={require('../../assets/electronics.png')}
                      resizeMode="contain"
                      style={{height: 20, width: 20, marginHorizontal: 10}}
                    />
                    <Text style={{marginHorizontal: 10}}>Electronics</Text>
                  </View>
                  <Icon
                    name={'down'}
                    type="AntDesign"
                    style={{
                      fontSize: 16,
                      marginVertical: 6,
                      marginLeft: 20,
                      color: '#707070',
                    }}
                  />
                </TouchableOpacity>
              </Content>
            </View>
          ) : null}
        </Content>
        <DrawerItem
          icon={() => (
            <Image
              source={require('../../assets/p.png')}
              resizeMode="contain"
              style={{height: 20, width: 20}}
            />
          )}
          label="Profile"
          labelStyle={{color: '#333333'}}
          onPress={() => props.navigation.navigate('MyProfile')}

          // onPress={() => Linking.openURL('https://aboutreact.com/')}
        />
        <DrawerItem
          style={{width: 250}}
          icon={() => (
            <Image
              source={require('../../assets/payya.png')}
              resizeMode="contain"
              style={{height: 20, width: 20}}
            />
          )}
          label="Payment Method"
          labelStyle={{color: '#333333'}}
          onPress={() => props.navigation.navigate('Payment')}
        />
        <DrawerItem
        onPress={()=> props.navigation.navigate('DeliveryAddress')}
          style={{width: 250}}
          icon={() => (
            <Image
              source={require('../../assets/dir.png')}
              resizeMode="contain"
              style={{height: 20, width: 20}}
            />
          )}
          label="Delivery Address"
          labelStyle={{color: '#333333'}}

          // onPress={() => Linking.openURL('https://aboutreact.com/')}
        />
        <DrawerItem
          onPress={() => props.navigation.navigate('Settings')}
          icon={() => (
            <Image
              source={require('../../assets/settings.png')}
              resizeMode="contain"
              style={{height: 20, width: 20}}
            />
          )}
          label="Settings"
          labelStyle={{color: '#333333'}}

          // onPress={() => Linking.openURL('https://aboutreact.com/')}
        />
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    width: 150,
    height: 80,

    alignSelf: 'center',
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default CustomSidebarMenu;
