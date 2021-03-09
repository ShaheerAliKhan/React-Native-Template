import React, {Component} from 'react'
import { View } from 'react-native'
import { TextComponent } from '../../Components'
import { Colors } from '../../Config'

export default class Welcome extends Component {
    render(){
        return(
            <View style = {{
                flex : 1, 
                backgroundColor : Colors.BackgroundColor,
                justifyContent : 'center',
                alignItems : 'center'
            }}>
                <TextComponent text = {"React Native Template"}/>
            </View>
        )
    }
}