import React        from "react"
import PropTypes    from "prop-types"
import {StyledView} from "./Styled"
import {Dimensions} from "react-native";

const DeviceHeight = Dimensions.get('window').height;
const DeviceWidth  = Dimensions.get('window').width ;


const Compass = ({ children, ...styleProps }) => {
    return (
        <StyledView  source={require('../../assets/images/compassBg.png')}
                      {...styleProps} >
        </StyledView>
    )
}

Compass.propTypes = {
    children: PropTypes.any,
    width: PropTypes.number,
    height: PropTypes.number,
    flexDirection:PropTypes.string
}

Compass.defaultProps = {
    width: DeviceWidth-10,
    height: DeviceWidth-10,
}

export default Compass;
