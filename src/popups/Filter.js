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
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Modal from 'react-native-modal';
import Button from '../components/Button';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
const layouts = [
  {
    id: '1',
    photo: require('../../assets/filter1.png'),
  },
  {
    id: '2',
    photo: require('../../assets/filter2.png'),
  },
  {
    id: '3',
    photo: require('../../assets/filter3.png'),
  },
  {
    id: '4',
    photo: require('../../assets/filter4.png'),
  },
  {
    id: '5',
    photo: require('../../assets/filter5.png'),
  },
];
const service = [
  {
    id: '1',
    re: 'AIRPOD CASES',
  },
  {
    id: '2',

    re: 'COLOR',
  },
  {
    id: '3',

    re: 'RAM',
  },
  {
    id: '4',

    re: 'HARD DRIVE',
  },
  {
    id: '5',

    re: 'IPHONE CASE VERSION',
  },
];
const Filter = ({visible, handler, onNavigate}) => {
  const [value, setValue] = useState(0);
  const [selected, setSelected] = useState('');
  const [selectedLayout, setSelectedLayout] = useState('');

  const [multiSliderValue, setMultiSliderValue] = React.useState([3, 7]);
  console.log(multiSliderValue);

  const multiSliderValuesChange = (values) => setMultiSliderValue(values);
  const handleSelection = (id) => {
    console.log(id);
    var selectedId = selected;

    if (selectedId === id) setSelected(null);
    else setSelected(id);
  };
  const handleSelectionLayout = (id) => {
    console.log(id);
    var selectedId = selectedLayout;

    if (selectedId === id) setSelectedLayout(null);
    else setSelectedLayout(id);
  };
  
  return (
    <View>
      <Modal
        animationType={'slide'}
        transparent={true}
      
        // backdropColor={'black'}
        // backdropOpacity={1}
        deviceWidth={700}
        style={{
          width: wp('100%'),
          height: hp('100%'),
          marginLeft: 0,
          marginBottom: 0,
        }}
        visible={visible}
        >
          
        <View>
          <Card style={{padding: 10, borderRadius: 15}}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontFamily:'HKGrotesk-Bold', fontSize: 20}}>Filter</Text>
                <TouchableOpacity onPress={handler}>
                  <Icon
                    style={{color: 'grey'}}
                    name="close-o"
                    type="EvilIcons"
                  />
                </TouchableOpacity>
              </View>
              <View style={{marginTop: hp('1%')}}>
                <Text style={{fontSize: 16, fontFamily:'HKGrotesk-Bold'}}>Layouts</Text>
              </View>
              {/* Layout Menu */}
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: hp('1%'),
                }}>
                <FlatList
                  horizontal
                  data={layouts}
                  renderItem={({item}) => (
                    <TouchableOpacity
                      onPress={() => handleSelectionLayout(item.id)}
                      style={{
                        backgroundColor: selectedLayout.includes(item.id)
                          ? '#3FAD72'
                          : '#FFFFFF',
                        height: hp('6.5%'),
                        width: wp('16%'),
                        borderRadius: 10,
                        marginHorizontal: 4,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderWidth: 0.5,
                        borderColor: '#E8E8E8',
                      }}>
                      <Image
                        style={{height: hp('4%'), width: wp('8%')}}
                        source={item.photo}
                      />
                    </TouchableOpacity>
                  )}
                />
              </View>
              {/* End of Layou Mene */}

              <View style={{marginTop: hp('1%')}}>
                <Text style={{fontSize: 16, fontFamily:'HKGrotesk-Bold'}}>By Price</Text>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontFamily:'HKGrotesk-Regular'}}>$0.00</Text>
                <Text style={{fontFamily:'HKGrotesk-Regular'}}>
                  ${multiSliderValue[0]}-${multiSliderValue[1]}
                </Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <MultiSlider
                  values={[2, 200]}
                  sliderLength={320}
                  marker
                  onValuesChange={multiSliderValuesChange}
                  min={0}
                  max={500}
                  markerStyle={{
                    backgroundColor: '#3FAD72',
                  }}
                  selectedStyle={{
                    backgroundColor: '#3FAD72',
                  }}
                />
              </View>

              <View style={{marginTop: hp('1%')}}>
                <Text style={{fontSize: 16, fontFamily:'HKGrotesk-Bold'}}>
                  Attributes
                </Text>
              </View>

              {/* Groups of Button */}

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
                      paddingHorizontal: 15,
                      paddingVertical: 7,
                      marginVertical: 4,
                      // height: hp('4%'),
                      backgroundColor: selected.includes(item.id)
                        ? '#3FAD72'
                        : '#fff',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 6,
                      borderWidth: 1,
                      borderColor: '#F4F4F4',
                    }}
                    onPress={() => handleSelection(item.id)}>
                    <Text
                      style={{
                        fontFamily:'HKGrotesk-Regular',
                        color: selected.includes(item.id) ? '#FFFFFF' : '#000',
                      }}>
                      {item.re}
                    </Text>
                  </TouchableOpacity>
                )}
              />
                  <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginHorizontal: hp('1%'),
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: '#3FAD72',
                borderRadius: 8,
                paddingHorizontal: wp('1.5%'),
                paddingVertical: hp('2%'),
                marginHorizontal: hp('1%'),
                marginVertical: hp('2%'),
                flex: 1,
              }}>
              <Text style={{color: '#FFF', textAlign: 'center',fontFamily:'HKGrotesk-Regular'}}>COLOR</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#3FAD72',
                borderRadius: 8,
                paddingHorizontal: wp('1.5%'),
                paddingVertical: hp('2%'),
                marginHorizontal: hp('1%'),
                flex: 1,
                marginVertical: hp('2%'),
              }}
              onPress={onNavigate}>
              <Text style={{color: '#FFF', textAlign: 'center',fontFamily:'HKGrotesk-Regular'}}>SHIPPING</Text>
            </TouchableOpacity>
          </View>

              <View style={{marginTop: hp('1%')}}>
                <Text style={{fontSize: 16, fontFamily:'HKGrotesk-Bold'}}>
                  By Category
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  borderRadius: 10,
                  elevation: 0,
                  borderColor: '#E8E8E8',
                  borderWidth: 1,
                  marginTop: hp('1.5%'),
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 10,
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Icon
                      style={{color: '#3FAD72', fontSize: 25}}
                      name="flash"
                      type="Entypo"
                    />
                    <Text style={{color: '#303030',fontFamily:'HKGrotesk-Regular'}}>All Accessories</Text>
                  </View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{color: 'grey', paddingRight: 20,fontFamily:'HKGrotesk-Regular'}}>132</Text>
                    <Icon
                      style={{color: 'grey', fontSize: 17}}
                      name="right"
                      type="AntDesign"
                    />
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  borderRadius: 10,
                  elevation: 0,
                  borderColor: '#E8E8E8',
                  borderWidth: 1,
                  marginTop: hp('1.5%'),
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 10,
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Icon
                      style={{color: '#3FAD72', fontSize: 25}}
                      name="box"
                      type="Feather"
                    />
                    <Text style={{color: '#303030', paddingLeft: 10,fontFamily:'HKGrotesk-Regular'}}>
                      Home Products
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{color: 'grey', paddingRight: 20,fontFamily:'HKGrotesk-Regular'}}>6</Text>
                    <Icon
                      style={{color: 'grey', fontSize: 17}}
                      name="right"
                      type="AntDesign"
                    />
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  borderRadius: 10,
                  elevation: 0,
                  borderColor: '#E8E8E8',
                  borderWidth: 1,
                  marginTop: hp('1.5%'),
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 10,
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Icon
                      style={{color: '#3FAD72', fontSize: 25}}
                      name="shirt-outline"
                      type="Ionicons"
                    />
                    <Text style={{color: '#303030', paddingLeft: 10,fontFamily:'HKGrotesk-Regular'}}>
                      Clothing
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{color: 'grey', paddingRight: 20,fontFamily:'HKGrotesk-Regular'}}>19</Text>
                    <Icon
                      style={{color: 'grey', fontSize: 17}}
                      name="right"
                      type="AntDesign"
                    />
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  borderRadius: 10,
                  elevation: 0,
                  borderColor: '#E8E8E8',
                  borderWidth: 1,
                  marginTop: hp('1.5%'),
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 10,
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Icon
                      style={{color: '#3FAD72', fontSize: 25}}
                      name="flash"
                      type="Entypo"
                    />
                    <Text style={{color: '#303030'}}>Beauty Products</Text>
                  </View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{color: 'grey', paddingRight: 20,fontFamily:'HKGrotesk-Regular'}}>16</Text>
                    <Icon
                      style={{color: 'grey', fontSize: 17}}
                      name="right"
                      type="AntDesign"
                    />
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  borderRadius: 10,
                  elevation: 0,
                  borderColor: '#E8E8E8',
                  borderWidth: 1,
                  marginTop: hp('1.5%'),
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 10,
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Icon
                      style={{color: '#3FAD72', fontSize: 25}}
                      name="tablet-mobile-combo"
                      type="Entypo"
                    />
                    <Text style={{color: '#303030', paddingLeft: 10,fontFamily:'HKGrotesk-Regular'}}>
                      Electronic
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{color: 'grey', paddingRight: 20,fontFamily:'HKGrotesk-Regular'}}>16</Text>
                    <Icon
                      style={{color: 'grey', fontSize: 17}}
                      name="right"
                      type="AntDesign"
                    />
                  </View>
                </View>
              </TouchableOpacity>

              <View style={{marginTop: hp('2%'), alignItems: 'center'}}>
                <Button title="Apply" />
              </View>

              {/* ******** */}
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
  layout1: {
    height: hp('6.5%'),
    width: wp('16%'),
    backgroundColor: '#3FAD72',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  layout2: {
    height: hp('6.5%'),
    width: wp('16%'),
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#E8E8E8',
  },
  airpodbutton: {
    height: hp('5.5%'),
    width: wp('38%'),
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#E8E8E8',
  },
  colorbutton: {
    height: hp('5.5%'),
    width: wp('25%'),
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#E8E8E8',
  },
  rambutton: {
    height: hp('5.5%'),
    width: wp('25%'),
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#E8E8E8',
  },
  iphonebutton: {
    height: hp('5.5%'),
    width: wp('55%'),
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#E8E8E8',
  },
  hardbutton: {
    height: hp('5.5%'),
    width: wp('35%'),
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#E8E8E8',
  },
  color2button: {
    height: hp('5.5%'),
    backgroundColor: '#3FAD72',
    width: wp('43%'),
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#E8E8E8',
  },
  shippingbutton: {
    height: hp('5.5%'),
    width: wp('43%'),
    backgroundColor: '#3FAD72',
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#E8E8E8',
  },
});

export default Filter;
