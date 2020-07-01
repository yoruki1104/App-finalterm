import React, { Component } from 'react';
import { useState, useEffect } from "react";
import { ScrollView } from 'react-native';
import { Image,StyleSheet,TouchableOpacity,View,Text,FlatList,TextInput,Dimensions } from 'react-native';
import icon from "../json/icon.json"
import shoplist from'../json/shoplist.json';
import ShopDetail from'../components/ShopDetail';
import MapView, { Marker } from "react-native-maps";
import metroJson from "../json/metro.json";
import Constants from "expo-constants";
import mapStyle from "../json/mapStyle.json";

// Make a component
const MeScreen = ({ navigation }) => {
  const screenWidth = Math.round(Dimensions.get('window').width);
  const [region, setRegion] = useState({
    longitude: 121.544637,
    latitude: 25.024624,
    longitudeDelta: 0.01,
    latitudeDelta: 0.02,
  });
  const [marker, setMarker] = useState({
    coord: {
      longitude: 121.543422,
      latitude: 25.026154,
    },
    name: "臺北捷運科技大樓站",
    address: "台北市大安區復興南路2段235號",
  });
  const [metro, setMetro] = useState(metroJson);
  const onRegionChangeComplete = (rgn) => {
    if (
      Math.abs(rgn.latitude - region.latitude) > 0.0002 ||
      Math.abs(rgn.longitude - region.longitude) > 0.0002
    ) {
      setRegion(rgn);
      setOnCurrentLocation(false);
    }
  };
  const [onCurrentLocation, setOnCurrentLocation] = useState(false);
  const setRegionAndMarker = (location) => {
    setRegion({
      ...region,
      longitude: location.coords.longitude,
      latitude: location.coords.latitude,
    });
    setMarker({
      ...marker,
      coord: {
        longitude: location.coords.longitude,
        latitude: location.coords.latitude,
      },
    });
  };
  const getLocation = async () => {
    let { status } = await Location.requestPermissionsAsync();
    if (status !== "granted") {
      setMsg("Permission to access location was denied");
      return;
    }
    let location = await Location.getCurrentPositionAsync({});
    setRegionAndMarker(location);
    setOnCurrentLocation(true);
  };

  useEffect(() => {
    if (Platform.OS === "android" && !Constants.isDevice) {
      setErrorMsg(
        "Oops, this will not work on Sketch in an Android emulator. Try it on your device!"
      );
    } else {
      getLocation();
    }
  }, []);
    return (
      <View style={{flex: 1,backgroundColor:"#F9D9A6" }}>
      <View style={styles.headerContentStyle}>
        <View  style={styles.headerLeft}>
            <Image source={{uri:icon.logo}}
             style={{width: 71, height: 30}}/>
        </View>
        <View style={styles.headerMiddle}>
            <TextInput placeholder="搜尋" placeholderTextColor="#9F9186" style={{color:"#40230E",fontFamily:"segoeui",}}/>
        </View>
        <TouchableOpacity style={styles.headerRight}>
               <Image source={{uri:icon["search"] }}
              style={{width: 24, height: 24}}/>
        </TouchableOpacity>
      </View>
      <ScrollView>
      <MapView style={{height:230,width:screenWidth,alignSelf:"center"}}
        region={region}
        showsTraffic
        onRegionChangeComplete={onRegionChangeComplete}
        provider="google"
        customMapStyle={mapStyle}
        >
           {metro.map((site) => (
          <Marker
            coordinate={{ latitude: site.latitude, longitude: site.longitude }}
            key={`${site.id}${site.line}`}
            title={site.name}
            description={site.address}
          >
            <Image
              source={require("../../img/metromrt_03.png")}
              style={{ width: 26, height: 28 }}
              resizeMode="contain"
            />
          </Marker>
        ))}
        </MapView>
        <View style={{alignSelf:'center'}}>
            <View style={{flexDirection:"row", }}>
                <Image source={{uri:icon.shop}} style={{width:24,height:24,marginTop:9,marginBottom:8}}/>
               <Text style={{fontSize:16,color:"#40230E",marginLeft:3,marginTop:10,marginBottom:10,fontFamily:"segoeui",}}>附近門市</Text>
             </View>
            <FlatList data={shoplist} 
                renderItem={({item})=> <ShopDetail
                shoplist={item}
                navigation={navigation}
              />}
                keyExtractor={(item,index) => index.toString()}
            />
        </View>
      
    </ScrollView>
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
      height:30,
      alignItems: "center",
      flexDirection:"row",
    backgroundColor:"#ffffff",
    borderRadius:10,
    paddingLeft:8,
    marginLeft:22,
    marginRight:14,
  },
  headerRight:{
      width: "20%", 
  },
  titleStyle:{
      
      color:"#FFF",
      fontSize:18,
      fontWeight:"bold",
     
  },

});
export default MeScreen;