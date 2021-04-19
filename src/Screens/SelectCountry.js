/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import React, {useState} from 'react';
import Headers from '../components/Header';
import {Icon} from 'native-base';

const SelectCountry = ({navigation}) => {
  const [selected, setSelected] = useState('');
  const [state, setState] = useState({
    countires: [
      {
        id: '1',
        title: 'United States - USA',
        flag: require('../../assets/united-states.png'),
        seleted: false,
      },
      {
        id: '2',
        title: 'United Kingdom - UK',
        flag: require('../../assets/united-kingdom.png'),
        seleted: false,
      },
      {
        id: '3',
        title: 'France -FR',
        flag: require('../../assets/france.png'),
        seleted: false,
      },
      {
        id: '4',
        title: 'Germany - GR',
        flag: require('../../assets/germany.png'),
        seleted: false,
      },
      {
        id: '5',
        title: 'Canada - CA',
        flag: require('../../assets/canada.png'),
        seleted: false,
      },
      {
        id: '6',
        title: 'Austalia - AU',
        flag: require('../../assets/australia.png'),
        seleted: false,
      },
      {
        id: '7',
        title: 'Bahrain - BD',
        flag: require('../../assets/bahrain.png'),
        seleted: false,
      },
      {
        id: '8',
        title: 'United Arab Emirates - AED',
        flag: require('../../assets/united-arab-emirates.png'),
        seleted: false,
      },
    ],
  });

  const handleSelection = (id) => {
    console.log(id);
    var selectedId = selected;

    if (selectedId === id) setSelected(null);
    else setSelected(id);
  };
  // console.log(selected);

  const selectCountry = (id) => {
    let updatedList = state.countires.map((item) => {
      // eslint-disable-next-line eqeqeq
      if (item.id == id) {
        return {...item, seleted: !item.seleted};
      }
      return item; // else return unmodified item
    });

    setState({countires: updatedList}); // set state to new object with updated list
  };
  return (
    <View style={{backgroundColor: '#F9F9F9'}}>
      <Headers title="Select Country" left={() => navigation.goBack()} />
      <View style={{marginHorizontal: 20, marginVertical: 9}}>
        <Text style={{fontSize: 22, fontFamily: 'HKGrotesk-Regular'}}>
          Select Country
        </Text>
        <Text
          style={{
            fontSize: 13,
            color: 'silver',
            marginTop: 10,
            fontFamily: 'HKGrotesk-Regular',
          }}>
          Please select your shipping destination
        </Text>
      </View>

      <FlatList
        style={{marginHorizontal: 10, marginVertical: 20}}
        data={state.countires}
        extraData={selected}
        renderItem={({item}) => {
          return (
            <TouchableWithoutFeedback onPress={() => handleSelection(item.id)}>
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginVertical: 9,
                  }}>
                  <Image
                    style={{
                      height: hp('5%'),
                      width: wp('4%'),
                      flex: 1,
                      resizeMode: 'contain',
                    }}
                    source={item.flag}
                  />
                  <Text
                    style={{
                      flex: 4,
                      marginLeft: 15,
                      fontFamily: 'HKGrotesk-Regular',
                    }}>
                    {item.title}
                  </Text>
                  <Icon
                    style={{
                      color: '#3FAD72',
                      fontSize: 20,
                      marginHorizontal: 10,
                    }}
                    type="AntDesign"
                    name={selected.includes(item.id) ? 'check' : null}
                  />
                </View>
              </View>
            </TouchableWithoutFeedback>
          );
        }}
      />
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          borderRadius: 15,
          marginVertical: 30,
          backgroundColor: '#3FAD72',
          height: 60,
          marginHorizontal: 15,
        }}>
        <Text
          style={{
            textAlign: 'center',
            color: '#FFF',
            fontSize: 16,
            fontFamily: 'HKGrotesk-Regular',
          }}>
          Next
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SelectCountry;
