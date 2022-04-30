import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Profile from './../screens/Profile';

const Routes = () => {
	const Stack = createNativeStackNavigator();
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Home" component={Home} />
			<Stack.Screen name="Profile" component={Profile} />
		</Stack.Navigator>
	)
}

export default Routes

