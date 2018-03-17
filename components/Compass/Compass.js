import React        from "react"
import PropTypes    from "prop-types"
import {StyledView} from "./Styled"
import {Dimensions} from "react-native";
import Images from "../../assets/images";


const DeviceWidth  = Dimensions.get('window').width ;


const Compass = ({ ...styleProps }) => {
    return (
        <StyledView source={Images.compassBg}  {...styleProps}/>
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
