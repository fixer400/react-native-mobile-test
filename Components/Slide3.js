import { Dimensions, StyleSheet, Text, View } from "react-native";
import GlobalStyles from "../GlobalStyles";
import SlideWrapper from "./SlideWrapper";


export default function Slide3() {

    const TextArray = [
        'Share birth details', 
        'Ask a question', 
        'An astrologer will make a prediction', 
        'Get your answer'
    ]

    return (
        <SlideWrapper>
            <Text style={[GlobalStyles.slideHeader, {fontSize: 44}]}>How it works</Text>
            {TextArray.map((text, index) => (
                <Text key={index} style={[GlobalStyles.slideText, {fontSize: 36}]}>{text}</Text>
            ))}
        </SlideWrapper>
    )
}