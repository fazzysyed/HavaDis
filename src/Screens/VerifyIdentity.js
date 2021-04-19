import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  Header,
  Card,
  Left,
  Body,
  Right,
  Icon,
  Title,
  Container,
} from 'native-base';
import Button from '../components/Button';

export default function App() {
  return (
    <SafeAreaView style={styles.contianer}>
      <ScrollView>
        <Header style={{backgroundColor: 'transparent', elevation: 0}}>
          <Left>
            <Icon name="arrow-back" />
          </Left>
          <Body></Body>
        </Header>

        <View style={{marginHorizontal: wp('1.5%')}}>
          <View>
            <Text style={styles.text1}>Verify Identity</Text>
          </View>
          <View style={styles.paragraph}>
            <Text>
              Verification helps you to increase your chances of getting
              selected, People will trust you I you have verified badge on your
              profile. your information will be reviewed by expert team
            </Text>
          </View>

          <Card
            style={{
              height: hp('13%'),
              backgroundColor: '#F0F0F0',
              justifyContent: 'center',
              borderRadius: 10,
              padding: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
              <View style={{flexDirection: 'column', width: wp('64%')}}>
                <Text style={styles.cardtext}>Profile Image</Text>
                <Text>Please upload an image to be recognized by others </Text>
              </View>
              <View>
                <TouchableOpacity style={styles.cardbutton}>
                  <Text style={{color: '#fff'}}>Upload</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Card>

          <Card
            style={{
              height: hp('13%'),
              backgroundColor: '#F0F0F0',
              justifyContent: 'center',
              borderRadius: 10,
              padding: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
              <View style={{flexDirection: 'column', width: wp('64%')}}>
                <Text style={styles.cardtext}>Email</Text>
                <Text>Please check your mail {'\n'}to verify </Text>
              </View>
              <View>
                <TouchableOpacity style={styles.cardbutton}>
                  <Text style={{color: '#fff'}}>Verify</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Card>

          <Card
            style={{
              height: hp('13%'),
              backgroundColor: '#F0F0F0',
              justifyContent: 'center',
              borderRadius: 10,
              padding: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
              <View style={{flexDirection: 'column', width: wp('64%')}}>
                <Text style={styles.cardtext}>Driving License</Text>
                <Text>
                  Upload your driving license photo{'\n'}so that you are allow
                  to drive.{' '}
                </Text>
              </View>
              <View>
                <TouchableOpacity style={styles.cardbutton}>
                  <Text style={{color: '#fff'}}>Upload</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Card>

          <Card
            style={{
              height: hp('13%'),
              backgroundColor: '#F0F0F0',
              justifyContent: 'center',
              borderRadius: 10,
              padding: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
              <View style={{flexDirection: 'column', width: wp('64%')}}>
                <Text style={styles.cardtext}>Passport</Text>
                <Text>
                  Please upload passport photo to complete registration process.{' '}
                </Text>
              </View>
              <View>
                <TouchableOpacity style={styles.cardbutton}>
                  <Text style={{color: '#fff'}}>Upload</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Card>

          <View style={styles.conditiontext}>
            <Text style={{textAlign: 'center'}}>
              By continuing, I confirm that i have read & agree to the
              <Text style={{textDecorationLine: 'underline'}}>
                Terms & conditions
              </Text>
              and{' '}
              <Text style={{textDecorationLine: 'underline'}}>
                Privacy policy
              </Text>
            </Text>
          </View>

          <View style={styles.button}>
            <Button title="Confirm Registration" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contianer: {},
  text1: {
    fontSize: 30,
    fontWeight: 'bold',
  },

  paragraph: {
    marginVertical: hp('1%'),
  },
  cardtext: {
    fontSize: 20,
    marginBottom: hp('0.5%'),
  },
  cardbutton: {
    backgroundColor: '#3FAD72',
    justifyContent: 'center',
    height: hp('5%'),
    width: wp('25%'),
    alignItems: 'center',
    borderRadius: 6,
  },
  conditiontext: {
    marginTop: hp('1.5%'),
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    marginVertical: hp('3%'),
  },
});
