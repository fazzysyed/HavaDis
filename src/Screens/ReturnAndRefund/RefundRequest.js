import React, {useState} from 'react'
import { Card, Icon } from 'native-base';
import {  View, Text, TouchableOpacity, StyleSheet, Alert, Image, FlatList, ScrollView } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Modal from 'react-native-modal';
import Button from '../../components/Button'
import * as ImagePicker from 'react-native-image-picker';



const RefundRequest=({handler, visible})=> {
    const [addImage, setAddImage] = useState([])


   const TestCamera = () => {
       console.log("Test");
        let options = {
          storageOptions: {
            skipBackup: true,
            path: 'images',
          },
        };
        ImagePicker.launchImageLibrary(options, (response) => {
          console.log('Response = ', response);
    
          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
            alert(response.customButton);
          } else {
            const source = { uri: response.uri };
            console.log('response', JSON.stringify(response));
            addImage.push({
              filePath: response,
              fileData: response.data,
              fileUri: response.uri
            });
          }
        });
        console.log("Helghghghghlo", addImage.length)
      }


       


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
            <View style={{marginTop:hp('15%')}}>
                <Card style={{padding: 10, borderRadius:15}}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                    <TouchableOpacity style={{alignSelf:'flex-end'}} onPress={handler}>
                        <Icon style={{color:'grey'}} name="close-o"  type="EvilIcons" />
                    </TouchableOpacity> 
                   <View style={{alignSelf:'center'}}>
                        <Text style={{fontFamily:'HKGrotesk-Bold', fontSize:18}}>Ask For Refund</Text>
                    </View>


                    <View style={{alignItems:'center', marginVertical:hp('1%')}}>
                        <Text style={{color:'grey', fontFamily:'HKGrotesk-Regular',paddingHorizontal:wp('5%'), fontSize:13}}>
                            How many items do you want to return
                        </Text>
                    </View>

                    <View style={{flexDirection:'row', justifyContent:'space-between', marginVertical:hp('1%')}}>
                        <TouchableOpacity style={styles.button8}>
                            <Text style={{color:'#FFF', fontSize:20,fontFamily:'HKGrotesk-Regular'}}>{addImage.length} / 8</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonadd} onPress={TestCamera}>
                            <Icon  style={{color:'#FFF', fontSize:40}} name="camera-plus" type="MaterialCommunityIcons"  />
                            <Text style={{color:'#FFF', fontSize:16,fontFamily:'HKGrotesk-Regular'}}>Add photos</Text>
                        </TouchableOpacity>
                    </View>


                    <Card style={{padding:15, borderRadius:10}}>
                        <Text style={{color:'grey',fontFamily:'HKGrotesk-Regular'}}>lipsum as it is sometimes known, is dummy text used in 
                            laying out print, graphic or web designs. The passage is attributed
                             to an unknown typesetter in the 15th century who is thought top:
                             ero's De Finibus Bonorum et Malorum for use in a type specimen book.
                        </Text>
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
                    <View style={{alignSelf:'center', marginVertical:hp('1%')}}>
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
    Image:{
        height:hp('11%'),
        width:wp('25%')
    },

    button8:{
        height:hp('11%'),
        width:wp('25%'),
        backgroundColor:'#3FAD72',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10
    },

    buttonadd:{
        height:hp('11%'),
        width:wp('62%'),
        backgroundColor:'#3FAD72',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10
    }

})

export default RefundRequest;
