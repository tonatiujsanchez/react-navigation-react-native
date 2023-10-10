import 'react-native-gesture-handler'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { BasicSideMenu, /* StackNavigator */ } from './src/navigator'




export const App = () => {
    return (
        <NavigationContainer>
            {/* <StackNavigator /> */}
            <BasicSideMenu />
        </NavigationContainer>
    )
}

export default App
