import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Header, Left, Icon, Center, Right, Body, Card} from 'native-base';
import Button from '../../components/Button';

const RateApp = ({navigation}) => {
  const [defaultRating, setDefaultRating] = useState(2);
  // To set the max number of Stars
  const [selected, setSelected] = useState('');
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);
  const [service, setServices] = useState([
    {
      id: '1',
      re: 'Very Good',
    },
    {
      id: '2',
      re: 'Good service',
    },
    {
      id: '3',
      re: 'Clean',
    },
    {
      id: '4',
      re: 'Careful',
    },
    {
      id: '5',
      re: 'Work hard',
    },
  ]);
  const handleSelection = (item) => {
    console.log(item);
    var selectedId = selected;

    if (selectedId === item.id) setSelected(item.id);
    else setSelected(item.id);
  };
  console.log(selected);
  return (
    <View>
      <Header
        style={{
          backgroundColor: 'transparent',
          elevation: 0,
          borderBottomWidth: 1,
          borderBottomColor: 'lightgrey',
        }}>
        <Left style={{flex: 0.3}}>
          <Icon name="arrow-back" onPress={() => navigation.goBack()} />
        </Left>
        <Body style={{width: '80%', alignItems: 'center'}}>
          <Text style={{fontFamily: 'HKGrotesk-Regular', fontSize: 16}}>
            Rate App
          </Text>
        </Body>
        <Right style={{flex: 0.3}}></Right>
      </Header>

      <View style={{marginHorizontal: wp('3%')}}>
        <Card
          style={{
            padding: 15,
            justifyContent: 'center',
            marginTop: hp('4%'),
            borderRadius: 10,
          }}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require('../../../assets/Oval.png')}
            />
          </View>
          <View style={{marginTop: hp('1.5%')}}>
            <Text
              style={{
                alignSelf: 'center',
                color: 'grey',
                fontFamily: 'HKGrotesk-Regular',
              }}>
              Jhon Nguyen
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: hp('1.5%'),
              justifyContent: 'space-evenly',
            }}>
            {maxRating.map((item, key) => {
              return (
                <Icon
                  key={key}
                  onPress={() => setDefaultRating(item)}
                  style={{
                    color: item <= defaultRating ? '#FABC41' : 'lightgrey',
                  }}
                  name="star"
                />
              );
            })}
          </View>

          <FlatList
            contentContainerStyle={{alignSelf: 'flex-start', marginTop: 20}}
            data={service}
            extraData={selected}
            // horizontal
            numColumns={3}
            renderItem={({item}) => (
              <TouchableOpacity
                style={{
                  marginHorizontal: 5,
                  paddingHorizontal: 12,
                  paddingVertical: 7,
                  marginVertical: 4,
                  // height: hp('4%'),
                  backgroundColor: selected.includes(item.id)
                    ? '#3FAD72'
                    : '#D9D9D9',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 4,
                }}
                onPress={() => handleSelection(item)}>
                <Text
                  style={{
                    color: selected.includes(item.id) ? '#FFFFFF' : '#000',
                    fontFamily: 'HKGrotesk-Regular',
                  }}>
                  {item.re}
                </Text>
              </TouchableOpacity>
            )}
          />

          <View style={styles.input}>
            <TextInput
              numberOfLines={5}
              maxLength={200}
              placeholder="Leave a Review (maximum 50 word)"
            />
          </View>
        </Card>

        <View style={{alignSelf: 'center', marginTop: hp('3%')}}>
          <Button title="Submit Review" />

          <TouchableOpacity style={styles.Button}>
            <Text style={{color: '#FFF', fontFamily: 'HKGrotesk-Regular'}}>
              Cancel
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* ************* */}
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    height: hp('11%'),
    width: wp('22%'),
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  image: {
    height: hp('11%'),
    width: wp('22%'),
    borderRadius: 50,
  },
  goodbutton: {
    // width: wp('28%'),
    marginHorizontal: 5,
    paddingHorizontal: 12,
    paddingVertical: 5,
    marginVertical: 4,
    // height: hp('4%'),

    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  backgroundColorEnable: {
    backgroundColor: '#3FAD72',
  },
  backgroundColorDisable: {
    backgroundColor: '#D9D9D9',
  },

  servicebutton: {
    width: wp('33%'),
    height: hp('4%'),
    backgroundColor: '#3FAD72',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    marginHorizontal: wp('2%'),
  },
  cleanbutton: {
    width: wp('19%'),
    height: hp('4%'),
    backgroundColor: '#D9D9D9',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  carefulbutton: {
    width: wp('23%'),
    height: hp('4%'),
    backgroundColor: '#D9D9D9',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    marginRight: wp('2%'),
  },
  workbutton: {
    // width: wp('28%'),
    height: hp('4%'),
    backgroundColor: '#D9D9D9',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: 'lightgrey',
    marginTop: hp('1.5%'),
    borderRadius: 5,
  },
  Button: {
    marginTop: hp('2%'),
    height: hp('9%'),
    width: wp('90%'),
    backgroundColor: '#FB4B7B',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 18,
  },
});

export default RateApp;
