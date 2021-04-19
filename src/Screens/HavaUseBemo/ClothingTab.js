import React, {useState, useRef, useEffect} from 'react';
import {Icon} from 'native-base';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image,
  FlatList,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Carousel, {Pagination, ParallaxImage} from 'react-native-snap-carousel';
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

const Swipper = [
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

const BestSelling = [
  {
    id: '1',
    image:
      'https://image.spreadshirtmedia.com/image-server/v1/mp/products/T813A648MPA3132PT17X0Y34D1024775329FS2918/views/1,width=378,height=378,appearanceId=648,backgroundColor=F2F2F2,modelId=344,crop=list/how-do-you-keep-idiot-entertained-for-hours-tshirt-womens-premium-t-shirt.jpg',
    title: 'Women T-shirt',
    Price: '$24.00',
  },
  {
    id: '2',
    image:
      'https://image.spreadshirtmedia.com/image-server/v1/mp/products/T686A229MPA3026PT17X39Y68D1016581836FS2951/views/1,width=378,height=378,appearanceId=229,backgroundColor=F2F2F2,modelId=1994,crop=list/cool-funny-art-cartoon-illustrator-best-selle-mens-v-neck-t-shirt.jpg',
    title: 'Male T-Shirt',
    Price: '$24.00',
  },
  {
    id: '3',
    image:
      'https://image.spreadshirtmedia.com/image-server/v1/mp/products/T951A739MPA3076PT17X42Y30D1016843965FS1967/views/1,width=378,height=378,appearanceId=739,backgroundColor=F2F2F2/there-is-no-finish-line-quote-logo-art-t-shirt-unisex-baseball-t-shirt.jpg',
    title: 'Male T-Shirt',
    Price: '$54.00',
  },
  {
    id: '4',
    image:
      'https://i.pinimg.com/236x/3b/9e/ec/3b9eecc9ce2e68d7cee3c699699f9c57.jpg',
    title: 'test',
    Price: '$44.00',
  },
  {
    id: '5',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8yMIHkxs901EzRfpvMq6gIEfDADZcfbJxLw&usqp=CAU',
    title: 'check',
    Price: '62.00',
  },
  {
    id: '6',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo55BzgQWOmyScAZsMHdZePZ8Wdmtr8e6xPA&usqp=CAU',
    title: 'Women T-Shirt',
    Price: '$34.00',
  },
];

const LimitedOffer = [
  {
    id: '1',
    image:
      'https://image.spreadshirtmedia.com/image-server/v1/mp/products/T813A648MPA3132PT17X0Y34D1024775329FS2918/views/1,width=378,height=378,appearanceId=648,backgroundColor=F2F2F2,modelId=344,crop=list/how-do-you-keep-idiot-entertained-for-hours-tshirt-womens-premium-t-shirt.jpg',
    title: 'Women T-shirt',
    Price: '$24.00',
  },
  {
    id: '2',
    image:
      'https://image.spreadshirtmedia.com/image-server/v1/mp/products/T686A229MPA3026PT17X39Y68D1016581836FS2951/views/1,width=378,height=378,appearanceId=229,backgroundColor=F2F2F2,modelId=1994,crop=list/cool-funny-art-cartoon-illustrator-best-selle-mens-v-neck-t-shirt.jpg',
    title: 'Check',
    Price: '$24.00',
  },
  {
    id: '3',
    image:
      'https://image.spreadshirtmedia.com/image-server/v1/mp/products/T951A739MPA3076PT17X42Y30D1016843965FS1967/views/1,width=378,height=378,appearanceId=739,backgroundColor=F2F2F2/there-is-no-finish-line-quote-logo-art-t-shirt-unisex-baseball-t-shirt.jpg',
    title: 'Male T-Shirt',
    Price: '$54.00',
  },
  {
    id: '4',
    image:
      'https://i.pinimg.com/236x/3b/9e/ec/3b9eecc9ce2e68d7cee3c699699f9c57.jpg',
    title: 'Women T-Shirt',
    Price: '$44.00',
  },
  {
    id: '5',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8yMIHkxs901EzRfpvMq6gIEfDADZcfbJxLw&usqp=CAU',
    title: 'Male T-Shirt',
    Price: '62.00',
  },
  {
    id: '6',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo55BzgQWOmyScAZsMHdZePZ8Wdmtr8e6xPA&usqp=CAU',
    title: 'Women T-Shirt',
    Price: '$34.00',
  },
];

const NewRelease = [
  {
    id: '1',
    image:
      'https://image.spreadshirtmedia.com/image-server/v1/mp/products/T813A648MPA3132PT17X0Y34D1024775329FS2918/views/1,width=378,height=378,appearanceId=648,backgroundColor=F2F2F2,modelId=344,crop=list/how-do-you-keep-idiot-entertained-for-hours-tshirt-womens-premium-t-shirt.jpg',
    title: 'Women T-shirt',
    Price: '$24.00',
  },
  {
    id: '2',
    image:
      'https://image.spreadshirtmedia.com/image-server/v1/mp/products/T686A229MPA3026PT17X39Y68D1016581836FS2951/views/1,width=378,height=378,appearanceId=229,backgroundColor=F2F2F2,modelId=1994,crop=list/cool-funny-art-cartoon-illustrator-best-selle-mens-v-neck-t-shirt.jpg',
    title: 'Check',
    Price: '$24.00',
  },
  {
    id: '3',
    image:
      'https://image.spreadshirtmedia.com/image-server/v1/mp/products/T951A739MPA3076PT17X42Y30D1016843965FS1967/views/1,width=378,height=378,appearanceId=739,backgroundColor=F2F2F2/there-is-no-finish-line-quote-logo-art-t-shirt-unisex-baseball-t-shirt.jpg',
    title: 'Male T-Shirt',
    Price: '$54.00',
  },
  {
    id: '4',
    image:
      'https://i.pinimg.com/236x/3b/9e/ec/3b9eecc9ce2e68d7cee3c699699f9c57.jpg',
    title: 'Women T-Shirt',
    Price: '$44.00',
  },
  {
    id: '5',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8yMIHkxs901EzRfpvMq6gIEfDADZcfbJxLw&usqp=CAU',
    title: 'Male T-Shirt',
    Price: '62.00',
  },
  {
    id: '16',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo55BzgQWOmyScAZsMHdZePZ8Wdmtr8e6xPA&usqp=CAU',
    title: 'Women T-Shirt',
    Price: '$34.00',
  },
];

const data3 = [
  {
    id: '1',
    image:
      'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: 'Limited Time Sale',
  },
  {
    id: '2',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVoB3a_65P1uEA5W3EgOyAsCbsmkTmtmVF8Q&usqp=CAU',
    title: 'Recently Added',
  },
  {
    id: '3',
    image:
      'https://cdn.britannica.com/s:300x169,c:crop/36/123536-004-1780EFF1/Variety-fruits-vegetables.jpg',
    title: 'Trending',
  },
  {
    id: '4',
    image:
      'https://cdn.britannica.com/s:300x169,c:crop/36/123536-004-1780EFF1/Variety-fruits-vegetables.jpg',
    title: 'Featured Brands',
  },
];

const {width: screenWidth} = Dimensions.get('window');

const ClothingTab = (props) => {
  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const [items, setItems] = useState([
    {label: 'USA', value: 'usa'},
    {label: 'UK', value: 'uk'},
    {label: 'France', value: 'france'},
  ]);

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
    <ScrollView style={{flex: 1}}>
      <View style={{flexDirection: 'row', marginTop: hp('2%')}}>
        <View style={styles.sortdropdown}>
          <View
            style={{
              // The solution: Apply zIndex to any device except Android
              ...(Platform.OS !== 'android' && {
                zIndex: 10,
              }),
            }}>
            <DropDownPicker
              items={items}
              containerStyle={{height: hp('5%'), width: wp('22%')}}
              placeholder="Sort"
              placeholderStyle={{fontSize: 12, fontFamily: 'HKGrotesk-Regular'}}
              style={{}}
              dropDownStyle={{backgroundColor: '#fafafa'}}
            />
          </View>
        </View>

        <View style={styles.categorydropdown}>
          <View
            style={{
              // The solution: Apply zIndex to any device except Android
              ...(Platform.OS !== 'android' && {
                zIndex: 10,
              }),
            }}>
            <DropDownPicker
              items={items}
              containerStyle={{height: hp('5%'), width: wp('30%')}}
              placeholder="Catogary"
              placeholderStyle={{fontSize: 12, fontFamily: 'HKGrotesk-Regular'}}
              style={{}}
              dropDownStyle={{backgroundColor: '#fafafa'}}
            />
          </View>
        </View>

        <View style={styles.pricedropdown}>
          <View
            style={{
              // The solution: Apply zIndex to any device except Android
              ...(Platform.OS !== 'android' && {
                zIndex: 10,
              }),
            }}>
            <DropDownPicker
              items={items}
              containerStyle={{height: hp('5%'), width: wp('22%')}}
              placeholder="Price"
              placeholderStyle={{fontSize: 12, fontFamily: 'HKGrotesk-Regular'}}
              style={{}}
              dropDownStyle={{backgroundColor: '#fafafa'}}
            />
          </View>
        </View>

        <View style={styles.weightdropdown}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              width: wp('25%'),
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}>
            <Text style={{marginVertical: 4, fontFamily: 'HKGrotesk-Regular'}}>
              Filter
            </Text>
            <Icon name="funnel" type="Ionicons" style={{fontSize: 20}} />
          </TouchableOpacity>
        </View>
      </View>

      {/* ***end of drop down */}

      {/* Start Of carousel */}

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

      {/* End of carousel */}

      <View style={{marginHorizontal: wp('2%')}}>
        {/* Good Price FlatList Start */}

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: wp('2%'),
            marginTop: hp('2%'),
          }}>
          <Text style={{fontFamily: 'HKGrotesk-Semibold', fontSize: 15}}>
            Good Price
          </Text>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}
            onPress={() => {
              props.navigation.navigate('Viewb1', {
                array: BestSelling,
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

        <View style={{alignItems: 'center'}}>
          <FlatList
            data={BestSelling}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            renderItem={({item, index}) => {
              return (
                <View>
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate('ProductDetail')}
                    style={{marginRight: wp('2%'), marginVertical: hp('1%')}}>
                    <View style={{height: hp('17%'), width: wp('31%')}}>
                      <Image
                        source={{uri: item.image}}
                        style={styles.flatlistimage1}
                      />
                      <View style={styles.discountbadge}>
                        <Icon
                          style={{fontSize: 10, color: '#FFF'}}
                          name="ios-flash"
                          type="Ionicons"
                        />
                        <Text style={{fontSize: 10, color: '#FFF'}}>-50%</Text>
                      </View>
                    </View>
                    <View>
                      <Text
                        style={{
                          fontSize: 12,
                          color: 'grey',
                          fontFamily: 'HKGrotesk-Regular',
                        }}>
                        {item.title}
                      </Text>
                    </View>
                    <View>
                      <Text
                        style={{
                          color: 'grey',
                          fontSize: 12,
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
        {/* ************* */}

        {/* New Realease Flatlist */}

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: wp('1%'),
            marginTop: hp('2%'),
          }}>
          <Text style={{fontFamily: 'HKGrotesk-Semibold', fontSize: 15}}>
            New Release
          </Text>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}
            onPress={() => {
              props.navigation.navigate('Viewb2', {
                array: NewRelease,
              });
            }}>
            <Text
              style={{
                color: '#3FAD72',
                fontFamily: 'HKGrotesk-Semibold',
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

        <View style={{alignItems: 'center'}}>
          <FlatList
            data={NewRelease}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            renderItem={({item, index}) => {
              return (
                <View>
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate('ProductDetail')}
                    style={{marginRight: wp('2%'), marginVertical: hp('1%')}}>
                    <View>
                      <Image
                        source={{uri: item.image}}
                        style={styles.flatimages5}
                      />
                    </View>
                    <View>
                      <Text
                        style={{
                          fontSize: 12,
                          color: 'grey',
                          fontFamily: 'HKGrotesk-Regular',
                        }}>
                        {item.title}
                      </Text>
                    </View>
                    <View>
                      <Text
                        style={{
                          color: 'grey',
                          fontSize: 12,
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

        {/* ************* */}

        {/* Limited time sale Recently added Trending Featured Brands Flatlist */}

        <FlatList
          data={data3}
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <View>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('ProductDetail')}
                style={styles.gadgetcontainer}>
                <View style={{height: hp('14%'), width: wp('47%')}}>
                  <Image
                    source={{uri: item.image}}
                    style={styles.newGadgetimage}
                  />
                </View>
                <View>
                  <Text style={{fontFamily: 'HKGrotesk-Bold', paddingLeft: 6}}>
                    {item.title}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        />
        {/* ****************** */}

        {/* Limited Time Flatlist */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: wp('1%'),
            marginTop: hp('2%'),
          }}>
          <Text style={{fontFamily: 'HKGrotesk-Semibold'}}>Limited Offer</Text>
          <Text style={{fontFamily: 'HKGrotesk-Semibold'}}>
            End in{' '}
            <Text style={{color: '#3FAD72', fontFamily: 'HKGrotesk-Semibold'}}>
              07 :38 : 56
            </Text>
          </Text>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}
            onPress={() => {
              props.navigation.navigate('Viewb3', {
                array: LimitedOffer,
              });
            }}>
            <Text
              style={{
                color: '#3FAD72',
                fontFamily: 'HKGrotesk-Semibold',
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

        <View style={{alignItems: 'center'}}>
          <FlatList
            data={LimitedOffer}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            renderItem={({item, index}) => {
              return (
                <View>
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate('ProductDetail')}
                    style={{marginRight: wp('2%'), marginVertical: hp('1%')}}>
                    <View>
                      <View style={{height: hp('17%'), width: wp('31%')}}>
                        <Image
                          source={{uri: item.image}}
                          style={styles.flatlistimage1}
                        />
                        <View style={styles.discountbadge}>
                          <Icon
                            style={{fontSize: 10, color: '#FFF'}}
                            name="ios-flash"
                            type="Ionicons"
                          />
                          <Text style={{fontSize: 10, color: '#FFF'}}>
                            -50%
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View>
                      <Text
                        style={{
                          fontSize: 12,
                          color: 'grey',
                          fontFamily: 'HKGrotesk-Regular',
                        }}>
                        {item.title}
                      </Text>
                    </View>
                    <View>
                      <Text
                        style={{
                          color: 'grey',
                          fontSize: 12,
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

        {/* ************** */}

        {/* Best Price Flatlist */}

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: wp('1%'),
            marginTop: hp('2%'),
          }}>
          <Text style={{fontFamily: 'HKGrotesk-Semibold', fontSize: 15}}>
            Best Price
          </Text>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}
            onPress={() => {
              props.navigation.navigate('Viewb4', {
                array: NewRelease,
              });
            }}>
            <Text
              style={{
                color: '#3FAD72',
                fontFamily: 'HKGrotesk-Semibold',
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

        <View style={{alignItems: 'center'}}>
          <FlatList
            data={NewRelease}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            renderItem={({item, index}) => {
              return (
                <View>
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate('ProductDetail')}
                    style={{marginRight: wp('2%'), marginVertical: hp('1%')}}>
                    <View>
                      <View style={{height: hp('17%'), width: wp('31%')}}>
                        <Image
                          source={{uri: item.image}}
                          style={styles.flatlistimage1}
                        />
                        <View style={styles.discountbadge}>
                          <Icon
                            style={{fontSize: 10, color: '#FFF'}}
                            name="ios-flash"
                            type="Ionicons"
                          />
                          <Text style={{fontSize: 10, color: '#FFF'}}>
                            -50%
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View>
                      <Text
                        style={{
                          fontSize: 12,
                          color: 'grey',
                          fontFamily: 'HKGrotesk-Regular',
                        }}>
                        {item.title}
                      </Text>
                    </View>
                    <View>
                      <Text
                        style={{
                          color: 'grey',
                          fontSize: 12,
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

        {/* **************** */}

        {/* Best Selling Flatlist */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: wp('1%'),
            marginTop: hp('2%'),
          }}>
          <Text style={{fontFamily: 'HKGrotesk-Semibold', fontSize: 15}}>
            Best Selling
          </Text>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}
            onPress={() => {
              props.navigation.navigate('Viewb5', {
                array: NewRelease,
              });
            }}>
            <Text
              style={{
                color: '#3FAD72',
                fontFamily: 'HKGrotesk-Semibold',
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

        <View style={{alignItems: 'center'}}>
          <FlatList
            data={BestSelling}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            renderItem={({item, index}) => {
              return (
                <View>
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate('ProductDetail')}
                    style={{marginRight: wp('2%'), marginVertical: hp('1%')}}>
                    <View>
                      <Image
                        source={{uri: item.image}}
                        style={styles.flatimages5}
                      />
                    </View>
                    <View>
                      <Text
                        style={{
                          fontSize: 12,
                          color: 'grey',
                          fontFamily: 'HKGrotesk-Regular',
                        }}>
                        {item.title}
                      </Text>
                    </View>
                    <View>
                      <Text
                        style={{
                          color: 'grey',
                          fontSize: 12,
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

        {/* ****** */}

        {/* End Swippper Recommended Project Guide */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: wp('1%'),
            marginTop: hp('2%'),
          }}>
          <Text style={{fontFamily: 'HKGrotesk-Semibold', fontSize: 15}}>
            Recommended Projects Guide
          </Text>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}
            onPress={() => {
              props.navigation.navigate('Viewb6', {
                array: BestSelling,
              });
            }}>
            <Text
              style={{
                color: '#3FAD72',
                fontFamily: 'HKGrotesk-Semibold',
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

        <View style={styles.imageSliderbottom}>
          <Swiper
            style={styles.wrapper}
            showsButtons={true}
            showsPagination={false}>
            {Swipper.map &&
              Swipper.map((item, i) => {
                return (
                  <View style={{width: wp('100%')}}>
                    <Image
                      style={{
                        height: hp('25%'),
                        width: wp('96%'),
                        borderRadius: 10,
                      }}
                      source={{uri: item.illustration}}
                    />
                  </View>
                );
              })}
          </Swiper>
        </View>

        {/* ********** */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  sortdropdown: {
    height: hp('5%'),
  },

  categorydropdown: {
    height: hp('5%'),
  },

  pricedropdown: {
    height: hp('5%'),
  },

  weightdropdown: {
    height: hp('5%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 5,
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

  flatlistimage1: {
    marginTop: 1,
    height: hp('17%'),
    width: wp('31%'),
    borderRadius: 10,
    position: 'absolute',
  },

  discountbadge: {
    width: wp('7%'),
    height: hp('4%'),
    backgroundColor: '#3FAD72',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatimages5: {
    marginTop: 1,
    height: hp('17%'),
    width: wp('31%'),
    borderRadius: 10,
  },
  gadgetcontainer: {
    marginRight: wp('1.5%'),
    marginVertical: hp('1%'),
    backgroundColor: '#F5F5F5',
    paddingBottom: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  newGadgetimage: {
    marginTop: 1,
    height: hp('12%'),
    width: wp('47%'),
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },

  imageSliderbottom: {
    height: hp('25%'),
    marginVertical: hp('2%'),
    borderRadius: 10,
    // marginBottom: 100,
  },
});

export default ClothingTab;
