import React, {useState} from 'react';
import {Card, Icon} from 'native-base';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Modal from 'react-native-modal';
import Button from '../components/Button';

const RefundRequest1 = ({handler, visible}) => {

  return (
    <View>
      <Modal
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
        visible={visible}
        >
        <View>
          <Card style={{padding: 10, borderRadius: 15}}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <TouchableOpacity
                style={{alignSelf: 'flex-end'}}
                onPress={handler}>
                <Icon style={{color: 'grey'}} name="close-o" type="EvilIcons" />
              </TouchableOpacity>
              <View style={{alignSelf: 'center'}}>
                <Text style={{fontFamily:'HKGrotesk-Bold', fontSize: 18}}>
                  Ask For Refund
                </Text>
              </View>

              <Card
                style={{padding: 15, borderRadius: 10, marginTop: hp('1%')}}>
                <Text style={{color: 'grey',fontFamily:'HKGrotesk-Regular'}}>
                  lipsum as it is sometimes known, is dummy text used in laying
                  out print, graphic or web designs. The passage is attributed
                  to an unknown typesetter in the 15th century who is thought
                  top: ero's De Finibus Bonorum et Malorum for use in a type
                  specimen book.
                </Text>
              </Card>
              {/* 2nd card */}

              <View
                style={{
                  alignSelf: 'center',
                  marginTop: hp('4%'),
                  marginBottom: hp('1%'),
                }}>
                <Button title="Submit Request" />
              </View>
              {/* ***** */}
            </ScrollView>
          </Card>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  Image: {
    height: hp('11%'),
    width: wp('25%'),
  },

  button8: {
    height: hp('11%'),
    width: wp('25%'),
    backgroundColor: '#3FAD72',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },

  buttonadd: {
    height: hp('11%'),
    width: wp('62%'),
    backgroundColor: '#3FAD72',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});

export default RefundRequest1;
