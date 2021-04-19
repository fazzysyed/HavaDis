import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import {
  Header,
  Left,
  Icon,
  Center,
  Right,
  Body,
  Item,
  Input,
} from 'native-base';
import {Container, Tab, Tabs} from 'native-base';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ProductDetailtab1 from '../ScreenComponents/ProductDetailtab1';
import ProductDetailAboutTab from '../ScreenComponents/ProductDetailAboutTab';
import ProductDetailtab2 from '../ScreenComponents/ProductDetailtab2';

const App = ({navigation}) => {
  return (
    <>
      <Header style={{backgroundColor: '#fff', height: hp('8%')}}>
        <Left style={{flex: 0.3}}>
          <Icon name="arrow-back" />
        </Left>
        <Body style={{width: '80%', alignItems: 'center'}}>
          <Text style={{fontFamily:'HKGrotesk-Regular', fontSize:16}}>Details</Text>
        </Body>
        <Right style={{flex: 0.3}}>
          <Icon name="cart" />
        </Right>
      </Header>
      <ScrollView style={{flex: 1}}>
        <Container
          style={{
            backgroundColor: '#fff',
            borderTopWidth: 1,
            borderTopColor: 'lightgrey',
          }}>
          <Tabs
            locked={true}
            tabBarUnderlineStyle={{backgroundColor: '#3FAD72', height: 2}}
            tabContainerStyle={{
              backgroundColor: 'transparent',
              borderWidth: 1,
              borderBottomWidth: 1,
              elevation: 0,
            }}>
            <Tab
              heading="Overview"
              textStyle={{color: 'lightgrey', fontWeight: '900',fontFamily:'HKGrotesk-Regular'}}
              tabStyle={{backgroundColor: 'transparent'}}
              activeTabStyle={{backgroundColor: 'transparent'}}
              activeTextStyle={{color: '#3FAD72ed'}}>
              <ProductDetailtab1 navigation={navigation} />
            </Tab>
            <Tab
              heading="Similar Products"
              textStyle={{color: 'lightgrey', fontWeight: '900',fontFamily:'HKGrotesk-Regular'}}
              tabStyle={{backgroundColor: 'transparent'}}
              activeTabStyle={{backgroundColor: 'transparent'}}
              activeTextStyle={{color: '#3FAD72ed'}}>
              <View>
                <ProductDetailtab2 />
              </View>
            </Tab>
          </Tabs>
        </Container>
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({});
export default App;
