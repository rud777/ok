import React from "react";
import { Text, View, StyleSheet, FlatList, ScrollView } from "react-native";
import {
  VictoryChart,
  VictoryAxis,
  VictoryLine,
  VictoryScatter,
} from "victory-native";
import Size from "../../assets/Size";


function VictoryProgress(props) {
  const data = [
    { x: 1, y: 26.5 },
    { x: 1.3, y: 26.45 },
    { x: 1.5, y: 26.7 },
    { x: 1.58, y: 26.75 },
    { x: 2.1, y: 27 },
    { x: 3, y: 27.8 },
    { x: 3.48, y: 26.9 },
    { x: 3.69, y: 26.73 },
    { x: 4.3, y: 26.2 },
    { x: 4.7, y: 26.42 },
    { x: 4.78, y: 26.46 },
    { x: 5, y: 26.45 },
    { x: 5.5, y: 26.7 },
    { x: 6, y: 26.1 },
    { x: 7, y: 27 },

  ];
  return (
    <>
      <View style={styles.container}>
        <VictoryChart minDomain={{ x:0.8, y: 0}} domain={{y: [25, 29]}}>
          <VictoryAxis crossAxis
                       style={{
                         axis: { stroke: "none" },
                         tickLabels: { fill: '#616062' },
                       }}
                       tickValues= {['Jan', 'Feb','Mar', 'Apr', 'May', 'Jun']}
          />
          <VictoryAxis dependentAxis crossAxis
                       style={{
                         axis: { stroke: "none" },
                         grid: { stroke: "#E4E4E4" },
                         tickLabels: { fill: '#616062' },
                       }}
                       tickFormat={(y) => `${y}`.substring(0,2)}
          />
          <VictoryLine
            data={data}
            animate={props.scrole<=550&&props.scrole>=35&&{
              duration: 2000,
              onLoad: { duration: 1000 }
            }}
            style={{
              data: { stroke: "#347474" },
              parent: { border: "2px solid #347474"}
            }}
            interpolation="cardinal"

          />
          <VictoryScatter
            animate={props.scrole<=550&&props.scrole>=35&&{
              duration: 2000,
              onLoad: { duration: 1000 }
            }}
            style={ {data:{ fill: "#347474", stroke: "#fff", strokeWidth: 3 }}}
            size={8}
            data={[
              { x: 3, y: 27.8 },
            ]}
          />

        </VictoryChart>

      </View>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Size.size350,
    height: Size.size280,
    marginTop: Size.size50,
    marginLeft: Size.size13,
    marginRight: Size.size24,
    borderRadius: Size.size10,
    marginBottom: Size.size20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
export default VictoryProgress;
