import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StoreProvider, StoreContext } from "./src/store/DrinkStore";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, View,AsyncStorage } from 'react-native';
import { useFonts } from "@use-expo/font";

import MemberScreen from './src/screens/MemberScreen';
import StoreScreen from './src/screens/StoreScreen';
import MenuScreen from './src/screens/MenuScreen';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';

import { SplashScreen } from 'expo';

const PERSISTENCE_KEY = "ALBUMS_NAVIGATION_STATE";
const UpTab = createMaterialTopTabNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


const App = () => {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();

  let [fontsLoaded] = useFonts({
    segoeui: require("./assets/font/segoe-ui.ttf"),
  });
  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();
        const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
        const state = JSON.parse(savedStateString);
        setInitialNavigationState(state);
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }
    loadResourcesAndDataAsync();
  }, []);
  
  if (!isLoadingComplete|| !fontsLoaded) {
    return null;
  } else {
    return (
      <NavigationContainer
         initialState={initialNavigationState}
         onStateChange={(state) =>
          AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))
        }
      >
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused}) => {
              let iconPath;
  
              if (route.name === '首頁') {
                iconPath = focused
                ? require('./assets/icon_home_selected.png'):
                require('./assets/icon_home_unselected.png');
              }  else if (route.name === '菜單') {
                iconPath = focused
                ? require('./assets/icon_menu_selected.png'):
                require('./assets/icon_menu_unselected.png');
              }
              else if (route.name === '門市') {
                iconPath = focused
                ? require('./assets/icon_store_selected.png'):
                require('./assets/icon_store_unselected.png');
              } else if (route.name == '會員') {
                iconPath = focused
                ? require('./assets/icon_member_selected.png'):
                require('./assets/icon_member_unselected.png');
              }
  
              // You can return any component that you like here!
              return (
                <Image 
                  style={{width: 24, height: 24,marginTop:8}}
                  source={iconPath} 
                />
              );
            },
          })}
          tabBarOptions={{
            activeBackgroundColor:"#40230D",
            inactiveBackgroundColor:"#40230D",
            activeTintColor: '#F9D9A6',
            inactiveTintColor: '#FFF',
            
            labelStyle: {
              fontSize: 12,
              fontWeight: '700',
              fontFamily:"segoeui",
              marginTop: 0,
              padding: 0,
            },
          }}
        >
          <Tab.Screen name="首頁" component={HomeStack} />
          <Tab.Screen name="菜單" component={ MenuScreen} />
          <Tab.Screen name="門市" component={StoreScreen} />
          <Tab.Screen name="會員" component={MemberStack} />
          
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
 
}
const MemberStack = () => {
  return (
   <Stack.Navigator>
     
        <Stack.Screen 
          name="會員" 
          component={MemberScreen} 
          options={{
          
            headerShown: false
          }}
        />
         <Stack.Screen 
          name="LoginScreen" 
          component={LoginScreen} 
          options={{
           
            headerShown: false
          }}
        />
     
      </Stack.Navigator>
  );
}
const HomeStack = () => {
  return (
   <Stack.Navigator>
     
        <Stack.Screen 
          name="首頁" 
          component={HomeScreen} 
          options={{
          
            headerShown: false
          }}
        />
         <Stack.Screen 
          name="LoginScreen" 
          component={LoginScreen} 
          options={{
           
            headerShown: false
          }}
        />
     
      </Stack.Navigator>
  );
}
export default () => {
  return (
    <StoreProvider>
      <App />
    </StoreProvider>
  )
};

