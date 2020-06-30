import React from 'react';
import { StyleSheet, Text, View, Image,TouchableHighlight,TouchableOpacity, Button,Linking } from 'react-native';
import memberlist from'../json/memberlist.json';
import icon from "../json/icon.json"


const MemberDetail = ({memberlist}) => {
  return (
    <View style={{flex: 1,backgroundColor:"#F9D9A6" }}>
        <TouchableOpacity style={styles.mycard}>
         <View style={{flexDirection:"row"}}>
            <Image source={{uri:memberlist.img}} style={{width: 24, height: 24}}/>
            <Text style={styles.text}>{memberlist.text}</Text>
         </View>
        <View>
            <Image source={{uri:icon["arrow"]}} style={{width: 24, height: 24,marginRight:10}}/>
        </View>
       
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    mycard:{
        height:46,
        width:332,
        backgroundColor:"#FFFFFF",
        alignItems: "center",
        flexDirection:"row",
        paddingLeft:17,
        marginBottom:10,
        marginLeft:14,
        borderRadius:10,
        justifyContent:"space-between"
    },
    text:{
        fontSize:16,
        color:"#40230E",
        marginLeft:11,
        fontFamily:"segoeui",
    },
});

export default MemberDetail;