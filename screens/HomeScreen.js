import React, {useEffect, useState} from 'react';
import { View,Text,StyleSheet,Button,Image,FlatList} from "react-native";
import MovieCategories from './components/MovieCategories';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator, StackView } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';



const HomeScreen= (props)=>{
  return(
<MovieCategories navigation={props.navigation}/>

  

  )
}

  export default HomeScreen;