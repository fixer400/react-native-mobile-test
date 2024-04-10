import { Dimensions } from "react-native";
import { StyleSheet } from "react-native-web";

export default StyleSheet.create({
    wrapper: {
       paddingHorizontal: 20,
    },
    slideHeader: {
        fontWeight: '700',
        fontFamily: 'Roboto',
        color: 'rgba(255, 255, 255, 0.4)',
    },
    slideText: {
        fontWeight: '700',
        fontFamily: 'Roboto',
        color: 'white',
    },
    slide: {
        gap: 40,
        width : Dimensions.get('window').width,
    }
});