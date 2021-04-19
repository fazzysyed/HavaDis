import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import {Header, Left, Icon, Center, Right, Body, Card} from 'native-base';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import * as ImagePicker from 'react-native-image-picker';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';


const Photo = (props) => {
  const [idCamera, setIdCamera]= useState(false);
  const [selfieCamera, setSelfieCamera]= useState(false);

  const [addImage, setAddImage] = useState('')
  const [addImage1, setAddImage1] = useState('')

  useEffect(() => {
    if (props.route.params.image) {
      setAddImage(props.route.params.image);
      setIdCamera(true);
    }
    if (props.route.params.image2) {
      setAddImage1(props.route.params.image2);
      setSelfieCamera(true);
    }

    console.log('check', addImage);

  }, []);

 const HandlerId=()=>{
    let uid = auth().currentUser.uid;
    console.log('hello', uid)
    let sourcee = 'data:image/jpeg;base64,' + addImage;
      firestore()
      .collection('SimpleUsers')
      .doc(uid)
      .update({
        IDPicture:sourcee,
      })
      .then(props.navigation.navigate('PlusVerification'))
    }
      const HandlerSelfie=()=>{
        let uid = auth().currentUser.uid;
        console.log('hello', uid)
        let source = 'data:image/jpeg;base64,' + addImage1;
          firestore()
          .collection('SimpleUsers')
          .doc(uid)
          .update({
            SelfieImage: source,
          })
          .then(props.navigation.navigate('PlusVerification'))

      // console.log(addImage, "hello")
    // props.navigation.navigate('PlusVerification')
  }
  
  const TestCamera = () => {
    console.log('Test');
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
  };
  const check = () => {
    console.log('adil', addImage);
  };

  return (
    <View>
      <Header
        style={{
          backgroundColor: 'transparent',
          elevation: 0,
          borderBottomWidth: 3,
          borderBottomColor: '#F1F2FC',
        }}>
        <Left style={{flex: 0.3}}>
          <Icon name="arrow-back" onPress={() => props.navigation.goBack()} />
        </Left>
        <Body style={{width: '80%', alignItems: 'center'}}>
          <Text style={{fontFamily: 'HKGrotesk-Regular', fontSize: 16}}>
            Photo
          </Text>
        </Body>
        <Right
          style={{
            flex: 0.3,
            flexDirection: 'row',
            alignItems: 'center',
          }}></Right>
      </Header>
      <View>
        <View>
          {idCamera ? <Image
            style={{height: hp('70%'), width: wp('100%')}}
            source={{uri: props.route.params.image}}
          /> : <Image
          style={{height: hp('70%'), width: wp('100%')}}
          source={{uri: props.route.params.image2}}
        />
          }

        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: hp('8%'),
          }}> 
          <TouchableOpacity
            style={styles.btn1}
            onPress={() => props.navigation.goBack()}>
            <Text style={{color: '#3FAD72', fontFamily: 'HKGrotesk-Regular'}}>
              Retake
            </Text>
          </TouchableOpacity>
          {idCamera?
          <TouchableOpacity
            style={styles.btn2}
            onPress={() => HandlerId()}>
            <Text style={{color: '#FFF', fontFamily: 'HKGrotesk-Regular'}}>
              Use Photo
            </Text>
          </TouchableOpacity>: null}

          {selfieCamera ? <TouchableOpacity
            style={styles.btn2}
            onPress={() => HandlerSelfie()}>
            <Text style={{color: '#FFF', fontFamily: 'HKGrotesk-Regular'}}>
              Use Photo
            </Text>
          </TouchableOpacity> : null }
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btn1: {
    height: hp('7%'),
    width: wp('42%'),
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#3FAD72',
  },
  btn2: {
    height: hp('7%'),
    width: wp('42%'),
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3FAD72',
  },
});

export default Photo;
