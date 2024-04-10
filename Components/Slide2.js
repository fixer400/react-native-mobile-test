import { StyleSheet, Text, View } from "react-native"
import GlobalStyles from "../GlobalStyles"
import SlideWrapper from "./SlideWrapper"

export default function Slide2() {

    const SlideTextItem = (props) => {
        return (
            <View>
                <Text style={[GlobalStyles.slideHeader, {fontSize: 34}]}>{props.header}</Text>
                    {props.text.map((text, index) => (
                        <Text key={index} style={[GlobalStyles.slideText, {fontSize: 24}]}>{text}</Text>
                    ))}
                <Text style={[styles.slideText , {fontWeight: '400'}]}>and others...</Text>
            </View>
        )
    }

    return (
        <SlideWrapper>
            <SlideTextItem
                header="Love" 
                text={["When will i meet my soulmate?", "When will i get married?"]}
            />
            <SlideTextItem
                header="Self"
                text={["What I am here to learn in life?", "Am I on the right path?"]}    
            />           
            <SlideTextItem 
                header="Daily Life"
                text={[">What is going to happen next?", "Any insight for today?"]}
            />
        </SlideWrapper>
    )
}

const styles = StyleSheet.create({
  slideText: {
    fontSize: 24,
    fontWeight: '700',
    fontFamily: 'Roboto',
    color: 'white',
  },
  slideHeader: {
    fontSize: 34,
    fontWeight: '700',
    fontFamily: 'Roboto',
    color: 'rgba(255, 255, 255, 0.4)',
  }
})