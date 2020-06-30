import React from "react";
import { Avatar, Badge, Icon, withBadge } from 'react-native-elements'
import { Input, ButtonGroup } from "react-native-elements";
import icon from "../json/icon.json"
import HideSection from "./HideSection"
const COUNTER_KEY = "COUNTER_KEY";
import { View, FlatList ,StyleSheet,Image,Text,TouchableOpacity,Alert,LayoutAnimation,TouchableWithoutFeedback,UIManager,} from "react-native";
import { StoreContext } from "../store/DrinkStore";
const sweetBtn = ['全糖', '少糖', '半糖', '微糖', '無糖'];
const iceBtn = ['正常', '少冰', '微冰', '去冰', '熱'];
const sizeBtn = ['M', 'L'];
import  { useState, useContext,useEffect } from "react";

const DrinkDetail = ({ drink, navigation }) => {
 
    const [sizeindex, setSize] = useState(0);
    const { drinkTempState } = useContext(StoreContext);
    const [drinkTemp, setDrinkTemp] = drinkTempState;
    const [count, setCount] = React.useState(0);


  const saveToAsyncStorage = () => {
    try {
      AsyncStorage.setItem(COUNTER_KEY, JSON.stringify(count));
    } catch (error) {
      // Error saving data
    }
   
  };
  const restoreState = async () => {
    try {
      const savedStateString = await AsyncStorage.getItem(COUNTER_KEY);
      const state = JSON.parse(savedStateString);
      setCount(state);
    } catch (e) {}
  };

  React.useEffect(() => {
    restoreState();
  }, []);

  React.useEffect(() => {
    saveToAsyncStorage();
  }, [count]);
  


  return (
    <View  style={{ flex:1,backgroundColor:"#F9D9A6"}}>
     
       <View style={styles.cardContainerStyle}>
         <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
            <Image
              style={styles.thumbnailStyle}
              source={{ uri: drink.image }}
          />
          
         <View style={{ justifyContent:"space-between" ,flexDirection:"row",width:240}}>
           <View  style={styles.midSecStyle}>
            <Text style={{color:"#40230D",fontSize:16,fontFamily:"segoeui",}}>{drink.name}</Text>
            <View  style={styles.sizeBtnContainerStyle}>
            <ButtonGroup
                                    buttons={sizeBtn}
                                    onPress={(sizeindex, size) => { setSize(sizeindex); size = sizeBtn[sizeindex]; setDrinkTemp({ ...drinkTemp, detail: { ...drinkTemp.detail, 0: { ...drinkTemp.detail[0], size } } }); }}
                                    selectedIndex={sizeindex}
                                    containerStyle={{
                                      height: 24,
                                      width: 80,
                                      borderWidth: 0,
                                      marginLeft: 0,
                                      marginTop:8,
                                      backgroundColor: '#FFF',
                                  }}
                                  buttonStyle={{
                                      height: 24,
                                      width:24,
                                      backgroundColor: "#FFF",
                                      borderColor: "#40230D",
                                      borderRadius: 20,
                                      borderWidth: 1,
                                  }}
                                  selectedButtonStyle={{
                                      backgroundColor: "#40230D",
                                      borderColor: "#40230D",
                                      
                                  }}
                                  textStyle={{color:'#40230D',fontSize:16,fontFamily:"segoeui", }}
                                  selectedTextStyle={{color:'#F6D6A4' }}
                                  innerBorderStyle={{ width: 0 }}
                                />
             
              
            </View>
           </View>
           <View  style={styles.leftSecStyle}>
             
             <Text style={{color:"#40230D",fontSize:16,fontFamily:"segoeui",}}>{drink.price}</Text>
             <View style={styles.amountSecStyle}>
               <TouchableOpacity 
               
                title="Simple Alert"
                onPress={() => {
                  if(count === 0) return;
                 setCount(count-1);
               
                 
                 
                }
                }>
                   <Image source={{uri:icon["delete-btn"]}}  style={{ width:24,height:24}}/>
             </TouchableOpacity>
             <Text style={{ fontSize:16,paddingLeft:8,paddingRight:8 ,fontFamily:"segoeui",}}>{count}</Text> 
             
             <TouchableOpacity 
               
                 title="Simple Alert"
                 onPress={() => {
                  setCount(count + 1);
               
                 
                }
                  }>
                     <Image source={{uri:icon["add-btn"]}}  style={{ width:24,height:24}}/>
              </TouchableOpacity>
              
             </View>
           
            </View>
           </View>
       
        
          </View>
       </View>
      
       <HideSection
            expanded="false"
       
       >
       </HideSection>
 
      
        
    </View>
  
  )
};
const styles = StyleSheet.create({
 
  thumbnailContainerStyle: {
    flexDirection: "row",
    justifyContent: "flex-start",
    
  },
  thumbnailStyle: {
    height: 56,
    width: 56,
    marginTop:0
  },
  headerContentStyle: {
    flexDirection: "column",
    justifyContent: "space-around",
    paddingLeft: 10
  },
  cardContainerStyle: {

    alignItems:"center",
    backgroundColor:"#F9D9A6",
    
  },
  cardSectionStyle: {
  
    width:328,
    height:84,
    padding: 10,
    backgroundColor: "#FFF",
    borderColor: "#FFF",
    borderBottomWidth: 1,
    borderWidth: 1,
    borderTopRightRadius: 10,
    borderTopLeftRadius:10,
    marginTop: 14,
    marginBottom:0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius:3,
    elevation: 2,
  },
  imageStyle: {
    height: 300,
    width: null
  },
  midSecStyle:{
    flexDirection:"column",
    justifyContent:"center",
    marginLeft:16
  },
  sizeBtnContainerStyle:{
  
    flexDirection:"row",
    marginTop:0
   
  },
  sizeBtn:{
    width:24,
    height:24,
    marginRight:16
  },
  leftSecStyle:{
    flexDirection:"column",
    justifyContent:"center",
   alignItems:"flex-end",
   

  },
  amountSecStyle:{
    flexDirection:"row",
    paddingTop:8
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
},

});
export default DrinkDetail;