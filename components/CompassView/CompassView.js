import React        from "react"
import PropTypes    from "prop-types"
import {StyledView} from "./Styled"
import {Dimensions} from "react-native";

const DeviceHeight = Dimensions.get('window').height;
const DeviceWidth  = Dimensions.get('window').width ;


const CompassView = ({ children, ...styleProps }) => {
    return (
        <StyledView {...styleProps}>
            { children }
        </StyledView>
    )
}

CompassView.propTypes = {
    children: PropTypes.any,
    width: PropTypes.number,
    height: PropTypes.number,
    flexDirection:PropTypes.string
}

CompassView.defaultProps = {

    width: DeviceWidth,
    height: DeviceHeight,
    flexDirection:'column',
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor:'white'
}

export default CompassView;
