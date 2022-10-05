import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import Style from "./style";
import Size from '../../assets/Size'
import VictoryProject from "./VictoryProject";
import profileimg2 from "../../images/Rectangle333.png";
import profileimg3 from "../../images/Rectangle444.png";

function ProjectName(props) {
  const item = props.route.params.item;
  return (
    <ScrollView>
      <View style={Style.eventNameTitleView}>
        <Text style={Style.eventNameTitleText}>{item.name}</Text>
      </View>
      <View style={{alignItems:'center',marginTop:Size.size22}}>
        <Text style={Style.projectNameText}>This is the schedule of your tasks 📊</Text>
      </View>
      <VictoryProject/>
      <View>
        <View style={Style.view}>
          <Text style={Style.textDescription}>Description</Text>
          <Text style={Style.description}>{item.description}</Text>
        </View>
        <View style={Style.view}>
          <Text style={Style.textDescription}>Start at</Text>
          <Text style={Style.description}>{item.start}</Text>
        </View>
        <View style={Style.view}>
          <Text style={Style.textDescription}>Deadline</Text>
          <Text style={Style.description}>{item.end}</Text>
        </View>
      </View>
      <View style={Style.ViewImg2 }>
        <Image source={profileimg2} />
        <View style={{marginLeft:Size.size4}}>
          <Text style={Style.SurnameText1}>Name Surname</Text>
          <Text style={Style.Category1}>Specialist</Text>
        </View>
      </View>
      <View style={Style.ViewImg2}>
        <Image source={profileimg3} />
        <View style={{marginLeft:Size.size4}}>
          <Text style={Style.SurnameText1}>Name Surname</Text>
          <Text style={Style.Category1}>Specialist</Text>
        </View>
      </View>
    </ScrollView>
  );
}

export default ProjectName;
