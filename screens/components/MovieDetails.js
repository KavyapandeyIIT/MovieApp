import { View, Text,Image,ImageBackground,ScrollView,StyleSheet,style} from 'react-native'
import React ,{useEffect,useState} from 'react'
import Styles from './Styles';
import detailsStyle from './detailsStyle';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator, StackView } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import MovieCategories from './MovieCategories';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import LinearGradient from 'react-native-linear-gradient'; 
import Ionicons from 'react-native-vector-icons/Ionicons';

const MovieDetails = (props) => {


  const cast=props.route.params.movieCast;
  const genre=props.route.params.movieGenres;
    


  
  const renderHeader=()=>{
    return(
      <ImageBackground
        source={{uri:props.route.params.movieBackdrop}}

        resizeMode="cover"

        style={{
          width:"100%",
          height:250
        }}
      >
        


        <View
        style={{
          flex:1,
          marginTop:210,
          alignItems:'center',
          flexDirection:'row'
        }}
        >

          {/* movie title */}
          <Text style={detailsStyle.movietitle}>{props.route.params.movieTitle}</Text>

<Text style={detailsStyle.movieimdb}><Ionicons name='star' color='yellow' size={20}/> {props.route.params.movieImdb_rating}</Text>
          

        </View>

      </ImageBackground>
    )
  }
  return (

    <ScrollView
    
    contentContainerStyle={{flex:1,backgroundColor:'black'}}
    style={{backgroundColor:'black'}}
    >
      {/*heading */}
      {renderHeader()}



      {/* genre */}
      <View style={{flexDirection:'row',marginTop:69}}>

        <Text style={detailsStyle.movieCast}>Genre:      </Text>
      {
      genre.map((data)=>{
        return(
<Text style={detailsStyle.movieCast}>{data}   </Text>
        )
        
      }
      )}
      </View>

      {/* released */}
      

      <Text style={detailsStyle.movieCast}>Release year: {props.route.params.movieReleased_on.substring(0,4)} </Text>

      {/* cast */}
      <View style={{flexDirection:'row'}}>

        <Text style={detailsStyle.movieCast}>Cast:      </Text>
      {
      cast.map((data)=>{
        return(
<Text style={detailsStyle.movieCast}>{data}   </Text>
        )
        
      }
      )}
      </View>

      {/* director */}

      <Text style={detailsStyle.movieCast}>Directed by:  {props.route.params.movieDirector}</Text>
      
      {/* overview */}
      <View>
        <Text style={detailsStyle.movieCast}>overview:</Text>
        <Text style={detailsStyle.movieCast}>{props.route.params.movieOverview}</Text>
      </View>
      





    </ScrollView>
    
    
  )
}

export default MovieDetails