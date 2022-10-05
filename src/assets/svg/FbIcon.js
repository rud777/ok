import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';
import Sizes from '../Size';

function FbIcon(props) {
    return (
        <Svg
            width={Sizes.size24}
            height={Sizes.size24}
            xmlns="http://www.w3.org/2000/svg"
            x={0}
            y={0}
            viewBox="0 0 474.294 474.294"
            xmlSpace="preserve"
            enableBackground="new 0 0 474.294 474.294"
            {...props}>
            <Circle cx={237.111} cy={236.966} r={236.966} fill="#3a5a98" />
            <Path
                d="M404.742 69.754c92.541 92.541 92.545 242.586-.004 335.134-92.545 92.541-242.593 92.541-335.134 0L404.742 69.754z"
                fill="#345387"
            />
            <Path
                d="M472.543 263.656L301.129 92.238l-88.998 88.998 5.302 5.302-50.671 50.667 41.474 41.474-5.455 5.452 44.901 44.901-51.764 51.764 88.429 88.429c99.718-20.18 176.69-102.97 188.196-205.569z"
                fill="#2e4d72"
            />
            <Path
                d="M195.682 148.937v39.741h-29.115v48.598h29.115v144.402h59.808V237.276h40.134s3.76-23.307 5.579-48.781h-45.485v-33.231c0-4.962 6.518-11.641 12.965-11.641h32.587V93.031h-44.306c-62.763-.003-61.282 48.64-61.282 55.906z"
                fill="#fff"
            />
        </Svg>
    );
}
export default FbIcon
