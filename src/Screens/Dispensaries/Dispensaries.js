import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Header, Left, Icon, Card, Right, Body} from 'native-base';

const data2 = [
  {
    image:
      'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    StoreName: 'Store Name1',
    Address: 'Shop No 9, Street 2, London',
    Rating: '4.0',
    RatingNumber: '(409)',
    RatingText: '4.5 mi',
  },
  {
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVoB3a_65P1uEA5W3EgOyAsCbsmkTmtmVF8Q&usqp=CAU',
    StoreName: 'Test',
    Address: 'Test, London',
    Rating: '2.0',
    RatingNumber: '(408)',
    RatingText: '4.4 mi',
  },
  {
    image:
      'https://cdn.britannica.com/s:300x169,c:crop/36/123536-004-1780EFF1/Variety-fruits-vegetables.jpg',
    StoreName: 'Check 1',
    Address: 'Shop No 5, Street 2, London',
    Rating: '5.0',
    RatingNumber: '(407)',
    RatingText: '4.3 mi',
  },
  {
    image:
      'https://cdn.britannica.com/s:300x169,c:crop/36/123536-004-1780EFF1/Variety-fruits-vegetables.jpg',
    StoreName: 'Mediciene Store',
    Address: 'Address',
    Rating: '4.4',
    RatingNumber: '(406)',
    RatingText: '4.2 mi',
  },
  {
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8yMIHkxs901EzRfpvMq6gIEfDADZcfbJxLw&usqp=CAU',
    StoreName: 'Pharmacy Store',
    Address: 'Address',
    Rating: '3.2',
    RatingNumber: '(405)',
    RatingText: '4.1 mi',
  },
];

