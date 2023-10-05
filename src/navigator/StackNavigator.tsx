import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { PageOneScreen, PageThreeScreen, PageTwoScreen, UserScreen } from '../screens'


export type RootStackParams = {
    PageOneScreen: undefined
    PageTwoScreen: undefined
    PageThreeScreen: undefined
    UserScreen: {
        id  :string
        name: string
        age : number
    }
}


const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="PageOneScreen"
            screenOptions={{
                headerStyle: {
                    elevation: 0,
                    shadowColor: 'transparent',
                },
                cardStyle: {
                    backgroundColor: '#FFF',
                },
            }}
        >
            <Stack.Screen name="PageOneScreen" options={{ title: 'Página 1 (Home)' }} component={PageOneScreen} />
            <Stack.Screen name="PageTwoScreen" options={{ title: 'Página 2' }} component={PageTwoScreen} />
            <Stack.Screen name="PageThreeScreen" options={{ title: 'Página 3' }} component={PageThreeScreen} />
            <Stack.Screen name="UserScreen" component={UserScreen} />
        </Stack.Navigator>
    )
}
