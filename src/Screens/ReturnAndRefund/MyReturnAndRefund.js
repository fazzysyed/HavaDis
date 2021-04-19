import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Header, Left, Icon, Card, Right, Body} from 'native-base';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const CardData = [
  {
    image:
      'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: 'Product Title',
    Address: '114 Village Post Road',
    color: 'Black',
    Price: '$250',
    OrderNumber: '5547845618',
    Date: '19 Oct 2020 15:49',
    Reason: 'Item is defective',
  },
  {
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVoB3a_65P1uEA5W3EgOyAsCbsmkTmtmVF8Q&usqp=CAU',
    title: 'Product Title',
    Address: '115 Street Post Road',
    color: 'Orange',
    Price: '$200',
    OrderNumber: '44357845618',
    Date: '20 Nov 2020 15:49',
    Reason: 'Out of Stock',
  },
];

const data3 = [
  {
    image:
      'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: 'Limited Time Sale',
  },
  {
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVoB3a_65P1uEA5W3EgOyAsCbsmkTmtmVF8Q&usqp=CAU',
    title: 'Recently Added',
  },
  {
    image:
      'https://cdn.britannica.com/s:300x169,c:crop/36/123536-004-1780EFF1/Variety-fruits-vegetables.jpg',
    title: 'Trending',
  },
  {
    image:
      'https://cdn.britannica.com/s:300x169,c:crop/36/123536-004-1780EFF1/Variety-fruits-vegetables.jpg',
    title: 'Featured Brands',
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

const MyReturnAndRefund = (props) => {
  return (
    <ScrollView>
      <Header style={{backgroundColor: '#FFF', elevation: 0}}>
        <Left style={{flex: 0.3}}>
          <Icon name="left" type="AntDesign" />
        </Left>
        <Body style={{width: '80%', alignItems: 'center'}}>
          <Text style={{fontFamily: 'HKGrotesk-Regular', fontSize: 16}}>
            My Returns & Refund
          </Text>
        </Body>
        <Right style={{flex: 0.3}}></Right>
      </Header>

      <View style={{marginHorizontal: wp('2%')}}>
        {/* ************* */}
        {/* Carrrd */}
        <FlatList
          data={CardData}
          renderItem={({item, index}) => {
            return (
              <View style={{marginTop: hp('1%')}}>
                <Card style={{borderRadius: 10}}>
                  {/* Row 1 */}
                  <View
                    style={{
                      borderBottomWidth: 0.5,
                      borderColor: 'lightgrey',
                      padding: 8,
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}>
                      <View>
                        <Text
                          style={{fontFamily: 'HKGrotesk-Bold', fontSize: 12}}>
                          Order#
                          <Text
                            style={{
                              fontFamily: 'HKGrotesk-Bold',
                              fontSize: 12,
                            }}>
                            {item.OrderNumber}
                          </Text>
                        </Text>
                        <Text
                          style={{
                            fontSize: 12,
                            color: 'grey',
                            fontFamily: 'HKGrotesk-Regular',
                          }}>
                          Canceled on:{' '}
                          <Text
                            style={{
                              fontFamily: 'HKGrotesk-Regular',
                              fontSize: 12,
                            }}>
                            {item.Date}
                          </Text>
                        </Text>
                      </View>
                      <View>
                        <View style={styles.Refundtext}>
                          <Text
                            style={{
                              color: '#A92929',
                              fontFamily: 'HKGrotesk-Regular',
                              fontSize: 12,
                            }}>
                            REFUNDED
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>

                  {/* Row 2 */}
                  <View
                    style={{
                      borderBottomWidth: 0.5,
                      borderColor: 'lightgrey',
                      padding: 8,
                    }}>
                    <View style={{flexDirection: 'row'}}>
                      <View style={styles.ImageContaniner}>
                        <Image
                          style={styles.refundImage}
                          source={{uri: item.image}}
                        />
                      </View>
                      <View style={{flexDirection: 'row'}}>
                        <View style={{paddingLeft: 7}}>
                          <Text
                            style={{
                              fontFamily: 'HKGrotesk-Bold',
                              fontSize: 15,
                            }}>
                            {item.title}
                          </Text>
                          <Text
                            style={{
                              marginVertical: wp('1%'),
                              fontFamily: 'HKGrotesk-Regular',
                            }}>
                            Color Family :{' '}
                            <Text style={{fontFamily: 'HKGrotesk-Regular'}}>
                              {item.color}
                            </Text>
                          </Text>
                          <View
                            style={{
                              flexDirection: 'row',
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}>
                            <Icon
                              style={{fontSize: 22}}
                              name="md-location-outline"
                            />
                            <Text
                              style={{
                                width: wp('39%'),
                                fontFamily: 'HKGrotesk-Regular',
                              }}>
                              {item.Address}
                            </Text>
                            <Icon
                              style={{color: '#444444'}}
                              name="dot-single"
                              type="Entypo"
                            />
                          </View>
                        </View>

                        <View>
                          <Text style={{fontFamily: 'HKGrotesk-Bold'}}>
                            {item.Price}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>

                  {/* Row 3 */}
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      padding: 8,
                      alignItems: 'center',
                    }}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Icon
                        style={{color: '#3FAD72'}}
                        name="information-outline"
                        type="MaterialCommunityIcons"
                      />
                      <View style={{paddingLeft: 7}}>
                        <Text style={{fontFamily: 'HKGrotesk-Bold'}}>
                          Reason
                        </Text>
                        <Text
                          style={{
                            color: 'grey',
                            fontFamily: 'HKGrotesk-Regular',
                          }}>
                          {item.Reason}
                        </Text>
                      </View>
                    </View>

                    <View>
                      <View>
                        <View>
                          <Text
                            style={{
                              fontWeight: '900',
                              fontSize: 16,
                              fontFamily: 'HKGrotesk-Regular',
                            }}>
                            4221 **** **** 9018
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </Card>
              </View>
            );
          }}
        />

        {/* End of Card */}

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: hp('2%'),
          }}>
          <Text style={{fontFamily: 'HKGrotesk-Bold'}}>New in Gadgets</Text>
        </View>

        <FlatList
          data={data3}
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <View>
              <View style={styles.gadgetcontainer}>
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
              </View>
            </View>
          )}
        />
        {/* End Of new In Gadget */}

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: wp('1%'),
            marginTop: hp('2%'),
          }}>
          <Text
            style={{
              fontFamily: 'HKGrotesk-Semibold',
              fontSize: 15,
              color: '#393939',
            }}>
            Related Sponsored Items
          </Text>
          <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}
          onPress={() => {
            props.navigation.navigate('View', {
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

        <View style={{alignItems: 'center'}}>
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
                      <Text style={{fontFamily: 'HKGrotesk-Bold'}}>
                        {item.title}
                      </Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Text
                        style={{color: 'grey', fontFamily: 'HKGrotesk-Bold'}}>
                        {item.Price}
                      </Text>
                      <Image
                        style={{
                          height: hp('2.5%'),
                          width: wp('5%'),
                          marginLeft: 5,
                        }}
                        resizeMode="contain"
                        source={require('../../../assets/freetruck.png')}
                      />
                    </View>
                  </View>
                </View>
              );
            }}
          />
        </View>

        {/* *************** */}
      </View>

      {/* ************* */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  ImageContaniner: {
    height: hp('12%'),
    width: wp('20%'),
  },
  refundImage: {
    height: hp('12%'),
    width: wp('20%'),
    borderRadius: 6,
  },
  Refundtext: {
    height: hp('4%'),
    width: wp('25%'),
    backgroundColor: '#F5E7E7',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
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
});

export default MyReturnAndRefund;
