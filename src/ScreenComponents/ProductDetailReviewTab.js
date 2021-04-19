import {Container, Content, Icon} from 'native-base';
import React, {useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Reviews = [
  {
    name: 'Dennis Watkins',
    joindate: 'Joined 2020',
    message:
      'Lorem ipsum, or lipsum as it is sometimes known, is dummy text usein laying out print, graphic or web designs.',
    illustration:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    name: 'Dennis Watkins',
    joindate: 'Joined 2020',
    message:
      'Lorem ipsum, or lipsum as it is sometimes known, is dummy text usein laying out print, graphic or web designs.',
    illustration:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    name: 'Dennis Watkins',
    joindate: 'Joined 2020',
    message:
      'Lorem ipsum, or lipsum as it is sometimes known, is dummy text usein laying out print, graphic or web designs.',
    illustration:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    name: 'Dennis Watkins',
    joindate: 'Joined 2020',
    message:
      'Lorem Hell, or lipsum as it is sometimes known, is dummy text usein laying out print, graphic or web designs.',
    illustration:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    name: 'Dennis Watkins',
    joindate: 'Joined 2020',
    message:
      'Lorem ipsum, or lipsum as it is sometimes known, is dummy text usein laying out print, graphic or web designs.',
    illustration:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    name: 'Dennis Watkins',
    joindate: 'Joined 2020',
    message:
      'Lorem ipsum, or lipsum as it is sometimes known, is dummy text usein laying out print, graphic or web designs.',
    illustration:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
];

const ProductDetailReviewTab = (props) => {
  const refContainer = useRef(null);

  return (
    <View style={{marginVertical: hp('2%')}}>
      <View>
        <Text style={{fontWeight: 'bold', fontSize: 16}}>Customer Reviews</Text>
      </View>
      <View style={{height: 300}}>
        <FlatList
          onTouchStart={() => props.touch}
          onScrollEndDrag={props.start}
          ref={props.reference}
          data={Reviews}
          renderItem={({item, index}) => {
            return (
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: hp('2%'),
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <View style={{marginRight: wp('2%')}}>
                      <Image
                        style={styles.flatlistImage}
                        source={{uri: item.illustration}}
                      />
                    </View>
                    <View>
                      <View>
                        <Text style={{fontWeight: 'bold'}}>{item.name}</Text>
                      </View>
                      <View>
                        <Text>{item.joindate}</Text>
                      </View>
                    </View>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Icon
                      name="star"
                      style={{fontSize: 17, color: '#3FAD72'}}
                    />
                    <Icon
                      name="star"
                      style={{fontSize: 17, color: '#3FAD72'}}
                    />
                    <Icon
                      name="star"
                      style={{fontSize: 17, color: '#3FAD72'}}
                    />
                    <Icon
                      name="star"
                      style={{fontSize: 17, color: '#3FAD72'}}
                    />
                    <Icon
                      name="star"
                      style={{fontSize: 17, color: 'lightgrey'}}
                    />
                    <Text style={{color: 'lightgrey'}}> 4.0</Text>
                  </View>
                </View>

                <View style={{marginTop: hp('1%')}}>
                  <Text>{item.message}</Text>
                </View>

                <View style={{marginVertical: hp('1.5%')}}>
                  <Text style={{color: '#3FAD72'}}>5 days ago </Text>
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                  <TouchableOpacity style={styles.flatbutton}>
                    <View>
                      <Text>Helpful</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.flatbutton2}>
                    <View>
                      <Text>Helpful</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flatlistImage: {
    height: hp('6%'),
    width: wp('12%'),
    borderRadius: 23,
  },

  flatbutton: {
    width: wp('46%'),
    height: hp('4%'),
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderRadius: 8,
    marginRight: wp('2%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'lightgrey',
  },
  flatbutton2: {
    width: wp('46%'),
    height: hp('4%'),
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'lightgrey',
  },
});

export default ProductDetailReviewTab;
