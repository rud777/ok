import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import Style from "./style";
import img from "../../images/frame5.png";
import Size from "../../assets/Size";
import SvgProfile from "../../assets/svg/SvgProfile";
import SvgCalendar from "../../assets/svg/SvgCalendar";
import SvgLocation from "../../assets/svg/SvgLocation";
import SvgVector from "../../assets/svg/SvgVector";
import profileimg from "../../images/Rectangle249.png";
import profileimg2 from "../../images/Rectangle249(2).png";

function EventName(props) {
  const item = props.route.params.item;
  return (
    <ScrollView>
      <View style={Style.eventNameTitleView}>
        <Text style={Style.eventNameTitleText}>{item.title}</Text>
      </View>
      <View style={{ alignItems: "center", marginTop: Size.size30 }}>
        <Image source={img} />
      </View>
      <View style={Style.ViewSvgText}>
        <View style={Style.SvgView}>
          <SvgProfile />
        </View>
        <Text style={Style.TextSvg}>Name Surname</Text>
      </View>
      <View style={Style.ViewSvgText}>
        <View style={Style.SvgView}>
          <SvgCalendar iconWidth={Size.size15} iconHeigth={Size.size16} />
        </View>
        <Text style={Style.TextSvg}>{item.create_date}|{item.time}</Text>
      </View>
      <View style={Style.ViewSvgText}>
        <View style={Style.SvgView}>
          <SvgLocation iconWidth={Size.size15} iconHeigth={Size.size16} />
        </View>
        <Text style={Style.TextSvg}>Gyumri, Alek Manukyan 1</Text>
      </View>
      <View style={Style.ViewSvgText}>
        <View style={Style.SvgView}>
          <SvgVector iconWidth={Size.size15} iconHeigth={Size.size16} />
        </View>
        <Text style={Style.TextSvg}>https://www.figma.com/file/lgscxdggc...</Text>
      </View>
      <View style={Style.view }>
        <Text style={Style.textDescription}>Description</Text>
        <Text style={Style.description}>{item.description}</Text>
      </View>
      <View style={Style.view}>
        <Text style={Style.textDescription}>Participants</Text>
        <View style={Style.ViewImg}>
          <Image source={profileimg} />
          <View style={{marginLeft:Size.size4}}>
            <Text style={Style.SurnameText}>Name Surname</Text>
            <Text style={Style.Category}>Management</Text>
          </View>
        </View>
        <View style={Style.ViewImg}>
          <Image source={profileimg2} />
          <View style={{marginLeft:Size.size4}}>
            <Text style={Style.SurnameText}>Name Surname</Text>
            <Text style={Style.Category}>Frontend Development</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default EventName;
