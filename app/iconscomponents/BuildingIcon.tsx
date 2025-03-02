import * as React from "react"
import Svg, { SvgProps, Defs, G, Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: style */
const BuildingIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    viewBox="0 0 24 24"
    {...props}
  >
    <Defs></Defs>
    <G id="office">
      <Path
        d="M11.04 14.88h1.92M11.04 11.04h1.92M11.04 7.21h1.92M7.21 14.88h1.92M7.21 11.04h1.92M7.21 7.21h1.92M14.88 14.88h1.91M14.88 11.04h1.91M14.88 7.21h1.91"
        className="cls-1"
      />
      <Path d="M9.13 18.71h5.75v3.83H9.13z" className="cls-2" />
      <Path d="M23.5 22.54H.5" className="cls-1" />
      <Path
        d="M16.79 3.38V1.46H7.21v1.92H4.33v19.16h15.34V3.38h-2.88z"
        className="cls-2"
      />
    </G>
  </Svg>
)
export default BuildingIcon
