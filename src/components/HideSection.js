import React from "react";
import {
    View,Image,Text,TouchableOpacity,
  LayoutAnimation,
  TouchableWithoutFeedback,
  UIManager,
  StyleSheet,
  Platform
} from "react-native";
import { Input, ButtonGroup } from "react-native-elements";
import icon from "../json/icon.json"

import { StoreContext } from "../store/DrinkStore";
const sweetBtn = ['全糖', '少糖', '半糖', '微糖', '無糖'];
const iceBtn = ['正常', '少冰', '微冰', '去冰', '熱'];

import  { useState, useContext } from "react";
if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
  ) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
  

const HideSection= ({ expanded }) => {
    const [sweetindex, setSweet] = useState(0);
    const [iceindex, setIce] = useState(0);
    const { drinkTempState } = useContext(StoreContext);
    const [drinkTemp, setDrinkTemp] = drinkTempState;
    const [height, setHeight] = useState(expanded ? 0 : null);
    const [opacity,setOpacity]=useState(expanded ? 0 : null);
    const [display,setDisplay]=useState(expanded ? null : 'none');
    const onToggle = () => {
    LayoutAnimation.spring();
    setHeight(height === 0 ? null: 0);
    setOpacity(opacity === 0 ? null : 0);
    setDisplay(display === null ? 'none' :null );
   
  };

  return (
     

    <View style={{ marginLeft:16,marginTop:-6}}>
    <View style={[styles.buttonSecStyle, { height },{opacity}]}>
                   
                   <View style={[styles.buttonGroupStyle]}>
                     <Text style={{marginLeft:13, color: "#F6D6A4",fontFamily:"segoeui", }}>甜度</Text>
                     <ButtonGroup
                       buttons={sweetBtn}
                       onPress={(sweetindex, sweet) => {
                           setSweet(sweetindex);
                           sweet = sweetBtn[sweetindex];
                           setDrinkTemp({ ...drinkTemp, detail: { ...drinkTemp.detail, 0: { ...drinkTemp.detail[0], sweet, sweetindex } } });

                       }}
                       selectedIndex={sweetindex}
                       containerStyle={{
                           height: 30,
                           width: 270,
                           borderWidth: 0,
                           marginBottom: 5,
                           backgroundColor: '#40230D',
                       }}
                       buttonStyle={{
                           height: 24,
                           width:45,
                           backgroundColor: "#40230D",
                           borderColor: "#F6D6A4",
                           borderRadius: 20,
                           borderWidth: 1,
                       }}
                       selectedButtonStyle={{
                           backgroundColor: "#F6D6A4",
                           borderColor: "#F6D6A4",
                           
                       }}
                       textStyle={styles.buttonFontStyle}
                       selectedTextStyle={styles.selectedButtonFontStyle}
                       innerBorderStyle={{ width: 0 }}
                   />

                 </View>
                     
                   
                   <View style={[styles.buttonGroupStyle, { height }]}>
                       <Text style={{ marginLeft:13, color: "#F6D6A4" ,fontFamily:"segoeui",}}>冰塊</Text>
                     
                       <ButtonGroup
                           buttons={iceBtn}
                           onPress={(iceindex, ice) => { setIce(iceindex); ice = iceBtn[iceindex]; setDrinkTemp({ ...drinkTemp, detail: { ...drinkTemp.detail, 0: { ...drinkTemp.detail[0], ice } } }); }}
                           selectedIndex={iceindex}
                           containerStyle={{
                             height: 30,
                             width: 270,
                             borderWidth: 0,
                             marginBottom: 5,
                             backgroundColor: '#40230D',
                         }}
                         buttonStyle={{
                             height: 24,
                             width:45,
                             backgroundColor: "#40230D",
                             borderColor: "#F6D6A4",
                             borderRadius: 20,
                             borderWidth: 1,
                         }}
                         selectedButtonStyle={{
                             backgroundColor: "#F6D6A4",
                             borderColor: "#F6D6A4",
                             
                         }}
                         textStyle={styles.buttonFontStyle}
                         selectedTextStyle={styles.selectedButtonFontStyle}
                         innerBorderStyle={{ width: 0 }}
                       />
                       
                   </View>
                  
    </View>
     <TouchableOpacity 
            style={[styles.addCartBtnStyle]}
            onPress={() =>{
                onToggle();
             
            }
            }

 >
         <Image source={{uri:icon["unfold"] }}
             style={[{width: 24, height: 24,opacity:1,marginLeft:100},{display}]}/>
         <Image source={{uri:icon["add-shopping-cart"] }}
             style={[{width: 24, height: 24},{opacity}]}/>
        <Text style={[{  color: "#40230D" ,fontFamily:"segoeui",},{opacity}]}>加入購物車</Text>
 </TouchableOpacity>
</View>

  );
};


const styles = StyleSheet.create({
    buttonSecStyle:{
        height: 120,
        width: 328,
        backgroundColor: '#40230D',
        borderWidth: 1,
        alignContent:'center',
        opacity:1
      },
      buttonGroupStyle:{
        flexDirection:"row",marginTop:5,marginBottom:5,justifyContent:'center',alignItems:'center'
      },
      buttonStyle: {
          //flexDirection:'row',
          height: 30,
          width: 64,
          backgroundColor: "#FFFFFF",
          borderColor: "#FFB385",
          borderRadius: 2,
          borderWidth: 0.5,
          //padding:3
      },
      clickButtonStyle: {
          //flexDirection:'row',
          height: 30,
          width: 64,
          backgroundColor: "#FF612B",
          borderColor: "#FFB385",
          borderRadius: 2,
          borderWidth: 0.5,
          //padding:3
      },
      buttonFontStyle: {
          color: '#F6D6A4',
          fontSize: 12,
          fontFamily:"segoeui",
      },
      selectedButtonFontStyle: {
        color: '#40230D',
        fontSize: 12
      },
      addCartBtnStyle:{
        height: 40,
        width: 328,
        backgroundColor: '#FFF',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderWidth: 1,
        borderColor:"#fff",
        alignContent:'center',
        marginTop:0,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.1,
        shadowRadius:6,
        elevation: 6,
        marginBottom:10,
        flexDirection:"row",
      justifyContent:'center',
        alignItems:"center"
      },
  });
  
  export default HideSection;