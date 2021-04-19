import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  useWindowDimensions,
  Dimensions,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  Header,
  Left,
  Icon,
  Center,
  Right,
  Body,
  SwipeRow,
  Button,
} from 'native-base';
import {Container, Tab, Tabs} from 'native-base';
import ClothingTab1 from './ClothingTab';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
// import ClothingTab from './ClothingTab';
const FirstRoute = () => (
  <View style={{height: 400, backgroundColor: 'green'}} />
);

const SecondRoute = () => (
  <View style={{height: 400, backgroundColor: 'green'}} />
);
const Main = ({navigation}) => {
  const layout = useWindowDimensions();

  const ClothingTab = () => <ClothingTab1 navigation={navigation} />;
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'Clothing', title: 'clothing'},
    {key: 'mens', title: `Men's`},
    {key: 'women', title: 'Women’s'},
    {key: 'socks', title: 'Socks'},
  ]);

  const renderScene = SceneMap({
    Clothing: ClothingTab,
    mens: ClothingTab,
    socks: ClothingTab,
    women: ClothingTab,
  });
  return (
    <>
      <Header style={{backgroundColor: '#fff', elevation: 0}}>
        <Left style={{flex: 0.3}}>
          <Icon name="menu" onPress={() => navigation.toggleDrawer()} />
        </Left>
        <Body style={{width: '80%', alignItems: 'center'}}>
          <Image
            source={require('../../../assets/bemo.png')}
            resizeMode="contain"
            style={{height: 80, width: 120}}
          />
        </Body>
        <Right style={{flex: 0.3}}>
          <Icon
            style={{color: '#3FAD72', fontSize: 22}}
            name="cart"
            onPress={() => navigation.navigate('Cart')}
          />
        </Right>
      </Header>

      {/* Search input  */}

      <View style={styles.inputsearch}>
        <View style={{marginHorizontal: wp('2%')}}>
          <Icon name="search" />
        </View>
        <View>
          <TextInput
            style={styles.textinput}
            placeholder="Search"
            onChangeText={() => navigation.navigate('ProductList')}
          />
        </View>
      </View>

      <TabView
        style={{backgroundColor: '#FFFFFF'}}
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            indicatorStyle={{backgroundColor: '#3FAD72'}}
            tabStyle={{width: 90}}
            // scrollEnabled={true}
            activeColor="#3FAD72"
            inactiveColor="#5D5D5D"
            indicatorContainerStyle={{backgroundColor: 'white'}}
            labelStyle={{
              fontSize: 12,
              textAlign: 'right',
              fontFamily: 'HKGrotesk-Regular',
            }}
            style={{backgroundColor: 'white'}}
          />
        )}
        initialLayout={{
          width: Dimensions.get('window').width,
          height: 400,
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  inputsearch: {
    width: wp('94%'),
    height: hp('7%'),
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'lightgrey',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp('1%'),
    backgroundColor: '#FFF',
  },
  textinput: {
    width: wp('80%'),
  },
});

export default Main;
