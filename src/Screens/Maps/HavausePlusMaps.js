import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Alert,
} from 'react-native';
import {Header, Left, Icon, Right, Body, Card} from 'native-base';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Modal from 'react-native-modal';

const data2 = [
  {
    image:
      'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: 'Product Title',
    Rating: '5.0',
    Address: 'Storefront . 5.4 mi . weed',
    time: 'open',
  },
  {
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVoB3a_65P1uEA5W3EgOyAsCbsmkTmtmVF8Q&usqp=CAU',
    title: 'Product Title',
    Rating: '5.0',
    Address: 'Storefront . 5.4 mi . weed',
    time: 'open',
  },
];

const HavausePlusMaps = ({navigation}) => {
  const [latitude, setLatitude] = useState(37.78825);
  const [longitude, setLongitude] = useState(-122.4324);
  const [modalVisible, setModalVisible] = useState(false);

  const [markers, setMarkers] = useState([
    {
      title: 'hello',
      coordinates: {
        latitude: 37.78825,
        longitude: -122.4324,
      },
    },
    {
      title: 'hello',
      coordinates: {
        latitude: 37.79825,
        longitude: -122.4324,
      },
    },
    {
      title: 'hello',
      coordinates: {
        latitude: 37.79625,
        longitude: -122.4324,
      },
    },
    {
      title: 'hello',
      coordinates: {
        latitude: 37.79725,
        longitude: -122.4324,
      },
    },
  ]);

  return (
    <View>
      <Header style={{backgroundColor: '#fff', elevation: 0}}>
        <Left style={{flex: 0.3}}>
          <Icon name="menu" onPress={() => navigation.toggleDrawer()} />
        </Left>
        <Body style={{width: '80%', alignItems: 'center'}}>
          <Image
            resizeMode="contain"
            style={{height: hp('4%'), width: wp('50%')}}
            source={require('../../../assets/plus.png')}
          />
        </Body>
        <Right style={{flex: 0.3}}>
          <Icon style={{color: '#3FAD72'}} name="cart" />
        </Right>
      </Header>
      <View style={{height: hp('68%')}}>
        <View style={styles.container}>
          <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.map}
            region={{
              latitude: latitude,
              longitude: longitude,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}
            showsUserLocation={true}>
            {markers.map((marker) => (
              <MapView.Marker
                coordinate={marker.coordinates}
                onPress={() => setModalVisible(true)}
                title={marker.title}
              />
            ))}
          </MapView>
          <View style={styles.searchbar}>
            <Icon name="ios-search" style={{padding: 8}} />
            <TextInput
              style={{width: wp('75%')}}
              placeholderTextColor="grey"
              //   value={value}
              //   onChangeText={(text)=>searchFilterFunction(text)}
              placeholder="Search"
            />
          </View>
        </View>
      </View>
      {/* Model Area */}
      <View>
        <Modal
          onBackdropPress={() => setModalVisible(false)}
          animationType={'slide'}
          transparent={true}
          // backdropColor={'black'}
          // backdropOpacity={1}
          style={{
            width: wp('100%'),
            marginLeft: 0,
            justifyContent: 'flex-end',
            marginBottom: 0,
          }}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View>
            <Card style={{padding: 10, borderRadius: 15}}>
              <ScrollView showsVerticalScrollIndicator={false}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                  }}>
                  <TouchableOpacity style={styles.btn2}>
                    <Text style={{fontFamily: 'HKGrotesk-Regular'}}>
                      Filters
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.btn1}>
                    <Text sty={{fontFamily: 'HKGrotesk-Regular'}}>
                      Open Now
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.btn1}>
                    <Text style={{fontFamily: 'HKGrotesk-Regular'}}>
                      Pickup
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.btn1}>
                    <Text style={{fontFamily: 'HKGrotesk-Regular'}}>
                      Storefronts
                    </Text>
                  </TouchableOpacity>
                </View>

                <FlatList
                  data={data2}
                  renderItem={({item, index}) => {
                    return (
                      <View
                        style={{
                          marginHorizontal: wp('3%'),
                          marginTop: hp('1%'),
                        }}>
                        <View style={{flexDirection: 'row'}}>
                          <View style={{height: hp('16%'), width: wp('30%')}}>
                            <View
                              style={{
                                height: hp('14%'),
                                width: wp('27%'),
                                backgroundColor: 'black',
                                marginTop: hp('2%'),
                                position: 'absolute',
                              }}>
                              <Image
                                style={{height: hp('14%'), width: wp('27%')}}
                                source={{uri: item.image}}
                              />
                            </View>
                            <View style={styles.logo}>
                              <Image
                                resizeMode="contain"
                                style={{height: hp('3%'), width: wp('6%')}}
                                source={require('../../../assets/leaf.png')}
                              />
                            </View>
                          </View>

                          <View style={{marginLeft: 20, marginTop: hp('3%')}}>
                            <Text
                              style={{
                                fontFamily: 'HKGrotesk-Bold',
                                fontSize: 18,
                              }}>
                              Store Name
                            </Text>
                            <View style={{flexDirection: 'row'}}>
                              <View style={styles.badge}>
                                <Icon
                                  name="star"
                                  style={{fontSize: 15, color: '#FFF'}}
                                />
                                <Text
                                  style={{
                                    color: '#FFF',
                                    fontFamily: 'HKGrotesk-Regular',
                                  }}>
                                  {' '}
                                  5.0
                                </Text>
                              </View>
                              <View>
                                <Text style={{fontFamily: 'HKGrotesk-Regular'}}>
                                  {' '}
                                  (409)
                                </Text>
                              </View>
                            </View>

                            <View style={{marginTop: 5}}>
                              <Text
                                style={{
                                  color: 'lightgrey',
                                  fontFamily: 'HKGrotesk-Regular',
                                }}>
                                Storefront . 5.4 mi . weed
                              </Text>
                            </View>

                            <TouchableOpacity style={styles.openbtn}>
                              <Text
                                style={{
                                  color: 'lightgrey',
                                  fontFamily: 'HKGrotesk-Regular',
                                }}>
                                Open now
                              </Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                        <View
                          style={{
                            borderWidth: 1,
                            marginTop: hp('2%'),
                            borderColor: 'lightgrey',
                          }}></View>
                      </View>
                    );
                  }}
                />
              </ScrollView>
            </Card>
          </View>
        </Modal>
      </View>
      {/* ***************** */}
    </View>
  );
};

const styles = StyleSheet.create({
  searchbar: {
    marginHorizontal: hp('1.5%'),
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'lightgrey',
    flexDirection: 'row',
    backgroundColor: '#FFF',
  },
  map: {
    height: hp('90%'),
    width: wp('100%'),
    marginTop: hp('4%'),
    position: 'absolute',
  },
  btn1: {
    height: hp('4%'),
    width: wp('22%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#F5F5F5',
  },
  btn2: {
    height: hp('4%'),
    width: wp('20%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#F5F5F5',
  },
  badge: {
    flexDirection: 'row',
    height: hp('3%'),
    width: wp('15%'),
    backgroundColor: '#FF9D2B',
    justifyContent: 'center',
    borderRadius: 8,
    alignItems: 'center',
  },
  openbtn: {
    height: hp('3.5%'),
    width: wp('25%'),
    borderWidth: 1,
    borderRadius: 6,
    borderColor: 'lightgrey',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: hp('5%'),
    width: wp('10%'),
    backgroundColor: '#3FAD72',
    borderRadius: 20,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HavausePlusMaps;
