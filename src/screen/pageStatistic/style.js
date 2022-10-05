import { StyleSheet } from "react-native";
import Size from "../../assets/Size";

const Style = StyleSheet.create({
    My:{
        alignItems: "center",
        marginTop: Size.size30
    },
    TextMy:{
        fontFamily: "Montserrat",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: Size.size16,
        lineHeight: Size.size24,
        letterSpacing: 0.25,
        color: "#1B3131",

    },
    Week:{
        marginLeft: Size.size23,
        marginTop: Size.size30
    },
    TextWeek:{
        fontFamily: "Montserrat",
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: Size.size16,
        lineHeight: Size.size24,
        letterSpacing: 0.25,
        color: "#1B3131",
    },
    ThisView:{
        marginLeft: Size.size23,
        marginTop: Size.size10
    },
    TextThis:{
        fontFamily: "Montserrat",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: Size.size16,
        lineHeight: Size.size24,
        letterSpacing: 0.25,
        color: "#1B3131",
    }
});
export default Style;
