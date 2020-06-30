import React from "react";
import { View, FlatList ,StyleSheet,Image,Text,TouchableOpacity} from "react-native";
import { Avatar, Badge, Icon, withBadge } from 'react-native-elements'
import Header from "../components/Header";
import DrinkDetail from "../components/DrinkDetail";
import albumData from "../json/albums.json";
import teaList from "../json/tea.json"
import icon from "../json/icon.json"
import { StoreContext } from "../store/DrinkStore";
import  { useState, useContext } from "react";
const TeaScreen = ({ navigation }) => {
  const {  drinkState } = useContext(StoreContext);
  const [drinks, setDrinks] = drinkState;
  return (
    <View style={{ flex: 1 }}>
      
      <FlatList
        data={teaList.menuList}
        renderItem={({ item }) =>
          <DrinkDetail
            drink={item}
            key={item.id}
            navigation={navigation}
          />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
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
export default TeaScreen;
