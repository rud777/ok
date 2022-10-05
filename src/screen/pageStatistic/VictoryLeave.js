import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { VictoryAxis, VictoryBar, VictoryChart, VictoryStack } from "victory-native";
import Size from "../../assets/Size";
import UnreadIcon from "../../assets/svg/UnreadIcon";

function VictoryLeave(props) {
  const data = [
    { quarter: 1, earnings: 20,y:7,z:4,k:1.4},
    { quarter: 2, earnings: 20 ,y:9,z:1.4,k:4},
    { quarter: 3, earnings: 20 ,y:9,z:1.4,k:4},
    { quarter: 4, earnings: 20 ,y:11,z:4,k:0.001},
    { quarter: 5, earnings: 20 ,y:9,z:1.4,k:4},
    { quarter: 6, earnings: 20 ,y:11,z:4,k:0.001},
    { quarter: 7, earnings: 20 ,y:7,z:4,k:1.4},
    { quarter: 8, earnings: 20 ,y:2,z:5,k:11},
    { quarter: 9, earnings: 20 ,y:7,z:4,k:1.4},
    { quarter: 10, earnings: 20 ,y:7,z:4,k:1.4},
    { quarter: 11, earnings: 20 ,y:2,z:5,k:11},
    { quarter: 12, earnings: 20 ,y:2,z:5,k:11},
  ];
  return (
    <>
      <View style={styles.container}>
        <View style={{ marginTop: Size.size60 * -1 }}>
          <VictoryChart  width={Size.size350} height={Size.size280} domain={{ y: [0, 29] }}>
            <VictoryAxis crossAxis
                         style={{
                           axis: { stroke: "none" },
                           tickLabels: {
                             fontFamily: "Montserrat",
                             fontStyle: "normal",
                             fontWeight: "500",
                             fontSize: Size.size16,
                             lineHeight: Size.size20,
                             fill: "#616062",
                           },
                         }}
                         tickValues={["J", "F", "M", "A ", "M ", "J ", "J  ", "A  ", "S", "O", "N", "D"]}
            />
           <VictoryBar style={{ data: { fill: "#F4C584", width: Size.size7 } }}
                        cornerRadius={
                          { top: () => Size.size3, bottom: () => Size.size3 }
                        }
                        data={data} x="quarter" y="earnings" />
            <VictoryStack
              colorScale={["#EF988F", "#92BEFA", "#83B7AD"]}
            >
             <VictoryBar
               animate={props.scrole<=746&&props.scrole>=491&&{
                 duration: 2000,
                 onLoad: { duration: 1000 }
               }}
                data={data}
                x="quarter" y="y"
                style={{ data: { width: Size.size7 } }}
                cornerRadius={
                  { top: () => Size.size4, bottom: () => Size.size4 }
                }
              />
             <VictoryBar
               animate={props.scrole<=746&&props.scrole>=491&&{
                 duration: 2000,
                 onLoad: { duration: 1000 }
               }}
                data={data}
                style={{ data: { width: Size.size7 } }}
                x="quarter" y="z"
                cornerRadius={
                  { top: () => Size.size4, bottom: () => Size.size4 }
                }
              />
              <VictoryBar
                animate={props.scrole<=746&&props.scrole>=491&&{
                  duration: 2000,
                  onLoad: { duration: 1000 }
                }}
                data={data}
                x="quarter" y="k"
                style={{ data: { width: Size.size7 } }}
                cornerRadius={
                  { top: () => Size.size4, bottom: () => Size.size4 }
                }
              />
            </VictoryStack>
          </VictoryChart>
        </View>
        <View style={styles.icon}  >
          <UnreadIcon
            iconColor={'#92BEFA'}
            iconWidth={Size.size10}
            iconHeight={Size.size10}
          />
          <Text style={styles.title}>Vacation</Text>
          <Text style={styles.duration}>12 day</Text>
        </View>
        <View style={styles.icon}>
          <UnreadIcon
            iconColor={'#EF988F'}
            iconWidth={Size.size10}
            iconHeight={Size.size10}
          />
          <Text style={styles.title}>Day Offs</Text>
          <Text style={styles.duration}>3 day</Text>
        </View>
        <View style={styles.icon}>
          <UnreadIcon
            iconColor={'#83B7AD'}
            iconWidth={Size.size10}
            iconHeight={Size.size10}
          />
          <Text style={styles.title}>Hourly leaved</Text>
          <Text style={styles.duration}>1 h 15 m</Text>
        </View>
        <View style={styles.icon} >
          <UnreadIcon
            iconColor={'#F5CC93'}
            iconWidth={Size.size10}
            iconHeight={Size.size10}
          />
          <Text style={styles.title}>Work remotely</Text>
          <Text style={styles.duration}>5 day</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: Size.size350,
    height: Size.size350,
    marginTop: Size.size30,
    marginLeft: Size.size13,
    marginRight: Size.size24,
    borderRadius: Size.size10,
    marginBottom: Size.size50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  icon: {
    flexDirection: 'row',
    width: Size.size300,
    height: Size.size30,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Montserrat',
    marginHorizontal: Size.size5,
    color: '#151522',
  },
  duration: {
    fontFamily: 'Montserrat',
    position: 'absolute',
    color: '#151522',
    right: 0,
  },
});
export default VictoryLeave;
