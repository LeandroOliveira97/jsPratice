import React from "react";

import { Text } from "react-native";

import estilo from "./estilo";

export default (props: any) => (
    <Text style={estilo.txtG}>
        O valor {props.max} e maior que o valor {props.min}.
    </Text>

)
