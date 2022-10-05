import React from "react";
import { Text, View, StyleSheet, FlatList, ScrollView } from "react-native";
import { VictoryBar, VictoryChart, VictoryTheme, VictoryAxis, VictoryPolarAxis } from "victory-native";
import Size from "../../assets/Size";


function Victory(props) {
  const data = [
    { quarter: 1, earnings: 840, day: "M" },
    { quarter: 2, earnings: 690, day: "M" },
    { quarter: 3, earnings: 570, day: "M" },
    { quarter: 4, earnings: 690, day: "M" },
    { quarter: 5, earnings: 850, day: "M" },
    { quarter: 6, earnings: 540, day: "M" },
    { quarter: 7, earnings: 330, day: "M" },
  ];
  return (
    <>
      <View style={styles.container}>
        <View style={{position:'relative'}}>
        <VictoryBar height={Size.size170} animate={props.scrole<=190&&{
          duration: 2000,
          onLoad: { duration: 1000 }
        }}
                    style={{ data: { fill: "#83B7AD", width: Size.size18} }}
                    cornerRadius={
                      { top: () => Size.size8, bottom: () => Size.size8 }
                    }
                    data={data} x="quarter" y="earnings" />
        </View>
        <View style={{position:'absolute',bottom:Size.size0}}>
        <VictoryAxis
          tickValues={["M", "T", "W", "T", "F", "S", "S"]} style={{
          axis:{stroke: "transparent",},
          tickLabels: {
            fontFamily: "Montserrat",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: Size.size16,
            lineHeight: Size.size20,
            fill: "#616062",
          },
        }} />
        </View>
      </View>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Victory;
