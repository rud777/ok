import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgProfile({ iconWidth, iconHeigth, iconColor }) {
  return (
    <Svg
      width={iconWidth||11}
      height={iconHeigth||14}
      viewBox="0 0 11 14"
      fill={iconColor||"none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        clipRule="evenodd"
        d="M5.896 13.467c-2.46 0-4.563-.383-4.563-1.917S3.422 8.6 5.896 8.6c2.462 0 4.563 1.402 4.563 2.936 0 1.533-2.088 1.93-4.563 1.93zM5.891 6.475A2.924 2.924 0 102.967 3.55 2.914 2.914 0 005.87 6.475h.02z"
        stroke="#347474"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default SvgProfile
