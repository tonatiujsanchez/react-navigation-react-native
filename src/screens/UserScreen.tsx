import React from 'react'
import { View, Text } from 'react-native'
import { styles } from '../theme'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParams } from '../navigator'


interface Props extends StackScreenProps<RootStackParams, 'UserScreen'>{}

export const UserScreen:React.FC<Props> = ({ route, navigation }) => {

    const { name } = route.params

    React.useEffect(() => {

        navigation.setOptions({
            title: name,
        })


    }, [ navigation, name ])


    return (
        <View style={ styles.globalMargin }>
            <Text style={[styles.title, styles.mb]}>
                User Screen
            </Text>
            <Text style={[styles.mb]}>
                { JSON.stringify(route.params, null, 4) }
            </Text>
        </View>
    )
}
