
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { Image, View,AsyncStorage,StyleSheet } from 'react-native';
import TeaScreen from './TeaScreen'; 
import MilkTeaScreen from './MilkTeaScreen'; 
import FlavorScreen from './FlavorScreen'; 
import SeasonScreen from './SeasonScreen'; 
import MenuScreen from './MenuScreen';

const PERSISTENCE_KEY = "ALBUMS_NAVIGATION_STATE";
const UpTab = createMaterialTopTabNavigator();

import icon from "../json/icon.json"


const MenuStack = () => {
    return (
    
     
     <UpTab.Navigator
     tabBarOptions = {{
      activeTintColor: '#F6D6A4',
      inactiveTintColor: '#FFF',
      labelStyle: {
          fontWeight: '700',
          fontSize: 12,
          fontFamily:"segoeui",
      },
      indicatorStyle: {
        backgroundColor:'#40230D',
          borderBottomColor: '#F6D6A4',
          borderBottomWidth:2,
          
         
      },
     style: {
    
        backgroundColor:'#40230D',
      }
    }} >
       
         
           <UpTab.Screen
            name="原茶" 
            component={TeaScreen} 
            options={{
             
              headerShown: false
            }}
          />
         <UpTab.Screen
            name="鮮奶茶" 
            component={MilkTeaScreen} 
            options={{
              headerShown: false
            }}
          />
           <UpTab.Screen
            name="特調" 
            component={FlavorScreen} 
            options={{
             
              headerShown: false
            }}
          />
           <UpTab.Screen
            name="季節限定" 
            component={SeasonScreen} 
            options={{
              headerShown: false
            }}
          />    
        </UpTab.Navigator>
     
      
    );
  }
  const styles = StyleSheet.create({
    headerContentStyle:{
        height: 80 ,
        backgroundColor: "#40230D",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection:"row",
        elevation: 2,
        paddingTop:24
    },
    headerLeft:{
        width: "20%",
        paddingLeft:16,
    },
    headerMiddle:{
  
        width: "60%",
        alignItems: "center",
    },
    headerRight:{
       
        width: "20%", 
        paddingRight:16,
        alignItems: "flex-end",
    },
    titleStyle:{
        
        color:"#FFF",
        fontSize:18,
        fontWeight:"bold",
       
    }
  
  });
  export default MenuStack;