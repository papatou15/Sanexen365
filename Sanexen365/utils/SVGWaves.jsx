import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { withAnchorPoint } from 'react-native-anchor-point';


/**
 * 
 * Générateur de SVG custom
 * 
 * Basé sur le code SVG créé automatiquement par Adobe Illustrator. Prendre les bouts de codes correspondants et les insérer dans les paramètres.
 * 
 * @param {string} customStyle Style react-native
 * @param {string} customWidth Largeur du SVG
 * @param {string} customHeight Hauteur du SVG
 * @param {string} customViewBox Coordonées du viewport
 * @param {string} customFillColor Couleur du SVG
 * @param {string} customPattern Chemin SVG (d)
 * @param {string} customTransform Appliquer le transform si il y a lieu
 * @returns 
 */
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