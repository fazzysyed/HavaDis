/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  FlatList,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Picker,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
import React, {useState, useRef, useEffect} from 'react';
import Headers from '../components/Header';
import DropDownPicker from 'react-native-dropdown-picker';
import {Icon} from 'native-base';
import CountryPicker, {
  getAllCountries,
  getCallingCode,
} from 'react-native-country-picker-modal';
import * as ImagePicker from 'react-native-image-picker';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const MyProfile = ({navigation}) => {
  const [value, setValue] = useState(null);
  const [visible, setVisible] = useState(false);

  const [items, setItems] = useState([]);
  const [cca2, setCca2] = useState('Us');
  const [callingCode, setCallingCode] = useState('1');
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [location, setLocation] = useState('');
 const [city, setcity]= useState();
 const [state, setState]= useState();




  const getImage = () => {
    const options = {
      includeBase64: false,
      mediaType: 'photo',
    };
    ImagePicker.launchImageLibrary(options, (response) => {
      console.log(response);
      if (!response.didCancel) setImage(response.uri);
    });
  };
  const SaveData=()=>{
    console.log('bkdb', city)
    let uid = auth().currentUser.uid;
    console.log('hello', uid)
    let source =  image;
      firestore()
      .collection('SimpleUsers')
      .doc(uid)
      .update({
        ProfileImage: source,
        firstName:name,
        PhoneNumber:phoneNumber,
        Location:location,
        CountryCode: callingCode,
        City: city,
        State: state,

      })
      .then(navigation.navigate('MyProfile'))

  }

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
        setName(documentSnapshot.data().firstName);
        setPhoneNumber(documentSnapshot.data().PhoneNumber);
        setLocation(documentSnapshot.data().Location);
        setCallingCode(documentSnapshot.data().CountryCode);
        setcity(documentSnapshot.data().City);
        setState(documentSnapshot.data().State);

        console.log('imagecheck', image)

      })
  }, [])
  return (
    <View style={{backgroundColor: '#FFFFFF'}}>
      <Headers title="My Profile" left={() => navigation.goBack()} />
      <View style={{backgroundColor: '#FFF', marginHorizontal: wp('3%')}}>
        <View
          style={{
            flexDirection: 'row',
            // marginHorizontal: wp('3%'),
          }}>
          <View style={styles.imagecontainer}>
            <View>
              <Image
                style={styles.userImage}
                source={
                  image.length
                    ? {uri: image}
                    : require('../../assets/jhon.png')
                }
              />
            </View>
            <TouchableOpacity style={styles.camerabutton}>
              <Icon
                style={{color: '#fff', fontSize: 15}}
                name="camera"
                type="SimpleLineIcons"
                onPress={getImage}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.UploadImageText}>
            <Text style={{fontSize: 21, fontFamily: 'HKGrotesk-Bold'}}>
              Upload Profile Image
            </Text>
            <Text
              style={{
                fontSize: 15,
                color: 'grey',
                width: 200,
                fontFamily: 'HKGrotesk-Regular',
              }}>
              Please upload an image to be recognizable by others
            </Text>
          </View>
        </View>
        <View style={{marginVertical: 15}}>
          <Text style={{marginBottom: 8, fontFamily: 'HKGrotesk-Regular'}}>
            Enter your name
          </Text>
          <TextInput style={styles.textinput}
            value={name}
            onChangeText={(text) => setName(text)}
            placeholder="enter You Name" />
        </View>
        <View style={{marginVertical: 8}}>
          <Text style={{marginBottom: 8, fontFamily: 'HKGrotesk-Regular'}}>
            Enter your phone number
          </Text>
          <View style={styles.textinputNumber}>
            <CountryPicker
              withFilter
              withCallingCode
              renderFlagButton={() => {
                return <Text />;
              }}
              visible={visible}
              onSelect={(value) => {
                console.log(value);

                setCca2(value.cca2);
                setCallingCode(value.callingCode);
              }}
              cca2={cca2}
              translation="eng"
            />
            <TouchableOpacity
              onPress={() => setVisible(!visible)}
              style={{marginHorizontal: 5}}>
              <Text
                style={{
                  fontSize: 15,
                  // padding: 3,
                  fontFamily: 'HKGrotesk-Regular',
                }}>
                {`+${callingCode}`}
              </Text>
            </TouchableOpacity>

            <TextInput
              value={phoneNumber}
              placeholder="Enter Your Phone number"
              keyboardType="number-pad"
              style={{width: '100%'}}
              onChangeText={(text) => setPhoneNumber(text)}
              focusable={true}
            />
          </View>
        </View>
        <View style={{marginVertical: 8}}>
          <Text style={{marginBottom: 8, fontFamily: 'HKGrotesk-Regular'}}>
            Location
          </Text>
          <TextInput style={styles.textinput} placeholder="Location"
            value={location} 
            onChangeText={(text) => setLocation(text)}
          
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{marginVertical: 8}}>
            <Text style={{marginBottom: 8, fontFamily: 'HKGrotesk-Regular'}}>
              City
            </Text>

            <View>
              <DropDownPicker
                items={[
                  {
                    label: 'Peshawar',
                    value: 'peshawar',
                  },
                  {
                    label: 'Karachi',
                    value: 'karachi',
                  },
                  {
                    label: 'Lahour',
                    value: 'lahour',
                  },
                  {
                    label: 'Quetta',
                    value: 'quetta',
                  },
                  {
                    label: 'Other',
                    value: 'other',
                  },
                ]}
                placeholder="Select City"
                defaultValue={city}
                containerStyle={styles.dropcontainer}
                value={city}
                onChangeItem={(item) => setcity(item.value)}
                style={styles.main}
                itemStyle={styles.itemStyle}
                labelStyle={styles.placeholder}
                placeholderStyle={styles.placeholder}
                dropDownStyle={styles.dropDownStyle}
              />
            </View>
          </View>
          <View style={{marginVertical: 8}}>
            <Text style={{marginBottom: 8, fontFamily: 'HKGrotesk-Regular'}}>
              State
            </Text>

            <View>
              <DropDownPicker
                items={[
                  {
                    label: 'KPK',
                    value: 'kpk',
                  },
                  {
                    label: 'Punjab',
                    value: 'punjab',
                  },
                  {
                    label: 'Sindh',
                    value: 'sindh',
                  },
                  {
                    label: 'Balochistan',
                    value: 'balochistan',
                  },
                  {
                    label: 'Other',
                    value: 'other',
                  },
                ]}
                placeholder="Select State"
                defaultValue={state}
                containerStyle={styles.dropcontainer}
                value={state}
                onChangeItem={(item) => setState(item.value)}
                style={styles.main}
                itemStyle={styles.itemStyle}
                labelStyle={styles.placeholder}
                placeholderStyle={styles.placeholder}
                dropDownStyle={styles.dropDownStyle}
              />
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'column', marginTop: hp('15%')}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#3FAD72',
              paddingVertical: 20,
              borderRadius: 10,
              marginHorizontal: 15,
              alignItems: 'center',
              marginBottom: 20,
            }}
            onPress={()=>SaveData()}
            >
            <Text style={{color: '#FFF', fontFamily: 'HKGrotesk-Regular'}}>
              Update info
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  UploadImageText: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    marginHorizontal: 20,
  },
  imagecontainer: {
    height: hp('12%'),
    width: wp('25%'),
  },
  textinput: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#EDECEC',
    paddingVertical: 15,
    height: 54,
  },
  textinputNumber: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#EDECEC',
    alignItems: 'center',
    // paddingVertical: 15,
    height: 54,
    flexDirection: 'row',
  },
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
  //Drop Down

  dropDownStyle: {
    backgroundColor: '#FFFFFF',
  },
  placeholder: {
    fontSize: 16,
    color: '#000',
    fontFamily: 'HKGrotesk-Regular',
  },
  itemStyle: {
    justifyContent: 'center',

    alignItems: 'center',
  },
  main: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    borderWidth: 1,
    shadowOpacity: 1,
    shadowRadius: 15,
    shadowColor: 'rgba(0, 0, 0, 0.15)',

    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderColor: 'rgba(0, 0, 0, 0.15)',
  },
  dropcontainer: {
    height: 50,
    // marginHorizontal: 20,
    width: 150,
  },
});
export default MyProfile;
