import * as React from "react"
import Svg, { Path } from "react-native-svg"
import size from '../Size'

function SvgIce(props) {
  return (
    <Svg
      width={size.size16}
      height={size.size13}
      viewBox="0 0 16 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.002 0c3.102.003 5.888 2.177 7.452 5.817a.557.557 0 010 .444c-1.564 3.642-4.35 5.816-7.452 5.818h-.004C4.896 12.077 2.11 9.903.546 6.261a.564.564 0 010-.444C2.11 2.177 4.896.003 7.998 0h.004zM8 1.125c-2.577.001-4.928 1.833-6.323 4.914C3.072 9.121 5.422 10.954 8 10.954c2.578 0 4.927-1.833 6.322-4.915C12.927 2.96 10.578 1.126 8 1.125zm0 1.981a2.937 2.937 0 012.934 2.934A2.937 2.937 0 018 8.973 2.936 2.936 0 015.066 6.04 2.937 2.937 0 018 3.106zm0 1.125a1.81 1.81 0 00-1.809 1.81 1.81 1.81 0 003.618 0c0-.998-.812-1.81-1.81-1.81z"
        fill="#83B7AD"
      />
    </Svg>
  )
}

export default SvgIce
