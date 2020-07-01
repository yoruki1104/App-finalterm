import React,{Component} from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity,FlatList,ScrollView, ImageBackground,Alert,ToastAndroid,Linking } from 'react-native';
import icon from"../json/icon.json"
import { StoreContext } from "../store/DrinkStore";
import  { useState, useContext } from "react";
import ModalTester from '../components/ModalTest';
const HomeScreen = ({navigation})=>{
  const { memberState } = useContext(StoreContext);
  const [member, setMember] = memberState;
  
  return(
    <View style={{flex: 1,backgroundColor:"#F9D9A6"}}>
      <View style={styles.headerContentStyle}>
        <View style={styles.headerLeft}>
          <Image source={{uri:icon.logo}}
          style={{width:71,height:30}}/>
        </View>
     <View   style={styles.headerRight}>
       
     <ModalTester></ModalTester>
      <TouchableOpacity onPress={() => navigation.push('LoginScreen')}>
         <Image source={{uri:icon.assignment}}
         style={{width:24,height:24}}/>
      </TouchableOpacity>
      </View>  
     
      </View>
      <Text  style={{marginTop:10,marginBottom:10,fontSize:18,textAlign:"center",fontFamily:"segoeui",fontWeight:"bold",color:"#40230D"}}>您好，{member.name}</Text>
    <ScrollView>
 
      <View style={styles.picture_setting}>
       <ImageBackground source={{uri:"https://github.com/yoruki1104/App-finalterm/blob/master/img/img_cafe-1-black.jpg?raw=true"}}
               style={styles.image}>
         <Text style={styles.information}>店面資訊</Text>
         <TouchableOpacity style={styles.arrow}
         onPress={()=>Linking.openURL("https://www.milkshoptea.com/about.php")}
         >
            <Text style={styles.information_2}>了解更多 ></Text>
         </TouchableOpacity>
       </ImageBackground>  
      </View>
      <View style={styles.picture_setting}>
        <ImageBackground source={{uri:"https://github.com/yoruki1104/App-finalterm/blob/master/img/img_cafe-2-black.jpg?raw=true"}}
          style={styles.image}>
              
            <Text style={styles.information}>最近活動</Text>
         <TouchableOpacity style={styles.arrow}
          onPress={()=>Linking.openURL("https://www.milkshoptea.com/news.php?cID=1")}
         >
            <Text style={styles.information_2}>了解更多 ></Text>
         </TouchableOpacity>
        </ImageBackground>  
      </View>
      <View style={styles.picture_setting2}>
        <ImageBackground source={{uri:"https://github.com/yoruki1104/App-finalterm/blob/master/img/img_cafe-3-black.jpg?raw=true"}}
          style={styles.image}>
            <Text style={styles.information}>最新飲品</Text>
         <TouchableOpacity style={styles.arrow}
          onPress={()=>Linking.openURL("https://www.milkshoptea.com/news.php?cID=2")}
         >
             <Text style={styles.information_2}>了解更多 ></Text>
         </TouchableOpacity>
        </ImageBackground>  
      </View>
     
    </ScrollView>
   
     </View>
  );
 
}
const styles=StyleSheet.create({

  headerContentStyle:{
    height:80,
    backgroundColor:"#40230D",
    justifyContent: "space-between",
    alignItems:"center",
    flexDirection:"row",
    elevation:2,
    paddingTop:24,

    
  },
  headerLeft:{
    width:"20%",
    paddingLeft:16,
    
  },
  headerRight:{
    flexDirection:"row",
    paddingRight:16,
    width:"22%",
    justifyContent:"space-between"
  },
  headerRight_1:{
    width:"12%",
  
    paddingRight:5,
  },
  titleStyle:{
    color:"#FFF",
    fontSize:18,
    fontWeight:"bold",
    
  },
  picture_setting:{
    height:200,
    marginBottom:8,
    justifyContent:"flex-start",
  },
  picture_setting2:{
    height:200,
    marginBottom:0,
    justifyContent:"flex-start",
  },
  image:{
    height:200,
  },
  arrow:{
   alignSelf:'flex-end',
    width:120,
    height:35,
    backgroundColor:"#40230D",
    borderRadius:20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 14,
    shadowRadius:3,
    elevation: 3,
    justifyContent:"center",
    marginRight:16,
    marginTop:90,
  },
  information:{
     
    paddingTop:20,
   paddingLeft:16,
    fontSize:20,
    color:"#FFF",
    fontFamily:"segoeui"
  },
  information_2:{
    textAlign:'center',
  
   fontSize:16,
   color:"#FFF", 
   fontFamily:"segoeui"
  },
 
});
export default HomeScreen;  