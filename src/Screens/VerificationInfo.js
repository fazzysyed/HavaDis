import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Header, Left, Icon, Center, Right, Body, Card} from 'native-base';

const VerificationInfo = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#FFF'}}>
      <Header style={{backgroundColor: '#fff', elevation: 0}}>
        <Left style={{flex: 0.3}}>
          <Icon
            name="left"
            type="AntDesign"
            onPress={() => navigation.goBack()}
          />
        </Left>
        <Body style={{width: '80%', alignItems: 'center'}}>
          <Text style={{fontSize: 16, fontFamily: 'HKGrotesk-Regular'}}>
            Verification
          </Text>
        </Body>
        <Right style={{flex: 0.3}}></Right>
      </Header>

      <View style={{marginTop: hp('20%'), alignItems: 'center'}}>
        <Icon
          name="user-clock"
          type="FontAwesome5"
          style={{fontSize: 150, color: '#3FAD72'}}
        />

        <View>
          <Text
            style={{
              fontSize: 20,
              marginTop: hp('5%'),
              fontFamily: 'HKGrotesk-Bold',
            }}>
            Verification Pending
          </Text>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('HavausePlus')}
        style={{alignSelf: 'center', marginVertical: 20}}>
        <Text style={{fontSize: 18}}>
          Go to Next Screen For Testing Click Me{' '}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({});
export default VerificationInfo;
