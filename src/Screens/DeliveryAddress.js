import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {Header, Left, Icon, Center, Right, Body} from 'native-base';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';


const DeliveryAddress = ({navigation}) => {
  const [enable1, setEnable1] = useState(false);
  const [houseNo, setHouseNo] = useState('');
  const [street, setStreet] = useState('');
  const [areaName, setAreaName] = useState('');
  const [areaCode, setAreaCode] = useState('');
  const [city, setCity] = useState('');



  const SaveData=()=>{
    let uid = auth().currentUser.uid;
    console.log('hello', uid)
      firestore()
      .collection('ShippingAddress')
      .doc(uid)
      .set({
        HouseNo:houseNo,
        Street:street,
        AreaName:areaName,
        AreaCode: areaCode,
        City: city,
        
      })
      
    }


      const Delete=()=>{
        let uid = auth().currentUser.uid;
        console.log('hello', uid)
          firestore()
          .collection('ShippingAddress')
          .doc(uid)
          .delete()
          .then(()=>{
            Alert.alert('Record Removed')
          })
      }
      


  useEffect(() => {
    let uid = auth().currentUser.uid;
    let email = auth().currentUser.email;

    console.log('hello',email)
    // let source = 'data:image/jpeg;base64,' + image;
      firestore()
      .collection('ShippingAddress')
      .doc(uid)
      .get()
      .then((documentSnapshot)=>{
        setHouseNo(documentSnapshot.data().HouseNo);
        setStreet(documentSnapshot.data().Street);
        setAreaName(documentSnapshot.data().AreaName);
        setAreaCode(documentSnapshot.data().AreaCode);
        setCity(documentSnapshot.data().City);

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
          <Icon
            name="left"
            type="AntDesign"
            onPress={() => navigation.goBack()}
          />
        </Left>
        <Body style={{width: '80%', alignItems: 'center'}}>
          <Text style={{fontFamily: 'HKGrotesk-Regular', fontSize: 16}}>
            Delivery Address
          </Text>
        </Body>
        <Right style={{flex: 0.3}}>
          <Icon
            name="pencil"
            type="EvilIcons"
            style={{color: '#3FAD72'}}
            onPress={() => setEnable1(!enable1)}
          />
        </Right>
      </Header>
      <View>
        <View style={styles.input1}>
          <TextInput multiline={true}
          value={houseNo}
          onChangeText={(text)=>setHouseNo(text)}
          editable={enable1} placeholder="221B" />
        </View>

        <View style={styles.input1}>
          <TextInput
            onChangeText={(text)=>setStreet(text)}
            multiline={true}
            value={street}
            editable={enable1}
            placeholder="Baker Street"
          />
        </View>

        <View style={styles.input1}>
          <TextInput
            onChangeText={(text)=>setAreaName(text)}
            multiline={true}
            value={areaName}
            editable={enable1}
            placeholder="Nort West"
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: wp('90%'),
            alignSelf: 'center',
          }}>
          <View style={styles.input4}>
            <TextInput editable={enable1}
            value={areaCode}
            onChangeText={(text)=>setAreaCode(text)}
            placeholder="NW1A" />
          </View>
          <View style={styles.input5}>
            <TextInput editable={enable1}
             value={city}
            onChangeText={(text)=>setCity(text)}
            placeholder="London" />
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: hp('6%'),
            width: wp('90%'),
            alignSelf: 'center',
          }}>
          <TouchableOpacity style={styles.btn1}
          onPress={()=>Delete()}
          >
            <Text style={{color: '#BE5871'}}>REMOVE</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn2}
          onPress={()=>SaveData()}
          >
            <Text style={{color: '#FFF'}}>SAVE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input1: {
    height: hp('7%'),
    width: wp('90%'),
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    marginTop: hp('2%'),
    justifyContent: 'center',
  },
  input4: {
    height: hp('7%'),
    width: wp('30%'),
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    marginTop: hp('2%'),
    justifyContent: 'center',
  },
  input5: {
    height: hp('7%'),
    width: wp('50%'),
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    marginTop: hp('2%'),
    justifyContent: 'center',
  },
  btn1: {
    height: hp('5.5%'),
    width: wp('42%'),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5E0E7',
  },
  btn2: {
    height: hp('5.5%'),
    width: wp('42%'),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3FAD72',
  },
});

export default DeliveryAddress;
