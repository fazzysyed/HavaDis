import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  FlatList,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
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
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Carousel, {Pagination, ParallaxImage} from 'react-native-snap-carousel';
import {Container, Tab, Tabs} from 'native-base';
import Brownies from './Tabs/Brownies';
import Muffins from './Tabs/Muffins';
import Weed from './Tabs/Weed';
import Cookies from './Tabs/Cookies';
import Swiper from 'react-native-swiper';

const ENTRIES1 = [
  {
    title: 'Beautiful and dramatic Antelope Canyon',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://i.imgur.com/UYiroysl.jpg',
  },
  {
    title: 'Earlier this morning, NYC',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
  },
  {
    title: 'White Pocket Sunset',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    illustration: 'https://i.imgur.com/MABUbpDl.jpg',
  },
  {
    title: 'White Pocket Sunset',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    illustration: 'https://i.imgur.com/MABUbpDl.jpg',
  },
];

const data = [
  {
    id: '1',
    title: 'Brownies',
    logo: 'gm',
    imagee: require('../../../assets/brownie.png'),
  },
  {
    id: '2',
    title: 'Muffins',
    logo: 'gm',
    imagee: require('../../../assets/cupcake.png'),
  },
  {
    id: '3',
    title: 'Cookies',
    logo: 'gm',
    imagee: require('../../../assets/cookie.png'),
  },
  {
    id: '4',
    title: 'Vape',
    logo: 'gm',
    imagee: require('../../../assets/vape.png'),
  },
  {
    id: '5',
    title: 'Weed',
    logo: 'gm',
    imagee: require('../../../assets/weed.png'),
  },
  {
    id: '6',
    title: 'Cupcake',
    logo: 'gm',
    imagee: require('../../../assets/cupcake.png'),
  },
  {
    id: '7',
    title: 'Candy',
    logo: 'gm',
    imagee: require('../../../assets/candy.png'),
  },
  {
    id: '8',
    title: 'Alcohol',
    logo: 'gm',
    imagee: require('../../../assets/alcohol.png'),
  },
];

const data2 = [
  {
    id: '1',
    image:
      'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: 'Product Title',
    Shipping: 'free shipping',
    Price: '$24.00',
  },
  {
    id: '2',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVoB3a_65P1uEA5W3EgOyAsCbsmkTmtmVF8Q&usqp=CAU',
    title: 'Product Title',
    Shipping: 'free shipping',
    Price: '$24.00',
  },
  {
    id: '3',
    image:
      'https://cdn.britannica.com/s:300x169,c:crop/36/123536-004-1780EFF1/Variety-fruits-vegetables.jpg',
    title: 'Product Title',
    Shipping: 'free shipping',
    Price: '$24.00',
  },
  {
    id: '4',
    image:
      'https://cdn.britannica.com/s:300x169,c:crop/36/123536-004-1780EFF1/Variety-fruits-vegetables.jpg',
    title: 'Product Title',
    Shipping: 'free shipping',
    Price: '$24.00',
  },
  {
    id: '5',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8yMIHkxs901EzRfpvMq6gIEfDADZcfbJxLw&usqp=CAU',
    title: 'Product Title',
    Shipping: 'free shipping',
    Price: '$24.00',
  },
  {
    id: '6',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo55BzgQWOmyScAZsMHdZePZ8Wdmtr8e6xPA&usqp=CAU',
    title: 'Product Title',
    Shipping: 'free shipping',
    Price: '$24.00',
  },
];

const {width: screenWidth} = Dimensions.get('window');

