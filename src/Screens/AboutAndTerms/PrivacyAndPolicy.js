import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Header, Left, Icon, Center, Right, Body} from 'native-base';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const PrivacyAndPolicy = ({navigation}) => {
  return (
    <View>
      <Header style={{backgroundColor: 'transparent', elevation: 0}}>
        <Left style={{flex: 0.3}}>
          <Icon name="menu" onPress={() => navigation.toggleDrawer()} />
        </Left>
        <Body style={{width: '80%', alignItems: 'center'}}>
          <Text style={{fontFamily: 'HKGrotesk-Regular', fontSize: 16}}>
            Privacy and Term
          </Text>
        </Body>
        <Right style={{flex: 0.3}}></Right>
      </Header>

      <View>
        <View style={styles.logo}>
          <Image source={require('../../../assets/drawerlogo.png')} />
        </View>
      </View>
      <View style={{marginTop: hp('2%'), marginHorizontal: wp('3%')}}>
        <Text style={{fontFamily: 'HKGrotesk-Bold'}}>Terms of use</Text>
        <Text
          style={{
            color: '#525252',
            lineHeight: 20,
            marginTop: hp('1%'),
            fontFamily: 'HKGrotesk-Regular',
          }}>
          lipsum as it is sometimes known, dummy text used in laying out print,
          graphic or web designs.The passage is attributed to an unknown
          typesetter in the 15th century who is thought to have scrambled parts
          of Cicero's De Finibus Bonorum et Malorum for use in a type specimen
          book. for use in a type specimen book.for use in a type specimen book.
        </Text>
      </View>

      <View style={{marginTop: hp('2%'), marginHorizontal: wp('3%')}}>
        <Text style={{fontFamily: 'HKGrotesk-Bold'}}>Company Policy</Text>
        <Text
          style={{
            color: '#525252',
            lineHeight: 20,
            marginTop: hp('1%'),
            fontFamily: 'HKGrotesk-Regular',
          }}>
          lipsum as it is sometimes known, dummy text used in laying out print,
          graphic or web designs.The passage is attributed to an unknown
          typesetter in the 15th century who is thought to have scrambled parts
          of Cicero's De Finibus Bonorum et Malorum for use in a type specimen
          book. for use in a type specimen book.for use in a type specimen book.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    height: hp('16%'),
    backgroundColor: '#DDDDDD',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PrivacyAndPolicy;
