import React, {useState} from 'react';
import {Button, Text, View,Image} from 'react-native';
import Modal from 'react-native-modal';
import{useRef} from 'react';
import { Animated, Easing,StyleSheet,ToastAndroid, Alert,TouchableOpacity  } from 'react-native';
import LottieView from 'lottie-react-native';
import icon from"../json/icon.json"

  

function ModalTester() {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const animation=useRef(null);
  const onPress=()=>{
    animation.current.play();

  };
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000
    }).start();
  };
  const fadeIn3000 = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000
    }).start();
  };
  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 10
    }).start();
  };
  const onPressFadeIn=()=>{
     onPress();
    fadeIn();

  };
  const toggleFadeOut=()=>{
   
   fadeOut();
   toggleModal();

 };

 const FadeOutIn=()=>{
   
   fadeOut();
   onPress();
   fadeIn3000();

 };
    return (
      <View style={{flex: 1}}>
        <TouchableOpacity 
            
            onPress={toggleModal} >
            <Image source={{uri:icon.change}}
               style={{width:24,height:24}}/>
        </TouchableOpacity>
        

        <Modal isVisible={isModalVisible}
            animationInTiming={1200}
            animationOutTiming={1000}
        >
          <View style={{flex: 1,justifyContent:"center", alignItems:"center"}}>
          <View style={styles.container}>
             <LottieView 
                 ref={animation}
                 source={require('../json/animation.json')}
                 loop={false}
            />
            <TouchableOpacity 
                style={{width:200,height:40,backgroundColor:"#F9D9A6",borderRadius:20,justifyContent:"center"}}
                onPress={onPressFadeIn}>
                     <Text style={styles.playBtnText}>今天要喝什麼呢?</Text>
            </TouchableOpacity>
          
            </View>
       
            <Animated.View
                style={[
                 styles.fadingContainer,
                 {
                     opacity: fadeAnim // Bind opacity to animated value
                 }
                 ]}
                >
                <Text style={styles.fadingText}>珍珠奶茶</Text>
             </Animated.View>
             
            <View  style={{ alignItems:"center",}}>
                <TouchableOpacity style={{width:200,height:40,backgroundColor:"#40230E",borderRadius:20, justifyContent:"center",}}  
                onPress={toggleFadeOut}>
                     
                    <Text style={styles.addCartBtnText}>好哇，加入購物車</Text>
                   
                </TouchableOpacity>
                <TouchableOpacity style={{width:200,height:40,backgroundColor:"#40230E",borderRadius:20, justifyContent:"center",marginTop:15}}  
                onPress={FadeOutIn}>
                     
                    <Text style={styles.addCartBtnText}>不要，重新選擇</Text>
                   
                </TouchableOpacity>
            </View>
            
          </View>
        </Modal>
      </View>
    );
 
}
const styles=StyleSheet.create({
    container:{
      width:320,
      height:360,
      alignItems:"center",
      
      
    },
    playBtnText:{
        color:"#40230E",
        fontSize:16,
        textAlign:"center",
        justifyContent:"center",
       fontWeight:"bold",
        fontFamily:"segoeui"
    },
    addCartBtnText:{
        color:"#F9D9A6",
        fontSize:16,
        textAlign:"center",
        justifyContent:"center",
        marginTop:0, 
        fontFamily:"segoeui",
    },
    fadingContainer: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        marginTop:-80,
        marginBottom:20
      },
      fadingText: {
        color:"#fff",
        fontSize:20,
        textAlign:"center",
        fontFamily:"segoeui"
      },
      buttonRow: {
        flexDirection: "row",
        marginVertical: 16
      }
  })
export default ModalTester;