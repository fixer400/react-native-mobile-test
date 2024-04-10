import {  Pressable, StyleSheet, Text } from "react-native";

export default function BottomButton(props) {
    const {title} = props
    return (
       <Pressable style={styles.btn}>
           <Text style={styles.btnText}>{title}</Text>
       </Pressable>
    )
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: 'white',
        borderRadius: 28,
        height: 44,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20
    },
    btnText: {
        fontFamily: 'Roboto',
        fontWeight: '400',
        fontSize: 22,
        color: '#056FDD'
    }
})