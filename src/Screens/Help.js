import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import {  Header, Left, Icon, Center, Right, Body, Card } from 'native-base';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Button from '../components/Button';


const Help=()=> {
    return (
        <View>
            <Header style={{backgroundColor:'transparent', elevation:0, borderBottomWidth:3, borderBottomColor:'#F1F2FC'}}>
                <Left style={{flex:0.3}}>
                    <Icon name='arrow-back' />
                </Left>
                <Body style={{width:'80%', alignItems:'center'}}>
                    <Text>Help</Text>

                </Body>
                <Right style={{flex:0.3}}>
                    
                </Right>

                </Header>
                <View style={{marginHorizontal:wp('3%'), marginTop:hp('3%')}}>
                    <View style={styles.row1}>
                        <View style={styles.check}>
                            <Icon style={{color:'#FFF', fontSize:17 }} name="chatbubbles"  type="Ionicons" />
                        </View> 
                        <Text style={{paddingLeft:10}}>Text Dennis Watkins, the customer</Text>
                    </View>

                    <View style={styles.row2}>
                        <View style={styles.check}>
                            <Icon style={{color:'#FFF', fontSize:17 }} name="call" type="Ionicons" />
                        </View> 
                        <Text style={{paddingLeft:10}}>Call Dennis Watkins, the customer</Text>
                    </View>


                    <View style={styles.row3}>
                       <View style={{flexDirection:'row', alignItems:'center'}}>
                            <View style={styles.check}>
                                <Icon style={{color:'#FFF', fontSize:17 }} name="assignment-return"  type="MaterialIcons" />
                            </View> 
                            <Text style={{paddingLeft:10}}>Return Items</Text>
                        </View>
                        <View>
                            <Text style={{paddingLeft:39}}>
                                Remove items that are damaged or that the customer doesn't want
                            </Text>
                        </View>
                    </View>

                    <View style={styles.row3}>
                       <View style={{flexDirection:'row', alignItems:'center'}}>
                            <View style={styles.check}>
                              <Icon style={{color:'#FFF', fontSize:17 }} name="assignment-return"  type="MaterialIcons" />
                            </View> 
                            <Text style={{paddingLeft:10}}>Unable to deliver</Text>
                        </View>
                        <View>
                            <Text style={{paddingLeft:39}}>
                                Mark this order as undeliverable. you'll return the items to the stations.
                            </Text>
                        </View>
                    </View>

                    <View style={styles.row2}>
                        <View style={styles.check}>
                            <Icon style={{color:'#FFF', fontSize:17 }} name="gps-fixed"  type="MaterialIcons" />
                        </View> 
                        <Text style={{paddingLeft:10}}>GPS is not working. i'm at the address</Text>
                    </View>

                    <View style={{alignItems:'center', marginTop:hp('5%')}}>
                    <TouchableOpacity style={styles.Button}>
                        <Text style={{color:'#FFF'}}>
                            Driver Support
                        </Text>
                    </TouchableOpacity>
                    </View>

                    <View style={{alignItems:'center', marginTop:hp('2%')}}>
                        <Button  title="Emergency Help"  />
                    </View>

                    {/* ******** */}
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
row1:{
    flexDirection:'row',
    height:hp('8%'),
    borderWidth:2,
    borderRadius:10,
    alignItems:'center',
    padding: 10,
    borderColor:'#F1F1F1'

},
row2:{
    flexDirection:'row',
    marginTop:hp('2%'),
    height:hp('8%'),
    borderWidth:2,
    borderRadius:10,
    alignItems:'center',
    padding: 10,
    borderColor:'#F1F1F1'

},
row3:{
    marginTop:hp('2%'),
    height:hp('13%'),
    borderWidth:2,
    borderRadius:10,
    padding: 10,
    borderColor:'#F1F1F1'

},
check:{
    height:hp('4%'),
    width:wp('8%'),
    borderRadius:20,
    backgroundColor:'#2CB9B0',
    justifyContent:'center',
    alignItems:'center'
},

Button:{
    height: hp('9%'),
    width: wp('90%'),
    backgroundColor:'#FB4B7B',
    justifyContent:"center",
    alignItems:"center",
    borderRadius:18,
}
})

export default Help;