import React,{Component} from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity,FlatList,ScrollView, ImageBackground,Alert,ToastAndroid,Linking } from 'react-native';
import icon from"../json/icon.json"
import { StoreContext } from "../store/DrinkStore";
import  { useState, useContext } from "react";
import ModalTester from '../components/ModalTest.js';
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
       
      <TouchableOpacity style={styles.headerMiddle}
      onPress={()=>Alert.alert('今天就來喝杯','珍珠奶茶',[
        {text:'不要，再重選一杯',onPress:()=>ToastAndroid.show('重新選擇',ToastAndroid.SHORT)},
        {text:'好哇，加入購物車',onPress:()=>ToastAndroid.show('已成功加入一項商品至購物車!',ToastAndroid.SHORT)}
    ])}

      >
        <Image source={{uri:icon.change}}
        style={{width:24,height:24}}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.headerRight}>
        <Image source={{uri:icon.assignment}}
        style={{width:24,height:24}}/>
      </TouchableOpacity>
      </View>
      <Text  style={{marginTop:10,marginBottom:10,fontSize:18,textAlign:"center",fontFamily:"segoeui",fontWeight:"bold",color:"#40230D"}}>您好，{member.name}</Text>
    <ScrollView>
 
      <View style={styles.picture_setting}>
       <ImageBackground source={{uri:"https://github.com/ciel0412/mid/blob/master/img/img_cafe-1.jpg?raw=true"}}
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
        <ImageBackground source={{uri:"https://github.com/ciel0412/mid/blob/master/img/img_cafe-2.jpg?raw=true"}}
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
        <ImageBackground source={{uri:"https://github.com/ciel0412/mid/blob/master/img/img_cafe-3.jpg?raw=true"}}
          style={styles.image}>
            <Text style={styles.information}>最新飲品</Text>
         <TouchableOpacity style={styles.arrow}
          onPress={()=>Linking.openURL("https://www.milkshoptea.com/news.php?cID=2")}
         >
             <Text style={styles.information_2}>了解更多 ></Text>
         </TouchableOpacity>
        </ImageBackground>  
      </View>
      <ModalTester></ModalTester>
    </ScrollView>
     </View>
  );
 
}
const styles=StyleSheet.create({

  headerContentStyle:{
    height:80,
    backgroundColor:"#40230D",
    justifyContent:"flex-start",
    alignItems:"center",
    flexDirection:"row",
    elevation:2,
    paddingTop:24
    
  },
  headerLeft:{
    width:"20%",
    paddingLeft:16,
    
  },
  headerMiddle:{
    marginLeft:200,
  },
  headerRight:{
    marginLeft:21,

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
    marginLeft:220,
    marginTop:100,
    width:120,
    height:35,
    backgroundColor:"#40230D",
    borderRadius:20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 14,
    shadowRadius:3,
    elevation: 3,
   
  },
  information:{
     
    paddingTop:20,
    paddingLeft:10,
    fontSize:18,
    color:"#FFF",
    fontFamily:"segoeui"
  },
  information_2:{
    paddingLeft:15,
    paddingTop:5,
   fontSize:16,
   color:"#FFF", 
   fontFamily:"segoeui"
  },
 
});
export default HomeScreen;  