import React, {useState} from 'react'
import { Card, Icon } from 'native-base';
import {View, Text, TouchableOpacity, StyleSheet, TextInput, Alert, Image, FlatList, ScrollView } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Modal from 'react-native-modal';
import Button from '../components/Button'

const TagsData= [
    {
        Tag:"Blck"
    },
    {
        Tag:"Bluetooth"
    },
    {
        Tag:"Case"
    },
    {
        Tag:"Ca"
    },
    {
        Tag:"Ca"
    },
]

const AttributesData= [
    {
        Tag:"Alien"
    },
    {
        Tag:"Avcoado"
    },
    {
        Tag:"Color"
    },
    {
        Tag:"screen"
    },
    {
        Tag:"version"
    },
]
const SearchTag=({visible, handler})=> {
    

    return(
        <View>
            <Modal
                animationType={"slide"}
                transparent={true}
                // backdropColor={'black'}
                // backdropOpacity={1}
                style={{width:wp('100%'), marginLeft:0, justifyContent:'flex-end', marginBottom:0}}               
                visible={visible}            
            >
            <View>
                <Card style={{padding: 10, borderRadius:15}}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>                        
                        <View style={{alignSelf:'center'}}>
                            <Text style={{fontFamily:'HKGrotesk-Bold', fontSize:18}}>Search</Text>
                        </View>
                        <TouchableOpacity onPress={handler}>
                            <Icon style={{color:'#3FAD72', fontSize:23}} name="closecircle"  type="AntDesign" />
                        </TouchableOpacity> 
                    </View>

                        <Card style={styles.Input}>
                            <TextInput  
                            style={{height:hp('5%'), paddingLeft:10}}
                            placeholder="Search for items"
                            />
                        </Card>
                    
                        <View>
                            <Text style={{fontFamily:'HKGrotesk-Bold'}}>
                                Histroy
                            </Text>
                        </View>

                        <TouchableOpacity style={{borderRadius:10, elevation:0, borderColor:'#E8E8E8', borderWidth:1, marginTop:hp('1.5%')}}>
                        <View style={{flexDirection:'row', justifyContent:'space-between', padding:10}}>
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <Icon style={{color:'#3FAD72', fontSize:18}} name="clockcircleo" type="AntDesign" />
                                <Text style={{color:'#303030', paddingLeft:10,fontFamily:'HKGrotesk-Regular'}}>Phone Case</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{borderRadius:10, elevation:0, borderColor:'#E8E8E8', borderWidth:1, marginTop:hp('0.5%')}}>
                        <View style={{flexDirection:'row', justifyContent:'space-between', padding:10}}>
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <Icon style={{color:'#3FAD72', fontSize:18}} name="clockcircleo" type="AntDesign" />
                                <Text style={{color:'#303030', paddingLeft:10,fontFamily:'HKGrotesk-Regular'}}>Note20 Ultra</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <View>
                        <Text style={{fontFamily:'HKGrotesk-Bold'}}>
                            Tags
                        </Text>
                    </View>
                    <View style={{marginVertical:hp('1%')}}>
                        <FlatList
                        data={TagsData}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({item, index}) =>{
                            return(                           
                                <View>
                                <TouchableOpacity style={styles.bluetoothbutton}>
                                    <Text style={{color:'#FFF',fontFamily:'HKGrotesk-Regular'}}>#{item.Tag}</Text>
                                </TouchableOpacity>
                            </View>
                            )
                        }}
                        
                        />
                    </View>

                        <View>
                            <Text style={{fontFamily:'HKGrotesk-Bold'}}>
                                Categories
                            </Text>
                        </View>

                        <TouchableOpacity style={{borderRadius:10, elevation:0, borderColor:'#E8E8E8', borderWidth:1, marginTop:hp('1.5%')}}>
                        <View style={{flexDirection:'row', justifyContent:'space-between', padding:10}}>
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <Icon style={{color:'#3FAD72', fontSize:25}} name="flash" type="Entypo" />
                                <Text style={{color:'#303030',fontFamily:'HKGrotesk-Regular'}}>All Accessories</Text>
                            </View>
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <Text style={{color:'grey', paddingRight:20,fontFamily:'HKGrotesk-Regular'}}>132</Text>
                                <Icon style={{color:'grey', fontSize:17}} name="right" type="AntDesign" />
                            </View>

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{borderRadius:10, elevation:0, borderColor:'#E8E8E8', borderWidth:1, marginTop:hp('0.4%')}}>
                        <View style={{flexDirection:'row', justifyContent:'space-between', padding:10}}>
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <Icon style={{color:'#3FAD72', fontSize:25}} name="box" type="Feather" />
                                <Text style={{color:'#303030', paddingLeft:10,fontFamily:'HKGrotesk-Regular'}}>Home Products</Text>
                            </View>
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <Text style={{color:'grey', paddingRight:20,fontFamily:'HKGrotesk-Regular'}}>6</Text>
                                <Icon style={{color:'grey', fontSize:17}} name="right" type="AntDesign" />
                            </View>

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{borderRadius:10, elevation:0, borderColor:'#E8E8E8', borderWidth:1, marginTop:hp('0.4%')}}>
                        <View style={{flexDirection:'row', justifyContent:'space-between', padding:10}}>
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <Icon style={{color:'#3FAD72', fontSize:25}} name="shirt-outline" type='Ionicons' />
                                <Text style={{color:'#303030', paddingLeft:10,fontFamily:'HKGrotesk-Regular'}}>Clothing</Text>
                            </View>
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <Text style={{color:'grey', paddingRight:20,fontFamily:'HKGrotesk-Regular'}}>19</Text>
                                <Icon style={{color:'grey', fontSize:17}} name="right" type="AntDesign" />
                            </View>

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{borderRadius:10, elevation:0, borderColor:'#E8E8E8', borderWidth:1, marginTop:hp('0.4%')}}>
                        <View style={{flexDirection:'row', justifyContent:'space-between', padding:10}}>
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <Icon style={{color:'#3FAD72', fontSize:25}} name="flash" type="Entypo" />
                                <Text style={{color:'#303030',fontFamily:'HKGrotesk-Regular'}}>Beauty Products</Text>
                            </View>
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <Text style={{color:'grey', paddingRight:20,fontFamily:'HKGrotesk-Regular'}}>16</Text>
                                <Icon style={{color:'grey', fontSize:17}} name="right" type="AntDesign" />
                            </View>

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{borderRadius:10, elevation:0, borderColor:'#E8E8E8', borderWidth:1, marginTop:hp('0.4%')}}>
                        <View style={{flexDirection:'row', justifyContent:'space-between', padding:10}}>
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <Icon style={{color:'#3FAD72', fontSize:25}} name="tablet-mobile-combo" type="Entypo" />
                                <Text style={{color:'#303030', paddingLeft:10,fontFamily:'HKGrotesk-Regular'}}>Electronic</Text>
                            </View>
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <Text style={{color:'grey', paddingRight:20,fontFamily:'HKGrotesk-Regular'}}>16</Text>
                                <Icon style={{color:'grey', fontSize:17}} name="right" type="AntDesign" />
                            </View>

                        </View>
                    </TouchableOpacity>

                    <View style={{marginTop:hp('1%')}}>
                        <Text style={{fontFamily:'HKGrotesk-Bold'}}>
                            Attributes
                        </Text>
                    </View>
                    <View style={{marginTop:hp('1%')}}>
                        <FlatList
                        data={AttributesData}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({item, index}) =>{
                            return(                           
                                <View>
                                <TouchableOpacity style={styles.bluetoothbutton}>
                                    <Text style={{color:'#FFF',fontFamily:'HKGrotesk-Regular'}}>{item.Tag}</Text>
                                </TouchableOpacity>
                            </View>
                            )
                        }}
                        
                        />
                    </View>

                    <View style={{alignSelf:'center', marginTop:hp('3%'), marginBottom:hp('1%')}}>
                        <Button title="Submit Request" />
                    </View>
                    {/* ************* */}
                </ScrollView>
            
                </Card>
            </View>   
      </Modal> 
        </View>
    )
}

const styles = StyleSheet.create({
    Input:{
        marginTop:hp('1%'),
        borderColor:'#FFF',
        borderRadius:10,
        height:hp('5%'),
        
    },

    bluetoothbutton:{
        height:hp('5%'),
        width:wp('25%'),
        backgroundColor:'#3FAD72',
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        borderRadius:10,
        borderColor:'#F2F2F2'
    },
})

export default SearchTag;
