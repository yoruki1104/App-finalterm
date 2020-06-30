import React, { createContext, useState, useEffect } from "react";
import { AsyncStorage } from "react-native";
import drinkData from "../json/tea.json";
import memberlist from "../json/memberlist.json"
export const StoreContext = createContext();

const drinkDetail = {
  
  detail: [
    {
      name: null,
      sweet: "全糖",
      sweetindex: 0,
      sugar: 0,
      cup: 0,
      ice: "正常",
      size:"M"
    }
  ]
};

const Data_PERSISTENCE_KEY = "Data_PERSISTENCE_KEY";
const DATA_ADD_KEY = "DATA_ADD_KEY";

// Make a Provider
export const StoreProvider = ({ children }) => {
  const [drinks, setDrinks] = useState(drinkData.menuList);
  const [drinkTemp, setdrinkTemp] = useState(drinkDetail);
  const [member, setMember] = useState(memberlist);
  const store = {
    drinkState: [drinks, setDrinks],
    drinkTempState: [drinkTemp, setdrinkTemp],
    memberState:[member, setMember]
  };

  const restoreState = async () => {
    try {
      const dataAddString = await AsyncStorage.getItem(DATA_ADD_KEY);
      const dataAdd = JSON.parse(dataAddString);
      if (dataAdd) {
        const dataString = await AsyncStorage.getItem(Data_PERSISTENCE_KEY);
        const state_drink = JSON.parse(dataString);
        setDrinks(state_drink);
      }
    } catch (e) { }
    try {
      const hasSetString = await AsyncStorage.getItem(HAS_SET_KEY);
      const hasSet = JSON.parse(hasSetString);
      if (hasSet) {
        const meString = await AsyncStorage.getItem(ME_PERSISTENCE_KEY);
        const state_member = JSON.parse(memberString);
        setMember(state_member);
      }
    } catch (e) {}
  };

  useEffect(() => {
    restoreState();
  }, []);

  return (
    <StoreContext.Provider value={store}>
      {children}
    </StoreContext.Provider>
  );
};

