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
            <Text style={{fontSize:18}}>Driver Profile</Text>
        </View>
       
          <View style={{flexDirection:'row',marginTop:10}}>
             
             <View style={{width:deviceWidth/3.8,height:deviceHeight/17,backgroundColor:'#0ABAB5',marginLeft:10,alignItems:'center',justifyContent:'center'}}>
                  <Text style={{fontSize:16,color:'#FFFFFF',fontWeight:'bold'}}>Name</Text>
             </View>
             <View style={{width:deviceWidth/1.5,height:deviceHeight/17,backgroundColor:'#0ABAB5',marginLeft:2,alignItems:'center',justifyContent:'center'}}>
                  <Text style={{fontSize:16,color:'#FFFFFF'}}>Mohammed Asif Abdul</Text>
             </View>
          </View>
          <View style={{flexDirection:'row',marginTop:1}}>
             
             <View style={{width:deviceWidth/3.8,height:deviceHeight/17,backgroundColor:'#CFD5EA',marginLeft:10,alignItems:'center',justifyContent:'center'}}>
                  <Text style={{fontSize:14,color:'#000000'}}>DOB</Text>
             </View>
             <View style={{width:deviceWidth/1.5,height:deviceHeight/17,backgroundColor:'#CFD5EA',marginLeft:2,alignItems:'center',justifyContent:'center'}}>
                  <Text style={{fontSize:14,color:'#000000'}}>12/7/21 </Text>
             </View>
          </View>
          <View style={{flexDirection:'row',marginTop:1}}>
             
             <View style={{width:deviceWidth/3.8,height:deviceHeight/17,backgroundColor:'#E9EBF5',marginLeft:10,alignItems:'center',justifyContent:'center'}}>
                  <Text style={{fontSize:14,color:'#000000'}}>Home</Text>
             </View>
             <View style={{width:deviceWidth/1.5,height:deviceHeight/17,backgroundColor:'#E9EBF5',marginLeft:2,alignItems:'center',justifyContent:'center'}}>
                  <Text style={{fontSize:14,color:'#000000'}}>45 London Road – E13 0QA</Text>
             </View>
          </View>
          <View style={{flexDirection:'row',marginTop:1}}>
             
             <View style={{width:deviceWidth/3.8,height:deviceHeight/17,backgroundColor:'#CFD5EA',marginLeft:10,alignItems:'center',justifyContent:'center'}}>
                  <Text style={{fontSize:14,color:'#000000'}}>Mobile</Text>
             </View>
             <View style={{width:deviceWidth/1.5,height:deviceHeight/17,backgroundColor:'#CFD5EA',marginLeft:2,alignItems:'center',justifyContent:'center'}}>
                  <Text style={{fontSize:14,color:'#000000'}}>01785541454 </Text>
             </View>
          </View>
          <View style={{flexDirection:'row',marginTop:1}}>
             
             <View style={{width:deviceWidth/3.8,height:deviceHeight/17,backgroundColor:'#E9EBF5',marginLeft:10,alignItems:'center',justifyContent:'center'}}>
                  <Text style={{fontSize:14,color:'#000000'}}>Email</Text>
             </View>
             <View style={{width:deviceWidth/1.5,height:deviceHeight/17,backgroundColor:'#E9EBF5',marginLeft:2,alignItems:'center',justifyContent:'center'}}>
                  <Text style={{fontSize:14,color:'#000000'}}>alvjf@gmail.com</Text>
             </View>
          </View>
          <View style={{flexDirection:'row',marginTop:1}}>
             
             <View style={{width:deviceWidth/3.8,height:deviceHeight/17,backgroundColor:'#CFD5EA',marginLeft:10,alignItems:'center',justifyContent:'center'}}>
                  <Text style={{fontSize:14,color:'#000000'}}>Vehicle</Text>
             </View>
             <View style={{width:deviceWidth/1.5,height:deviceHeight/17,backgroundColor:'#CFD5EA',marginLeft:2,alignItems:'center',justifyContent:'center'}}>
                  <Text style={{fontSize:14,color:'#000000'}}>AA10 AAA </Text>
             </View>
          </View>
          <View style={{flexDirection:'row',marginTop:1}}>
             
             <View style={{width:deviceWidth/3.8,height:deviceHeight/17,backgroundColor:'#E9EBF5',marginLeft:10,alignItems:'center',justifyContent:'center'}}>
                  <Text style={{fontSize:14,color:'#000000'}}>Make</Text>
             </View>
             <View style={{width:deviceWidth/1.5,height:deviceHeight/17,backgroundColor:'#E9EBF5',marginLeft:2,alignItems:'center',justifyContent:'center'}}>
                  <Text style={{fontSize:14,color:'#000000'}}>Mercedes – E Class – Black</Text>
             </View>
          </View>
          <View style={{flexDirection:'row',marginTop:1}}>
             
             <View style={{width:deviceWidth/3.8,height:deviceHeight/17,backgroundColor:'#CFD5EA',marginLeft:10,alignItems:'center',justifyContent:'center'}}>
                  <Text style={{fontSize:14,color:'#000000'}}></Text>
             </View>
             <View style={{width:deviceWidth/1.5,height:deviceHeight/17,backgroundColor:'#CFD5EA',marginLeft:2,alignItems:'center',justifyContent:'center'}}>
                  <Text style={{fontSize:14,color:'#000000'}}> </Text>
             </View>
          </View>
          
          <View style={{flexDirection:'row',marginTop:20}}>
             
             <View style={{width:deviceWidth/3.3,height:deviceHeight/17,backgroundColor:'#0ABAB5',marginLeft:10,alignItems:'center',justifyContent:'center'}}>
                  <Text style={{fontSize:16,color:'#FFFFFF',fontWeight:'bold'}}>DVLA NO</Text>
             </View>
             <View style={{width:deviceWidth/3.3,height:deviceHeight/17,backgroundColor:'#0ABAB5',marginLeft:2,alignItems:'center',justifyContent:'center'}}>
                  <Text style={{fontSize:16,color:'#FFFFFF',fontWeight:'bold'}}>Vehicle No</Text>
             </View>
             <View style={{width:deviceWidth/3.2,height:deviceHeight/17,backgroundColor:'#0ABAB5',marginLeft:2,alignItems:'center',justifyContent:'center'}}>
                  <Text style={{fontSize:16,color:'#FFFFFF',fontWeight:'bold'}}>Date</Text>
             </View>
          </View>
          <View style={{flexDirection:'row',marginTop:2}}>
             
             <View style={{width:deviceWidth/3.3,height:deviceHeight/17,backgroundColor:'#CFD5EA',marginLeft:10,alignItems:'center',justifyContent:'center'}}>
                  <Text style={{fontSize:16,color:'#000000'}}>PCO – Driver</Text>
             </View>
             <View style={{width:deviceWidth/3.3,height:deviceHeight/17,backgroundColor:'#CFD5EA',marginLeft:2,alignItems:'center',justifyContent:'center'}}>
                  <Text style={{fontSize:16,color:'#000000'}}>2545255</Text>
             </View>
             <View style={{width:deviceWidth/3.2,height:deviceHeight/17,backgroundColor:'#CFD5EA',marginLeft:2,alignItems:'center',justifyContent:'center'}}>
                  <Text style={{fontSize:16,color:'#000000'}}>17/7/21</Text>
             </View>
          </View>
          <View style={{flexDirection:'row',marginTop:2}}>
             
             <View style={{width:deviceWidth/3.3,height:deviceHeight/17,backgroundColor:'#E9EBF5',marginLeft:10,alignItems:'center',justifyContent:'center'}}>
                  <Text style={{fontSize:16,color:'#000000'}}>PCO – Vehicle</Text>
             </View>
             <View style={{width:deviceWidth/3.3,height:deviceHeight/17,backgroundColor:'#E9EBF5',marginLeft:2,alignItems:'center',justifyContent:'center'}}>
                  <Text style={{fontSize:16,color:'#000000'}}>2545255</Text>
             </View>
             <View style={{width:deviceWidth/3.2,height:deviceHeight/17,backgroundColor:'#E9EBF5',marginLeft:2,alignItems:'center',justifyContent:'center'}}>
                  <Text style={{fontSize:16,color:'#000000'}}>17/7/21</Text>
             </View>
          </View>
          <View style={{flexDirection:'row',marginTop:2}}>
             
             <View style={{width:deviceWidth/3.3,height:deviceHeight/17,backgroundColor:'#CFD5EA',marginLeft:10,alignItems:'center',justifyContent:'center'}}>
                  <Text style={{fontSize:16,color:'#000000'}}>MOT</Text>
             </View>
             <View style={{width:deviceWidth/3.3,height:deviceHeight/17,backgroundColor:'#CFD5EA',marginLeft:2,alignItems:'center',justifyContent:'center'}}>
                  <Text style={{fontSize:16,color:'#000000'}}>-</Text>
             </View>
             <View style={{width:deviceWidth/3.2,height:deviceHeight/17,backgroundColor:'#CFD5EA',marginLeft:2,alignItems:'center',justifyContent:'center'}}>
                  <Text style={{fontSize:16,color:'#000000'}}>17/7/21</Text>
             </View>
          </View>
          <View style={{flexDirection:'row',marginTop:2}}>
             
             <View style={{width:deviceWidth/3.3,height:deviceHeight/17,backgroundColor:'#E9EBF5',marginLeft:10,alignItems:'center',justifyContent:'center'}}>
                  <Text style={{fontSize:16,color:'#000000'}}>Insurance</Text>
             </View>
             <View style={{width:deviceWidth/3.3,height:deviceHeight/17,backgroundColor:'#E9EBF5',marginLeft:2,alignItems:'center',justifyContent:'center'}}>
                  <Text style={{fontSize:16,color:'#000000'}}>-</Text>
             </View>
             <View style={{width:deviceWidth/3.2,height:deviceHeight/17,backgroundColor:'#E9EBF5',marginLeft:2,alignItems:'center',justifyContent:'center'}}>
                  <Text style={{fontSize:16,color:'#000000'}}>17/7/21</Text>
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
