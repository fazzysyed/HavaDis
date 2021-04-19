import React, {Component} from 'react';
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';
import {Container, Header, Tab, Tabs} from 'native-base';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import HeaderWithIcon from '../components/HeaderWithIcon';
import All from '../ScreenComponents/All';
import Completed from '../ScreenComponents/Completed';
import Cancelled from '../ScreenComponents/Cancelled';
const App = ({navigation}) => {
  return (  
    <Container>
      <HeaderWithIcon menu={() => navigation.toggleDrawer()} />

      <Tabs
        tabBarUnderlineStyle={{backgroundColor: '#3FAD72', height: 1}}
        tabContainerStyle={{
          backgroundColor: 'white',
          borderWidth: 1,
          borderBottomWidth: 1,
        }}>
        <Tab
          heading="All"
          tabStyle={{backgroundColor: '#FFF'}}
          textStyle={{color: 'lightgrey', fontFamily: 'HKGrotesk-Regular'}}
          activeTabStyle={{backgroundColor: '#FFf'}}
          activeTextStyle={{color: '#3FAD72ed'}}>
          <View style={styles.container1}>
            <All navigation={navigation} />
          </View>
        </Tab>
        <Tab
          heading="Completed"
          textStyle={{color: 'lightgrey', fontFamily: 'HKGrotesk-Regular'}}
          tabStyle={{backgroundColor: '#FFF'}}
          activeTabStyle={{backgroundColor: '#FFf'}}
          activeTextStyle={{color: '#3FAD72ed'}}>
          <Completed   navigation={navigation} />
        </Tab>
        <Tab
          heading="Cancelled"
          textStyle={{color: 'lightgrey', fontFamily: 'HKGrotesk-Regular'}}
          tabStyle={{backgroundColor: '#FFF'}}
          activeTabStyle={{backgroundColor: '#FFFFFF'}}
          activeTextStyle={{color: '#3FAD72ed'}}>
          <Cancelled   navigation={navigation}  />
        </Tab>
      </Tabs>
    </Container>
  );
};

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
