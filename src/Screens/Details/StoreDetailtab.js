import { Icon } from 'native-base';
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const StoreDetailtab=()=> {
    return (
        <View>
            <View style={{marginTop:hp('2%'), marginHorizontal:wp('3%'),}}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Icon style={{color:'#3FAD72'}} name='information-outline'  type="MaterialCommunityIcons" />
                    <Text style={{fontFamily:'HKGrotesk-Bold', paddingLeft:7}}>About Store</Text>
                </View>
                <View>
                    <Text style={{color:'grey', lineHeight:20, width:wp('92%'),fontFamily:'HKGrotesk-Regular'}}>
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                         an unknown took a galley of type and scrambled it to make a type spec
                    </Text>
                </View>

                <View style={{flexDirection:'row',marginTop:hp('4%'), alignItems:'center'}}>
                    <Icon style={{color:'#3FAD72'}} name='book-outline'  type='Ionicons' />
                    <Text style={{fontFamily:'HKGrotesk-Bold', paddingLeft:7}}>Our Vision</Text>
                </View>
                <View>
                    <Text style={{color:'grey',lineHeight:20, width:wp('92%'),fontFamily:'HKGrotesk-Regular'}}>
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                         an unknown took a galley of type and scrambled it to make a type spec
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default StoreDetailtab;
