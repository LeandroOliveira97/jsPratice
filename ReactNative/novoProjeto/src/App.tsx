import React1 from "react";
import { Text, View, StyleSheet } from "react-native";
import TestComponentes from "./components/Primeiro";

import { Comp1 } from "./components/Multi";
import { Comp2 } from "./components/Multi";

import CompPadrao from "./components/Multi";
import Primeiro from "./components/Primeiro";


import MinMax from "./components/MinMax";
import Aleatorio from "./components/Aleatorio";

export default () => (

    <View style={style.App}>

        <Aleatorio min={10} max={35} />

        {/*
    <MinMax min={3} max={25}/>
     <Comp1 />
    <Comp2 />
    <CompPadrao />
    <Primeiro />  */}
    </View>

)

const style = StyleSheet.create(
    {

        App: {
            flexGrow: 1,
            justifyContent: "center",
            alignItems: "center",
            padding: 20
        }

    }
)


