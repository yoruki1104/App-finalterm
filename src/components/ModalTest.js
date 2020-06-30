import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import Modal from 'react-native-modal';

import{useRef} from 'react';
import { Animated, Easing,StyleSheet,ToastAndroid, Alert } from 'react-native';
import LottieView from 'lottie-react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

function ModalTester() {
  const [isModalVisible, setModalVisible] = useState(false);
  
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const animation=useRef(null);
  const onPress=()=>{
    animation.current.play();
  };
  
    return (
      <View style={{flex: 1}}>
        <Button title="Show modal" onPress={toggleModal} />

        <Modal isVisible={isModalVisible}>
          <View style={{flex: 1}}>
          <View style={styles.container}>
             <LottieView 
                 ref={animation}
                 source={require('../json/animation.json')}
                 loop={false}
            />


            <Button style={{color:"#fff",width:30,height:30,backgroundColor:"red"}} title="今天要喝什麼呢?" onPress={onPress} />
          
      </View>
            <Text style={{color:"#fff",fontSize:20,textAlign:"center"}}>珍珠奶茶</Text>
            
            <Button title="好哇，加入購物車" onPress={toggleModal} 
            
            
            />
          </View>
        </Modal>
      </View>
    );
 
}
const styles=StyleSheet.create({
    container:{
      width:320,
      height:360,
      
    },
    button:{
      width:50,
      height:50,
      backgroundColor:"#F9D9A6",
      marginLeft:50,
      marginTop:100,
      
    }
  
  })
export default ModalTester;