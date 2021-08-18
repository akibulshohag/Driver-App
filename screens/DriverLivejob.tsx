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
    <ScrollView style={{}} >
        <TouchableOpacity onPress={()=>navigation.navigate('DriverHome')} style={{marginTop:15,alignItems:'center'}}>
          <Text style={{fontSize:30}}>Yolo Ride London</Text>
          <Text style={{fontSize:20}}>Online\Offline</Text>
        </TouchableOpacity>
        <View style={{width:deviceWidth/3,height:deviceHeight/20,backgroundColor:'#0ABAB5',marginLeft:120,alignItems:'center',justifyContent:'center',borderRadius:5,marginTop:10}}>
            <Text style={{fontSize:18}}>Live Jobs</Text>
        </View>
         
         <View style={{marginTop:10}}>
             <View style={{flexDirection:'row',width:deviceWidth/1.1+10,height:deviceHeight/17,backgroundColor:'#0ABAB5',marginLeft:10,alignItems:'center',justifyContent:'flex-end'}}>
                 <Text style={{fontSize:18,marginRight:70}}>Job Accepted</Text>
                 <TouchableOpacity style={{marginRight:10}}>
                   <Entypo style={{}} name='message' color='#fff'size={35}/>
                 </TouchableOpacity>
             </View>
             <View style={{flexDirection:'column',width:deviceWidth/1.1+10,height:deviceHeight/5,backgroundColor:'#CFD5EA',marginLeft:10,alignItems:'flex-start',marginTop:5}}>
                 <Text style={{fontSize:17}}>Yolo-1125</Text>
                 <Text style={{fontSize:17}}>Job at 17/07/2021 at 18:10</Text>
                 <Text style={{fontSize:17}}>Kartik 07515727007</Text>
                 <Text style={{fontSize:17}}>From 37 Plashet Road E13 0QA</Text>
                 <Text style={{fontSize:17}}>To Hermit Road E16 </Text>
                 <Text style={{fontSize:17}}>Fare : £8.00 – Cash / PrePaid / PostPaid</Text>
             </View>
             <View style={{flexDirection:'row',justifyContent:'flex-end',marginTop:10}}>
             <TouchableOpacity onPress={()=>navigation.navigate('')} style={{borderRadius:5,backgroundColor:'#0ABAB5',width:deviceWidth/3.5,alignItems:'center',justifyContent:'center',height:40,marginRight:10}}>
                             
                             <Text style={{padding:8,color:'#fff',fontWeight:'bold',fontSize:16}}>Arrived</Text>
                             
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>navigation.navigate('')} style={{borderRadius:5,backgroundColor:'#0ABAB5',width:deviceWidth/3.5,alignItems:'center',justifyContent:'center',height:40,marginRight:12}}>
                             
                             <Text style={{padding:8,color:'#fff',fontWeight:'bold',fontSize:16}}>Route</Text>
                             
              </TouchableOpacity>
             </View>
         </View>
           
         <View style={{marginTop:10}}>
             <View style={{flexDirection:'row',width:deviceWidth/1.1+10,height:deviceHeight/17,backgroundColor:'#0ABAB5',marginLeft:10,alignItems:'center',justifyContent:'flex-end'}}>
                 <Text style={{fontSize:18,marginRight:70}}>Job Accepted</Text>
                 <TouchableOpacity style={{marginRight:10}}>
                   <Entypo style={{}} name='message' color='#fff'size={35}/>
                 </TouchableOpacity>
             </View>
             <View style={{flexDirection:'column',width:deviceWidth/1.1+10,height:deviceHeight/5,backgroundColor:'#CFD5EA',marginLeft:10,alignItems:'flex-start',marginTop:5}}>
                 <Text style={{fontSize:17}}>Yolo-1125</Text>
                 <Text style={{fontSize:17}}>Job at 17/07/2021 at 18:10</Text>
                 <Text style={{fontSize:17}}>Kartik 07515727007</Text>
                 <Text style={{fontSize:17}}>From 37 Plashet Road E13 0QA</Text>
                 <Text style={{fontSize:17}}>To Hermit Road E16 </Text>
                 <Text style={{fontSize:17}}>Fare : £8.00 – Cash / PrePaid / PostPaid</Text>
             </View>
             <View style={{flexDirection:'row',justifyContent:'flex-end',marginTop:10}}>
             <TouchableOpacity onPress={()=>navigation.navigate('')} style={{borderRadius:5,backgroundColor:'#0ABAB5',width:deviceWidth/3.5,alignItems:'center',justifyContent:'center',height:40,marginRight:10}}>
                             
                             <Text style={{padding:8,color:'#fff',fontWeight:'bold',fontSize:16}}>POB</Text>
                             
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>navigation.navigate('')} style={{borderRadius:5,backgroundColor:'#0ABAB5',width:deviceWidth/3.5,alignItems:'center',justifyContent:'center',height:40,marginRight:12}}>
                             
                             <Text style={{padding:8,color:'#fff',fontWeight:'bold',fontSize:16}}>Route</Text>
                             
              </TouchableOpacity>
             </View>
         </View>

         <View style={{marginTop:10}}>
             <View style={{flexDirection:'row',width:deviceWidth/1.1+10,height:deviceHeight/17,backgroundColor:'#0ABAB5',marginLeft:10,alignItems:'center',justifyContent:'flex-end'}}>
                 <Text style={{fontSize:18,marginRight:70}}>Job Accepted</Text>
                 <TouchableOpacity style={{marginRight:10}}>
                   <Entypo style={{}} name='message' color='#fff'size={35}/>
                 </TouchableOpacity>
             </View>
             <View style={{flexDirection:'column',width:deviceWidth/1.1+10,height:deviceHeight/5,backgroundColor:'#CFD5EA',marginLeft:10,alignItems:'flex-start',marginTop:5}}>
                 <Text style={{fontSize:17}}>Yolo-1125</Text>
                 <Text style={{fontSize:17}}>Job at 17/07/2021 at 18:10</Text>
                 <Text style={{fontSize:17}}>Kartik 07515727007</Text>
                 <Text style={{fontSize:17}}>From 37 Plashet Road E13 0QA</Text>
                 <Text style={{fontSize:17}}>To Hermit Road E16 </Text>
                 <Text style={{fontSize:17}}>Fare : £8.00 – Cash / PrePaid / PostPaid</Text>
             </View>
             <View style={{flexDirection:'row',justifyContent:'flex-end',marginTop:10}}>
             
              <TouchableOpacity onPress={()=>navigation.navigate('')} style={{borderRadius:5,backgroundColor:'#0ABAB5',width:deviceWidth/3.5,alignItems:'center',justifyContent:'center',height:40,marginRight:12}}>
                             
                             <Text style={{padding:8,color:'#fff',fontWeight:'bold',fontSize:16}}>Clear</Text>
                             
              </TouchableOpacity>
             </View>
         </View>
           
        
       

      
      
      
    </ScrollView>
    

          
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
