import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Image,StyleSheet,TouchableOpacity,View,Text } from 'react-native';
import icon from "../json/icon.json"
import MenuStack from './MenuStack'
import  { useState, useContext } from "react";
import { StoreContext } from "../store/DrinkStore";

const MenuScreen = ({ album, navigation }) => {
    return (
        <View style={{flex: 1,backgroundColor:"#F9D9A6" }}>
            <View style={styles.headerContentStyle}>
                <View  style={styles.headerLeft}>
                    <Image source={{uri:icon.logo}}
                     style={{width: 71, height: 30}}/>
                </View>
                <View style={styles.headerMiddle}>
                    <Text  style={styles.titleStyle}>菜單</Text>
                </View>
                <TouchableOpacity style={styles.headerRight}>
                    <View  style={styles.circle}>
                        <Text style={{color:"#40230D",fontSize:10,fontFamily:"segoeui" }}>0</Text>
                    </View>
                     <Image source={{uri:icon["shopping-cart"] }}
                      style={{width: 24, height: 24}}/>
                </TouchableOpacity>
               
            </View>
            <MenuStack></MenuStack>
        
        </View>
       
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
        fontFamily:"segoeui",
       
    },
    containerStyle:{
        flexDirection:"column",
       
        marginTop:50,
        marginRight:16,
        marginLeft:16
    },
    sectionStyle:{
        flexDirection:"row",
        justifyContent:"space-between",
        
    },
    cardStyle:{
        
        flexDirection:"column",
        justifyContent:"center",
      
    },
    imageStyle: {
      height: 165,
      width: 165
    },
    textStyle: {
       color:"#40230D",
       fontSize:18,
       textAlign:"center"
      },
    circle:{
        backgroundColor:"#F6D6A4",
        height:12,
        width:12,
        borderRadius:10,
        marginRight:5,
        justifyContent:'center',
        alignItems:'center'
      }
  });
export default MenuScreen;
