import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'

const MyDropdown = ({ options, selectedItem, setSelectedItem, activeItemColor }) => {

	const [toggle, setToggle] = useState(false)
	const onSelectedItem = (item) => {
		setSelectedItem(item)
		setToggle(false)
	}
	return (
		<View>
			<Text>MyDropdown</Text>
			<TouchableOpacity onPress={() => setToggle(!toggle)} activeOpacity={0.8} style={[styles.dropdownStyle, {}]}><Text>{!!selectedItem ? selectedItem?.name : 'Choose an Options'}</Text>
				<Image source={require('../assets/down.png')} style={{
					height: 20, width: 20,
					transform: [{ rotate: !toggle ? '0deg' : '180deg' }]
				}} />
			</TouchableOpacity>
			{toggle &&
				<View>

					{options?.map((value, index) => {
						return (<View key={index}>
							<TouchableOpacity onPress={() => onSelectedItem(value)}
								style={{ backgroundColor: selectedItem?.name == value?.name ? activeItemColor : 'white', padding: 8 }}
							>
								<Text>{value.name}</Text>
							</TouchableOpacity>
						</View>)
					})}
				</View>}
		</View>
	)
}

export default MyDropdown
const styles = StyleSheet.create({
	dropdownStyle: {
		backgroundColor: `rgba(0, 0, 0, 0.2)`,
		padding: 8,
		// borderRadius: 6,
		minHeight: 42,
		justifyContent: 'space-between',
		flexDirection: 'row',
		alignItems: 'center',

	}
})

