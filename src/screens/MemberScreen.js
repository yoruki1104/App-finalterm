import React from "react";
import { ScrollView } from 'react-native';
import { Image,StyleSheet,TouchableOpacity,View,Text,TextInput,FlatList } from 'react-native';
import icon from "../json/icon.json"
import memberlist from "../json/memberlist.json"
import MemberDetail from'../components/MemberDetail';
import { StoreContext } from "../store/DrinkStore";
import  { useState, useContext,useEffect } from "react";
const ME_PERSISTENCE_KEY = "ME_PERSISTENCE_KEY";
const HAS_SET_KEY = "HAS_SET_KEY";

// Make a component
const SettingsScreen = ({ navigation }) => {
    const { memberState } = useContext(StoreContext);
    const [member, setMember] = memberState;
    const saveToAsyncStorage = () => {
        try {
          AsyncStorage.setItem(ME_PERSISTENCE_KEY, JSON.stringify(member));
          AsyncStorage.setItem(HAS_SET_KEY, JSON.stringify(true));
        } catch (error) {
          // Error saving data
        }
      };
    
      useEffect(() => {
        saveToAsyncStorage();
      }, [member]);
    return (
      <View style={{flex: 1,backgroundColor:"#F9D9A6" ,fontFamily:"segoeui",}}>
        <View style={styles.headerContentStyle}>
          <View  style={styles.headerLeft}>
              <Image source={{uri:icon.logo}}
               style={{width: 71, height: 30}}/>
          </View>
         < View style={styles.headerRight}>
            <TouchableOpacity>
              <Image source={{uri:icon["mail"] }}
                style={{width: 24, height: 24}}/>
              </TouchableOpacity>
             <TouchableOpacity  onPress={() => navigation.push('LoginScreen')}>
                <Image source={{uri:icon["assignment"] }}
                style={{width: 24, height: 24}}/>
             </TouchableOpacity>
         </View>
        
       
      </View>
        <ScrollView style={{alignSelf:"center"}}>
        <TouchableOpacity style={styles.personal}>
        <Image source={{uri:icon["personal"]}} style={{width: 36, height: 36}}/>
        <TextInput 
        
        placeholder="茶蘼" 
        placeholderTextColor="#9F9186"
        value={member.name}
        onChangeText={(name) => setMember({ ...member, name})}
        style={styles.textname} 
         />
        </TouchableOpacity>
        <FlatList data={memberlist.memberList} 
    renderItem={({item})=> <MemberDetail
    memberlist={item}
    navigation={navigation}
    />}
    keyExtractor={(item,index) => index.toString()}
    />
         
        </ScrollView> 
  </View>
    );
}
const styles = StyleSheet.create({
  headerContentStyle:{
      height: 80 ,
      backgroundColor: "#40230D",
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection:"row",
      elevation: 2,
      paddingTop:24
  },
  headerLeft:{
      width: "20%",
      paddingLeft:16,
  },
  
  headerRight:{
    flexDirection:"row",
    paddingRight:16,
    width:"22%",
    justifyContent:"space-between"
  },
  titleStyle:{
      
      color:"#FFF",
      fontSize:18,
      fontWeight:"bold",
     
  },
  personal:{
      height:53,
      alignItems: "center",
      flexDirection:"row",
      marginLeft:14,
      
  },
  textname:{
      fontSize:16,
      color:"#40230E",
      fontWeight:"bold",
      marginLeft:7,
      fontFamily:"segoeui",
      
  },
});
export default SettingsScreen;