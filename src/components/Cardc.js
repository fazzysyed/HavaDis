import {Card, Icon} from 'native-base';
import React from 'react';
import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';

const Cardc = () => {
  return (
    <View style={{marginTop: hp('5%'), marginBottom: hp('4%')}}>
      <Image
        style={{width: wp('70%'), alignSelf: 'center', position: 'absolute'}}
        source={require('../../assets/cardback.jpeg')}
      />
      <LinearGradient
        start={{x: 0.45, y: 1}}
        end={{x: 0.69, y: 0.79}}
        locations={[0.6, 0, 0.6]}
        colors={['#2B2B2B', '#2A2A2A', '#343434']}
        style={styles.card}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{color: '#FFF', fontSize: 18,fontFamily:'HKGrotesk-Regular'}}>Credit Card</Text>
          <Text style={{color: '#FFF', fontSize: 18,fontFamily:'HKGrotesk-Regular'}}>Bank Name</Text>
        </View>
        <View>
          <Image
            style={{
              borderRadius: 5,
              height: hp('4.5%'),
              width: wp('12%'),
              marginVertical: hp('1%'),
            }}
            source={require('../../assets/simt.jpeg')}
          />
        </View>
        <View>
          <Text style={{color: '#FFF', fontSize: 22,fontFamily:'HKGrotesk-Regular'}}>
            1234 {'  '} 5678 {'  '} 9012 {'  '} 3456
          </Text>
        </View>
        <View>
          <Text style={{color: '#fff',fontFamily:'HKGrotesk-Regular'}}>0123</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'flex-end',
            alignItems: 'center',
          }}>
          <View>
            <Text style={{color: '#fff', fontSize: 7.5,fontFamily:'HKGrotesk-Regular'}}>VALID</Text>
            <Text style={{color: '#fff', fontSize: 7.5,fontFamily:'HKGrotesk-Regular'}}>THRU</Text>
          </View>
          <Icon
            name="caretright"
            type="AntDesign"
            style={{color: '#fff', fontSize: 9}}
          />

          <Text style={{color: '#fff', fontSize: 18,fontFamily:'HKGrotesk-Regular'}}> 01/80</Text>
        </View>

        <View>
          <Text style={{color: '#fff', fontSize: 18,fontFamily:'HKGrotesk-Regular'}}>Name Surname</Text>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    padding: 20,
    paddingHorizontal: 32,
    marginTop: 20,
  },
});

export default Cardc;
