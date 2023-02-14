import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { withAnchorPoint } from 'react-native-anchor-point';

export default function SVGWaves({ customStyle, customWidth, customHeight, customViewBox, customFillColor, customPattern, customTransform }) {
    return withAnchorPoint(
        <View style={customStyle}>
            <Svg width={customWidth} height={customHeight} viewBox={customViewBox}>
                <Path
                    fill={customFillColor}
                    d={customPattern}
                    transform={customTransform}
                />
            </Svg>
        </View>
    )
}