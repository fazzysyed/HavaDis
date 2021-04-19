import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker, Polyline} from 'react-native-maps';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Icon} from 'native-base';
import OrderDetails from '../popups/OrderDetails';

const onHold = (props) => {
  const [modalVisible, setModalVisible] = useState(false);

  const [latitude, setLatitude] = useState(37.78825);
  const [longitude, setLongitude] = useState(-122.4324);
  const [markers, setMarkers] = useState([
    {
      title: 'hello',
      coordinates: {
        latitude: 37.78825,
        longitude: -122.4324,
      },
    },
  ]);
  const visibleHandler = () => {
    setModalVisible(true);
  };

  return (
    <View>
      <OrderDetails
        visible={modalVisible}
        visibleHandler={() => setModalVisible(false)}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          marginHorizontal: hp('1%'),
          marginTop: 5,
        }}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('OrderStatus')}
          style={{
            backgroundColor: '#3FAD72',
            borderRadius: 8,
            height: hp('6%'),
            width: wp('40%'),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: '#FFF',
              textAlign: 'center',
              fontFamily: 'HKGrotesk-Regular',
            }}>
            Order Status
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={visibleHandler}
          style={{
            backgroundColor: '#3FAD72',
            borderRadius: 8,
            height: hp('6%'),
            width: wp('40%'),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: '#FFF',
              textAlign: 'center',
              fontFamily: 'HKGrotesk-Regular',
            }}>
            Order Details
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity style={styles.Buttonask}>
          <Text style={{color: '#FB4B7B', fontFamily: 'HKGrotesk-Regular'}}>
            Cancel Order
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Buttonhelp}
        onPress={() => props.navigation.navigate('Chat')}>
          <Text style={{color: '#FFF', fontFamily: 'HKGrotesk-Regular'}}>
            Need Any Help?
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{alignItems: 'center', marginTop: hp('5%')}}>
        {/* <Text style={{color:'#A9AFBD'}}>Proof of delivery</Text> */}
        {/* Image of Prooof */}
        <View>
          <Image />
        </View>

        {/* Map */}
        <View>
          <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.mapcontainer}
            region={{
              latitude: latitude,
              longitude: longitude,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}>
            {markers.map((marker) => (
              <MapView.Marker
                coordinate={marker.coordinates}
                title={marker.title}
              />
            ))}
          </MapView>

          <View>
            <TouchableOpacity style={styles.Buttontrack}>
              <Icon style={{color: '#FFF'}} name="route" type="FontAwesome5" />
              <Text
                style={{
                  color: '#FFF',
                  paddingLeft: 10,
                  fontFamily: 'HKGrotesk-Regular',
                }}>
                Track Driver
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Buttonask: {
    height: hp('9%'),
    width: wp('90%'),
    borderColor: '#FB4B7B',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 18,
    borderWidth: 1,
    marginTop: hp('2%'),
  },
  Buttonhelp: {
    height: hp('9%'),
    width: wp('90%'),
    backgroundColor: '#3FAD72',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 18,
    marginTop: hp('2%'),
  },
  mapcontainer: {
    height: hp('40%'),
    width: wp('100%'),
    marginTop: hp('4%'),
  },
  Buttontrack: {
    flexDirection: 'row',
    height: hp('9%'),
    width: wp('90%'),
    backgroundColor: '#3FAD72',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 18,
    marginTop: hp('2%'),
    alignSelf: 'center',
    marginBottom: hp('2%'),
  },
});

export default onHold;
