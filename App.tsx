import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import {useState,useEffect} from 'react';
import * as SecureStore from 'expo-secure-store';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {DrawerContent} from './components/drawerContent';
// screens

import DriverHome from './screens/DriverHome'
import DriverSettings from './screens/DriverSettings'
import DriverJoboffer from './screens/DriverJoboffer'
import DriverLivejob from './screens/DriverLivejob'
import DriverEarnings from './screens/DriverEarnings'
import DriverProfile1 from './screens/DriverProfile1'
import DriverJobhistory from './screens/DriverJobhistory'
import DriverFuturejob from './screens/DriverFuturejob'
import DriverGps from './screens/DriverGps'
import DriverJobalert from './screens/DriverJobalert'



  // const Stack = createStackNavigator();
  const Drawer = createDrawerNavigator();


  // drawerContent = {props => <DrawerContent {...props}/>

function App() {

 


  return (
    <NavigationContainer>
        
       <Drawer.Navigator initialRouteName="DriverHome" drawerContent = {props => <DrawerContent {...props}/>} >
         
         
         <Drawer.Screen name="DriverFuturejob" component={DriverFuturejob} options={{header: () => null}} />
         <Drawer.Screen name="DriverJobhistory" component={DriverJobhistory} options={{header: () => null}} />
         <Drawer.Screen name="DriverProfile1" component={DriverProfile1} options={{header: () => null}} />
         <Drawer.Screen name="DriverEarnings" component={DriverEarnings} options={{header: () => null}} /> 
         <Drawer.Screen name="DriverLivejob" component={DriverLivejob} options={{header: () => null}} />
         <Drawer.Screen name="DriverJoboffer" component={DriverJoboffer} options={{header: () => null}} />
         <Drawer.Screen name="DriverSettings" component={DriverSettings} options={{header: () => null}} />
         <Drawer.Screen name="DriverHome" component={DriverHome} options={{header: () => null}} />
         <Drawer.Screen name="DriverGps" component={DriverGps} options={{header: () => null}} />
         <Drawer.Screen name="DriverJobalert" component={DriverJobalert} options={{header: () => null}} />
         
         
         
      </Drawer.Navigator>
            
    </NavigationContainer>
  );
}



export default App;
