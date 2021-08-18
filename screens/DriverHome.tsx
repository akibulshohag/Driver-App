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
        </View>
        <View style={{marginTop:5,alignItems:'center'}}>
          <Text style={{fontSize:25}}>Online\Offline</Text>
        </View>
        
             <View  style={{borderRadius:5,marginTop:20,marginLeft:10,backgroundColor:'#0ABAB5',width:deviceWidth/2,alignItems:'center',justifyContent:'center'}}>
                            <Text style={{padding:10,color:'#fff',fontSize:20}}>Driver Id:D002</Text>
             </View>
        
        <View style={{borderRadius:5,marginTop:20,backgroundColor:'#0ABAB5',width:deviceWidth/2.4,alignItems:'center',marginLeft:100}}>
                            <Text style={{padding:5,color:'#fff',fontSize:20}}>YRL HOME</Text>
             </View>
        <View style={{marginTop:10,marginLeft:10}}>
           <Card style={{width:deviceWidth-20,height:deviceHeight/2.8,elevation:5}}>
              <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:25}}>
              <TouchableOpacity onPress={()=>navigation.navigate('DriverLivejob')} style={{borderRadius:5,backgroundColor:'#0ABAB5',width:deviceWidth/2.5,alignItems:'center',justifyContent:'center',height:100}}>
                             <Entypo style={{}} name='message' color='#fff'size={25}/>
                            <Text style={{padding:10,color:'#fff',fontWeight:'bold',fontSize:12}}>Live Jobs</Text>
                            
             </TouchableOpacity>
             <TouchableOpacity onPress={()=>navigation.navigate('DriverFuturejob')} style={{borderRadius:5,backgroundColor:'#0ABAB5',width:deviceWidth/2.5,alignItems:'center',justifyContent:'center',height:100}}>
                            <Entypo style={{}} name='message' color='#fff'size={25}/>
                            <Text style={{padding:10,color:'#fff',fontWeight:'bold',fontSize:12}}>Future jobs</Text>
             </TouchableOpacity>
              </View>
              <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:25}}>
              <TouchableOpacity onPress={()=>navigation.navigate('DriverJobhistory')} style={{borderRadius:5,backgroundColor:'#0ABAB5',width:deviceWidth/2.5,alignItems:'center',justifyContent:'center',height:100}}>
                            <Entypo style={{}} name='message' color='#fff'size={25}/>
                            <Text style={{padding:10,color:'#fff',fontWeight:'bold',fontSize:12}}>Job History</Text>
             </TouchableOpacity>
             <TouchableOpacity onPress={()=>navigation.navigate('DriverSettings')} style={{borderRadius:5,backgroundColor:'#0ABAB5',width:deviceWidth/2.5,alignItems:'center',justifyContent:'center',height:100}}>
                            <Entypo style={{}} name='message' color='#fff'size={25}/>
                            <Text style={{padding:10,color:'#fff',fontWeight:'bold',fontSize:12}}>Settings</Text>
                            
                          
             </TouchableOpacity>
              </View>
           </Card>
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
