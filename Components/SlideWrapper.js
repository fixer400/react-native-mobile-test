import { View } from "react-native";
import GlobalStyles from "../GlobalStyles";

export default function SlideWrapper({children}) {
    return (
        <View style={[GlobalStyles.wrapper, GlobalStyles.slide]}>
            {children}
        </View>
    )
}