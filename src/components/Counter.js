import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


 const Counter=()=> {
    const [counter, setCounter]=useState(0);

    const Add=()=>{
        setCounter(counter+1)
    }

    const Sub=()=>{
        if(counter>0){
        setCounter(counter-1)
        }
    }



    return (
        <View>
            <View style={styles.button}>
                <TouchableOpacity onPress={Sub}>
                    <Text style={{color:'#FFF', fontSize:25}}>-</Text>
                    </TouchableOpacity>
                <Text style={{color:'#FFF' ,fontSize:18 }}>{counter}</Text>
                <TouchableOpacity onPress={Add}><Text style={{color:'#FFF', fontSize:18}}>+</Text></TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
 button:{
     width:wp('27%'),
     height:hp('5%'),
     backgroundColor:'#383838',
     flexDirection:'row',
     justifyContent:'space-evenly',
     alignItems:'center',
     borderRadius:5,

 }
})
export default Counter;