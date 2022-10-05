import { StyleSheet } from "react-native";
import Size from "../../assets/Size";

const Style = StyleSheet.create({
  body: {
    backgroundColor: "#F5F5F5",
    width: "100%",
    height: "100%",
  },
  titleView: {
    alignItems: "center",
    marginTop: Size.size30,
  },
  titleText: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: Size.size16,
    lineHeight: Size.size24,
    letterSpacing: 0.25,
    color: "#1B3131",
  },
  toucheView: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: Size.size30,
  },
  touch: {
    alignItems: "center",
    justifyContent: "center",
    width: Size.size158,
    height: Size.size28,
    backgroundColor: "#347474",
    borderRadius: Size.size4,
  },
  activeTouch: {
    alignItems: "center",
    justifyContent: "center",
    width: Size.size158,
    height: Size.size28,
    backgroundColor: "#E7F2F2",
    borderRadius: Size.size4,
  },
  activeText: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: Size.size12,
    lineHeight: Size.size15,
    color: "#FCFCFC",
  },
  text: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: Size.size12,
    lineHeight: Size.size15,
    color: "#11493E",
  },
  flatlist: {
    marginTop: Size.size30,
  },
  viewList: {
    marginTop: Size.size5,
    flexDirection:'row',
    justifyContent:'space-around'
  },
  image: {
    width: Size.size32,
    height: Size.size32,
    borderRadius: Size.size11,
  },
  imageText: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: Size.size12,
    lineHeight: Size.size15,
    color: "#2C2C2C",
  },
  accepted: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: Size.size12,
    lineHeight: Size.size15,
    color: "#598D8D",
  },
  declined: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: Size.size12,
    lineHeight: Size.size15,
    color: "#EE9087",
  },
  date: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: Size.size10,
    lineHeight: Size.size16,
    letterSpacing: 0.25,
    color: "#949494",
  },
  ball:{
    marginTop:Size.size11,
    width:Size.size8,
    height:Size.size8,
    borderRadius:Size.size50,
    backgroundColor:'#347474'
  },
  readedView:{
    alignItems:'flex-end',
    marginRight:Size.size14,
    marginTop:Size.size15
  },
  readedText:{
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: Size.size12,
    lineHeight: Size.size15,
    color: "#347474",
  },
  Flatlist:{
    marginBottom:Size.size30,
    marginTop:Size.size24,
  },
  ViewNull:{
    width:Size.size8,
    height:Size.size8
  },
  ViewImg:{
    alignItems:"center",
    justifyContent:"center"
  },
  img:{
    width:Size.size89,
    height:Size.size89
  }
});
export default Style;