const Dispensaries = ({navigation}) => {
  const [value, setValue] = useState('');
  const [data, setData] = useState(data2);

  const searchFilterFunction = (text) => {
    setValue(text);

    const newData = data.filter((item) => {
      const itemData = `${item.StoreName.toUpperCase()} `;
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    console.log('New', newData);
    setData(newData);
    if (!text || text === '') {
      setData(data2);
    }
  };

  useEffect(() => {
    setData(data2);
  }, [data2]);

  return (
    <ScrollView>
      <Header style={{backgroundColor: 'transparent', elevation: 0}}>
        <Left style={{flex: 0.3}}>
          <Icon name="menu" onPress={() => navigation.toggleDrawer()} />
        </Left>
        <Body style={{width: '80%', alignItems: 'center'}}>
          <Image
            source={require('../../../assets/logopluss.png')}
            resizeMode="contain"
            style={{height: 80, width: 120}}
          />
        </Body>
        <Right style={{flex: 0.3}}>
          <Icon style={{color: '#3FAD72'}} name="cart" />
        </Right>
      </Header>
      <View style={styles.searchbar}>
        <Icon name="ios-search" style={{padding: 8}} />
        <TextInput
          style={{width: wp('75%')}}
          placeholderTextColor="grey"
          value={value}
          onChangeText={(text) => searchFilterFunction(text)}
          placeholder="Search"
        />
      </View>

      {/* End of header and search input */}
      <View style={{marginHorizontal: wp('2%')}}>
        {/* **** */}
        <View style={{marginVertical: wp('2%')}}>
          <Text style={{fontFamily: 'HKGrotesk-Bold'}}>Dispensaries</Text>
        </View>
        {/* Flatlis Cards */}
        <FlatList
          data={data}
          renderItem={({item, index}) => {
            return (
              <View>
                <Card
                  style={{
                    borderRadius: 10,
                    padding: 10,
                    paddingTop: 15,
                    paddingBottom: 15,
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <View style={styles.portion1}>
                      {/* <ImageBackground  source={require('../../../assets/background.png')}> */}
                      <View>
                        <Image
                          style={{position: 'absolute', width: wp('42%')}}
                          source={require('../../../assets/background.png')}
                        />
                      </View>
                      <View style={{padding: 10}}>
                        <View style={{alignItems: 'flex-end'}}>
                          <Image
                            style={{height: hp('5%'), width: wp('10%')}}
                            source={require('../../../assets/storebutton.png')}
                          />
                        </View>
                        <View style={{flexDirection: 'row'}}>
                          <View style={styles.imagecontainer}></View>
                          <View style={{justifyContent: 'flex-end'}}>
                            <Text
                              style={{
                                fontFamily: 'HKGrotesk-Bold',
                                paddingLeft: 5,
                                fontSize: 15,
                                width: wp('21%'),
                              }}>
                              {item.StoreName}
                            </Text>
                          </View>
                        </View>
                        <View style={{marginVertical: hp('1%')}}>
                          <Text
                            style={{
                              color: '#7F7F7F',
                              fontFamily: 'HKGrotesk-Regular',
                            }}>
                            {item.Address}
                          </Text>
                        </View>
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                          }}>
                          <View style={styles.badge}>
                            <Icon
                              name="star"
                              style={{fontSize: 15, color: '#FFF'}}
                            />
                            <Text
                              style={{
                                color: '#FFF',
                                fontFamily: 'HKGrotesk-Regular',
                              }}>
                              {item.Rating}
                            </Text>
                          </View>
                          <View>
                            <Text style={{fontFamily: 'HKGrotesk-Regular'}}>
                              {item.RatingNumber}
                            </Text>
                          </View>
                          <View>
                            <Text style={{fontFamily: 'HKGrotesk-Regular'}}>
                              {item.RatingText}
                            </Text>
                          </View>
                        </View>

                        {/* </ImageBackground> */}
                      </View>
                    </View>
                    <View
                      style={{
                        width: wp('60%'),
                        justifyContent: 'space-evenly',
                        paddingLeft: 10,
                      }}>
                      <View>
                        <TouchableOpacity style={styles.buttoncall}>
                          <Icon
                            style={{color: '#fff', fontSize: 22}}
                            name="call"
                          />
                          <Text
                            style={{
                              color: '#fff',
                              paddingLeft: 10,
                              fontFamily: 'HKGrotesk-Regular',
                            }}>
                            Call
                          </Text>
                        </TouchableOpacity>
                      </View>
                      <View>
                        <TouchableOpacity style={styles.buttonhours}>
                          <Icon style={{fontSize: 22}} name="time" />
                          <Text
                            style={{
                              color: 'grey',
                              paddingLeft: 10,
                              fontFamily: 'HKGrotesk-Regular',
                            }}>
                            Hours
                          </Text>
                        </TouchableOpacity>
                      </View>
                      <View>
                        <TouchableOpacity style={styles.buttondirection}>
                          <Icon
                            style={{fontSize: 22}}
                            name="directions"
                            type="MaterialCommunityIcons"
                          />
                          <Text
                            style={{
                              color: 'grey',
                              paddingLeft: 10,
                              fontFamily: 'HKGrotesk-Regular',
                            }}>
                            Direction
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </Card>
              </View>
            );
          }}
        />

        {/* **** */}
      </View>
      {/* ****************************************** */}
    </ScrollView>
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
  portion1: {
    width: wp('42%'),
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'lightgrey',
  },
  imagecontainer: {
    marginTop: hp('2%'),
    height: hp('8%'),
    width: wp('15%'),
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  image1: {
    height: hp('10%'),
    width: wp('15%'),
  },
  badge: {
    flexDirection: 'row',
    height: hp('3%'),
    width: wp('15%'),
    backgroundColor: '#FF9D2B',
    justifyContent: 'center',
    borderRadius: 8,
    alignItems: 'center',
  },
  buttoncall: {
    width: wp('42%'),
    height: hp('6%'),
    backgroundColor: '#3FAD72',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonhours: {
    width: wp('42%'),
    height: hp('6%'),
    // backgroundColor:'#3FAD72',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'lightgrey',
  },
  buttondirection: {
    width: wp('42%'),
    height: hp('6%'),
    // backgroundColor:'#3FAD72',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'lightgrey',
  },
});

export default Dispensaries;
