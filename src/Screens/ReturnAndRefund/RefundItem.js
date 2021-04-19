import { Card, Icon } from 'native-base';
import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Alert, Image, FlatList, ScrollView } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Modal from 'react-native-modal';

const data2= [
    {
      image:'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
     title: 'Product Title',
     Shipping: 'free shipping',
     Price:'$24.00',
    },
    {
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVoB3a_65P1uEA5W3EgOyAsCbsmkTmtmVF8Q&usqp=CAU',
     title: 'Product Title',
     Shipping: 'free shipping',
     Price:'$24.00',
    },
    {
      image:'https://cdn.britannica.com/s:300x169,c:crop/36/123536-004-1780EFF1/Variety-fruits-vegetables.jpg',
     title: 'Product Title',
     Shipping: 'free shipping',
     Price:'$24.00',
    },
    {
      image:'https://cdn.britannica.com/s:300x169,c:crop/36/123536-004-1780EFF1/Variety-fruits-vegetables.jpg',
     title: 'Product Title',
     Shipping: 'free shipping',
     Price:'$24.00',
    },
    {
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8yMIHkxs901EzRfpvMq6gIEfDADZcfbJxLw&usqp=CAU',
     title: 'Product Title',
     Shipping: 'free shipping',
     Price:'$24.00',
    },
    {
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo55BzgQWOmyScAZsMHdZePZ8Wdmtr8e6xPA&usqp=CAU',
     title: 'Product Title',
     Shipping: 'free shipping',
     Price:'$24.00',
    },
  ]

