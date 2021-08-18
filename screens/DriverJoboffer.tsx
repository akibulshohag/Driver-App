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
        <View style={{marginTop:15,alignItems:'center'}}>
          <Text style={{fontSize:30}}>Yolo Ride London</Text>
          <Text style={{fontSize:20}}>Online\Offline</Text>
        </View>
         <View style={{marginTop:15}}>
             <View style={{flexDirection:'row',width:deviceWidth/1.1+10,height:deviceHeight/17,backgroundColor:'#4472C4',marginLeft:10,alignItems:'center',justifyContent:'flex-end'}}>
                 <Text style={{fontSize:18,marginRight:90}}>Job Offer</Text>
                 <View style={{backgroundColor:'#ED7D31',padding:10,borderRadius:10,marginRight:10}}>
                     <Text style={{}}>90</Text>
                 </View>
             </View>
             <View style={{flexDirection:'column',width:deviceWidth/1.1+10,height:deviceHeight/7,backgroundColor:'#CFD5EA',marginLeft:10,alignItems:'center',marginTop:5}}>
                 <Text style={{fontSize:17}}>Job at 17/07/21 at 18:10</Text>
                 <Text style={{fontSize:17}}>E13 to E15</Text>
                 <Text style={{fontSize:17}}>Fare :$20.00*</Text>
             </View>
             <View style={{flexDirection:'row',justifyContent:'flex-end',marginTop:10}}>
             <TouchableOpacity onPress={()=>navigation.navigate('DriverProfile')} style={{borderRadius:5,backgroundColor:'#4472C4',width:deviceWidth/3.5,alignItems:'center',justifyContent:'center',height:50,marginRight:10}}>
                             
                             <Text style={{padding:8,color:'#fff',fontWeight:'bold',fontSize:16}}>Accept</Text>
                             
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>navigation.navigate('DriverProfile')} style={{borderRadius:5,backgroundColor:'#4472C4',width:deviceWidth/3.5,alignItems:'center',justifyContent:'center',height:50,marginRight:12}}>
                             
                             <Text style={{padding:8,color:'#fff',fontWeight:'bold',fontSize:16}}>Reject</Text>
                             
              </TouchableOpacity>
             </View>
         </View>
        
       

      
      
      
    </View>
    

          
  );
}

const styles = StyleSheet.create({
 card:{
   borderRadius:35,
   width:70,
   height:70,
   backgroundColor:'#FFFFFF',
   marginTop:60,
   alignItems:'center'} 
 
});
