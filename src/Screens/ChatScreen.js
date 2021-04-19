/* eslint-disable no-dupe-keys */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-undef */
import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
  TextInput,
  ScrollView,
  FlatList,
  Keyboard,
} from 'react-native';
import {Header, Left, Icon, Center, Right, Body} from 'native-base';

export default App = ({navigation}) => {
  const [isFaceDetected, setisFaceDetection] = useState(false);
  const [msg, setMsg] = useState({
    Messages: [
      {
        id: 1,
        sent: 'Heloo, jhony',
        date: 'Zuse | Oct 8, 2020',
        recv: 'Heloo',
      },
      {
        id: 2,
        sent: 'how r u?',
        date: 'Zuse | Oct 8, 2020',
        recv: 'fine, wht about u?',
      },
      {
        id: 3,
        sent: 'flying bcz of happiness',
        date: 'Zuse | Oct 8, 2020',
        recv: 'noice bro',
      },
      {
        id: 4,
        sent: 'wanna cs?',
        date: 'Zuse | Oct 8, 2020',
        recv: 'yes, i am already playing',
      },
      {
        id: 5,
        sent: 'good,coming',
        date: 'Zuse | Oct 8, 2020',
        recv: 'ok',
      },
    ],
  });

  const inputRef = React.useRef();

  return (
    <View style={{flex: 1, backgroundColor: '#F5F5F5'}}>
      <Header style={{backgroundColor: '#FFFFFF', elevation: 0}}>
        <Left style={{flex: 0.3}}>
          <Icon
            name="left"
            type="AntDesign"
            style={{fontSize: 16}}
            onPress={() => navigation.goBack()}
          />
        </Left>
        <Body style={{width: '80%', alignItems: 'center'}}>
          <Text style={{fontSize: 16}}>Customer Support</Text>
        </Body>
        <Right style={{flex: 0.3}}></Right>
      </Header>
      <FlatList
        data={msg.Messages}
        renderItem={({item}) => {
          return (
            <ScrollView style={{flex: 1}}>
              <View style={{marginVertical: hp('1%')}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    marginHorizontal: 7.5,
                    marginVertical: 5,
                  }}>
                  <View>
                    <View
                      style={{
                        borderTopLeftRadius: 25,
                        borderBottomLeftRadius: 25,
                        borderWidth: 1,
                        borderTopRightRadius: 25,
                        marginHorizontal: 7.5,
                        borderWidth: 0.5,
                        borderColor: 'silver',

                        backgroundColor: '#FFF',
                        paddingVertical: 15,
                      }}>
                      <Text
                        style={{
                          justifyContent: 'flex-start',
                          marginHorizontal: 10,
                          fontSize: 16,
                        }}>
                        {item.sent}
                      </Text>
                    </View>
                  </View>

                  <View
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      alignSelf: 'flex-end',
                    }}>
                    <View
                      style={{
                        borderRadius: 30,
                        borderWidth: 1,
                        alignItems: 'center',
                        hight: 60,
                        width: 40,
                        padding: 6,
                        backgroundColor: '#7AA8F9',
                        borderColor: 'silver',

                        borderWidth: 0.5,
                      }}>
                      <Text
                        style={{
                          fontSize: 20,
                          fontWeight: 'bold',
                          color: '#FFF',
                        }}>
                        G
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end',
                    marginHorizontal: hp('7%'),
                  }}>
                  <Text style={{fontSize: 12}}>{item.date}</Text>
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  marginHorizontal: 7.5,
                  marginVertical: 5,
                }}>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    alignSelf: 'flex-end',
                  }}>
                  <View
                    style={{
                      borderRadius: 20,
                      borderWidth: 1,
                      alignItems: 'center',
                      hight: 60,
                      width: 40,
                      padding: 6,
                      borderWidth: 0.5,
                      backgroundColor: '#3FAD72',
                      borderColor: 'silver',

                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{fontSize: 20, fontWeight: 'bold', color: '#FFF'}}>
                      J
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    borderTopLeftRadius: 25,
                    borderBottomRightRadius: 25,
                    borderWidth: 0.5,
                    borderTopRightRadius: 25,
                    marginHorizontal: 7.5,
                    borderColor: 'silver',
                    paddingVertical: 15,
                    backgroundColor: '#FFF',
                  }}>
                  <Text
                    style={{
                      justifyContent: 'flex-start',
                      marginHorizontal: 10,
                      fontSize: 16,
                    }}>
                    {item.recv}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  justifyContent: 'flex-end',
                  alignItems: 'flex-start',
                  marginHorizontal: hp('7%'),
                }}>
                <Text style={{fontSize: 12}}>{item.date}</Text>
              </View>
            </ScrollView>
          );
        }}
      />

      <View
        style={{
          marginVertical: 10,
          flexDirection: 'row',
          backgroundColor: '#3FAD72',
          marginHorizontal: 10,
          borderRadius: 30,
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => inputRef.current.focus()}>
          <Image
            style={{
              height: 25,
              width: 25,
              resizeMode: 'contain',
              marginHorizontal: 10,
            }}
            source={require('../../assets/Icon-feather-smile.png')}
          />
        </TouchableOpacity>

        <TextInput
          ref={inputRef}
          placeholder="Type your message"
          placeholderTextColor="#FFF"
          fontSize={18}
          multiline
          style={{
            width: 210,
            height: 50,
            color: '#FFFFFF',
          }}
        />
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <TouchableOpacity>
            <Image
              style={{
                height: 30,
                width: 30,
                resizeMode: 'contain',
                marginHorizontal: 7,
              }}
              source={require('../../assets/Group67175.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={{height: 30, width: 30, resizeMode: 'contain'}}
              source={require('../../assets/Group67176.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
