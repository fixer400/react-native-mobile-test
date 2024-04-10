import {Dimensions, StyleSheet, Text, View } from "react-native"
import GlobalStyles from "../GlobalStyles"
import SlideWrapper from "./SlideWrapper"

export default function Slide1() {

    return (
          <SlideWrapper>
            <View>
                <Text style={[GlobalStyles.slideHeader, {fontSize: 44}]}>You have</Text>
                <Text style={[GlobalStyles.slideText, {fontSize: 44}]}>millions of questions...</Text>
            </View>
            <View>
                <Text style={[GlobalStyles.slideHeader , {fontSize: 44}]}>We have</Text>
                <Text style={[GlobalStyles.slideText, {fontSize: 44}]}>answers in the stars!</Text>
            </View>
          </SlideWrapper>
    )
}

const styles = StyleSheet.create({
  slide: {
    gap: 40,
    width : Dimensions.get('window').width,
  },
  slideText: {
    fontWeight: '700',
    fontFamily: 'Roboto',
    color: 'white',
  },
  slideHeader: {
    color: 'rgba(255, 255, 255, 0.4)',
  }
})