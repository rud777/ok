import { StyleSheet } from "react-native";
import Size from "../../assets/Size";


const style = StyleSheet.create({
  Gestur: {
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  viewGestur: {
    flex: 1, backgroundColor: "rgba(52, 52, 52, 0.8)",
  },
  SvgX: {
    marginTop: Size.size23,
    justifyContent: "flex-end",
    flexDirection: "row",
    marginRight: Size.size23,
  },
  titleView: {
    alignItems: "center",
    marginTop: Size.size12,
  },
  textTitle: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: Size.size16,
    lineHeight: Size.size24,
    letterSpacing: 0.25,
    color: "#11493E",
  },
  viewName: {
    flexDirection: "row",
    marginTop: Size.size24,
    marginLeft: Size.size23,
  },
  Employee: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: Size.size14,
    lineHeight: Size.size16,
    letterSpacing: 0.25,
    color: "#616062",
  },
  Surname: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: Size.size14,
    lineHeight: Size.size16,
    letterSpacing: 0.25,
    color: "#347474",
    marginLeft: Size.size12,
  },
  date: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: Size.size14,
    lineHeight: Size.size16,
    letterSpacing: 0.25,
    color: "#347474",
    marginLeft: Size.size51,
  },
  viewDate: {
    flexDirection: "row",
    marginTop: Size.size18,
    marginLeft: Size.size23,
  },
  viewComment: {
    marginTop: Size.size18,
    marginLeft: Size.size23,
  },
  comment: {
    marginTop: Size.size12,
    width: Size.size287,
    height: Size.siz74,
  },
  textComment: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: Size.size14,
    lineHeight: Size.size16,
    letterSpacing: 0.25,
    color: "#949494",
  },
  inputLeader: {
    width:Size.size325,
    height: Size.size40,
    border:Size.size1,
    borderWidth:Size.size2,
    borderRadius:Size.size10,
    borderColor:'#F5F5F5',
    position:'absolute',
    top:Size.size260,
    left:Size.size15,
  },
  ViewInput: {
    marginLeft: Size.size23,
    marginTop: Size.size18,
  },
  TouchAccept: {
    width: Size.size101,
    height: Size.size32,
    backgroundColor: "#347474",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Size.size4,
    marginRight: Size.size7,
  },
  TextAccept: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: Size.size14,
    lineHeight: Size.size16,
    letterSpacing: 0.25,
    color: "#FCFCFC",
  },
  TouchCancel: {
    width: Size.size101,
    height: Size.size32,
    backgroundColor: "#D6453D",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Size.size4,
  },
  ViewTouches: {
    flexDirection: "row",
    marginLeft: Size.size80,
    position: "absolute",
    top: Size.size240,
    left: Size.size50,
  },


});
export default style;
