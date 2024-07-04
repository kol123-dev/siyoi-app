import React from "react";
import { StyleSheet } from "react-native";
import { VictoryLegend } from "victory-native";

  
  
  


const Legend = () => {
  return (
    <VictoryLegend x={5} y={10}
  	// title="Legend"
    // centerTitle
    orientation="horizontal"
    borderPadding={{ top: 0, bottom: 5 , right: 5,}}
    gutter={10}
    // style={{ border: { stroke: "black" }, title: {fontSize: 20 } }}
    data={[
      { name: "Wheelchairs", symbol: { fill: "#00C9CA", type: "star" } },
      { name: "Crutches", symbol: { fill: "orange" } },
      { name: "Carts", symbol: { fill: "#0099E4" } },
      { name: "Others", symbol: { fill: "#95CCA2" } }
    ]}
  />
  )
};

const styles = StyleSheet.create({
  container: {
    
    marginLeft:20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  svgBox:{
    width:300,
    height:300,
    padding:5,
  },
});

export default Legend;
