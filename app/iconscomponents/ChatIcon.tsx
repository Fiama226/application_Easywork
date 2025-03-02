import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const ChatIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    viewBox="0 0 48 48"
    {...props}
  >
    <Path fill="none" d="M0 0h48v48H0z" />
    <Path d="M8 32V12c-2.2 0-4 1.8-4 4v28l8-8h20c2.2 0 4-1.8 4-4H8z" />
    <Path d="M40 4H16c-2.2 0-4 1.8-4 4v16c0 2.2 1.8 4 4 4h20l8 8V8c0-2.2-1.8-4-4-4z" />
  </Svg>
)
export default ChatIcon
