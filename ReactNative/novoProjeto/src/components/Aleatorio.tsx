import React from "react";
import { Text } from "react-native";
import estilo from "./estilo";

export default (props: any) => {

    const {min, max} = props
    const delta = props.max - props.min + 1
    const aleatorio = parseInt(Math.random() * delta + min)

    return (
        <Text style={estilo.txtG}>O valor aleatorio é {aleatorio} !</Text>
    )

    
}