import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import Style from "./style";
import img1 from "../../images/image5.png";
import img2 from "../../images/image6.png";
import img3 from "../../images/image7.png";
import img4 from "../../images/image8.png";
import img5 from "../../images/image9.png";
import img6 from "../../images/image10.png";
import img7 from "../../images/image11.png";
import SvgRihte from "../../assets/svg/SvgRihte";
import Size from "../../assets/Size";

function Project(props) {
  const arr = [
    {
      id: 1,
      img: img1,
      name: "Project name",
      short_description: "Some description here about project",
      start: "11.10.2021",
      end: "05.07.2022",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book ",
    },
    {
      id: 2,
      img: img2,
      name: "Project name",
      short_description: "Some description here about project",
      start: "19.07.2022",
      end: "19.07.2023",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book ",
    },
    {
      id: 3,
      img: img3,
      name: "Project name",
      short_description: "Some description here about project",
      start: "11.01.2021",
      end: "01.11.2022",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book ",
    },
    {
      id: 4,
      img: img4,
      name: "Project name",
      short_description: "Some description here about project",
      start: "11.10.2021",
      end: "05.07.2022",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book ",
    },
    {
      id: 5,
      img: img5,
      name: "Project name",
      short_description: "Some description here about project",
      start: "09.12.2022",
      end: "07.08.2023",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book ",
    },
    {
      id: 6,
      img: img6,
      name: "Project name",
      short_description: "Some description here about project",
      start: "14.10.2022",
      end: "29.03.2023",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book ",
    },
    {
      id: 7,
      img: img7,
      name: "Project name",
      short_description: "Some description here about project",
      start: "19.05.2022",
      end: "19.02.2023",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book ",
    },
  ];
  return (
    <>
      <View style={Style.eventNameTitleView}>
        <Text style={Style.eventNameTitleText}>Project</Text>
      </View>
      <FlatList data={arr} renderItem={({ item }) => (
        <>
          <TouchableOpacity style={Style.toucheProject}
                            onPress={() => props.navigation.navigate("projectName", {item })}>
            <Image source={item.img} />
            <View style={{ width: Size.size173 }}>
              <Text style={Style.ProjectNameText}>{item.name}</Text>
              <Text style={Style.ProjectDescriptionText}>{item.short_description}</Text>
            </View>
            <SvgRihte />
          </TouchableOpacity>
          <View style={Style.line2}></View>
        </>
      )}
                keyExtractor={item => item.id}
      />

    </>
  );
}

export default Project;
