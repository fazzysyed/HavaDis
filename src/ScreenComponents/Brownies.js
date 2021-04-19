import React from 'react'
import { View, Text, Image, FlatList, StyleSheet,  ScrollView} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


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

const Brownies=()=> {
    return (
        <View >
             <View style={{alignItems:'center', marginHorizontal:wp('2%')}}>
              <FlatList 
              data={data2}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              renderItem={({item, index}) =>{
                return (
                  <View>
                   <View style={{marginHorizontal:wp('1.5%'),marginVertical:hp('1%')}}> 
                      <View>
                       <Image source={{uri: item.image}}  style={styles.flatimages4} />
                      </View>
                     <View><Text style={{fontWeight:'bold'}}>{item.title}</Text></View>
                     <View><Text style={{color:'grey', fontWeight:'bold'}}>{item.Price}</Text></View>
                   </View>
                                                    
                  </View>                  
                )
              }}                                       
              />
            </View>
        </View>
    )
}

const styles= StyleSheet.create({

    flatimages4:{
        marginTop:1,
        height:hp('18%'),
        width:wp('31%'),
        borderRadius:10
      }

})


export default  Brownies;
