import React from 'react'
import { Text, View, Button } from 'react-native';
import { styles } from '../theme'
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> {

}




export const PageThreeScreen:React.FC<Props> = ({ navigation }) => {
    return (
        <View style={[
            styles.globalMargin,
            styles.mt,
            { gap: 10 }
        ]}>
            <Text style={[styles.title, styles.mb]}>PageThreeScreen</Text>
            <Button
                title="🍔 Regresar"
                onPress={ ()=> navigation.pop() }
            />
            <Button
                title="Ir al Home 🏡"
                onPress={ ()=> navigation.popToTop() }
            />
        </View>
    )
}
