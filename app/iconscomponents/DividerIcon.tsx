import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: title */
const DividerIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fill="#212121"
      fillRule="nonzero"
      d="M11 3v18a1 1 0 0 0 2 0V3a1 1 0 0 0-2 0Z"
    />
  </Svg>
)
export default DividerIcon
