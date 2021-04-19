import React from 'react'
import { View, Text, StyleSheet, ScrollView, Image, FlatList } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Icon,  } from 'native-base';


const ENTRIES1 = [
    {
      title: "Professional Modification of racing car Steering Wheel",
      subtitle: "Lorem ipsum dolor sit amet et nuncat mergitur",
      illustration: "https://media.istockphoto.com/photos/steering-wheel-picture-id507984911?k=6&m=507984911&s=612x612&w=0&h=Qcr0bGMqXYi2b1rBgjtD8l6eiPXchaSoXS-CjuyHG3E=",
    },
    {
      title: "Professional Modification of racing car Steering Wheel",
      subtitle: "Lorem ipsum dolor sit amet",
      illustration: "https://static.toiimg.com/photo/msid-74608450/74608450.jpg",
    },
    {
      title: "Professional Modification of racing car Steering Wheel",
      subtitle: "Lorem ipsum dolor sit amet et nuncat ",
      illustration: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXGLO11zpi1jopW17rsKtV3IHk0LbgFL7ieg&usqp=CAU",
    },

    {
        title: "Professional Modification of racing car Steering Wheel",
        subtitle: "Lorem ipsum dolor sit amet et nuncat ",
        illustration: "https://images.pexels.com/photos/3401900/pexels-photo-3401900.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      },
      {
        title: "Professional Modification of racing car Steering Wheel",
        subtitle: "Lorem ipsum dolor sit amet et nuncat ",
        illustration: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREAg1vM1IbIR9JDJ4cmqxknoi3NYNMRZCDbA&usqp=CAU",
      },
      {
        title: "Professional Modification of racing car Steering Wheel",
        subtitle: "Lorem ipsum dolor sit amet et nuncat ",
        illustration: "https://www.telemart.pk/uploads/product_image/product_116446_1.jpg",
      },
      {
        title: "Professional Modification of racing car Steering Wheel",
        subtitle: "Lorem ipsum dolor sit amet et nuncat ",
        illustration: "https://uswitch-mobiles-contentful.imgix.net/qhi9fkhtpbo3/675MCGCpbOmC4qeKSUCKmo/b9682fd651bcd82b59b3a4edfa266ce5/iPhone_X_and_Note_8_.jpg?w=770",
      },
      {
        title: "Professional Modification of racing car Steering Wheel",
        subtitle: "Lorem ipsum dolor sit amet et nuncat ",
        illustration: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwUACKXFVmtlvne5ZRuInI73-vh3JJqHW3MQ&usqp=CAU",
      },
      {
        title: "Professional Modification of racing car Steering Wheel",
        subtitle: "Lorem ipsum dolor sit amet et nuncat ",
        illustration: "https://images.pexels.com/photos/3401900/pexels-photo-3401900.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      },
      {
        title: "Professional Modification of racing car Steering Wheel",
        subtitle: "Lorem ipsum dolor sit amet et nuncat ",
        illustration: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREAg1vM1IbIR9JDJ4cmqxknoi3NYNMRZCDbA&usqp=CAU",
      },
      {
        title: "Professional Modification of racing car Steering Wheel",
        subtitle: "Lorem ipsum dolor sit amet et nuncat ",
        illustration: "https://www.telemart.pk/uploads/product_image/product_116446_1.jpg",
      },
      {
        title: "Professional Modification of racing car Steering Wheel",
        subtitle: "Lorem ipsum dolor sit amet et nuncat ",
        illustration: "https://uswitch-mobiles-contentful.imgix.net/qhi9fkhtpbo3/675MCGCpbOmC4qeKSUCKmo/b9682fd651bcd82b59b3a4edfa266ce5/iPhone_X_and_Note_8_.jpg?w=770",
      },
      {
        title: "Professional Modification of racing car Steering Wheel",
        subtitle: "Lorem ipsum dolor sit amet et nuncat ",
        illustration: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwUACKXFVmtlvne5ZRuInI73-vh3JJqHW3MQ&usqp=CAU",
      },
      {
        title: "Professional Modification of racing car Steering Wheel",
        subtitle: "Lorem ipsum dolor sit amet et nuncat ",
        illustration: "https://uswitch-mobiles-contentful.imgix.net/qhi9fkhtpbo3/675MCGCpbOmC4qeKSUCKmo/b9682fd651bcd82b59b3a4edfa266ce5/iPhone_X_and_Note_8_.jpg?w=770",
      },
      {
        title: "Professional Modification of racing car Steering Wheel",
        subtitle: "Lorem ipsum dolor sit amet et nuncat ",
        illustration: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwUACKXFVmtlvne5ZRuInI73-vh3JJqHW3MQ&usqp=CAU",
      },
     
  ];


 const CheckTab=()=> {
    return (
        <ScrollView>
            {/* Heroo banner section */}
            <View style={{marginVertical:hp('3%')}}>
                <View style={{marginHorizontal:wp('2.5%')}}>
                 <Image  style={styles.heroImage} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwUACKXFVmtlvne5ZRuInI73-vh3JJqHW3MQ&usqp=CAU"'}} />
                </View>

                <View>
                <FlatList 
                    data={ENTRIES1}
                    horizontal={false}
                    numColumns={3}
                    renderItem={({item, index})=>{
                        return(
                            <View>
                                <View style={styles.flatlistContainer}>
                                        <View style={styles.imageConatiner}>
                                            <Image style={styles.flatlistImage} resizeMode='stretch'  source={{uri: item.illustration}} />
                                            <View style={{flexDirection:'row'}}>
                                                <View style={styles.onSale}>
                                                    <Text style={{fontSize:11, color:"#fff",fontFamily:'HKGrotesk-Regular'}}>On Sale</Text>
                                                </View>
                                                <View style={{marginLeft:wp('8.5%'), marginTop:hp('1%')}}>
                                                    <Icon style={{fontSize:22}} name='heart'  />
                                                </View>
                                             </View>   
                                        </View>
                                    <View style={{marginLeft:wp('2.5%')}}>
                                        <View>
                                            <Text style={{fontFamily:'HKGrotesk-Bold', fontSize:11 }}>Product Name</Text>
                                        </View>

                                        <View style={{flexDirection:'row',
                                                      alignItems:'center',
                                                      marginVertical:hp('0.8%')}}>
                                            <View style={styles.flatlistbadge}>
                                                <Icon name='star' 
                                                    style={{color:'#fff',
                                                            fontSize:11,
                                                            marginHorizontal:wp('1%')}} 
                                                />
                                                <Text style={{color:'#fff', fontSize:11,fontFamily:'HKGrotesk-Regular'}}>5.0 </Text>
                                            </View>
                                            <View style={{marginLeft:wp('1.5%')}}>
                                                <Text style={{fontSize:11,fontFamily:'HKGrotesk-Regular'}}>(409)</Text>
                                            </View>
                                        </View>

                                        <View>
                                            <Text style={{fontSize:12, fontWeight:'900',fontFamily:'HKGrotesk-Regular'}}>$60.00 - $70.00</Text>
                                        </View>
                                    </View>    
                                </View>
                            </View>

                        )
                    }}
                    />

                </View>
            </View>

            {/* ***************** */}
            
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    heroImage:{
        height:hp('23%'),
        width:wp('95%'),
        borderRadius:10,
      },


      flatlistContainer:{
        height:hp('25%'),
        width:wp('29%'),
        borderWidth:1,
        borderRadius:10,
        borderColor:'lightgrey',
        marginHorizontal:wp('2%'),
        marginVertical:hp('1%')
    },
    imageConatiner:{
        width:wp('100%'),
        height:hp('14%'),
    },
    flatlistImage:{
        height:hp('14%'),
        width:wp('28.5%'),
        position:'absolute',
    },
    flatlistbadge:{
        flexDirection:'row',
        width:wp('11%'),
        height:hp('3%'),
        backgroundColor:'orange',
        borderRadius:7,
        alignItems:'center',
    },
    onSale:{
        height:hp('3.5%'),
        width:wp('13%'),
        backgroundColor:'#FF0303',
        justifyContent:'center',
        borderRadius:10,
        alignItems:'center',
        marginTop:hp('1%'),
        marginLeft:wp('1%')
    }

    


})

export default CheckTab;
