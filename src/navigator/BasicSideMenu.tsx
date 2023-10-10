import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { SettingsScreen } from '../screens'
import { StackNavigator } from './StackNavigator'

const Drawer = createDrawerNavigator()

export const BasicSideMenu = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Stack NAvigator" component={StackNavigator} />
            <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
        </Drawer.Navigator>
    )
}