const RefundItem=() => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <ScrollView>

        <Modal
            animationType={"slide"}
            style={{width:wp('100%'), marginLeft:0}}
            transparent={true}
            animationInTiming={40}
            visible={modalVisible}
            onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
            }}
        
        >
            <View style={{marginTop:hp('15%')}}>
                <Card style={{padding: 10, borderRadius:15, height:hp('100%')}}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                    <TouchableOpacity style={styles.button3} onPress={() => setModalVisible(!modalVisible)}>
                        <Icon style={{color:'grey'}} name="close-o"  type="EvilIcons" />
                    </TouchableOpacity> 
                   <View style={{alignSelf:'center', marginBottom:hp('2%')}}>
                        <Text style={{fontFamily:'HKGrotesk-Bold', fontSize:18}}>Refund Item</Text>
                    </View>

                    <View style={{ flexDirection:'row',height:hp('7%'), borderRadius:10, borderColor:'lightgrey',borderWidth:1}}>
                        <View style={styles.checkparent}>
                            <View style={styles.check}>
                                <Icon style={{color:"#3FAD72", fontSize:20}}  name="check" type="AntDesign" />
                            </View>
                        </View>
                        <View style={{alignSelf:'center',}}>
                            <Text style={{marginLeft:wp('20%'), fontSize:16, color:'grey',fontFamily:'HKGrotesk-Regular'}}>
                                You Got a refund
                            </Text>
                        </View>
                    </View>

                    <View style={{alignItems:'center', marginVertical:hp('1%')}}>
                        <Text style={{color:'grey', paddingHorizontal:wp('5%'), fontSize:13,fontFamily:'HKGrotesk-Regular'}}>
                            You accepted a partial refund of $ 11.19 and you don't need to return this 
                            item to seller-yu can keep the item
                        </Text>
                    </View>

                    <Card style={{padding:15, borderRadius:10}}>
                        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                            <Text style={{fontSize:15, color:'grey',fontFamily:'HKGrotesk-Regular'}}>
                                Purchase Price
                            </Text>
                            <Text style={{fontSize:15, color:'grey',fontFamily:'HKGrotesk-Regular'}}>
                                $ 295.00
                            </Text>
                        </View>

                        <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:hp('1%')}}>
                            <Text style={{fontSize:15, color:'grey',fontFamily:'HKGrotesk-Regular'}}>Tax</Text>
                            <Text style={{fontSize:15, color:'grey',fontFamily:'HKGrotesk-Regular'}}>$ 10.05</Text>
                        </View>

                        <View style={{borderWidth:0.5, borderColor:'lightgrey', marginVertical:hp('1%')}}>
                        </View>

                        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                            <Text style={{fontSize:15, color:'grey', fontFamily:'HKGrotesk-Bold'}}>Total Refund</Text>
                            <Text style={{fontSize:15, color:'grey', fontFamily:'HKGrotesk-Bold'}}>$ 122.19</Text>
                        </View>

                        <View style={{flexDirection:'row', justifyContent:'space-between' , marginTop:hp('1%')}}>
                            <Text style={{fontSize:15, color:'grey',fontFamily:'HKGrotesk-Regular'}}>Refunded To</Text>
                            <Text style={{fontSize:15, color:'grey',fontFamily:'HKGrotesk-Regular'}}>Orignal Payment Method</Text>
                        </View>
                    </Card>
                        {/* 2nd card */}
                    <Card style={{padding:15, borderRadius:10}}>
                        <View style={{flexDirection:'row'}}>
                            <View>
                                <Image style={styles.Image} source={{}}  />
                            </View>
                            <View style={{paddingLeft:10}}>
                                <Text style={{fontFamily:'HKGrotesk-Bold', fontSize:15}}>Product Name</Text>
                                <Text  style={{fontSize:13,fontFamily:'HKGrotesk-Regular'}}>Description</Text>
                                <View style={{flexDirection:'row', marginVertical:hp('0.9%')}}>
                                    <Icon style={{fontSize:24}}  name="location" type="EvilIcons" />
                                    <Text style={{fontSize:13,fontFamily:'HKGrotesk-Regular'}}>114 Village Post Road </Text>
                                 </View>

                                 <Text style={{fontFamily:'HKGrotesk-Bold', fontSize:15}}>$250</Text>
                            </View>

                        </View>

                    </Card>

                    {/* FlatList */}
                    <View style={{flexDirection:'row',
                           justifyContent:"space-between",
                           
                           marginTop:hp('2%')}}>
              <View>
                <Text style={{fontSize:15, color:'#5E5E5E',fontFamily:'HKGrotesk-Regular'}}>Related Sponsored Items</Text>
              </View>
              <View style={{flexDirection:'row', alignItems:'center'}}>
                <Text style={{color:'#3FAD72',fontFamily:'HKGrotesk-Regular'}}>View All</Text>
                <Icon style={{color:'#3FAD72',fontSize:15, paddingLeft:4, marginRight:2,fontFamily:'HKGrotesk-Regular'}} name="right" type="AntDesign" />
              </View>
            </View>


            <View style={{alignItems:'center',}}>
              <FlatList 
              data={data2}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              renderItem={({item, index}) =>{
                return (
                  <View>
                   <View style={{marginHorizontal:wp('1.5%'),marginVertical:hp('1%')}}> 
                      <View style={{height:hp('18%'), width:wp('31%'),}}>
                       <Image source={{uri: item.image}} style={styles.flatimages4} />
                       <View style={styles.flat4discount}><Text>15%</Text></View>
                      </View>
                     <View><Text style={{fontFamily:'HKGrotesk-Bold'}}>{item.title}</Text></View>
                     <View style={{flexDirection:'row'}}>
                       <Text style={{color:'grey', fontFamily:'HKGrotesk-Bold'}}>{item.Price}</Text>
                       <Icon style={{fontSize:18 , paddingLeft:3, color:'#3FAD72'}} name='truck-fast-outline' type="MaterialCommunityIcons" />
                     </View>

                   </View>
                                                    
                  </View>                  
                )
              }}                                       
              />
            </View>



                    {/* ************* */}
                </ScrollView>
            
                </Card>
            </View>   
        
        
      </Modal> 
            



            <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
                <Text style={{color:'#fff'}}>Click me</Text>
                <Text>GHwpo</Text>
             </TouchableOpacity>
        </ScrollView>
    )
}

const styles =StyleSheet.create({
    button:{
        height:40,
        width:100,
        alignSelf:'center',
        marginTop:200,
        backgroundColor:'#000',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
    },
    button3:{
        alignSelf:'flex-end'


    },

    check:{
        height:hp('4%'),
        width:wp('8%'), 
        backgroundColor:"#fff",
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20,
        // alignSelf:'flex-end'
    },
    checkparent:{
        width:wp('30%'),
        backgroundColor:'#3FAD72',
        height:hp('7%'),
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'
    },
    Image:{
        height:hp('11%'),
        width:wp('25%')
    },
    flatimages4:{
        marginTop:1,
        height:hp('18%'),
        width:wp('31%'),
        borderRadius:10,
        position:'absolute'
      },
      flat4discount:{
        height:hp('3%'),
        width:wp('10%'),
        backgroundColor:'orange',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        marginTop:'7%',
        marginRight:'7%',
        alignSelf:'flex-end'
      },


    
})

export default RefundItem;
