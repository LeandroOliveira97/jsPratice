import React from "react";
import { Text } from "react-native";
import estilo from "./estilo";


function CompOriginal() {
    return <Text style={estilo.txtG}>Comp Original</Text>
}

function Comp1() {
    return <Text style={estilo.txtG}>Comp01</Text>
}

function Comp2() {
    return <Text style={estilo.txtG}>Comp02</Text>
}

export{ Comp1, Comp2 }

export default CompOriginal;