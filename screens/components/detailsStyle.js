import {Dimensions, StyleSheet} from 'react-native';

const detailsStyle=StyleSheet.create({
    Dropback:{
        height:100,
        width:100
    },

    movietitle:{
        color:'white',
        fontWeight:'bold',
        fontSize:26,
        flexDirection:'row',
        marginTop:100
    },

    movieimdb:{
        color:'white',
        fontWeight:'bold',
        fontSize:18,
        marginLeft:72,
        marginTop:100
    },
    movieCast:{
        color:'white',
        fontWeight:'bold',
        fontSize:10,
        marginTop:10
    }

})


export default detailsStyle;