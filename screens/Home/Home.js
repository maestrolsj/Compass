import React   from 'react';
import {View, Text, Image, Animated} from "react-native"
import { DangerZone, Location} from 'expo';
import {CompassView ,Compass} from "../../components/"
import {compassUtils} from "../../utils"

class Home extends React.Component {

    rotation = new Animated.Value(0);

    constructor(props) {
        super(props);
        this.state = {
            rot : 0
        }
    }

    componentDidMount() {

       // just for tracking the degree
       this.rotation.addListener(({value}) => this.setState({rot:value}));

       /* Rotation
        Device’s orientation in space as an object with alpha, beta, gamma keys where alpha is for rotation around Z axis,
        beta for X axis rotation and gamma for Y axis rotation. */

         /*  DangerZone.DeviceMotion.setUpdateInterval(200); // Capture the data every 0.5sec
           DangerZone.DeviceMotion.addListener(v=>{
               this.rotation.setValue(compassUtils.compassHeading(v.rotation.alpha,v.rotation.beta,v.rotation.gamma));
              }
           );
         */


     /*
       This function is called on each compass update. It is passed exactly one parameter: an object with the following fields
       magHeading (number)  — measure of magnetic north in degrees
       trueHeading (number) — measure of true north in degrees (needs location permissions, will return -1 if not given)
       accuracy (number)    — level of callibration of compass.
        3: high accuracy, 2: medium accuracy, 1: low accuracy, 0: none
        Reference for iOS: 3: < 20 degrees uncertainty, 2: < 35 degrees, 1: < 50 degrees, 0: > 50 degrees
     */
       Location.watchHeadingAsync((v)=>{ this.rotation.setValue(v.magHeading/360)  });
    }


    render() {
        var rotate = this.rotation.interpolate({
            inputRange  : [0, 0.5, 1],
            outputRange : ['360deg','180deg', '0deg'],
            extrapolate :  'clamp',
        })


        return (

            <CompassView>
                <Text>{Math.floor(this.state.rot*360)} deg</Text>
                <Animated.View style={{ transform:[{rotate:rotate}]}}>
                   <Compass/>
                </Animated.View>
            </CompassView>
        );
    }


}


export default Home
