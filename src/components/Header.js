import React from 'react';
import {View, Text} from 'react-native';
import {Header, Left, Icon, Center, Right, Body} from 'native-base';

const Headers = (props) => {
  return (
    <Header style={{backgroundColor: 'transparent', elevation: 0}}>
      <Left style={{flex: 0.3}}>
        <Icon name="arrow-back" onPress={props.left} />
      </Left>
      <Body style={{width: '80%', alignItems: 'center'}}>
        <Text style={{fontSize: 16, fontFamily: 'HKGrotesk-Regular'}}>
          {props.title}
        </Text>
      </Body>
      <Right style={{flex: 0.3}}></Right>
    </Header>
  );
};

export default Headers;

// <View style={styles.container}>
//                             <View style={{}}>
//                                 <Text style={{fontWeight:'bold', paddingTop:7,paddingLeft:9 }}>Seller or Shop Name</Text>
//                             </View>
//                             <View style={{flexDirection:'row',padding:9,}}>
//                                 <View>
//                                     <Image style={styles.flat1image}  source={{uri: item.image}}  />
//                                 </View>
//                                 <View style={{paddingLeft:9}}>
//                                         <View style={{flexDirection:'row', justifyContent:'space-between'}}>
//                                                 <View>
//                                                             <View>
//                                                             <Text style={{fontWeight:'bold', fontSize:17}}>{item.title}</Text>
//                                                             </View>
//                                                             <View style={{marginVertical:hp('1%')}}>
//                                                             <Text style={{color:'#A3A3A3'}}>{item.description}</Text>
//                                                         </View>
//                                                 </View>
//                                                 <View>
//                                                     <Text style={{fontWeight:'bold', fontSize:17}}>{item.Price}</Text>
//                                                 </View>

//                                         </View>

//                                         <View>
//                                             <View style={{flexDirection:'row',}}>
//                                             {/* Counter Button */}
//                                             <Counter />
//                                             {/* Save Button */}
//                                             <TouchableOpacity style={styles.savelaterbutton}>
//                                                 <Text style={{fontSize:11}}>Save for later</Text>
//                                             </TouchableOpacity>

//                                             </View>
//                                         </View>

//                                 </View>
//                             </View>

//                             <View style={{flexDirection:'row', padding:10, borderTopWidth:1, borderTopColor:'lightgrey'}}>
//                                     <View>
//                                         <Icon name='search' />
//                                     </View>
//                                     <View style={{marginLeft:wp('3%')}}>
//                                         <Text style={{color:'#3FAD72'}}>Offer Applied</Text>
//                                         <Text style={{color:'grey'}}>Save up to 20%</Text>
//                                     </View>
//                             </View>
// </View>
