import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { PageOneScreen, PageThreeScreen, PageTwoScreen } from '../screens'


const Stack = createStackNavigator();

export const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="PageOneScreen" component={PageOneScreen} />
            <Stack.Screen name="PageTwoScreen" component={PageTwoScreen} />
            <Stack.Screen name="PageThreeScreen" component={PageThreeScreen} />
        </Stack.Navigator>
    )
}
