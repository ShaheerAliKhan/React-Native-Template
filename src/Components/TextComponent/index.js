import React from 'react'
import { 
    Text
} from "react-native";

export default TextComponent = ({
    text = "Default Text"
}) =>{
    return(
        <Text>{text}</Text>
    )
}