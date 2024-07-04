import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { VictoryChart, VictoryAxis, VictoryStack, VictoryBar, VictoryTheme } from "victory-native";

const data_wheelchairs = [
  { subcounty: 1, numbers: 1300 },
  { subcounty: 2, numbers: 1650 },
  { subcounty: 3, numbers: 1450 },
  { subcounty: 4, numbers: 1000 },
  { subcounty: 5, numbers: 1800 },
];

const data_crutches = [
  { subcounty: 1, numbers: 1500 },
  { subcounty: 2, numbers: 1250 },
  { subcounty: 3, numbers: 1950 },
  { subcounty: 4, numbers: 1300 },
  { subcounty: 5, numbers: 1400 }
];

const data_carts = [
  { subcounty: 1, numbers: 500 },
  { subcounty: 2, numbers: 1320 },
  { subcounty: 3, numbers: 2000 },
  { subcounty: 4, numbers: 1550 },
  { subcounty: 5, numbers: 1590 }
];

const data_others = [
  { subcounty: 1, numbers: 1800 },
  { subcounty: 2, numbers: 1320 },
  { subcounty: 3, numbers: 1500 },
  { subcounty: 4, numbers: 1200 },
  { subcounty: 5, numbers: 1400 }
];

const CombinedBar = () => {
  return (
    <VictoryChart
      domainPadding={20}
      theme={VictoryTheme.material}
      style={styles.container}
    >
      <VictoryAxis
        tickValues={[1, 2, 3, 4, 5]}
        tickFormat={["Chera", "Kiminini", "Saboti", "Kwnza", "Endebess"]}
      />
      <VictoryAxis
        dependentAxis
        // tickFormat={(x) => (`$${x / 1000}`)}
      />
      <VictoryStack
        colorScale={["#00C9CA", "orange", "#0099E4", "#95CCA2"]}
        // labels={["spring", "summer", "fall", "winter"]}
      >
        <VictoryBar
          data={data_wheelchairs}
          x="subcounty"
          y="numbers"
        />
        <VictoryBar
          data={data_crutches}
          x="subcounty"
          y="numbers"
        />
        <VictoryBar
          data={data_carts}
          x="subcounty"
          y="numbers"
        />
        <VictoryBar
          data={data_others}
          x="subcounty"
          y="numbers"
        />
      </VictoryStack>
      <Text style={styles.title}>Distribution of Mobility Devices</Text>
      <Text style={styles.title2}>Across the County</Text>
    </VictoryChart>
  )
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft:50,
  },
  title2: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft:100,
  },
});

export default CombinedBar;
