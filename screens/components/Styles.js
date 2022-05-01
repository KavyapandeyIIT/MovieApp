import {Dimensions, StyleSheet} from 'react-native';
import Constant from './Constant';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const Styles = StyleSheet.create({
  sectionBg: {
    backgroundColor: Constant.baseColor,
    height: deviceHeight,
  },
  imdbText:{
      color:'white',
      fontWeight:'bold',
      marginLeft:0

  },
  imdbBody1:{
    backgroundColor:'grey',
    margin:10,
    marginRight:0,
    width:42,
    borderRadius:5,
    flexDirection:'row',
    justifyContent:'center',
    paddingVertical:0,
    alignItems:'center'

},
  
  imdbBody2:{
      backgroundColor:'grey',
      margin:10,
      marginRight:5,
      width:70,
      borderRadius:5,
      flexDirection:'row',
      justifyContent:'center',
      paddingVertical:0,
      alignItems:'center'

  },
  imdbBody3:{
    backgroundColor:'grey',
    margin:10,
    marginLeft:5,
    width:69,
    borderRadius:5,
    flexDirection:'row',
    justifyContent:'center',
    paddingVertical:0,
    alignItems:'center'

},

likebutton:{
    marginLeft:60,
    marginTop:0

},

homeheading:{
    color:'white',
    fontWeight:'bold',
    fontSize:26

},
  trendingPeopleImage: {
    height: 70,
    width: 70,
    borderRadius: 500,
  },
  trendingPeopleName: {
    width: 60,
    color: Constant.textColor,
    fontSize: 12,
    textAlign: 'center',
    marginTop: 2,
  },
  trendingPeopleContainer: {
    margin: 10,
  },
  heading: {
    fontSize: 19,
    color: 'grey',
    margin: 2,
    fontWeight:'bold'
  },
  posterImage: {
    width:200,
    height:120,
    borderRadius: 12,
    marginRight:33,
    marginLeft:12
  },
  movieTitle: {
    color: Constant.textColor,
    textAlign:'center',
    width: 100,
    marginTop: 0,
    marginLeft:10,
    fontSize: 15,
    fontWeight: 'bold',
  },
  imageBg: {
    width: deviceWidth,
    height: 250,
  },
  detailsMovieTitle: {
    fontSize: 28,
    color: Constant.textColor,
    textAlign: 'center',
    marginTop: -40,
  },
  linkContainer: {
    backgroundColor: Constant.secondaryColor,
    borderRadius: 100,
    padding: 10,
    width: 45,
    marginLeft: 20,
    marginTop: -20,
  },
  overview: {
    color: Constant.textColor,
    marginHorizontal: 10,
    textAlign: 'justify',
    fontSize: 16,
  },
  details: {
    color: Constant.secondaryColor,
    fontSize: 15,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  detailsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  genreContainer: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Constant.textColor,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 10,
  },
  genre: {
    color: Constant.textColor,
    fontSize: 16,
  },
});

export default Styles;
