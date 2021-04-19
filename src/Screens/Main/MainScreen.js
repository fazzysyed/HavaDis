import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Dimensions,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import {Header, Left, Icon, Center, Right, Body} from 'native-base';
// ScrollView,
import {ScrollView} from 'react-native-gesture-handler';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Carousel, {Pagination, ParallaxImage} from 'react-native-snap-carousel';
import Swiper from 'react-native-swiper';
import Filter from '../../popups/Filter';
import SearchTag from '../../popups/SearchTag';
import * as ImagePicker from 'react-native-image-picker';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';


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
    title: 'Essentials',
    logo: 'gm',
    imagee: require('../../../assets/checkbox.png'),
  },
  {
    id: '2',
    title: 'New arrivals',
    logo: 'gm',
    imagee: require('../../../assets/energy.png'),
  },
  {
    id: '3',
    title: 'Accessories',
    logo: 'gm',
    imagee: require('../../../assets/path.png'),
  },
  {
    id: '4',
    title: 'Clothing',
    logo: 'gm',
    imagee: require('../../../assets/tshirt.png'),
  },
  {
    id: '5',
    title: 'Electronic',
    logo: 'gm',
    imagee: require('../../../assets/mobile.png'),
  },
  {
    id: '6',
    title: 'Home Products',
    logo: 'gm',
    imagee: require('../../../assets/box.png'),
  },
  {
    id: '7',
    title: 'Beauty',
    logo: 'gm',
    imagee: require('../../../assets/flower.png'),
  },
  {
    id: '8',
    title: 'Auto',
    logo: 'gm',
    imagee: require('../../../assets/steering-wheel.png'),
  },
  {
    id: '9',
    title: 'Tools',
    logo: 'gm',
    imagee: require('../../../assets/tools.png'),
  },
  {
    id: '10',
    title: 'Kids',
    logo: 'gm',
    imagee: require('../../../assets/kids.png'),
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

const VerticalData = [
  {
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVoB3a_65P1uEA5W3EgOyAsCbsmkTmtmVF8Q&usqp=CAU',
    title: 'Apple Products',
    products: [
      {
        logo:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVoB3a_65P1uEA5W3EgOyAsCbsmkTmtmVF8Q&usqp=CAU',
        hello: 'Product Title',
      },
      {
        logo:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVoB3a_65P1uEA5W3EgOyAsCbsmkTmtmVF8Q&usqp=CAU',
        hello: 'Product Title',
      },
      {
        logo:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVoB3a_65P1uEA5W3EgOyAsCbsmkTmtmVF8Q&usqp=CAU',
        hello: 'Product Title',
      },
      {
        logo:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVoB3a_65P1uEA5W3EgOyAsCbsmkTmtmVF8Q&usqp=CAU',
        hello: 'Product Title',
      },
      {
        logo:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVoB3a_65P1uEA5W3EgOyAsCbsmkTmtmVF8Q&usqp=CAU',
        hello: 'Product Title',
      },
      {
        logo:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVoB3a_65P1uEA5W3EgOyAsCbsmkTmtmVF8Q&usqp=CAU',
        hello: 'Product Title',
      },
      {
        logo:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVoB3a_65P1uEA5W3EgOyAsCbsmkTmtmVF8Q&usqp=CAU',
        hello: 'Product Title',
      },
      {
        logo:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVoB3a_65P1uEA5W3EgOyAsCbsmkTmtmVF8Q&usqp=CAU',
        hello: 'Product Title',
      },
      {
        logo:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVoB3a_65P1uEA5W3EgOyAsCbsmkTmtmVF8Q&usqp=CAU',
        hello: 'Product Title',
      },
      {
        logo:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVoB3a_65P1uEA5W3EgOyAsCbsmkTmtmVF8Q&usqp=CAU',
        hello: 'Product Title',
      },
    ],
  },
  {
    image: require('../../../assets/appleproducts.png'),
    title: 'Google Products',
    products: [
      {
        id: '1',
        logo:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVoB3a_65P1uEA5W3EgOyAsCbsmkTmtmVF8Q&usqp=CAU',
        hello: 'Product Title',
      },
      {
        id: '2',
        logo:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVoB3a_65P1uEA5W3EgOyAsCbsmkTmtmVF8Q&usqp=CAU',
        hello: 'Product Title',
      },
      {
        id: '3',
        logo:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVoB3a_65P1uEA5W3EgOyAsCbsmkTmtmVF8Q&usqp=CAU',
        hello: 'Product Title',
      },
      {
        id: '4',
        logo:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVoB3a_65P1uEA5W3EgOyAsCbsmkTmtmVF8Q&usqp=CAU',
        hello: 'Product Title',
      },
      {
        id: '5',
        logo:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVoB3a_65P1uEA5W3EgOyAsCbsmkTmtmVF8Q&usqp=CAU',
        hello: 'Product Title',
      },
    ],
  },
];

const doubleflat1 = [
  {
    id: '1',
    image:
      'https://media.wired.com/photos/5f2b2e792f0075bf6e0a1de6/4:3/w_2400,c_limit/Gear-Sony-WH-1000XM4-1-SOURCE-Sony.jpg',
    title: 'Product Title',
    Shipping: 'free shipping',
    Price: '$24.00',
  },
  {
    id: '2',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPu_yitWgE3IB_cY8k-Cy20_GmRBI4MvUSeQ&usqp=CAU',
    title: 'Product Title',
    Shipping: 'free shipping',
    Price: '$30.00',
  },
  {
    id: '3',
    image:
      'https://content.rolex.com/dam/new-watches-2020/homepage/roller/all-watches/watches_0009_m116900-0001-air-king_portrait.jpg?imwidth=184',
    title: 'Product Title',
    Shipping: 'free shipping',
    Price: '$14.00',
  },
  {
    id: '4',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGBc8Fwx8vqrs_5IG7iUbBk7fu47miOBNMdQ&usqp=CAU',
    title: 'Product Title',
    Shipping: 'free shipping',
    Price: '$50.00',
  },
  {
    id: '5',
    image:
      'https://cdn.wccftech.com/wp-content/uploads/2019/07/GeForce_Super-2080S-4_1561506665-Custom-1.jpg',
    title: 'Product Title',
    Shipping: 'free shipping',
    Price: '$24.00',
  },
  {
    id: '6',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtGtIgQCGBqW06sokKg_sESEK-_j9yjp46Kg&usqp=CAU',
    title: 'Product Title',
    Shipping: 'free shipping',
    Price: '$24.00',
  },
];

const doubleflat2 = [
  {
    id: '1',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsiuxZRz36Evmr84dQ6eAtWzinzpTGbEqWnQ&usqp=CAU',
    title: 'Product Title',
    Shipping: 'free shipping',
    Price: '$24.00',
  },
  {
    id: '2',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKRHqpHXZxz8jdt4pw8A3iE_wpDU_lKzkbUw&usqp=CAU',
    title: 'Product Title',
    Shipping: 'free shipping',
    Price: '$54.00',
  },
  {
    id: '3',
    image:
      'https://mns.com.pk/wp-content/uploads/2019/03/14.jpg',
    title: 'Product Title',
    Shipping: 'free shipping',
    Price: '$44.00',
  },
  {
    id: '4',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRopCFkU17_HCBivfjlUZCmzQWT6xy7KMZ53A&usqp=CAU',
    title: 'Product Title',
    Shipping: 'free shipping',
    Price: '$30.00',
  },
  {
    id: '5',
    image:
      'https://cdn.wccftech.com/wp-content/uploads/2019/07/GeForce_Super-2080S-4_1561506665-Custom-1.jpg',
    title: 'Product Title',
    Shipping: 'free shipping',
    Price: '$24.00',
  },
  {
    id: '6',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtGtIgQCGBqW06sokKg_sESEK-_j9yjp46Kg&usqp=CAU',
    title: 'Product Title',
    Shipping: 'free shipping',
    Price: '$24.00',
  },
];

const CategoryShop = [
  {
    id: '1',
    image: require('../../../assets/hoodie.png'),
    title: 'Hoodies & Sweatshirts',
  },
  {
    id: '2',
    image: require('../../../assets/jeans.png'),
    title: 'Jeans',
  },
  {
    id: '3',
    image: require('../../../assets/teeshirt.png'),
    title: 'T-Shirts & Tanks',
  },
  {
    id: '4',
    image: require('../../../assets/two-piece.png'),
    title: 'Two-Piece Outfits',
  },

  {
    id: '5',
    image: require('../../../assets/shirts.png'),
    title: 'Shirts',
  },
  {
    id: '6',
    image: require('../../../assets/pants.png'),
    title: 'Pants',
  },
  {
    id: '7',
    image: require('../../../assets/jackets.png'),
    title: 'Coats &  Jackets',
  },
  {
    id: '8',

    image: require('../../../assets/shorts.png'),
    title: 'Shorts',
  },
];

const {width: screenWidth} = Dimensions.get('window');

const Main3 = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);
  const [addImage, setAddImage] = useState([]);


  
  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);

  const carouselRefVertical = useRef(null);

  const [activeSlide, setActiveSlide] = useState(0);
  const [activeSlideVertical, setActiveSlideVertical] = useState(0);
  const [scroll, setScroll] = useState(true);



  const TakeImage = () => {
    console.log('Test');
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchImageLibrary(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = {uri: response.uri};
        console.log('response', JSON.stringify(response));
        addImage.push({
          filePath: response,
          fileData: response.data,
          fileUri: response.uri,
        });
        props.navigation.navigate('Photo', {
          fileUri: response.uri,
        });
      }
    });
    console.log('Helghghghghlo', addImage.length);
  };

  const renderItem = ({item, index}, parallaxProps) => {
    return (
      <View style={styles.item}>
        <Image source={{uri: item.illustration}} style={styles.image} />
      </View>
    );
  };

  const renderItemVertical = ({item, index}, parallaxProps) => {
    return (
      <View
        style={{
          width: '100%',
          height: 200,

          // marginLeft: 20,
          // justifyContent: 'center',
          // alignItems: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 22,
              fontFamily: 'HKGrotesk-Bold',
              marginLeft: 10,
            }}>
            {item.title}
          </Text>
          <Image source={item.image} style={{height: 100, width: 80}} />
        </View>

        <FlatList
          horizontal
          data={item.products}
          renderItem={({item}) => (
            <View>
              <View
                style={{
                  marginHorizontal: wp('1.0%'),
                  // marginVertical: hp('1%'),
                }}>
                <View
                  style={{
                    // borderRadius: 5,
                    // borderWidth: 0.1,
                    borderColor: 'lightgrey',
                    // elevation: 2,
                  }}>
                  <Image
                    source={{uri: item.logo}}
                    style={{
                      marginTop: 3,
                      width: hp('15%'),
                      height: wp('15%'),
                      borderRadius: 10,
                    }}
                    resizeMode="contain"
                  />
                  <View>
                    <Text style={{fontFamily: 'HKGrotesk-Regular'}}>
                      {item.hello}
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        color: 'lightgrey',
                        fontFamily: 'HKGrotesk-Regular',
                      }}>
                      Price
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    );
  };
  useEffect(() => {
    setEntries(ENTRIES1);
  }, []);
 const onNavigate = () => {
    setModalVisible(false), props.navigation.navigate('ShippingMethod');
  };

  return (
    <>
      <Header style={{backgroundColor: 'transparent', elevation: 0}}>
        <Left style={{flex: 0.3}}>
          <Icon name="menu" onPress={() => props.navigation.toggleDrawer()} />
        </Left>

        <Body style={{width: '80%', alignItems: 'center'}}>
          <Image
            style={{width: wp('40%'), height: hp('3%')}}
            resizeMode="contain"
            source={require('../../../assets/Main.png')}
          />
        </Body>

        <Right style={{flex: 0.3}}>
          <Icon
            style={{color: '#3FAD72', fontSize:22}}
            name="cart"
            onPress={() => props.navigation.navigate('Cart')}
          />
        </Right>
      </Header>
      <View
        onStartShouldSetResponderCapture={() => {
          console.log('Touched');
          setScroll(true);
        }}>
        <Filter
          visible={modalVisible}
          onNavigate={onNavigate}
          handler={() => setModalVisible(false)}
        />
        <SearchTag
          visible={modalVisible1}
          handler={() => setModalVisible1(false)}
        />

        <ScrollView
          style={{backgroundColor: '#FFF'}}
          showsVerticalScrollIndicator={false}
          scrollEnabled={scroll}>
          <View style={{marginHorizontal: wp('2%')}}>
            {/*  <= parent View  */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View style={styles.inputsearch}>
                <View style={{marginHorizontal: wp('2%')}}>
                  <Icon name="search" style={{fontSize: 20}} />
                </View>
                <View>
                  <TextInput
                    style={styles.textinput}
                    onChangeText={() =>
                      props.navigation.navigate('ProductList')
                    }
                    placeholder="Search"
                  />
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Icon
                    name="microphone-outline"
                    type="MaterialCommunityIcons"
                    style={{fontSize: 20}}
                  />
                  <TouchableOpacity style={{marginHorizontal: 5}}>
                    <Icon
                      onPress={TakeImage}
                      style={{fontSize: 20}}
                      name="camera"
                      type="SimpleLineIcons"
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{marginHorizontal: wp('2%'), fontSize: 20}}>
                <Icon name="scan1" type="AntDesign" />
              </View>
            </View>

            {/* End of search bar row */}

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: hp('1%'),
              }}>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.logobutton1}>
                  <TouchableWithoutFeedback
                    onPress={() => setModalVisible(true)}>
                    <Image
                      style={{height: hp('3%'), width: wp('6%')}}
                      source={require('../../../assets/adjust.png')}
                      resizeMode="contain"
                    />
                  </TouchableWithoutFeedback>
                </View>
                <TouchableOpacity
                  onPress={() => setModalVisible1(true)}
                  style={styles.logobutton1}>
                  <Image
                    style={{height: hp('3%'), width: wp('6%')}}
                    source={require('../../../assets/order.png')}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.logo1}>
                <TouchableWithoutFeedback
                  onPress={() => props.navigation.navigate('WelcomeBemo')}>
                  <Image
                    style={{height: hp('5%'), width: wp('40%')}}
                    source={require('../../../assets/bemo.png')}
                    resizeMode="contain"
                  />
                </TouchableWithoutFeedback>
              </View>
            </View>
            {/* End Of 2nd Row */}

            <View>
              <View style={styles.logo2}>
                <TouchableWithoutFeedback
                  onPress={() => props.navigation.navigate('PlusVerification')}>
                  <Image
                    style={{width: wp('70%')}}
                    source={require('../../../assets/plus.png')}
                    resizeMode="contain"
                  />
                </TouchableWithoutFeedback>
              </View>
            </View>

            {/* End of main Logo */}
            {/* And Start of carousel */}

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

            {/* End of Carousel */}
          </View>
          {/* start of menu in FlatList */}

          <View style={{alignItems: 'center'}}>
            <FlatList
              data={data}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              renderItem={({item, index}) => {
                return (
                  <View>
                    <TouchableOpacity
                      style={{alignItems: 'center', width: wp('22%')}}
                      onPress={() => {
                        props.navigation.navigate('View', {
                          array: data,
                        });
                      }}>
                      <View style={styles.logoimages}>
                        <Image source={item.imagee} resizeMode="contain" />
                      </View>
                      <View style={{alignItems: 'center'}}>
                        <Text
                          style={{
                            fontSize: 11,
                            fontFamily: 'HKGrotesk-Regular',
                          }}>
                          {item.title}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                );
              }}
            />
          </View>
          <View style={{marginHorizontal: wp('2%')}}>
            {/* End of menu FlatList */}

            {/* Start of Recent View Flatlist  */}

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',

                marginTop: hp('2%'),
              }}>
              <View>
                <Text
                  style={{fontFamily: 'HKGrotesk-Semibold', color: '#5E5E5E'}}>
                  Recent View
                </Text>
              </View>
              <TouchableOpacity
                style={{flexDirection: 'row', alignItems: 'center'}}
                onPress={() => {
                  props.navigation.navigate('View1', {
                    array: data2,
                  });
                }}>
                <Text
                  style={{color: '#3FAD72', fontFamily: 'HKGrotesk-Semibold'}}>
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
                data={data2}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                renderItem={({item, index}) => {
                  return (
                    <View>
                      <TouchableOpacity
                        onPress={() =>
                          props.navigation.navigate('ProductDetail')
                        }
                        style={{
                          marginRight: wp('1.5%'),
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
                          <Icon
                            style={{fontSize: 16, color: '#3FAD72'}}
                            name="truck-fast-outline"
                            type="MaterialCommunityIcons"
                          />
                          <Text
                            style={{
                              color: 'lightgrey',
                              fontFamily: 'HKGrotesk-Regular',
                            }}>
                            {item.Shipping}
                          </Text>
                        </View>
                        <View>
                          <Text
                            style={{
                              color: 'grey',
                              fontFamily: 'HKGrotesk-Bold',
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

            {/* End of Recnt View FlatList */}

            {/* WEEDMAPS CLOTHING BUTTON */}

            <View>
              <TouchableOpacity style={styles.weedButton}>
                <View>
                  <Image
                    source={require('../../../assets/Mainbutton.png')}
                    resizeMode="contain"
                  />
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
                      fontFamily: 'HKGrotesk-Regular',
                      textAlign: 'center',
                    }}>
                    store.address.com
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            {/* End of WeedClothing button */}

            {/* Start Of Good Price Accessories Item Flatlist */}

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',

                marginTop: hp('2%'),
              }}>
              <View>
                <Text
                  style={{fontFamily: 'HKGrotesk-Semibold', color: '#5E5E5E'}}>
                  Good Price Accessories
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate('View2', {
                    array: BestSelling,
                  });
                }}
                style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text
                  style={{color: '#3FAD72', fontFamily: 'HKGrotesk-SemiBold'}}>
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
                data={data2}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                renderItem={({item, index}) => {
                  return (
                    <View>
                      <TouchableOpacity
                        onPress={() =>
                          props.navigation.navigate('ProductDetail')
                        }
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

            {/* End of Good Price accessories Flatlist */}

            {/* start of Promotion item Flatlist */}
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={styles.design}>
                <Image
                  source={require('../../../assets/camera.jpeg')}
                  style={styles.designImage}
                />
                <Text
                  style={{
                    position: 'absolute',
                    bottom: 20,
                    color: '#FFFFFF',
                    fontSize: 20,
                    left: 5,
                    fontFamily: 'HKGrotesk-Bold',
                  }}>
                  What is this
                </Text>
                <Icon
                  style={{
                    color: 'white',
                    fontSize: 40,
                    paddingLeft: 4,
                    marginRight: 2,
                    position: 'absolute',
                    right: 0,
                    bottom: 8,
                  }}
                  name="arrow-forward-circle-outline"
                  type="Ionicons"
                />
              </View>
              <View style={styles.design}>
                <Image
                  source={require('../../../assets/camera.jpeg')}
                  style={styles.designImage}
                />

                <Text
                  style={{
                    position: 'absolute',
                    bottom: 20,
                    color: '#FFFFFF',
                    fontSize: 20,
                    left: 5,
                    fontFamily: 'HKGrotesk-Bold',
                  }}>
                  What is this
                </Text>
                <Icon
                  style={{
                    color: 'white',
                    fontSize: 40,
                    paddingLeft: 4,
                    marginRight: 2,
                    position: 'absolute',
                    right: 0,
                    bottom: 8,
                  }}
                  name="arrow-forward-circle-outline"
                  type="Ionicons"
                />
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: hp('2%'),
                marginBottom: hp('1%'),
              }}>
              <Text
                style={{fontFamily: 'HKGrotesk-Semibold', color: '#5E5E5E'}}>
                Shop by Category
              </Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity
                  style={{flexDirection: 'row', alignItems: 'center'}}
                  onPress={() => {
                    props.navigation.navigate('View3', {
                      array: data2,
                    });
                  }}>
                  <Text
                    style={{
                      color: '#3FAD72',
                      fontFamily: 'HKGrotesk-Semibold',
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
            </View>

            <View style={{alignItems: 'center'}}>
              <FlatList
                data={data2}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                renderItem={({item, index}) => {
                  return (
                    <View>
                      <TouchableOpacity
                        onPress={() =>
                          props.navigation.navigate('ProductDetail')
                        }
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
                            <Text style={{fontFamily: 'HKGrotesk-Regular'}}>
                              15%
                            </Text>
                          </View>
                        </View>
                        <View>
                          <Text style={{fontFamily: 'HKGrotesk-Bold'}}>
                            {item.title}
                          </Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                          <Text
                            style={{
                              color: 'grey',
                              fontFamily: 'HKGrotesk-Bold',
                            }}>
                            {item.Price}
                          </Text>
                          <Icon
                            style={{
                              fontSize: 18,
                              paddingLeft: 3,
                              color: '#3FAD72',
                            }}
                            name="truck-fast-outline"
                            type="MaterialCommunityIcons"
                          />
                        </View>
                      </TouchableOpacity>
                    </View>
                  );
                }}
              />
            </View>

            {/* End Of promotion item Flatlist */}
            {/* Start of new in gadget verical flatlist */}

            {/* Vertical Carousel */}

            <View
              style={{
                flexDirection: 'row',
              }}>
              <View
                style={{
                  width: screenWidth - 15,
                  flexDirection: 'row',
                  backgroundColor: '#FFFFFF',
                  borderWidth: 0.5,
                  borderColor: 'lightgrey',
                  borderRadius: 5,
                  elevation: 5,
                  // marginHorizontal: 10,
                }}
                onStartShouldSetResponderCapture={() => {
                  setScroll(false);
                  if (
                    // refContainer.current.scrollToOffset === 0 &&
                    scroll === false
                  ) {
                    setScroll(true);
                  }
                }}>
                <Carousel
                  onStart
                  onScrollBeginDrag={() => {
                    setScroll(false);
                  }}
                  onTouchStart={() => setScroll(false)}
                  windowSize={1}
                  vertical={true}
                  layout={'default'}
                  ref={carouselRefVertical}
                  sliderWidth={wp('94%')}
                  sliderHeight={200}
                  itemWidth={200}
                  itemHeight={200}
                  data={VerticalData}
                  renderItem={renderItemVertical}
                  onSnapToItem={(index) => {
                    // setScroll(false);
                    setActiveSlideVertical(index);
                  }}
                  // onResponderMove={() => setScroll(false)}
                />

                <Pagination
                  vertical={true}
                  dotsLength={VerticalData.length}
                  activeDotIndex={activeSlideVertical}
                  containerStyle={{
                    backgroundColor: 'transparent',
                    paddingHorizontal: 0,
                  }}
                  dotContainerStyle={{
                    marginHorizontal: 3,
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
            </View>

            {/* End of Carousel */}

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: hp('2%'),
              }}>
              <Text
                style={{fontFamily: 'HKGrotesk-Semibold', color: '#5E5E5E'}}>
                New in Gadgets
              </Text>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate('View4', {
                    array: data3,
                  });
                }}
                style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text
                  style={{color: '#3FAD72', fontFamily: 'HKGrotesk-Semibold'}}>
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

            <FlatList
              data={data3}
              numColumns={2}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item, index}) => (
                <View>
                  <TouchableOpacity
                    // onPress={() => props.navigation.navigate('ProductDetail')}
                    style={styles.gadgetcontainer}>
                    <View style={{height: hp('14%'), width: wp('47%')}}>
                      <Image
                        source={{uri: item.image}}
                        style={styles.newGadgetimage}
                      />
                    </View>
                    <View>
                      <Text
                        style={{fontFamily: 'HKGrotesk-Bold', paddingLeft: 6}}>
                        {item.title}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              )}
            />

            {/* End of Gadget FlatList */}

            {/* 2ND Carousel Start */}

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

            {/* End Of 2nd Carousel */}

            {/* Best Selling FlatList Start */}

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',

                marginTop: hp('2%'),
              }}>
              <Text
                style={{fontFamily: 'HKGrotesk-Semibold', color: '#5E5E5E'}}>
                Best Selling
              </Text>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate('View5', {
                    array: BestSelling,
                  });
                }}
                style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text
                  style={{color: '#3FAD72', fontFamily: 'HKGrotesk-Semibold'}}>
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
                        onPress={() =>
                          props.navigation.navigate('ProductDetail')
                        }
                        style={{
                          marginRight: wp('2%'),
                          marginVertical: hp('1%'),
                        }}>
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

            {/* End of Best selling FlatList */}
                  {/* Double Flatlist */}

                  <View style={{flexDirection:'row', borderWidth:0.3,
                   borderColor:'lightgrey', marginTop:hp('2%'), borderRadius:7, elevation:1.5}}>
                    <View style={{width:wp('40%')}}>
                      <FlatList
                      data={doubleflat1}
                      horizontal={true}
                      renderItem={({item, index}) =>{
                        return(
                          <TouchableOpacity style={{width:wp('40%'), alignItems:'center'}}>
                              <View>
                                  <View >
                                      <Image style={styles.imgf1} source={{uri: item.image}} />
                                  </View>
                                  <View style={{marginTop:hp('2%')}}>
                                      <Text style={{color:'orange', fontSize:16, fontFamily: 'HKGrotesk-Bold'}}>{item.Price}</Text>
                                  </View>
                                  <View style={{marginTop:hp('1%'), flexDirection:'row'}}>
                                      <Text style={{textDecorationLine:'line-through', color:'grey',fontFamily: 'HKGrotesk-Regular'}}>$100</Text>
                                      <Text style={{fontFamily: 'HKGrotesk-Regular'}}> -70%</Text>
                                  </View>
                              </View>
                          </TouchableOpacity>
                        )
                      }}

                      />
                    </View>
                    <ScrollView style={{height:hp('31%'), borderLeftWidth:1.5, borderLeftColor:'lightgrey',  }}>
                      <FlatList
                        data={doubleflat2}
                        renderItem={({item, index}) =>{
                          return(
                            <TouchableOpacity style={{flexDirection:'row', paddingLeft:10, marginTop:hp('1%')}}>
                                <View >
                                    <Image style={{height:hp('9%'), width:wp('20%'),}} source={{uri: item.image}}  />
                                </View>
                                <View style={{marginLeft:wp('3%'), marginTop:hp('0.3%')}}>
                                    <Text style={{color:'orange', fontSize:16, fontFamily: 'HKGrotesk-Bold'}}>{item.Price}</Text>
                                    <View style={{marginTop:hp('1%'), flexDirection:'row'}}>
                                        <Text style={{textDecorationLine:'line-through', color:'grey',fontFamily: 'HKGrotesk-Regular'}}>$100</Text>
                                        <Text style={{fontFamily: 'HKGrotesk-Regular'}}> -70%</Text>
                                    </View>
                                </View>

                            </TouchableOpacity>
                          )
                        }}
                      />
                    </ScrollView>
                  </View>
            {/* Start Of Shop of category Flatlist */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: hp('2%'),
                marginBottom: hp('1%'),
              }}>
              <Text
                style={{fontFamily: 'HKGrotesk-Semibold', color: '#5E5E5E'}}>
                Shop by Category
              </Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity
                  style={{flexDirection: 'row', alignItems: 'center'}}
                  onPress={() => {
                    props.navigation.navigate('View6', {
                      array: CategoryShop,
                    });
                  }}>
                  <Text
                    style={{
                      color: '#3FAD72',
                      fontFamily: 'HKGrotesk-Semibold',
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
            </View>
            <FlatList
              data={CategoryShop}
              numColumns={2}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item, index}) => (
                <View>
                  <View style={styles.gadgetcontainer1}>
                    <View style={{height: hp('12.5%'), width: wp('23.5%')}}>
                      <Image
                        source={item.image}
                        style={styles.newGadgetimage1}
                      />
                    </View>
                    <View
                      style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text
                        style={{
                          fontFamily: 'HKGrotesk-Bold',
                          textAlign: 'center',
                        }}>
                        {item.title}
                      </Text>
                    </View>
                  </View>
                </View>
              )}
            />

            {/* End of Shop by Category FlatList */}

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: wp('3%'),
                marginTop: hp('2%'),
              }}>
              <Text
                style={{fontFamily: 'HKGrotesk-Semibold', color: '#5E5E5E'}}>
                Recommended Projects Guide
              </Text>
              <TouchableOpacity
                style={{flexDirection: 'row', alignItems: 'center'}}
                onPress={() => {
                  props.navigation.navigate('View8');
                }}>
                <Text
                  style={{color: '#3FAD72', fontFamily: 'HKGrotesk-Semibold'}}>
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

            {/* Bottom Slideerrrr */}

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

            {/* <= End of parent View   */}
          </View>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  inputsearch: {
    width: wp('83%'),
    height: hp('6%'),
    borderWidth: 1,
    borderRadius: 15,
    borderColor: 'lightgrey',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  },
  textinput: {
    width: wp('47%'),
  },
  logobutton1: {
    height: hp('6%'),
    width: wp('16%'),
    backgroundColor: '#3FAD72',
    borderRadius: 10,
    marginRight: wp('2%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo1: {
    width: wp('57%'),
    height: hp('6%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#3FAD72',
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
  weedButton: {
    marginTop: hp('2%'),
    width: wp('96%'),
    height: hp('10%'),
    backgroundColor: '#3FAD72',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
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
  newGadgetimage: {
    marginTop: 1,
    height: hp('12%'),
    width: wp('47%'),
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  gadgetcontainer: {
    marginRight: wp('1.5%'),
    marginVertical: hp('1%'),
    backgroundColor: '#F5F5F5',
    paddingBottom: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  flatimages5: {
    marginTop: 1,
    height: hp('17%'),
    width: wp('30%'),
    borderRadius: 10,
  },

  newGadgetimage1: {
    marginTop: 1,
    marginBottom: 2,
    height: hp('12%'),
    width: wp('47%'),
    borderRadius: 10,
    position: 'absolute',
  },
  gadgetcontainer1: {
    width: wp('47%'),
    marginRight: wp('1.5%'),
    marginVertical: hp('0.5%'),
    backgroundColor: '#FFF',
    flexDirection: 'row',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#F1F1F1',
  },

  imageSliderbottom: {
    height: hp('25%'),
    marginVertical: hp('2%'),
    borderRadius: 10,
    marginBottom: hp('10%'),
  },
  logo2: {
    width: wp('95%'),
    height: hp('9%'),
    borderWidth: 1,
    alignSelf: 'center',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#3FAD72',
    marginTop: hp('1%'),
  },
  design: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'white',
    width: wp('45%'),
    elevation: 8,
    height: hp('10%'),
    // position: 'absolute',

    // backgroundColor: 'black',
    // opacity: 0.,
  },
  designImage: {
    width: wp('43%'),
    height: hp('9%'),
  },
  doublehead:{
    height:hp('9%'),
    backgroundColor:'#FF6702',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  timer:{
    height:hp('6%'),
    width:wp('14%'),
    backgroundColor:'#FFF',
    alignItems:'center',
    justifyContent:'center',
    marginLeft:wp('2%')
  },
  imgf1:{
    height:hp('18%'),
    width:wp('35%'),
    backgroundColor:'grey',
    marginTop:hp('2%')      
}
});

export default Main3;
