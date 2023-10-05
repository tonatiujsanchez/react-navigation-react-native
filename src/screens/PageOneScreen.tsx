import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme'
import { TouchableOpacity } from 'react-native-gesture-handler'

interface Props extends StackScreenProps<any, any> {

}

export const PageOneScreen:React.FC<Props> = ({ navigation }) => {

    return (
        <View style={[styles.globalMargin, { gap: 10 }]}>
            <Text style={[styles.title, styles.mb]}>PageOneScreen!!</Text>
            <Button
                title="Ir a Page Two"
                onPress={ ()=> navigation.navigate('PageTwoScreen') }
            />

            <Text>
                Navegar con argumentos
            </Text>
            <View style={{
                flexDirection:'row',
                justifyContent: 'center',
                gap: 10
            }}>
                <TouchableOpacity
                    style={styles.buttonPrimary}
                    onPress={ ()=> navigation.navigate('UserScreen', {
                        id: '123ABC',
                        name: 'Brandon H.',
                        age: 6,
                    }) }
                >
                    <Text style={styles.buttonPrimaryText }>Brandon 👦</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonPrimary}
                    onPress={ ()=> navigation.navigate('UserScreen', {
                        id: '456DEF',
                        name: 'Nath C.',
                        age: 29,
                    }) }
                >
                    <Text style={styles.buttonPrimaryText }>Nath C. 👩</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
