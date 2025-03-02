import * as React from "react"
import { SvgXml } from 'react-native-svg';

import Svg, { SvgProps, Path } from "react-native-svg"


const xml = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
  </svg>
`;
const SearchIcon =  () => <SvgXml xml={xml} width="100%" height="100%" />

export default SearchIcon
