import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyButton from './src/component/MyButton'
import colors from './src/styles/colors'
import ComponentWrapper from './src/component/ComponentWrapper'
import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/navigations/Routes'

const App = () => {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  )
}

export default App
