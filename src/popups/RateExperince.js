import React, {useState} from 'react';
import {Card, Icon} from 'native-base';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
  FlatList,
  ScrollView,
  TextInput,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Modal from 'react-native-modal';
import Button from '../components/Button';

const RateExperince = ({visible, handler}) => {
  const [addImage, setAddImage] = useState([]);
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);
  const [defaultRating, setDefaultRating] = useState(2);

  return (
    <View>
      <Modal
        animationType={'slide'}
        transparent={true}
        // backdropColor={'black'}
        // backdropOpacity={1}
        style={{
          width: wp('100%'),
          marginLeft: 0,
          justifyContent: 'flex-end',
          marginBottom: 0,
        }}
        visible={visible}
        >
        <View style={{marginTop: hp('15%')}}>
          <Card style={{padding: 10, borderRadius: 15}}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{alignSelf: 'center', marginLeft: wp('22%')}}>
                  <Text style={{fontFamily: 'HKGrotesk-Bold', fontSize: 18}}>
                    Rate Your Experience
                  </Text>
                </View>
                <TouchableOpacity
                  style={{alignSelf: 'flex-end'}}
                  onPress={handler}>
                  <Icon
                    style={{color: 'grey'}}
                    name="close-o"
                    type="EvilIcons"
                  />
                </TouchableOpacity>
              </View>

              <View
                style={{
                  marginVertical: hp('2%'),
                  flexDirection: 'row',
                  marginTop: hp('1.5%'),
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                {maxRating.map((item, key) => {
                  return (
                    <Icon
                      key={key}
                      onPress={() => setDefaultRating(item)}
                      style={{
                        marginRight: 5,
                        fontSize: 25,
                        color: item <= defaultRating ? '#FABC41' : 'lightgrey',
                      }}
                      name="star"
                    />
                  );
                })}
                <Text style={{paddingLeft: 15}}>{defaultRating} Stars</Text>
              </View>

              <Card style={{padding: 15, borderRadius: 10}}>
                <TextInput
                  style={{
                    color: 'grey',
                    fontFamily: 'HKGrotesk-Regular',
                    justifyContent: 'flex-start',
                  }}
                  multiline={true}
                  placeholder="lipsum as it is sometimes known, is dummy text used in 
                            laying out print, graphic or web designs. The passage is attributed
                       "
                />
              </Card>
              {/* 2nd card */}
              <View
                style={{
                  alignSelf: 'center',
                  marginVertical: hp('2%'),
                  marginTop: hp('4%'),
                }}>
                <Button title="Submit Request" />
              </View>
              {/* ************* */}
            </ScrollView>
          </Card>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  Image: {
    height: hp('11%'),
    width: wp('25%'),
  },

  button8: {
    height: hp('11%'),
    width: wp('25%'),
    backgroundColor: '#3FAD72',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },

  buttonadd: {
    height: hp('11%'),
    width: wp('62%'),
    backgroundColor: '#3FAD72',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});

export default RateExperince;
