import {Icon} from 'native-base';
import React from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const ProductDetailAboutTab = () => {
  return (
    <View>
      <View style={{marginTop: hp('2.5%')}}>
        <View>
          <Text style={{fontWeight: 'bold', fontSize: 15}}>Description</Text>
        </View>
        <View>
          <Text style={{color: '#9BA5AE'}}>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs. The passage is
            attributed to an unknown typesetter in the 15th century who is
            thought to have scrambled parts of Cicero's De Finibus Bonorum et
            Malorum for use in a type specimen book.
          </Text>
        </View>

        <View style={{marginTop: hp('2%')}}>
          <Text style={{fontWeight: 'bold', fontSize: 15}}>Shipping</Text>
        </View>
        <View>
          <Text style={{color: '#9BA5AE'}}>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or
          </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({});
export default ProductDetailAboutTab;
