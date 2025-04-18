import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const AcceuilleIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fill="#0F0F0F"
      fillRule="evenodd"
      d="M4.188 11.379C4.03 11.759 4 11.953 4 12v8.002c0 .55.447.998 1 .998h3v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6h3c.553 0 1-.447 1-.998V12c0-.047-.03-.241-.188-.621a10.539 10.539 0 0 0-.657-1.277c-.579-.978-1.39-2.122-2.298-3.212-.91-1.092-1.893-2.1-2.807-2.825a7.208 7.208 0 0 0-1.245-.82C12.43 3.058 12.165 3 12 3c-.164 0-.429.059-.806.244a7.21 7.21 0 0 0-1.244.82c-.914.726-1.897 1.734-2.807 2.826-.908 1.09-1.72 2.234-2.298 3.212-.29.49-.511.924-.657 1.277Zm6.121-9.928C10.835 1.19 11.414 1 12 1c.586 0 1.165.191 1.69.45.535.265 1.076.63 1.604 1.048 1.055.837 2.134 1.954 3.1 3.112.966 1.16 1.842 2.391 2.483 3.475.32.541.59 1.061.783 1.528.183.44.34.934.34 1.387v8.002A2.998 2.998 0 0 1 19 23h-3a2 2 0 0 1-2-2v-6h-4v6a2 2 0 0 1-2 2H5c-1.656 0-3-1.34-3-2.998V12c0-.453.157-.947.34-1.387.193-.467.464-.987.783-1.528.64-1.084 1.517-2.315 2.484-3.475.965-1.158 2.044-2.275 3.1-3.112.527-.419 1.068-.783 1.602-1.047Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default AcceuilleIcon
