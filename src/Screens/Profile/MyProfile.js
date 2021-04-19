import React, { useEffect, useState, useLayoutEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import {Header, Left, Icon, Center, Right, Body} from 'native-base';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';


const MyProfile = ({navigation}) => {
  const [image, setImage] = useState('');
  const [firstName, setFirstName]= useState('');
  const [lastName, setLastName]= useState('');
  const [email, setEmail]= useState('');


  useEffect(() => {
    let uid = auth().currentUser.uid;
    let email = auth().currentUser.email;

    console.log('hello',email)
    // let source = 'data:image/jpeg;base64,' + image;
      firestore()
      .collection('SimpleUsers')
      .doc(uid)
      .get()
      .then((documentSnapshot)=>{
        setImage(documentSnapshot.data().ProfileImage);
        setFirstName(documentSnapshot.data().firstName);
        setLastName(documentSnapshot.data().lastName);
        setEmail(email);


        console.log('imagecheck', image)


      })
  }, [])
  return (
    <View>
      <Header
        style={{
          backgroundColor: 'transparent',
          elevation: 0,
          borderBottomWidth: 1,
          borderBottomColor: 'lightgrey',
        }}>
        <Left style={{flex: 0.3}}>
          <Icon name="menu" onPress={() => navigation.toggleDrawer()} />
        </Left>
        <Body style={{width: '80%', alignItems: 'center'}}>
          <Text style={{fontFamily: 'HKGrotesk-Regular', fontSize: 16}}>
            My Profile
          </Text>
        </Body>
        <Right style={{flex: 0.3}}>
          <Icon name="shopping-outline" style={{fontSize:24}} type="MaterialCommunityIcons" 
           onPress={()=> navigation.navigate('Cart')} />
        </Right>
      </Header>
      {/* ******** */}
      <View style={{marginTop: hp('3%')}}>
        {/* ********* */}
        <View style={{flexDirection: 'row', marginHorizontal: wp('3%')}}>
          <View style={styles.imagecontainer}>
            <View>
              <Image
                style={styles.userImage}
                source={
                  image ?
                    {uri:  image} :
                  require('../../../assets/jhon.png')
                  }
                
              />
            </View>
            <TouchableOpacity style={styles.camerabutton}>
              <Icon
                style={{color: '#fff', fontSize: 15}}
                name="camera"
                type="SimpleLineIcons"
              />
            </TouchableOpacity>
          </View>

          <View style={{paddingLeft: 20}}>
            <Text style={{fontFamily: 'HKGrotesk-Bold', fontSize: 22}}>
              {firstName} {lastName}
            </Text>
            <Text
              style={{
                color: 'grey',
                marginVertical: hp('1%'),
                fontFamily: 'HKGrotesk-Regular',
                fontSize: 16,
              }}>
              {email}
            </Text>
            <TouchableOpacity
              style={styles.editbutton}
              onPress={() => navigation.navigate('EditProfile')}>
              <Text style={{color: '#3FAD72', fontFamily: 'HKGrotesk-Regular'}}>
                Edit Profile
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* End of Profile portion */}
        <View style={{marginTop: hp('3%'), marginHorizontal: wp('3%')}}>
          {/* Delivery Location */}
          <View>
            <Text style={{fontFamily: 'HKGrotesk-Bold', fontSize: 15}}>
              GENERAL
            </Text>
          </View>
          <TouchableWithoutFeedback>
            <View style={styles.row1}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Icon
                    style={{color: '#3FAD72'}}
                    name="location-pin"
                    type="SimpleLineIcons"
                  />
                  <View style={{paddingLeft: 10}}>
                    <Text style={{fontFamily: 'HKGrotesk-Semibold'}}>
                      Delivery Locations
                    </Text>
                    <Text
                      style={{
                        color: 'grey',
                        fontSize: 13,
                        fontFamily: 'HKGrotesk-Regular',
                      }}>
                      7306 Madisyn Manors Suite 387
                    </Text>
                  </View>
                </View>

                <View>
                  <Icon
                    style={{color: 'grey', fontSize: 20}}
                    name="right"
                    type="AntDesign"
                  />
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
          {/* Profile */}

          <View style={styles.row2}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon style={{color: '#3FAD72'}} name="user" type="AntDesign" />
                <View style={{paddingLeft: 10}}>
                  <Text style={{fontFamily: 'HKGrotesk-Semibold'}}>
                    Profile
                  </Text>
                  <Text
                    style={{
                      color: 'grey',
                      fontSize: 13,
                      fontFamily: 'HKGrotesk-Regular',
                    }}>
                    Manage Your Profile
                  </Text>
                </View>
              </View>

              <View>
                <Icon
                  style={{color: 'grey', fontSize: 20}}
                  name="right"
                  type="AntDesign"
                />
              </View>
            </View>
          </View>
          {/* ********* */}
        </View>
        {/* ******** */}
        {/* My Orders */}

        <View style={styles.row3}>
          <TouchableOpacity
          onPress={()=>navigation.navigate('MyOrders')}

            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginHorizontal: wp('3%'),
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon style={{color: '#3FAD72'}} name="box" type="Feather" />
              <View style={{paddingLeft: 10}}>
                <Text style={{fontFamily: 'HKGrotesk-Semibold'}}>
                  My Orders
                </Text>
                <Text
                  style={{
                    color: 'grey',
                    fontSize: 13,
                    fontFamily: 'HKGrotesk-Regular',
                  }}>
                  Manage Your orders
                </Text>
              </View>
            </View>

            <View>
              <Icon
                style={{color: 'grey', fontSize: 20}}
                name="right"
                type="AntDesign"
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      {/* ********* ********** */}
      <View style={{marginHorizontal: wp('3%'), marginTop: hp('0.5%')}}>
        <View>
          <Text style={{fontFamily: 'HKGrotesk-Bold', fontSize: 15}}>
            ACCOUNT
          </Text>
        </View>

        <View style={styles.row4}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon
                style={{color: '#3FAD72'}}
                name="notifications-none"
                type="MaterialIcons"
              />
              <View style={{paddingLeft: 10}}>
                <Text style={{fontFamily: 'HKGrotesk-Semibold'}}>
                  Notifications
                </Text>
              </View>
            </View>

            <View>
              <Icon
                style={{color: 'grey', fontSize: 20}}
                name="right"
                type="AntDesign"
              />
            </View>
          </View>
        </View>
        {/* Privacy */}
        <View style={styles.row4}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon
                style={{color: '#3FAD72'}}
                name="lock"
                type="SimpleLineIcons"
              />
              <View style={{paddingLeft: 10}}>
                <Text style={{fontFamily: 'HKGrotesk-Semibold'}}>Privacy</Text>
              </View>
            </View>

            <View>
              <Icon
                style={{color: 'grey', fontSize: 20}}
                name="right"
                type="AntDesign"
              />
            </View>
          </View>
        </View>
        {/* Setting */}

        <View style={styles.row5}>
          <TouchableOpacity
          onPress={()=>navigation.navigate('Settings')}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon
                style={{color: '#3FAD72'}}
                name="settings"
                type="SimpleLineIcons"
              />
              <View style={{paddingLeft: 10}}>
                <Text style={{fontFamily: 'HKGrotesk-Semibold'}}>Setting</Text>
              </View>
            </View>

            <View>
              <Icon
                style={{color: 'grey', fontSize: 20}}
                name="right"
                type="AntDesign"
              />
            </View>
          </TouchableOpacity>
        </View>

        {/* **************** */}
        {/* Logout Button */}
        <View style={{marginTop: hp('2%')}}>
          <TouchableOpacity style={styles.logoutbutton}>
            <Text
              style={{
                color: '#fff',
                fontSize: 16,
                fontFamily: 'HKGrotesk-Regular',
              }}>
              LOGOUT
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* ************* */}
    </View>
  );
};

const styles = StyleSheet.create({
  userImage: {
    height: hp('12%'),
    width: wp('24%'),
    backgroundColor: 'lightgrey',
    borderRadius: 50,
    position: 'absolute',
  },
  camerabutton: {
    height: hp('4%'),
    width: wp('8%'),
    backgroundColor: '#3FAD72',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    alignSelf: 'flex-end',
    marginTop: 2,
  },
  imagecontainer: {
    height: hp('12%'),
    width: wp('25%'),
  },
  editbutton: {
    height: hp('4%'),
    width: wp('24%'),
    borderWidth: 1,
    borderColor: '#3FAD72',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row1: {
    height: hp('10%'),
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
  },
  row2: {
    height: hp('10%'),
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
  },
  row3: {
    height: hp('10%'),
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
  },
  row4: {
    height: hp('9%'),
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
  },
  row5: {
    height: hp('9%'),
    justifyContent: 'center',
  },
  logoutbutton: {
    height: hp('7%'),
    width: wp('45%'),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3FAD72',
    borderRadius: 10,
    alignSelf: 'center',
  },
});

export default MyProfile;
