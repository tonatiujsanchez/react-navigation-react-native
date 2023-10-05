import React, { useEffect } from 'react'
import { Text, View, Button } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { styles } from '../theme'
import { StackNavigationProp } from '@react-navigation/stack'


type PageTwoScreenNavigationProp = StackNavigationProp<any, string>;


export const PageTwoScreen:React.FC = () => {

    const navigator = useNavigation<PageTwoScreenNavigationProp>()

    useEffect(() => {
      navigator.setOptions({
        title: 'Hola mundo (Página 2)',
        headerBackTitle: 'Atras', /* Para IOS */
      })
    }, [navigator])

    return (
        <View style={ styles.globalMargin }>
            <Text style={[styles.title, styles.mb]}>PageTwoScreen</Text>
            <Button
                title="Ir a Page Three 3"
                onPress={ ()=> navigator.navigate('PageThreeScreen') }
            />
        </View>
    )
}
