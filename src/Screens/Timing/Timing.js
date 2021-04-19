import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Header, Left, Icon, Center, Right, Body, Card} from 'native-base';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Timing = ({navigation}) => {
  return (
    <View>
      <Header style={{backgroundColor: 'transparent', elevation: 0}}>
        <Left style={{flex: 0.3}}>
          <Icon name="arrow-back" onPress={() => navigation.goBack()} />
        </Left>
        <Body style={{width: '80%', alignItems: 'center'}}></Body>
        <Right style={{flex: 0.3}}></Right>
      </Header>
      <View style={{marginHorizontal: wp('3%'), marginTop: hp('2%')}}>
        {/* ******** */}
        <View>
          <Card
            style={{
              padding: 10,
              paddingHorizontal: 20,
              borderColor: '#fff',
              paddingBottom: 20,
              borderRadius: 10,
            }}>
            <View style={styles.clock}>
              <Icon
                style={{color: '#3FAD72'}}
                name="clockcircle"
                type="AntDesign"
              />
            </View>
            <View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text
                  style={{
                    color: '#FD3030',
                    fontSize: 16,
                    fontFamily: 'HKGrotesk-Regular',
                  }}>
                  Closed
                </Text>
                <Text
                  style={{
                    color: '#828282',
                    fontSize: 16,
                    fontFamily: 'HKGrotesk-Regular',
                  }}>
                  10.00-7.45PM
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingTop: 5,
                }}>
                <Text
                  style={{
                    color: '#828282',
                    fontSize: 16,
                    fontFamily: 'HKGrotesk-Regular',
                  }}>
                  Sunday
                </Text>
                <Text
                  style={{
                    color: '#828282',
                    fontFamily: 'HKGrotesk-Regular',
                    fontSize: 16,
                  }}>
                  10.00-5.45PM
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingTop: 5,
                }}>
                <Text
                  style={{
                    color: '#828282',
                    fontFamily: 'HKGrotesk-Regular',
                    fontSize: 16,
                  }}>
                  Monday
                </Text>
                <Text
                  style={{
                    color: '#828282',
                    fontFamily: 'HKGrotesk-Regular',
                    fontSize: 16,
                  }}>
                  10.00-7.45PM
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingTop: 5,
                }}>
                <Text
                  style={{
                    color: '#828282',
                    fontFamily: 'HKGrotesk-Regular',
                    fontSize: 16,
                  }}>
                  Tuesday
                </Text>
                <Text
                  style={{
                    color: '#828282',
                    fontFamily: 'HKGrotesk-Regular',
                    fontSize: 16,
                  }}>
                  10.00-7.45PM
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingTop: 5,
                }}>
                <Text
                  style={{
                    color: '#828282',
                    fontFamily: 'HKGrotesk-Regular',
                    fontSize: 16,
                  }}>
                  Wednesday
                </Text>
                <Text
                  style={{
                    color: '#828282',
                    fontFamily: 'HKGrotesk-Regular',
                    fontSize: 16,
                  }}>
                  10.00-7.45PM
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingTop: 5,
                }}>
                <Text
                  style={{
                    color: '#828282',
                    fontFamily: 'HKGrotesk-Regular',
                    fontSize: 16,
                  }}>
                  Thursday
                </Text>
                <Text
                  style={{
                    color: '#828282',
                    fontFamily: 'HKGrotesk-Regular',
                    fontSize: 16,
                  }}>
                  10.00-7.45PM
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingTop: 5,
                }}>
                <Text
                  style={{
                    color: '#828282',
                    fontFamily: 'HKGrotesk-Regular',
                    fontSize: 16,
                  }}>
                  Friday
                </Text>
                <Text
                  style={{
                    color: '#828282',
                    fontFamily: 'HKGrotesk-Regular',
                    fontSize: 16,
                  }}>
                  10.00-7.45PM
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingTop: 5,
                }}>
                <Text
                  style={{
                    color: '#828282',
                    fontFamily: 'HKGrotesk-Regular',
                    fontSize: 16,
                  }}>
                  Saturday
                </Text>
                <Text
                  style={{
                    color: '#828282',
                    fontFamily: 'HKGrotesk-Regular',
                    fontSize: 16,
                  }}>
                  10.00-7.45PM
                </Text>
              </View>
            </View>
          </Card>
        </View>

        <View>
          <Card
            style={{
              padding: 10,
              borderColor: '#fff',
              paddingHorizontal: 20,
              paddingBottom: 20,
              borderRadius: 10,
            }}>
            <View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon
                  style={{color: '#3FAD72', flex: 1}}
                  name="envelope"
                  type="FontAwesome"
                />
                <Text
                  style={{
                    color: '#828282',
                    fontFamily: 'HKGrotesk-Regular',
                    fontSize: 16,
                    flex: 4,
                    textAlign: 'center',
                  }}>
                  havause@mail.com
                </Text>
              </View>

              <View
                style={{
                  borderWidth: 1,
                  marginVertical: hp('1.5%'),
                  borderColor: 'lightgrey',
                }}></View>

              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon
                  style={{color: '#3FAD72', flex: 1}}
                  name="link"
                  type="Entypo"
                />
                <Text
                  style={{
                    color: '#828282',
                    fontFamily: 'HKGrotesk-Regular',
                    fontSize: 16,
                    flex: 4,
                    textAlign: 'center',
                  }}>
                  http://www.havause.com...
                </Text>
              </View>

              <View
                style={{
                  borderWidth: 1,
                  marginVertical: hp('1.5%'),
                  borderColor: 'lightgrey',
                }}></View>

              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon
                  style={{color: '#3FAD72'}}
                  name="facebook"
                  type="FontAwesome"
                />
                <Text
                  style={{
                    color: '#828282',
                    fontFamily: 'HKGrotesk-Regular',
                    fontSize: 16,
                    flex: 4,
                    textAlign: 'center',
                  }}>
                  facebook.com
                </Text>
              </View>

              <View
                style={{
                  borderWidth: 1,
                  marginVertical: hp('1.5%'),
                  borderColor: 'lightgrey',
                }}></View>

              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon
                  style={{color: '#3FAD72'}}
                  name="instagram"
                  type="AntDesign"
                />
                <Text
                  style={{
                    color: '#828282',
                    fontFamily: 'HKGrotesk-Regular',
                    fontSize: 16,
                    flex: 3,
                    textAlign: 'center',
                  }}>
                  instagram
                </Text>
              </View>
            </View>
          </Card>
        </View>
        {/* ******** */}
      </View>
      {/* ************* */}
    </View>
  );
};

const styles = StyleSheet.create({
  clock: {
    alignSelf: 'center',
    top: '-12%',
  },
});

export default Timing;
