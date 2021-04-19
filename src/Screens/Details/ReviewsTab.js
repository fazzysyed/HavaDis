import { Icon } from 'native-base';
import React, {useState} from 'react'
import { View, Text, StyleSheet, Image, FlatList } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ProgressBarAnimated from 'react-native-progress-bar-animated';



const ENTRIES1 = [
    {
      title: "Professional Modification of racing car Steering Wheel",
      subtitle: "Lorem ipsum dolor sit amet et nuncat mergitur",
      illustration: "https://media.istockphoto.com/photos/steering-wheel-picture-id507984911?k=6&m=507984911&s=612x612&w=0&h=Qcr0bGMqXYi2b1rBgjtD8l6eiPXchaSoXS-CjuyHG3E=",
    },
    {
      title: "Professional Modification of racing car Steering Wheel",
      subtitle: "Lorem ipsum dolor sit amet",
      illustration: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQoPg93EpMK7o6-E708DDMOZhkWFFN3c7l5g&usqp=CAU",
    },
    {
      title: "Professional Modification of racing car Steering Wheel",
      subtitle: "Lorem ipsum dolor sit amet et nuncat ",
      illustration: "https://images.pexels.com/photos/3401900/pexels-photo-3401900.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },

    {
        title: "Professional Modification of racing car Steering Wheel",
        subtitle: "Lorem ipsum dolor sit amet et nuncat ",
        illustration: "https://images.pexels.com/photos/3401900/pexels-photo-3401900.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      },
     
  ];

const ReviewsTab=()=> {
    const [items, setItems] = useState([ 
        {label: 'USA', value: 'usa',},
                            {label: 'UK', value: 'uk',},
                            {label: 'France', value: 'france',}
    ]);
    return (
        <View style={{marginTop:hp('2%')}}>
                <View style={{borderBottomWidth:1, borderBottomColor:'lightgrey'}}>        
                    <View style={{marginHorizontal:('2.5%'), marginBottom:hp('2%')}}>
                        <View><Text style={{fontSize:15, fontFamily:'HKGrotesk-Bold'}}>Rating &</Text></View>
                        <View style={{marginTop:hp('1%'), flexDirection:'row'}}>
                            <View>
                                <Text style={{fontFamily:'HKGrotesk-Bold', fontSize:30}}>4.90</Text>
                            </View>
                            <View style={{paddingLeft:10}}>
                                <View style={{flexDirection:'row'}}>
                                    <Icon style={{fontSize:22, color:'#3FAD72' }} name='star' />
                                    <Icon style={{fontSize:22, color:'#3FAD72', paddingLeft:2 }} name='star' />
                                    <Icon style={{fontSize:22, color:'#3FAD72', paddingLeft:2 }} name='star' />
                                    <Icon style={{fontSize:22, color:'#3FAD72', paddingLeft:2 }} name='star' />
                                    <Icon style={{fontSize:22, color:'#3FAD72', paddingLeft:2 }} name='star' />
                                </View>
                                <Text style={{color:"grey",fontFamily:'HKGrotesk-Regular'}}>126 Product Rating</Text>
                                
                            </View>
                        </View>
                    </View>
                </View>
                {/* ****************** */}

                <View style={{ borderBottomWidth:1, borderBottomColor:'lightgrey'}}>

                    <View style={{flexDirection:'row', justifyContent:'space-between',marginHorizontal:wp('2.5%'), marginTop:hp('2%')}}>
                    <View style={{width:wp('35%')}}>
                            <Text style={{color:'grey',fontFamily:'HKGrotesk-Regular' }}>would recommend</Text>
                        </View>
                        <View style={{alignSelf:'center'}}>
                        <ProgressBarAnimated
                            width={wp('40%')}
                            height={hp('1.8%')}
                             value={100}
                             backgroundColor="#3FAD72"
                            backgroundColorOnComplete="#3FAD72"
                        />

                        </View>
                        <Text style={{width:wp('10%'),fontFamily:'HKGrotesk-Regular'}}>100%</Text>
                    </View>
                    {/* 2nd progress bar */}

                    <View style={{flexDirection:'row', justifyContent:'space-between',marginHorizontal:wp('2.5%'), marginTop:hp('2%')}}>
                        
                        <View style={{width:wp('35%')}}>
                            <Text style={{color:'grey', fontFamily:'HKGrotesk-Regular'}}>good value</Text>
                        </View>
                        <View style={{alignSelf:'center'}}>
                        <ProgressBarAnimated
                            width={wp('40%')}
                            height={hp('1.8%')}
                            backgroundColor="#3FAD72"
                            value={96}
                            backgroundColorOnComplete="#3FAD72"
                        />

                        </View>
                        <Text style={{width:wp('10%')}}>96%</Text>
                    </View>
                    {/* 3rd progresss */}

                    <View style={{flexDirection:'row',marginBottom:hp('2%'), justifyContent:'space-between',marginHorizontal:wp('2.5%'), marginTop:hp('2%')}}>
                    <View style={{width:wp('35%')}}>
                            <Text style={{color:'grey',fontFamily:'HKGrotesk-Regular' }}>good quality</Text>
                        </View>
                        <View style={{alignSelf:'center'}}>
                        <ProgressBarAnimated
                            width={wp('40%')}
                            height={hp('1.8%')}
                             value={80}
                             backgroundColor="#3FAD72"
                            backgroundColorOnComplete="#6CC644"
                        />

                        </View>
                        <Text style={{width:wp('10%'),fontFamily:'HKGrotesk-Regular'}}>80%</Text>
                    </View>

                </View>

                {/* ********** */}
                <View style={{ borderBottomWidth:1, borderBottomColor:'lightgrey'}}>
                    <View style={{marginHorizontal:wp('2.5%')}}>    
                        <View style={{marginTop:hp('2%')}}>
                            <Text style={{fontFamily:'HKGrotesk-Bold', fontSize:15}}>Detailed Seller Ratings</Text>
                        </View>

                        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center',marginTop:hp('2%')}}>
                            <View style={{width:wp('35%')}}>
                                <Text style={{color:'grey',fontFamily:'HKGrotesk-Regular'}}>item as described</Text>
                            </View>
                            <View style={{width:wp('40%'), flexDirection:'row'}}>
                                <Icon style={{fontSize:20}} name='star' />
                                <Icon style={{fontSize:20}} name='star' />
                                <Icon style={{fontSize:20}} name='star' />
                                <Icon style={{fontSize:20}} name='star' />
                                <Icon style={{fontSize:20}} name='star' />
                            </View>
                            <View style={{width:wp('12%')}}>
                                <Text style={{color:'grey',fontFamily:'HKGrotesk-Regular'}}>(306)</Text>
                            </View>
                        </View>
                    </View>
                    {/* 2nd row */}
                    <View style={{marginHorizontal:wp('2.5%')}}>    

                        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center',marginTop:hp('2%')}}>
                            <View style={{width:wp('35%')}}>
                                <Text style={{color:'grey',fontFamily:'HKGrotesk-Regular'}}>communication</Text>
                            </View>
                            <View style={{width:wp('40%'), flexDirection:'row'}}>
                                <Icon style={{fontSize:20}} name='star' />
                                <Icon style={{fontSize:20}} name='star' />
                                <Icon style={{fontSize:20}} name='star' />
                                <Icon style={{fontSize:20}} name='star' />
                                <Icon style={{fontSize:20}} name='star' />
                            </View>
                            <View style={{width:wp('12%')}}>
                                <Text style={{color:'grey'}}>(303)</Text>
                            </View>
                        </View>
                    </View>
                    {/* 3rd Row */}
                    <View style={{marginHorizontal:wp('2.5%')}}>    

                        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center',marginTop:hp('2%')}}>
                            <View style={{width:wp('35%')}}>
                                <Text style={{color:'grey',fontFamily:'HKGrotesk-Regular'}}>shipping time</Text>
                            </View>
                            <View style={{width:wp('40%'), flexDirection:'row'}}>
                                <Icon style={{fontSize:20}} name='star' />
                                <Icon style={{fontSize:20}} name='star' />
                                <Icon style={{fontSize:20}} name='star' />
                                <Icon style={{fontSize:20}} name='star' />
                                <Icon style={{fontSize:20}} name='star' />
                            </View>
                            <View style={{width:wp('12%')}}>
                                <Text style={{color:'grey',fontFamily:'HKGrotesk-Regular'}}>(318)</Text>
                            </View>
                        </View>
                    </View>
                    {/* 4th Row */}
                    <View style={{marginHorizontal:wp('2.5%'), marginBottom:hp('2%')}}>    

                        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center',marginTop:hp('2%')}}>
                            <View style={{width:wp('35%')}}>
                                <Text style={{color:'grey',fontFamily:'HKGrotesk-Regular'}}>shipping charges</Text>
                            </View>
                            <View style={{width:wp('40%'), flexDirection:'row'}}>
                                <Icon style={{fontSize:20}} name='star' />
                                <Icon style={{fontSize:20}} name='star' />
                                <Icon style={{fontSize:20}} name='star' />
                                <Icon style={{fontSize:20}} name='star' />
                                <Icon style={{fontSize:20}} name='star' />
                            </View>
                            <View style={{width:wp('12%')}}>
                                <Text style={{color:'grey',fontFamily:'HKGrotesk-Regular'}}>(326)</Text>
                            </View>
                        </View>
                    </View>


                </View>
                {/* ********** End of Detailed seller rating portion */}
                <View>
                        <View style={{flexDirection:'row',
                                justifyContent:"space-between",
                                marginHorizontal:wp("2.5%"),
                                marginVertical:hp('2%')}}>
                            <View><Text style={{fontFamily:'HKGrotesk-Semibold', fontSize:15}}>Recent Feedbact Ratings</Text></View>
                            <View><Text style={{color:'#3FAD72',fontFamily:'HKGrotesk-Semibold'}}>View All</Text></View>
                        </View>

                        <View>
                            <View style={{flexDirection:'row', marginHorizontal:wp("2.5%")}}>
                                <View style={{width:wp('40%')}}></View>
                                <View style={{flexDirection:'row', width:wp('40%'), justifyContent:'space-between'}}>
                                    <Text style={{fontFamily:'HKGrotesk-Regular'}}>1 mo.</Text>
                                    <Text style={{fontFamily:'HKGrotesk-Regular'}}>6 mo.</Text>
                                    <Text style={{fontFamily:'HKGrotesk-Regular'}}>12 mo.</Text>
                                </View>
                            </View>
                        </View>
                        {/* 2nd Row */}
                        <View>
                            <View style={{flexDirection:'row', marginHorizontal:wp("2.5%"), marginTop:hp('2%')}}>
                                <View style={{width:wp('40%'), flexDirection:'row'}}>
                                    <View style={styles.positive}>
                                        <Icon style={{fontSize:18, color:'#FFF'}} name="plus" type="AntDesign" />
                                    </View>
                                    <Text style={{paddingLeft:7,fontFamily:'HKGrotesk-Regular'}}>positive</Text>
                                </View>
                                <View style={{flexDirection:'row', width:wp('40%'), justifyContent:'space-between'}}>
                                    <Text style={{color:'#3FAD72',fontFamily:'HKGrotesk-Regular'}}>51</Text>
                                    <Text style={{color:'#3FAD72',fontFamily:'HKGrotesk-Regular'}}>303</Text>
                                    <Text style={{color:'#3FAD72',fontFamily:'HKGrotesk-Regular'}}>121</Text>
                                </View>
                            </View>
                        </View>
                        {/* 3rd Row */}

                        <View>
                            <View style={{flexDirection:'row', marginHorizontal:wp("2.5%"), marginTop:hp('2%')}}>
                                <View style={{width:wp('40%'), flexDirection:'row'}}>
                                    <View style={styles.neutral}>
                                        <Icon style={{fontSize:10, color:'#FFF'}} name="solid" type="MaterialCommunityIcons" />
                                    </View>
                                    <Text style={{paddingLeft:7}}>neutral</Text>
                                </View>
                                <View style={{flexDirection:'row', width:wp('40%'), justifyContent:'space-between'}}>
                                    <Text style={{color:'#6C6C6C',fontFamily:'HKGrotesk-Regular'}}>12</Text>
                                    <Text style={{color:'#6C6C6C',fontFamily:'HKGrotesk-Regular'}}>21</Text>
                                    <Text style={{color:'#6C6C6C',fontFamily:'HKGrotesk-Regular'}}>121</Text>
                                </View>
                            </View>
                        </View>
                        {/* 4th Row */}
                        <View>
                            <View style={{flexDirection:'row', marginHorizontal:wp("2.5%"), marginTop:hp('2%')}}>
                                <View style={{width:wp('40%'), flexDirection:'row'}}>
                                    <View style={styles.negative}>
                                        <Icon style={{fontSize:18, color:'#FFF'}} name="minus" type="AntDesign" />
                                    </View>
                                    <Text style={{paddingLeft:7,fontFamily:'HKGrotesk-Regular'}}>positive</Text>
                                </View>
                                <View style={{flexDirection:'row', width:wp('40%'), justifyContent:'space-between'}}>
                                    <Text style={{color:'#EA4673',fontFamily:'HKGrotesk-Regular'}}>1</Text>
                                    <Text style={{color:'#EA4673',fontFamily:'HKGrotesk-Regular'}}>3</Text>
                                    <Text style={{color:'#EA4673',fontFamily:'HKGrotesk-Regular'}}>12</Text>
                                </View>
                            </View>
                        </View>

                       



                </View>
                {/* End of Recent Feedback Portion */}

                <View>
                    <View style={{flexDirection:'row',
                            justifyContent:"space-between",
                            marginHorizontal:wp("2.5%"),
                            marginVertical:hp('2%')}}>
                        <View><Text style={{fontFamily:'HKGrotesk-Semibold' , fontSize:15}}>Related Items</Text></View>
                    </View>


                     {/* Bottom Flatlist */}
                     <FlatList 
                            data={ENTRIES1}
                            horizontal={true}
                            renderItem={({item, index})=>{
                                return(
                                    <View>
                                        <View style={styles.flatlistContainer}>
                                                <View style={styles.imageConatiner}>
                                                    <Image style={styles.flatlistImage}  source={{uri: item.illustration}} />
                                                    <View style={{flexDirection:'row'}}>
                                                        <View style={styles.onSale}>
                                                            <Text style={{fontSize:11,fontFamily:'HKGrotesk-Regular', color:"#fff"}}>On Sale</Text>
                                                        </View>
                                                        <View style={{marginLeft:wp('18%'), marginTop:hp('1%')}}>
                                                            <Icon name='heart'  />
                                                        </View>
                                                    </View>   
                                                </View>
                                            <View style={{marginLeft:wp('2.5%')}}>
                                                <View>
                                                    <Text style={{fontFamily:'HKGrotesk-Bold', }}>Product Name</Text>
                                                </View>

                                                <View style={{flexDirection:'row',
                                                            alignItems:'center',
                                                            marginVertical:hp('0.8%')}}>
                                                    <View style={styles.flatlistbadge}>
                                                        <Icon name='star' 
                                                            style={{color:'#fff',
                                                                    fontSize:15,
                                                                    marginHorizontal:wp('1%')}} 
                                                        />
                                                        <Text style={{color:'#fff',fontFamily:'HKGrotesk-Regular'}}>5.0 </Text>
                                                    </View>
                                                    <View style={{marginLeft:wp('1.5%')}}>
                                                        <Text style={{fontFamily:'HKGrotesk-Regular'}}>(409)</Text>
                                                    </View>
                                                </View>

                                                <View>
                                                    <Text style={{fontFamily:'HKGrotesk-Regular'}}>$60.00 - $70.00</Text>
                                                </View>
                                            </View>    
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

    positive:{
        height:hp('3%'),
        width: wp('6%'),
        backgroundColor:'#3FAD72',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'
    },
    neutral:{
        height:hp('3%'),
        width: wp('6%'),
        backgroundColor:'#6C6C6C',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'

    },

    negative:{
        height:hp('3%'),
        width: wp('6%'),
        backgroundColor:'#EA4673',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'

    },
    flatlistContainer:{
        height:hp('35%'),
        width:wp('46%'),
        borderWidth:1,
        borderRadius:10,
        borderColor:'lightgrey',
        marginHorizontal:wp('2%'),
        marginVertical:hp('1%')
    },
    imageConatiner:{
        width:wp('100%'),
        height:hp('23%'),
    },
    flatlistImage:{
        height:hp('22%'),
        width:wp('45.5%'),
        position:'absolute',
    },
    onSale:{
        height:hp('3.5%'),
        width:wp('14%'),
        backgroundColor:'#FF0303',
        justifyContent:'center',
        borderRadius:10,
        alignItems:'center',
        marginTop:hp('1%'),
        marginLeft:wp('1%')
    },
    flatlistbadge:{
        flexDirection:'row',
        width:wp('14%'),
        height:hp('3.5%'),
        backgroundColor:'orange',
        borderRadius:7,
        alignItems:'center',
    },



})

export default ReviewsTab;
