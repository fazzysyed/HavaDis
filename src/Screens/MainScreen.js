import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  FlatList,
  ScrollView,
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
import Brownies from './src/ScreenComponents/Brownies';
import Muffins from './src/ScreenComponents/Muffins';
import Weed from './src/ScreenComponents/Weed';
import Cookies from './src/ScreenComponents/Cookies';
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
    title: 'Brownies',
    logo: 'gm',
    imagee: require('./assets/brownie.png'),
  },
  {
    title: 'Muffins',
    logo: 'gm',
    imagee: require('./assets/cupcake.png'),
  },
  {
    title: 'Cookies',
    logo: 'gm',
    imagee: require('./assets/cookie.png'),
  },
  {
    title: 'Vape',
    logo: 'gm',
    imagee: require('./assets/vape.png'),
  },
  {
    title: 'Weed',
    logo: 'gm',
    imagee: require('./assets/weed.png'),
  },
  {
    title: 'Cake',
    logo: 'gm',
    imagee: require('./assets/candy.png'),
  },
];

const data2 = [
  {
    image:
      'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: 'Product Title',
    Shipping: 'free shipping',
    Price: '$24.00',
  },
  {
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVoB3a_65P1uEA5W3EgOyAsCbsmkTmtmVF8Q&usqp=CAU',
    title: 'Product Title',
    Shipping: 'free shipping',
    Price: '$24.00',
  },
  {
    image:
      'https://cdn.britannica.com/s:300x169,c:crop/36/123536-004-1780EFF1/Variety-fruits-vegetables.jpg',
    title: 'Product Title',
    Shipping: 'free shipping',
    Price: '$24.00',
  },
  {
    image:
      'https://cdn.britannica.com/s:300x169,c:crop/36/123536-004-1780EFF1/Variety-fruits-vegetables.jpg',
    title: 'Product Title',
    Shipping: 'free shipping',
    Price: '$24.00',
  },
  {
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8yMIHkxs901EzRfpvMq6gIEfDADZcfbJxLw&usqp=CAU',
    title: 'Product Title',
    Shipping: 'free shipping',
    Price: '$24.00',
  },
  {
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo55BzgQWOmyScAZsMHdZePZ8Wdmtr8e6xPA&usqp=CAU',
    title: 'Product Title',
    Shipping: 'free shipping',
    Price: '$24.00',
  },
];

const {width: screenWidth} = Dimensions.get('window');

const App = () => {
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
    <ScrollView>
      <Header style={{backgroundColor: 'transparent', elevation: 0}}>
        <Left style={{flex: 0.3}}>
          <Icon name="menu" />
        </Left>
        <Body style={{width: '80%', alignItems: 'center'}}>
          <Image source={require('./assets/logopluss.png')} />
        </Body>
        <Right style={{flex: 0.3}}>
          <Icon name="cart" />
        </Right>
      </Header>
      <View style={styles.searchbar}>
        <Item>
          <Icon name="ios-search" style={{padding: 10}} />
          <Input placeholder="Search" />
        </Item>
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
                <View style={{marginHorizontal: wp('2%')}}>
                  <View style={styles.logoimages}>
                    <Image source={item.imagee} />
                  </View>
                  <View style={{alignItems: 'center'}}>
                    <Text>{item.title}</Text>
                  </View>
                </View>
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
          marginHorizontal: wp('3%'),
          marginTop: hp('2%'),
        }}>
        <View>
          <Text style={{fontWeight: 'bold'}}>Recent View</Text>
        </View>
        <View>
          <Text style={{color: '#3FAD72'}}>View All</Text>
        </View>
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
                <View
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
                    <Text style={{fontWeight: 'bold'}}>{item.title}</Text>
                  </View>
                  <View>
                    <Text style={{color: 'lightgrey'}}>{item.Shipping}</Text>
                  </View>
                  <View>
                    <Text style={{color: 'grey', fontWeight: 'bold'}}>
                      {item.Price}
                    </Text>
                  </View>
                </View>
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
          marginHorizontal: wp('3%'),
          marginTop: hp('2%'),
        }}>
        <View>
          <Text style={{fontWeight: 'bold'}}>Good Price Item</Text>
        </View>
        <View>
          <Text style={{color: '#3FAD72'}}>View All</Text>
        </View>
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
                <View
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
                    <Text style={{}}>Lorem ipsum lorem..</Text>
                  </View>
                  <View>
                    <Text style={{color: 'lightgrey'}}>{item.Price}</Text>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>

      {/* After Flatlis 3 */}

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: wp('3%'),
          marginTop: hp('2%'),
        }}>
        <Text style={{fontWeight: 'bold'}}>Promotion Items</Text>
        <Text style={{color: '#3FAD72'}}>View All</Text>
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
                <View
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
                    <Text style={{fontWeight: 'bold'}}>{item.title}</Text>
                  </View>
                  <View>
                    <Text style={{color: 'grey', fontWeight: 'bold'}}>
                      {item.Price}
                    </Text>
                  </View>
                </View>
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
          marginHorizontal: wp('3%'),
          marginTop: hp('2%'),
        }}>
        <View>
          <Text style={{fontWeight: 'bold'}}>Products</Text>
        </View>
        <View>
          <Text style={{color: '#3FAD72'}}>View All</Text>
        </View>
      </View>

      {/* Tabs Navigations */}

      <View style={{backgroundColor: 'transparent'}}>
        <Tabs
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
            textStyle={{color: '#000', fontWeight: 'bold'}}
            tabStyle={{backgroundColor: 'transparent'}}
            activeTabStyle={{backgroundColor: 'transparent'}}
            activeTextStyle={{color: '#3FAD72ed'}}>
            <View>
              <Brownies />
            </View>
          </Tab>
          <Tab
            heading="Muffins"
            textStyle={{color: '#000', fontWeight: 'bold'}}
            tabStyle={{backgroundColor: 'transparent'}}
            activeTabStyle={{backgroundColor: 'transparent'}}
            activeTextStyle={{color: '#3FAD72ed'}}>
            <View>
              <Muffins />
            </View>
          </Tab>
          <Tab
            heading="Cookies"
            textStyle={{color: '#000', fontWeight: 'bold'}}
            tabStyle={{backgroundColor: 'transparent'}}
            activeTabStyle={{backgroundColor: 'transparent'}}
            activeTextStyle={{color: '#3FAD72ed'}}>
            <View>
              <Cookies />
            </View>
          </Tab>
          <Tab
            heading="Weed"
            textStyle={{color: '#000', fontWeight: 'bold'}}
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
          marginHorizontal: wp('3%'),
          marginTop: hp('2%'),
        }}>
        <View>
          <Text style={{fontWeight: 'bold'}}>Recommended Project Guide</Text>
        </View>
        <View>
          <Text style={{color: '#3FAD72'}}>View All</Text>
        </View>
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
                      height: 300,
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
  );
};

const styles = StyleSheet.create({
  searchbar: {
    marginHorizontal: hp('2%'),
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'lightgrey',
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
    backgroundColor: 'orange',
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
});

export default App;
