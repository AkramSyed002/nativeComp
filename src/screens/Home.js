import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import MyButton from '../component/MyButton'
import screensNavigation from '../constant/screensNavigation'
import MyHeader from '../component/MyHeader'
import MyDropdown from '../component/MyDropdown'

const Home = ({ navigation }) => {
	const [selectedItem, setSelectedItem] = useState(null);

	return (
		<View>
			<MyHeader isGoBack={false} text='Home' />
			<Text>Welcome To Home</Text>
			<MyButton btnText={'Profile'} btnPress={() => navigation.navigate(screensNavigation.Profile)} />
			<MyDropdown options={options} selectedItem={selectedItem} setSelectedItem={setSelectedItem} activeItemColor='pink'
			/>
		</View>
	)
}

export default Home

const options = [{ id: 1, name: 'Option 1' }, { id: 2, name: 'Option 2' }, { id: 3, name: 'Option 3' }]
const styles = StyleSheet.create({})