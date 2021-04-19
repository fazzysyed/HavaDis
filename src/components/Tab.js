import React from 'react'
import { View, Text ,TouchableOpacity, ProgressBarAndroidComponent} from 'react-native'

export default function Tab(props) {
    return (
        <TouchableOpacity onPress = {props.onPress} style = {{borderRadius:20,backgroundColor:props.backgroundColor,height:70,width:160,justifyContent:"center",alignItems:"center"}}>
          <Text style={{color:props.color,fontFamily:'HKGrotesk-Regular'}}>{props.Text}</Text>
        </TouchableOpacity>
    )
}
