import React, {useEffect, useState} from 'react';
import { View,Text,StyleSheet,Image,FlatList,Touchable,Button} from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import Loader from './Loader';
import Styles from './Styles';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Constants from 'expo-constants';
import { IconButton, Colors } from 'react-native-paper';


const MovieCategories= props=>{


    const [liked,setLiked]=useState([]);
    const[loading,setLoading]=useState(true);
    //const [ctname,setCtname]=useState("");
    const [movie,setMovie]=useState(null);


    const loop=(obj)=>{
        setMovie(obj);
        console.log(movie.movies[0])
    }
    useEffect(()=>{

      const getMovie=()=>{
        var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer Wookie2019");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://wookie.codesubmit.io/movies", requestOptions)
  .then(response => response.json())
  .then(result => loop(result))
  .catch(error => console.log('error', error));
  setLoading(false);
};

      getMovie();
    },[]);
    

    
    return (
      <View style={styles.container}>

        <Text style={Styles.homeheading}>Home Screen</Text>
     

        {loading ? (<Loader />):(
          <View style={styles.container}>

            {movie==null ? null : (

              <View>

  <Text style={Styles.heading}>18+ movies </Text>
                <FlatList
                    data={movie.movies.filter((obj)=>{
                      if(obj.classification=="18+"){
                        return true;
                      }
                      else{
                        return false
                      }
                    })}
                    renderItem={item=>displayImage(item,props,liked,setLiked)}
                    horizontal
                    />


<Text style={Styles.heading}>13+ movies </Text>
                <FlatList
                    data={movie.movies.filter((obj)=>{
                      if(obj.classification=="13+"){
                        return true;
                      }
                      else{
                        return false
                      }
                    })}
                    renderItem={item=>displayImage(item,props,liked,setLiked)}
                    horizontal
                    />

<Text style={Styles.heading}>7+ movies </Text>
                <FlatList
                data={movie.movies.filter((obj)=>{
                  if(obj.classification=="7+"){
                    return true;
                  }
                  else{
                    return false
                  }
                })}
                renderItem={item=>displayImage(item,props,liked,setLiked)}
                horizontal
                />
              </View>

            )}
          </View> 
        )}
        
        
      </View>
    );
        };

      const displayImage=({item},props,liked,setLiked)=>{
        
        
        const showLiked=()=>{
          
          
          //console.log(liked)
          return(
            setLiked([...liked,item])
            
            )
          
          
        
        }

        const ListofItems={movieId:item.id,movieCast:item.cast,movieDirector:item.director,movieGenres:item.genres,movieImdb_rating:item.imdb_rating,
          movieLength:item.length,movieOverview:item.overview,movieReleased_on:item.released_on,movieTitle:item.title,movieBackdrop:item.backdrop}
        return(
          <View>

<TouchableOpacity onPress={()=>{props.navigation.navigate("Details",ListofItems)}}>
              <Image

                  source={{uri:item.poster}}
                  style={Styles.posterImage}
                  />
                  <View style={{flexDirection:'row'}}>

                        {/* imbdrating */}
                  <View style={Styles.imdbBody1}>
                  <Text style={Styles.imdbText}><Ionicons name='star' color='yellow' size={13}/> {item.imdb_rating}

                  </Text>
                  
                  </View>

                  {/* genre */}

                  <View style={Styles.imdbBody2}>
                  <Text style={Styles.imdbText}>{item.genres[0]}

                  </Text>
                  
                  </View>


                  
                  {/* length */}
                  <View style={Styles.imdbBody3}>
                  <Text style={Styles.imdbText}>{item.length}

                  </Text>
                  
                  </View>
                  


                    
                  </View>
                  {/* movietitle and like button */}

                  
                  

                
          </TouchableOpacity>


          <View style={{flexDirection:'row'}}>
                    {/* title */}
                    <View style={{width:118}}>
                          <Text style={Styles.movieTitle}>{item.title}</Text>
                    </View>
                      

                      {/* like button */}
                      <View style={Styles.likebutton}>
                                  <IconButton
                                      icon="heart"
                                      color={Colors.white}
                                      size={20}
                                      onPress={showLiked}
                                  />
                      </View>

                      
                  </View>

          
            
          </View>

          
          
          
            
        )

      }

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#323232',
    alignItems:'center',
    justifyContent:'center',
    paddingTop:Constants.statusBarHeight
  },
  boldText:{
    fontWeight:'bold',
    color:'white',
    textDecorationColor: "white",
    textShadowColor: "red",
    textShadowRadius: 2,
    height:18,
    marginVertical:10,
    marginStart:10,
    marginTop:50,

  }

})
      


  export default  MovieCategories;