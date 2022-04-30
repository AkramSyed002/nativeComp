import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import MyButton from '../component/MyButton'
import screensNavigation from '../constant/screensNavigation'
import MyHeader from '../component/MyHeader'
import { } from 'react-native-safe-area-context'

const Profile = ({ navigation }) => {
	return (
		<SafeAreaView>

			<MyHeader isGoBack={true} text='Profile' leftIcon={true} rightText='Edit' rightView />
			<View style={styles.container}>
				<Text>Welcome to Profile</Text>
				<MyButton btnText={'Click To Go Home'} btnPress={() => navigation.navigate(screensNavigation.Home)} />
			</View>
		</SafeAreaView>
	)
}

export default Profile

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',


	}
})