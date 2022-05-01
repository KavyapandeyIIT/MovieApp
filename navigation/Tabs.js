import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator, StackView } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import LikedScreen from '../screens/LikedScreen';
import MovieDetails from '../screens/components/MovieDetails';
import Ionicons from 'react-native-vector-icons/Ionicons'
const Stack=createStackNavigator();

const Tab = createBottomTabNavigator();
const Tabs=()=>{
    return(
        <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === "HomeScreen") {
                    iconName = focused ? 'home' : 'home-outline';
                } else if (route.name === "Liked") {
                    iconName = focused ? 'star' : 'star-outline';
                }

                return <Ionicons name={iconName} size={size} color={color} />;
            },
        })}
        tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
                
        }}>
            <Tab.Screen name="HomeScreen" component={Detail}
            options={{headerShown:false}} />
            <Tab.Screen name="Liked" component={LikedScreen}/>

        </Tab.Navigator>

    );
}


const Detail=()=>{
    return(
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen}
                options={{headerShown:false}}/>
                <Stack.Screen name="Details" component={MovieDetails}
                />
            </Stack.Navigator>
    )
}



export default Tabs;