const MainScreen2 = (props, {navigation}) => {
  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const renderItem = ({item, index}, parallaxProps) => {
    return (
      <View style={styles.item}>
        <Image source={{uri: item.illustration}} style={styles.image} />
      </View>
    );
  };
  useEffect(() => {
    setEntries(ENTRIES1);
  }, []);

  return (
    <>
      <Header style={{backgroundColor: 'transparent', elevation: 0}}>
        <Left style={{flex: 0.3}}>
          <Icon name="menu" onPress={() => props.navigation.toggleDrawer()} />
        </Left>
        <Body style={{width: '80%', alignItems: 'center'}}>
          <Image
            source={require('../../../assets/logopluss.png')}
            resizeMode="contain"
            style={{height: 80, width: 120}}
          />
        </Body>
        <Right style={{flex: 0.3}}>
          <Icon
            style={{color: '#3FAD72', fontSize: 22}}
            name="cart"
            onPress={() => props.navigation.navigate('Cart')}
          />
        </Right>
      </Header>
      <ScrollView>
        <View style={styles.searchbar}>
          <Icon name="ios-search" style={{padding: 8}} />
          <TextInput
            style={{width: wp('75%')}}
            placeholderTextColor="grey"
            placeholder="Search"
            onChangeText={() => props.navigation.navigate('ProductList')}
          />
        </View>

        {/* Store  Front button */}
        <View
          style={{
            flexDirection: 'row',
            marginTop: hp('2%'),
            marginHorizontal: wp('3%'),
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            style={styles.storefrontbutton}
            onPress={() => props.navigation.navigate('Dispensaries')}>
            <Image source={require('../../../assets/button2.png')} />
            <Text style={{color: '#fff', fontFamily: 'HKGrotesk-Regular'}}>
              Storefronts
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.dispenseryinput}
            onPress={() => props.navigation.navigate('HavaMap')}>
            <Icon
              style={{
                fontSize: 18,
                color: 'grey',
                paddingLeft: 8,
                paddingRight: 5,
              }}
              name="location"
            />
            <TextInput
              editable={false}
              style={{width: wp('50%')}}
              placeholder="Dispensary near me"
            />
          </TouchableOpacity>
        </View>
        {/* Carousel below Header */}

        <View style={{alignItems: 'center'}}>
          <Carousel
            layout={'default'}
            ref={carouselRef}
            sliderWidth={wp('94%')}
            sliderHeight={screenWidth}
            itemWidth={wp('94%')}
            data={entries}
            renderItem={renderItem}
            onSnapToItem={(index) => setActiveSlide(index)}
          />
          <Pagination
            dotsLength={ENTRIES1.length}
            activeDotIndex={activeSlide}
            containerStyle={{backgroundColor: 'transparent'}}
            dotContainerStyle={{
              marginHorizontal: 2,
            }}
            dotColor={'green'}
            dotStyle={{
              borderRadius: 3,

              backgroundColor: 'grey',
            }}
            inactiveDotStyle={{
              backgroundColor: 'silver',
            }}
            inactiveDotOpacity={0.6}
            inactiveDotScale={1}
          />
        </View>
        {/* FlatListtt */}
        <View style={{alignItems: 'center', marginHorizontal: wp('2%')}}>
          <FlatList
            data={data}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            renderItem={({item, index}) => {
              return (
                <View>
                  <TouchableOpacity
                    style={{marginHorizontal: wp('2%')}}
                    onPress={() => {
                      props.navigation.navigate('Viewp1', {
                        array: data,
                      });
                    }}>
                    <View style={styles.logoimages}>
                      <Image
                        style={{width: wp('6%'), height: hp('3%')}}
                        resizeMode="contain"
                        source={item.imagee}
                      />
                    </View>
                    <View style={{alignItems: 'center'}}>
                      <Text
                        style={{fontFamily: 'HKGrotesk-Regular', fontSize: 12}}>
                        {item.title}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
        {/* After FlatList */}

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: wp('2%'),
            marginTop: hp('2%'),
          }}>
          <Text style={{fontFamily: 'HKGrotesk-Semibold', fontSize: 15}}>
            Recent View
          </Text>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}
            onPress={() => {
              props.navigation.navigate('Viewp2', {
                array: data2,
              });
            }}>
            <Text
              style={{
                color: '#3FAD72',
                fontFamily: 'HKGroteskSemibold',
                fontSize: 15,
              }}>
              View All
            </Text>
            <Icon
              style={{
                color: '#3FAD72',
                fontSize: 15,
                paddingLeft: 4,
                marginRight: 2,
              }}
              name="right"
              type="AntDesign"
            />
          </TouchableOpacity>
        </View>

        {/* FlatList 2 */}

        <View style={{alignItems: 'center', marginHorizontal: wp('2%')}}>
          <FlatList
            data={data2}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            renderItem={({item, index}) => {
              return (
                <View>
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate('ProductDetail')}
                    style={{
                      marginHorizontal: wp('1.5%'),
                      marginVertical: hp('1%'),
                    }}>
                    <View>
                      <Image
                        source={{uri: item.image}}
                        style={styles.flatimages2}
                      />
                    </View>
                    <View>
                      <Text style={{fontFamily: 'HKGrotesk-Bold'}}>
                        {item.title}
                      </Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      <Image
                        style={{height: hp('2%'), width: wp('5%')}}
                        resizeMode="contain"
                        source={require('../../../assets/truck.png')}
                      />
                      <Text
                        style={{
                          color: 'lightgrey',
                          paddingLeft: 5,
                          fontFamily: 'HKGrotesk-Regular',
                        }}>
                        {item.Shipping}
                      </Text>
                    </View>
                    <View>
                      <Text
                        style={{color: 'grey', fontFamily: 'HKGrotesk-Bold'}}>
                        {item.Price}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>

        {/* After Flatlist 2 */}

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: wp('2%'),
            marginTop: hp('2%'),
          }}>
          <Text style={{fontFamily: 'HKGrotesk-Semibold', fontSize: 15}}>
            Good Price Item
          </Text>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}
            onPress={() => {
              props.navigation.navigate('Viewp3', {
                array: data2,
              });
            }}>
            <Text
              style={{
                color: '#3FAD72',
                fontFamily: 'HKGroteskSemibold',
                fontSize: 15,
              }}>
              View All
            </Text>
            <Icon
              style={{
                color: '#3FAD72',
                fontSize: 15,
                paddingLeft: 4,
                marginRight: 2,
              }}
              name="right"
              type="AntDesign"
            />
          </TouchableOpacity>
        </View>

        {/* Flatlist 3 */}

        <View style={{alignItems: 'center', marginHorizontal: wp('2%')}}>
          <FlatList
            data={data2}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            renderItem={({item, index}) => {
              return (
                <View>
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate('ProductDetail')}
                    style={{
                      marginHorizontal: wp('1.5%'),
                      marginVertical: hp('1%'),
                    }}>
                    <View>
                      <Image
                        source={{uri: item.image}}
                        style={styles.flatimages3}
                      />
                    </View>
                    <View>
                      <Text style={{fontFamily: 'HKGrotesk-Regular'}}>
                        Lorem ipsum lorem..
                      </Text>
                    </View>
                    <View>
                      <Text
                        style={{
                          color: 'lightgrey',
                          fontFamily: 'HKGrotesk-Regular',
                        }}>
                        {item.Price}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>

        {/* After Flatlis 3 */}

        {/* WEEDMAPS CLOTHING BUTTON */}

        <View>
          <View style={styles.weedButton}>
            <View>
              <Image source={require('../../../assets/Mainbutton.png')} />
            </View>
            <View>
              <Text
                style={{
                  color: '#FFF',
                  textAlign: 'center',
                  fontFamily: 'HKGrotesk-Regular',
                }}>
                BUY
              </Text>
              <Text
                style={{
                  color: '#FFF',
                  fontFamily: 'HKGrotesk-Bold',
                  fontSize: 18,
                }}>
                WEEDMAPS CLOTHING
              </Text>
              <Text
                style={{
                  color: '#FFF',
                  textAlign: 'center',
                  fontFamily: 'HKGrotesk-Regular',
                }}>
                store.address.com
              </Text>
            </View>
          </View>
        </View>

        {/* End of WeedClothing button */}

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: wp('2%'),
            marginTop: hp('2%'),
          }}>
          <Text style={{fontFamily: 'HKGrotesk-Semibold', fontSize: 15}}>
            Promotion Items
          </Text>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}
            onPress={() => {
              props.navigation.navigate('Viewp4', {
                array: data2,
              });
            }}>
            <Text
              style={{
                color: '#3FAD72',
                fontFamily: 'HKGroteskSemibold',
                fontSize: 15,
              }}>
              View All
            </Text>
            <Icon
              style={{
                color: '#3FAD72',
                fontSize: 15,
                paddingLeft: 4,
                marginRight: 2,
              }}
              name="right"
              type="AntDesign"
            />
          </TouchableOpacity>
        </View>

        {/* Flatist 4 */}

        <View style={{alignItems: 'center', marginHorizontal: wp('2%')}}>
          <FlatList
            data={data2}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            renderItem={({item, index}) => {
              return (
                <View>
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate('ProductDetail')}
                    style={{
                      marginHorizontal: wp('1.5%'),
                      marginVertical: hp('1%'),
                    }}>
                    <View style={{height: hp('18%'), width: wp('31%')}}>
                      <Image
                        source={{uri: item.image}}
                        style={styles.flatimages4}
                      />
                      <View style={styles.flat4discount}>
                        <Text>15%</Text>
                      </View>
                    </View>
                    <View>
                      <Text style={{fontFamily: 'HKGrotesk-Bold'}}>
                        {item.title}
                      </Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      <Text
                        style={{color: 'grey', fontFamily: 'HKGrotesk-Bold'}}>
                        {item.Price}
                      </Text>
                      <Image
                        style={{
                          marginLeft: 5,
                          height: hp('3%'),
                          width: wp('7%'),
                        }}
                        resizeMode="contain"
                        source={require('../../../assets/freetruck.png')}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>

        {/* After Flatlist 4 */}

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: wp('2%'),
            marginTop: hp('2%'),
          }}>
          <Text style={{fontFamily: 'HKGrotesk-Semibold', fontSize: 15}}>
            Products
          </Text>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}
            onPress={() => {
              props.navigation.navigate('Viewp5', {
                array: data2,
              });
            }}>
            <Text
              style={{
                color: '#3FAD72',
                fontFamily: 'HKGroteskSemibold',
                fontSize: 15,
              }}>
              View All
            </Text>
            <Icon
              style={{
                color: '#3FAD72',
                fontSize: 15,
                paddingLeft: 4,
                marginRight: 2,
              }}
              name="right"
              type="AntDesign"
            />
          </TouchableOpacity>
        </View>

        {/* Tabs Navigations */}

        <View style={{backgroundColor: 'transparent'}}>
          <Tabs
            locked={true}
            tabBarUnderlineStyle={{
              backgroundColor: '#3FAD72',
              width: 50,
              marginHorizontal: wp('6%'),
            }}
            tabContainerStyle={{
              backgroundColor: 'transparent',
              borderWidth: 1,
              borderBottomWidth: 1,
              elevation: 0,
            }}>
            <Tab
              heading="Brownies"
              textStyle={{color: '#000', fontFamily: 'HKGrotesk-Bold'}}
              tabStyle={{backgroundColor: 'transparent'}}
              activeTabStyle={{backgroundColor: 'transparent'}}
              activeTextStyle={{color: '#3FAD72ed'}}>
              <View>
                <Brownies props={props} />
              </View>
            </Tab>
            <Tab
              heading="Muffins"
              textStyle={{color: '#000', fontFamily: 'HKGrotesk-Bold'}}
              tabStyle={{backgroundColor: 'transparent'}}
              activeTabStyle={{backgroundColor: 'transparent'}}
              activeTextStyle={{color: '#3FAD72ed'}}>
              <View>
                <Muffins />
              </View>
            </Tab>
            <Tab
              heading="Cookies"
              textStyle={{color: '#000', fontFamily: 'HKGrotesk-Bold'}}
              tabStyle={{backgroundColor: 'transparent'}}
              activeTabStyle={{backgroundColor: 'transparent'}}
              activeTextStyle={{color: '#3FAD72ed'}}>
              <View>
                <Cookies />
              </View>
            </Tab>
            <Tab
              heading="Weed"
              textStyle={{color: '#000', fontFamily: 'HKGrotesk-Bold'}}
              tabStyle={{backgroundColor: 'transparent'}}
              activeTabStyle={{backgroundColor: 'transparent'}}
              activeTextStyle={{color: '#3FAD72ed'}}>
              <View>
                <Weed />
              </View>
            </Tab>
          </Tabs>
        </View>

        {/* After Tabs */}

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: wp('2%'),
            marginTop: hp('2%'),
          }}>
          <Text style={{fontFamily: 'HKGrotesk-Semibold', fontSize: 15}}>
            Recommended Project Guide
          </Text>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}
            onPress={() => {
              props.navigation.navigate('Viewp6', {
                array: data2,
              });
            }}>
            <Text
              style={{
                color: '#3FAD72',
                fontFamily: 'HKGroteskSemibold',
                fontSize: 15,
              }}>
              View All
            </Text>
            <Icon
              style={{
                color: '#3FAD72',
                fontSize: 15,
                paddingLeft: 4,
                marginRight: 2,
              }}
              name="right"
              type="AntDesign"
            />
          </TouchableOpacity>
        </View>

        {/*Image Slider with controls */}
        <View style={styles.imageSliderbottom}>
          <Swiper
            style={styles.wrapper}
            showsButtons={true}
            showsPagination={false}>
            {ENTRIES1.map &&
              ENTRIES1.map((item, i) => {
                return (
                  <View style={{width: wp('100%')}}>
                    <Image
                      style={{
                        height: hp('25%'),
                        width: wp('92%'),
                        borderRadius: 10,
                      }}
                      source={{uri: item.illustration}}
                    />
                  </View>
                );
              })}
          </Swiper>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  searchbar: {
    marginHorizontal: hp('1.5%'),
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'lightgrey',
    flexDirection: 'row',
  },
  image: {
    height: hp('20%'),
    width: wp('94%'),
    borderRadius: 10,
  },
  item: {
    width: wp('100%'),
    height: hp('20%'),
    marginTop: hp('2%'),
  },
  logoimages: {
    backgroundColor: '#3FAD72',
    borderRadius: 50,
    height: hp('8%'),
    width: wp('16%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatimages2: {
    marginTop: 1,
    height: hp('17%'),
    width: wp('30%'),
    borderRadius: 10,
  },
  flatimages3: {
    marginTop: 1,
    width: hp('16.5%'),
    height: wp('20%'),
    borderRadius: 10,
  },
  flatimages4: {
    marginTop: 1,
    height: hp('18%'),
    width: wp('31%'),
    borderRadius: 10,
    position: 'absolute',
  },
  flat4discount: {
    height: hp('3%'),
    width: wp('10%'),
    backgroundColor: 'red',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '7%',
    marginRight: '7%',
    alignSelf: 'flex-end',
  },

  imageSliderbottom: {
    height: hp('25%'),
    marginHorizontal: hp('2%'),
    marginTop: hp('1%'),
  },
  storefrontbutton: {
    height: hp('6%'),
    width: wp('33%'),
    backgroundColor: '#3FAD72',
    borderRadius: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  dispenseryinput: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'lightgrey',
    height: hp('6%'),
  },
  weedButton: {
    marginTop: hp('2%'),
    marginHorizontal: hp('1%'),
    width: wp('96%'),
    height: hp('10%'),
    backgroundColor: '#3FAD72',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default MainScreen2;
