import React from "react";
import { VictoryArea, VictoryAxis, VictoryBar, VictoryChart, VictoryStack } from "victory-native";
import Size from "../../assets/Size";
import { View } from "react-native";

function VictoryProject(props) {
  const data = [
    {x:1.5,yo:3.8,y:3.8,k:2.2,ko:3.5},
    {x:2.5,yo:5.6,y:5.3,k:4.8,ko:7.1},
    {x:3.5,yo:5.6,y:4.5,k:5.8,ko:6.1},
    {x:4.5,yo:4.5,y:3.8,k:2.7,ko:4.1},
    {x:5.5,yo:5.6,y:4.3,k:5.3,ko:6.1},
    {x:6.5,yo:5.6,y:6.3,k:6.3,ko:7.8},
  ];
  return (
    <>
      <View style={{ marginLeft: Size.size12 }}>
        <VictoryChart width={Size.si340} height={Size.size280} domain={{ y: [1, 7] }}
        >
          <VictoryAxis crossAxis
                       style={{
                         axis: { stroke: "#ECECEC" },
                         grid: { stroke: "#ECECEC" },
                         tickLabels: {
                           fontFamily: "Montserrat",
                           fontStyle: "normal",
                           fontWeight: "500",
                           fontSize: Size.size16,
                           lineHeight: Size.size20,
                           fill: "#B8C0CC",
                         },
                       }}
                       tickValues={["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", " "]}
          />
          <VictoryAxis dependentAxis crossAxis
                       style={{
                         axis: { stroke: "#ECECEC" },
                         grid: { stroke: "#ECECEC" },
                         tickLabels: {
                           fontFamily: "Montserrat",
                           fontStyle: "normal",
                           fontWeight: "500",
                           fontSize: Size.size16,
                           lineHeight: Size.size20,
                           fill: "#B8C0CC",
                         },
                       }}
                       tickValues={["0", "10", "20", "30", "40", "50", "60"]}
          />
          <VictoryBar data={data}
                      x='x' y='y'
                      style={{ data: { fill: "#83B7AD", width: Size.size30} }}
                      y0={(d)=>d.yo-1.8}
          />

            <VictoryBar
              data={data}
              x='x' y='k'
              style={{ data: { width: Size.size30 ,fill: "#EE9087",} }}
              y0={(d)=>d.ko-1.8}
            />

        </VictoryChart>
      </View>
    </>
  );
}

export default VictoryProject;
