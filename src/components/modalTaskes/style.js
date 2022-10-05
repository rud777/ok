import { StyleSheet } from "react-native";
import Size from "../../assets/Size";


const style = StyleSheet.create({
  Gestur: {
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  viewGestur: {
    flex: 1, padding: 24, backgroundColor: "rgba(52, 52, 52, 0.8)",
  },
  SvgX: {
    marginTop: Size.size23,
    justifyContent: "flex-end",
    flexDirection: "row",
    marginRight: Size.size23,
  },
  greateView: {
    alignItems: "center",
    marginTop: Size.size17,
  },
  TextGreate: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: Size.size16,
    lineHeight: Size.size24,
    letterSpacing: 0.25,
    color: "#11493E",
    marginTop: Size.size32,
  },
  EventGreateText: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: Size.size14,
    lineHeight: Size.size16,
    letterSpacing: 0.25,
    color: "#6B6A6C",
    marginTop: Size.size29,
  },
  modal: {
    width: Size.size375,
    height: Size.size446,
  },
  TitleView: {
    width: Size.size375,
    alignItems: "center",
    marginTop: Size.size5,
  },
  TitleText: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: Size.size16,
    lineHeight: Size.size24,
    letterSpacing: 0.25,
    color: "#11493E",
  },
  CheckView: {
    height: Size.size460,
  },
  TouchSelect: {
    width: Size.size335,
    height: Size.size38,
    backgroundColor: "#11493E",
    borderRadius: Size.size4,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: Size.size20,
    marginRight: Size.size23,
  },
  SelectText:{
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: Size.size14,
    lineHeight: Size.size16,
    letterSpacing: 0.25,
    color: '#FCFCFC',
  },
  TextSelectActual:{
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: Size.size14,
    lineHeight: Size.size16,
    letterSpacing: 0.25,
    color: '#616062',
    marginTop:Size.size24
  },
  TouchDuration:{
    width:Size.size108,
    height:Size.size32,
    borderWidth: Size.size1,
    borderStyle: "solid",
    borderColor: "#347474",
    borderRadius:Size.size4,
    justifyContent:'center',
    alignItems:'center'
  },
  TextTime:{
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: Size.size14,
    lineHeight: Size.size16,
    letterSpacing: 0.25,
    color: '#949494',
  },
  ViewTime:{
    marginTop:Size.size24,
    marginRight:Size.size15,
    marginLeft:Size.size15
  },
  TouchDurationFull:{
    width:Size.size350,
    height:Size.size32,
    borderWidth: Size.size1,
    borderStyle: "solid",
    borderColor: "#347474",
    borderRadius:Size.size4,
    justifyContent:'center',
    alignItems:'center',
    marginTop:Size.size24
  },
  SelectTouch:{
    width: Size.size335,
    height:Size.size38,
    backgroundColor:'#11493E',
    borderRadius:Size.size4,
    alignItems:'center',
    justifyContent:'center',
    marginLeft:Size.size20,
    marginRight:Size.size23,
    marginTop:Size.size155
  }
});
export default style;
