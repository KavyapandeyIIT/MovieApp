import React, { useContext, useState } from "react";
import { View,Text,StyleSheet,Button} from "react-native";
import MovieCategories from "./components/MovieCategories";
import {liked} from "./components/MovieCategories";
import Ionicons from 'react-native-vector-icons/Ionicons'
import { IconButton, Colors } from 'react-native-paper';


const LikedScreen= ({navigation},props)=>{
  const [likked,setLiked]=useState();
    console.log(".................likedwala..............")
    
    console.log(props)
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>This is list</Text>
        <IconButton
    icon="heart"
    color={Colors.white}
    size={20}
    onPress={() => console.log('Pressed')}
  />
      </View>
    );
  }

  const Pressdicon=()=>{

  }

  export default LikedScreen;