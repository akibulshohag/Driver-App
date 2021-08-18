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
        
        <TouchableOpacity onPress={()=>navigation.navigate('DriverSettings')} style={{marginTop:15,alignItems:'center'}}>
          <Text style={{fontSize:30}}>Yolo Ride London</Text>
          <Text style={{fontSize:20}}>Online\Offline</Text>
        </TouchableOpacity>
        <View style={{width:deviceWidth/2,height:deviceHeight/20,backgroundColor:'#0ABAB5',marginLeft:90,alignItems:'center',justifyContent:'center',borderRadius:5,marginTop:10}}>
            <Text style={{fontSize:18}}>Earnings & Hours</Text>
        </View>
       
          <View style={{flexDirection:'row',marginTop:10}}>
             <View style={{width:deviceWidth/1.5,height:deviceHeight/17,backgroundColor:'#0ABAB5',marginLeft:10,alignItems:'center',}}>
                  <Text style={{fontSize:14,color:'#FFFFFF'}}>Current Earnings -(12/7/21 to 12/7/21)</Text>
             </View>
             <View style={{width:deviceWidth/3.8,height:deviceHeight/17,backgroundColor:'#0ABAB5',marginLeft:2,alignItems:'center',justifyContent:'center'}}>
                  <Text style={{fontSize:14,color:'#FFFFFF'}}>£368.00</Text>
             </View>
          </View>
          <View style={{flexDirection:'row',marginTop:2}}>
             <View style={{width:deviceWidth/1.5,height:deviceHeight/17,backgroundColor:'#CFD5EA',marginLeft:10,justifyContent:'center'}}>
                  <Text style={{fontSize:16,color:'#000000'}}>Jobs Completed</Text>
             </View>
             <View style={{width:deviceWidth/3.8,height:deviceHeight/17,backgroundColor:'#CFD5EA',marginLeft:2,alignItems:'center',justifyContent:'center'}}>
                  <Text style={{fontSize:16,color:'#000000'}}>25.00</Text>
             </View>
          </View>
          <View style={{flexDirection:'row',marginTop:2}}>
             <View style={{width:deviceWidth/1.5,height:deviceHeight/17,backgroundColor:'#E9EBF5',marginLeft:10,justifyContent:'center',}}>
                  <Text style={{fontSize:16,color:'#000000'}}>Working Hour On Job</Text>
             </View>
             <View style={{width:deviceWidth/3.8,height:deviceHeight/17,backgroundColor:'#E9EBF5',marginLeft:2,alignItems:'center',justifyContent:'center'}}>
                  <Text style={{fontSize:16,color:'#000000'}}>25 Hrs</Text>
             </View>
          </View>
          <View style={{flexDirection:'row',marginTop:2}}>
             <View style={{width:deviceWidth/1.5,height:deviceHeight/17,backgroundColor:'#CFD5EA',marginLeft:10,justifyContent:'center',}}>
                  <Text style={{fontSize:16,color:'#000000'}}>Average Earnings - Per Hour</Text>
             </View>
             <View style={{width:deviceWidth/3.8,height:deviceHeight/17,backgroundColor:'#CFD5EA',marginLeft:2,alignItems:'center',justifyContent:'center'}}>
                  <Text style={{fontSize:16,color:'#000000'}}>£14.72</Text>
             </View>
          </View>
          <View style={{flexDirection:'row',justifyContent:'flex-end',marginTop:10}}>
             
             <TouchableOpacity onPress={()=>navigation.navigate('')} style={{borderRadius:5,backgroundColor:'#0ABAB5',width:deviceWidth/3.5,alignItems:'center',justifyContent:'center',height:40,marginRight:12}}>
                            
                            <Text style={{padding:8,color:'#fff',fontWeight:'bold',fontSize:16}}>Download</Text>
                            
             </TouchableOpacity>
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
