import * as React from 'react';
import { StyleSheet,Text, View, TextInput,Image,} from 'react-native';
import { Dimensions } from 'react-native';
import {  Entypo,FontAwesome,Ionicons ,Fontisto,Feather} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Card } from 'react-native-paper';
// import OTPInputView from '@twotalltotems/react-native-otp-input'
import { useState} from "react";
import OtpInputs from 'react-native-otp-inputs';
import { StatusBar } from 'expo-status-bar';

const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height


// import Header from '../components/headerComponent';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
// import { openDrawer } from 'react-navigation-drawer/lib/typescript/src/routers/DrawerActions';
export default function Mywallet() {


    const navigation = useNavigation(); 
    const [isOtpForm, setisOtpForm] = useState(false)


  return (
    <View style={{}} >
        
        <TouchableOpacity onPress={()=>navigation.navigate('DriverHome')} style={{marginTop:15,alignItems:'center'}}>
          <Text style={{fontSize:30}}>Yolo Ride London</Text>
          <Text style={{fontSize:20}}>Online\Offline</Text>
        </TouchableOpacity>
        <View style={{width:deviceWidth/2,height:deviceHeight/20,backgroundColor:'#0ABAB5',marginLeft:90,alignItems:'center',justifyContent:'center',borderRadius:5,marginTop:10}}>
            <Text style={{fontSize:18}}>Future Jobs</Text>
        </View>
       
          <View style={{flexDirection:'row',marginTop:10}}>
             <View style={{width:deviceWidth/6.4,height:deviceHeight/17,backgroundColor:'#0ABAB5',marginLeft:10,justifyContent:'center'}}>
                  <Text style={{fontSize:14,color:'#FFFFFF'}}>Job Id</Text>
             </View>
             <View style={{width:deviceWidth/6.4,height:deviceHeight/17,backgroundColor:'#0ABAB5',marginLeft:1,justifyContent:'center'}}>
                  <Text style={{fontSize:14,color:'#FFFFFF'}}>Date</Text>
             </View>
             <View style={{width:deviceWidth/6.4,height:deviceHeight/17,backgroundColor:'#0ABAB5',marginLeft:1,justifyContent:'center'}}>
                  <Text style={{fontSize:14,color:'#FFFFFF'}}>From</Text>
             </View>
             <View style={{width:deviceWidth/6.4,height:deviceHeight/17,backgroundColor:'#0ABAB5',marginLeft:1,justifyContent:'center'}}>
                  <Text style={{fontSize:14,color:'#FFFFFF'}}>To</Text>
             </View>
             <View style={{width:deviceWidth/6.4,height:deviceHeight/17,backgroundColor:'#0ABAB5',marginLeft:1,justifyContent:'center'}}>
                  <Text style={{fontSize:14,color:'#FFFFFF'}}>Amt £</Text>
             </View>
             <View style={{width:deviceWidth/6.4,height:deviceHeight/17,backgroundColor:'#0ABAB5',marginLeft:1,justifyContent:'center'}}>
                  <Text style={{fontSize:14,color:'#FFFFFF'}}>Type</Text>
             </View>
          </View>
          <View style={{flexDirection:'row',marginTop:1}}>
             <View style={{width:deviceWidth/6.4,height:deviceHeight/17,backgroundColor:'#CFD5EA',marginLeft:10,justifyContent:'center'}}>
                  <Text style={{fontSize:14,color:'#000000'}}>Yolo-1111</Text>
             </View>
             <View style={{width:deviceWidth/6.4,height:deviceHeight/17,backgroundColor:'#CFD5EA',marginLeft:1,justifyContent:'center'}}>
                  <Text style={{fontSize:14,color:'#000000'}}>12/07/2021</Text>
             </View>
             <View style={{width:deviceWidth/6.4,height:deviceHeight/17,backgroundColor:'#CFD5EA',marginLeft:1,justifyContent:'center'}}>
                  <Text style={{fontSize:14,color:'#000000'}}>E13 0AH</Text>
             </View>
             <View style={{width:deviceWidth/6.4,height:deviceHeight/17,backgroundColor:'#CFD5EA',marginLeft:1,justifyContent:'center'}}>
                  <Text style={{fontSize:14,color:'#000000'}}>TW6</Text>
             </View>
             <View style={{width:deviceWidth/6.4,height:deviceHeight/17,backgroundColor:'#CFD5EA',marginLeft:1,justifyContent:'center'}}>
                  <Text style={{fontSize:14,color:'#000000'}}>£50.00</Text>
             </View>
             <View style={{width:deviceWidth/6.4,height:deviceHeight/17,backgroundColor:'#CFD5EA',marginLeft:1,justifyContent:'center'}}>
                  <Text style={{fontSize:14,color:'#000000'}}>Cash</Text>
             </View>
          </View>
          <View style={{flexDirection:'row',marginTop:1}}>
             <View style={{width:deviceWidth/6.4,height:deviceHeight/17,backgroundColor:'#E9EBF5',marginLeft:10,justifyContent:'center'}}>
                  <Text style={{fontSize:14,color:'#000000'}}>Job Id</Text>
             </View>
             <View style={{width:deviceWidth/6.4,height:deviceHeight/17,backgroundColor:'#E9EBF5',marginLeft:1,justifyContent:'center'}}>
                  <Text style={{fontSize:14,color:'#000000'}}>12/07/2021</Text>
             </View>
             <View style={{width:deviceWidth/6.4,height:deviceHeight/17,backgroundColor:'#E9EBF5',marginLeft:1,justifyContent:'center'}}>
                  <Text style={{fontSize:14,color:'#000000'}}>E13 0AH</Text>
             </View>
             <View style={{width:deviceWidth/6.4,height:deviceHeight/17,backgroundColor:'#E9EBF5',marginLeft:1,justifyContent:'center'}}>
                  <Text style={{fontSize:14,color:'#000000'}}>TW6</Text>
             </View>
             <View style={{width:deviceWidth/6.4,height:deviceHeight/17,backgroundColor:'#E9EBF5',marginLeft:1,justifyContent:'center'}}>
                  <Text style={{fontSize:14,color:'#000000'}}>£50.00</Text>
             </View>
             <View style={{width:deviceWidth/6.4,height:deviceHeight/17,backgroundColor:'#E9EBF5',marginLeft:1,justifyContent:'center'}}>
                  <Text style={{fontSize:14,color:'#000000'}}>Cash</Text>
             </View>
          </View>
          <View style={{flexDirection:'row',marginTop:1}}>
             <View style={{width:deviceWidth/6.4,height:deviceHeight/17,backgroundColor:'#CFD5EA',marginLeft:10,justifyContent:'center'}}>
                  <Text style={{fontSize:14,color:'#000000'}}>Job Id</Text>
             </View>
             <View style={{width:deviceWidth/6.4,height:deviceHeight/17,backgroundColor:'#CFD5EA',marginLeft:1,justifyContent:'center'}}>
                  <Text style={{fontSize:14,color:'#000000'}}>12/07/2021</Text>
             </View>
             <View style={{width:deviceWidth/6.4,height:deviceHeight/17,backgroundColor:'#CFD5EA',marginLeft:1,justifyContent:'center'}}>
                  <Text style={{fontSize:14,color:'#000000'}}>E13 0AH</Text>
             </View>
             <View style={{width:deviceWidth/6.4,height:deviceHeight/17,backgroundColor:'#CFD5EA',marginLeft:1,justifyContent:'center'}}>
                  <Text style={{fontSize:14,color:'#000000'}}>TW6</Text>
             </View>
             <View style={{width:deviceWidth/6.4,height:deviceHeight/17,backgroundColor:'#CFD5EA',marginLeft:1,justifyContent:'center'}}>
                  <Text style={{fontSize:14,color:'#000000'}}>£50.00</Text>
             </View>
             <View style={{width:deviceWidth/6.4,height:deviceHeight/17,backgroundColor:'#CFD5EA',marginLeft:1,justifyContent:'center'}}>
                  <Text style={{fontSize:14,color:'#000000'}}>Cash</Text>
             </View>
          </View>
         
         
      
      
      
    </View>
    

          
  );
}

const styles = StyleSheet.create({
 card:{
   borderRadius:35,
  
} 
 
});
