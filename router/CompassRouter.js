import React from "react"
import {Router, Scene, Stack} from "react-native-router-flux";
import {Home} from "../screens";

export default ConvoseRouter = () => (
    <Router>
        <Stack key="root">
            <Scene key="home" component={Home} title="Compass"/>
        </Stack>
    </Router>
)
