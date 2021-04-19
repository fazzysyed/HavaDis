import {Icon} from 'native-base';
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import DropDownPicker from 'react-native-dropdown-picker';
// import {ScrollView} from 'react-native-gesture-handler';

const ENTRIES1 = [
  {
    title: 'Professional Modification of racing car Steering Wheel',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration:
      'https://media.istockphoto.com/photos/steering-wheel-picture-id507984911?k=6&m=507984911&s=612x612&w=0&h=Qcr0bGMqXYi2b1rBgjtD8l6eiPXchaSoXS-CjuyHG3E=',
  },
  {
    title: 'Professional Modification of racing car Steering Wheel',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQoPg93EpMK7o6-E708DDMOZhkWFFN3c7l5g&usqp=CAU',
  },
  {
    title: 'Professional Modification of racing car Steering Wheel',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    illustration:
      'https://images.pexels.com/photos/3401900/pexels-photo-3401900.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },

  {
    title: 'Professional Modification of racing car Steering Wheel',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    illustration:
      'https://images.pexels.com/photos/3401900/pexels-photo-3401900.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
];

const MenuTab = (props) => {
  const [scroll, setScoll] = useState(true);

  const [items, setItems] = useState([
    {label: 'USA', value: 'usa'},
    {label: 'UK', value: 'uk'},
    {label: 'France', value: 'france'},
  ]);
  return (
    <ScrollView scrollEnabled={scroll}>
      <View
        onStartShouldSetResponderCapture={() => {
          console.log('Touched');
          setScoll(true);
        }}
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginHorizontal: wp('1%'),
          marginTop: hp('1%'),
        }}>
        <View style={styles.searchIcon}>
          <TouchableOpacity>
            <Icon style={{color: 'grey'}} name="search" />
          </TouchableOpacity>
        </View>

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
              containerStyle={{height: hp('5%'), width: wp('18%')}}
              placeholder="Sort"
              placeholderStyle={{fontSize: 12, color: 'grey',fontFamily:'HKGrotesk-Regular'}}
              style={{backgroundColor: 'lightgrey'}}
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
              containerStyle={{height: hp('5%'), width: wp('25%')}}
              placeholder="Catogery"
              placeholderStyle={{fontSize: 11, color: 'grey',fontFamily:'HKGrotesk-Regular'}}
              style={{backgroundColor: 'lightgrey'}}
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
              containerStyle={{height: hp('5%'), width: wp('20%')}}
              placeholder="Price"
              placeholderStyle={{fontSize: 12, color: 'grey',fontFamily:'HKGrotesk-Regular'}}
              style={{backgroundColor: 'lightgrey'}}
              dropDownStyle={{backgroundColor: '#fafafa'}}
            />
          </View>
        </View>

        <View style={styles.weightdropdown}>
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
              placeholder="Weight"
              placeholderStyle={{fontSize: 12, color: 'grey',fontFamily:'HKGrotesk-Regular'}}
              style={{backgroundColor: 'lightgrey'}}
              dropDownStyle={{backgroundColor: '#fafafa'}}
            />
          </View>
        </View>
      </View>

      {/* ***end of drop down */}

      <View
        onStartShouldSetResponderCapture={() => {
          console.log('Touched');
          setScoll(true);
        }}>
        <FlatList
          data={ENTRIES1}
          horizontal={true}
          renderItem={({item, index}) => {
            return (
              <View>
                <View style={styles.flatlistContainer}>
                  <View style={styles.imageConatiner}>
                    <Image
                      style={styles.flatlistImage}
                      resizeMode="stretch"
                      source={{uri: item.illustration}}
                    />
                    <View style={{flexDirection: 'row'}}>
                      <View style={styles.onSale}>
                        <Text style={{fontSize: 11, color: '#fff',fontFamily:'HKGrotesk-Regular'}}>
                          On Sale
                        </Text>
                      </View>
                      <View
                        style={{marginLeft: wp('18%'), marginTop: hp('1%')}}>
                        <Icon name="heart" />
                      </View>
                    </View>
                  </View>
                  <View style={{marginLeft: wp('2.5%')}}>
                    <View>
                      <Text style={{fontFamily:'HKGrotesk-Bold'}}>Product Name</Text>
                    </View>

                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginVertical: hp('0.8%'),
                      }}>
                      <View style={styles.flatlistbadge}>
                        <Icon
                          name="star"
                          style={{
                            color: '#fff',
                            fontSize: 15,
                            marginHorizontal: wp('1%'),
                          }}
                        />
                        <Text style={{color: '#fff',fontFamily:'HKGrotesk-Regular'}}>5.0 </Text>
                      </View>
                      <View style={{marginLeft: wp('1.5%')}}>
                        <Text style={{fontFamily:'HKGrotesk-Regular'}}>(409)</Text>
                      </View>
                    </View>

                    <View>
                      <Text style={{fontFamily:'HKGrotesk-Regular'}}>$60.00 - $70.00</Text>
                    </View>
                  </View>
                </View>
              </View>
            );
          }}
        />

        <View style={{marginHorizontal: wp('2%')}}>
          <Text style={{fontFamily:'HKGrotesk-Bold', fontSize: 17}}>
            Title/Heading here
          </Text>
        </View>

        {/* 2nd FlatList */}

        <FlatList
          onTouchStart={() => setScoll(false)}
          style={{marginBottom: 10}}
          data={ENTRIES1}
          numColumns={Math.ceil(ENTRIES1.length / 2)}
          renderItem={({item}) => {
            return (
              <View>
                <View style={styles.flatlistContainer}>
                  <View style={styles.imageConatiner}>
                    <Image
                      style={styles.flatlistImage1}
                      resizeMode="stretch"
                      source={{uri: item.illustration}}
                    />
                    <View>
                      <View
                        style={{marginLeft: wp('33%'), marginTop: hp('1%')}}>
                        <Icon name="heart" />
                      </View>
                    </View>
                  </View>
                  <View style={{marginLeft: wp('2.5%')}}>
                    <View>
                      <Text style={{fontFamily:'HKGrotesk-Bold'}}>Product Name</Text>
                    </View>

                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginVertical: hp('0.8%'),
                      }}>
                      <View style={styles.flatlistbadge}>
                        <Icon
                          name="star"
                          style={{
                            color: '#fff',
                            fontSize: 15,
                            marginHorizontal: wp('1%'),
                          }}
                        />
                        <Text style={{color: '#fff'}}>5.0 </Text>
                      </View>
                      <View style={{marginLeft: wp('1.5%')}}>
                        <Text style={{fontFamily:'HKGrotesk-Regular'}}>(409)</Text>
                      </View>
                    </View>

                    <View>
                      <Text style={{fontFamily:'HKGrotesk-Regular'}}>$60.00 - $70.00</Text>
                    </View>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  searchIcon: {
    height: hp('5%'),
    width: wp('10%'),
    borderRadius: 7,
    backgroundColor: 'lightgrey',
    justifyContent: 'center',
    alignItems: 'center',
  },
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
  },
  flatlistContainer: {
    height: hp('35%'),
    width: wp('46%'),
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'lightgrey',
    marginHorizontal: wp('2%'),
    marginVertical: hp('1%'),
  },
  imageConatiner: {
    width: wp('100%'),
    height: hp('23%'),
    resizeMode: 'contain',
  },
  flatlistImage: {
    height: hp('22%'),
    width: wp('45.5%'),
    position: 'absolute',
  },
  flatlistImage1: {
    flex: 1,
    height: hp('22%'),
    width: wp('45.5%'),
    position: 'absolute',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  flatlistbadge: {
    flexDirection: 'row',
    width: wp('14%'),
    height: hp('3.5%'),
    backgroundColor: 'orange',
    borderRadius: 7,
    alignItems: 'center',
  },
  onSale: {
    height: hp('3.5%'),
    width: wp('14%'),
    backgroundColor: '#FF0303',
    justifyContent: 'center',
    borderRadius: 10,
    alignItems: 'center',
    marginTop: hp('1%'),
    marginLeft: wp('1%'),
  },
});

export default MenuTab;
