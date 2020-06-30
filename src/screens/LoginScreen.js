import React from "react";

import { StyleSheet, Text, View, Image,ScrollView, ImageBackground,
         TouchableOpacity,TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, 
        Keyboard, Platform } from 'react-native';
import icon from "../json/icon.json"


// Make a component
const LoginScreen = ({ navigation }) => {
    return (
        
    <KeyboardAvoidingView
      style={{backgroundColor:"#F9D9A6",flex:1}}
      behavior="padding"
        > 
        
        <View style={styles.scroview}>
            <View style={styles.logo}> 
                <Image source={{uri:icon["logoimg"]}}style={{width:260,height:170}}/>
            </View> 
        
            <View style={styles.mycard}>
                <View style={styles.mycard_left}> 
                     <Image source={{uri:icon["account"]}}style={{width:24,height:24}}/>
                     <Text style={styles.information}>帳號</Text>
                </View>
                <View style={styles.inputbox}>
                     <TextInput 
                        placeholder="abc@gmail.com"
                        placeholderTextColor="#9F9186"
                        style={{  fontFamily:"segoeui"  }} 
                    />
                 </View>
          
            </View>
           
            <View style={styles.mycard}>
                <View style={styles.mycard_left}> 
                    <Image source={{uri:icon["lock"]}}style={{width:24,height:24}}/>
                    <Text style={styles.information}>密碼</Text>
                </View>  
                <View style={styles.inputbox_2}>
                    <TextInput
                        placeholder="請輸入6個字元以上"
                        placeholderTextColor="#9F9186"
                        secureTextEntry
                        maxLength={8}
                        style={{  fontFamily:"segoeui"  }} 
                    />    
                </View>   
            </View>
     
      <TouchableOpacity style={styles.in} onPress={() => navigation.goBack()}>
          <Text style={styles.inname}>登入</Text>
      </TouchableOpacity>
      <View style={styles.information_2}>
            <Text style={styles.join}>還沒加入會員嗎?</Text>
            <TouchableOpacity>
                <Text style={styles.join_2}>加入我們</Text>
            </TouchableOpacity>
            
      </View>   
    </View>  
    
 </KeyboardAvoidingView>   
    );
}
const styles = StyleSheet.create({
    scroview:{
        backgroundColor:"#F9D9A6",
        flex:1
   
        
    },
       logo:{
        
         marginTop:60,
        
         alignItems:"center",
         
         
   
       },
       mycard:{
         width:312,
         height:50,
         marginLeft:22,
         backgroundColor:"#FFFFFF",
         alignItems: "center",
         flexDirection:"row",
        
         marginTop:20,
         borderRadius:10,
   
       },
       mycard_left:{
        width:96,
        height:50,
        backgroundColor:"#40230D",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10,
        
      },
      
       information:{
           color:"#F9D9A6",
           fontSize:16,
           fontWeight:"bold",
           fontFamily:"segoeui",
           marginLeft:7
       },
   in:{
       width:312,
       height:50,
       backgroundColor:"#40230D",
       alignItems:"center",
       borderRadius:10,
       marginLeft:20,
       marginTop:20,
       
   },
   inname:{
       fontSize:18,
       textAlign:"center",
       color:"#F9D9A6",
       fontWeight:"bold",
       marginTop:12,
       fontFamily:"segoeui",
   },
   information_2:{
      textAlign:"center",
      justifyContent:"center",
       marginTop:17,
       flexDirection:"row",
     
   },
   join:{
       fontSize:18,
       color:"#40230D",
       fontWeight:"bold",
       fontFamily:"segoeui",
   
   },
   join_2:{
       fontSize:18,
       color:"#40230D",
       fontWeight:"bold",
       textDecorationLine:"underline",
       fontFamily:"segoeui",
   },
   inputbox:{
   marginLeft:15,
   width:200
   
    },
    inputbox_2:{
        marginLeft:15,
    },
   
    
      
     },
   
);
export default LoginScreen;