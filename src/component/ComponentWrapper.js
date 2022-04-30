import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyButton from './MyButton'
import colors from '../styles/colors'

const ComponentWrapper = () => {
	return (
		<View style={styles.container}>
			<MyButton />
			<MyButton btnPress={() => alert('i am pass from app')} btnTextStyle={{ color: 'red' }} btnText='Cancel' btnStyle={{ backgroundColor: colors.white, borderRadius: 20 }} />
			<View style={{ width: '60%' }}>
				<MyButton btnText={'Done'}
					btnStyle={{ backgroundColor: colors.black, borderRadius: 20 }}

				/>
			</View>
		</View>
	)
}

export default ComponentWrapper


const styles = StyleSheet.create({
	container: {
		marginVertical: 32
	}
})