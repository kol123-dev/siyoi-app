import React, { useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Color, Border } from "../GlobalStyles";
import ResultTable from "../components/ResultTable";
import ConstDetailTable from "../components/ConstDetailTable";
import ConstLabel from "../components/ConstLabel";
import TagsGroup from "../components/TagsGroup";
import SearchBox from "../components/searchBox";
import QueryTable from "../components/QueryTable";
import CombinedBar from "../components/CombinedBar";
import BarChart from "../components/BarChart";
import Legend from "../components/Legend";

const Pwds = () => {
  const [results, setResults] = useState([]);
  const [selectedConstituency, setSelectedConstituency] = useState(null);

  const handleAddPress = (constituency) => {
    setSelectedConstituency(selectedConstituency === constituency ? null : constituency);
  };

  const headers = [
    'Area',
    'Beneficiary',
    'Caregiver',
    'Device',
    'Phone',
    'Disability',
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SearchBox setResults={setResults} title="PWDs Data" subtitle="12,912 Beneficiaries" api="http://192.168.209.1:3000/search/pwds?q=${query}" />
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.content}>
          <View style={styles.queryTablePosition}>
            <QueryTable headers={headers} results={results} />
          </View>
          <View style={styles.tagsGroupPosition}>
            <TagsGroup />
          </View>
          <View style={styles.barChartPosition}>
            <CombinedBar/>
          </View>
          <View style={styles.legendPosition}>
            <Legend/>
          </View>

          <View style={styles.constLabelPosition}>
            {selectedConstituency === "Cherangany Constituency" ? (
              <ConstDetailTable 
                avatarIcon1={require("../assets/wheelchair1.png")} 
                avatarIcon2={require("../assets/cart.png")} 
                avatarIcon3={require("../assets/crutches.png")} 
                avatarIcon4={require("../assets/mobilityaids.png")} 
                const_stats="Total Devices: 12,069" 
                constituency="Cherangany Constituency"
                item_name1="Wheelchairs" 
                item_name2="Mobility Carts" 
                item_name3="Crutches" 
                item_name4="Other Aids"
                item_sum1="30,500" 
                item_sum2="14,238" 
                item_sum3="5,170"
                item_sum4="3,200"
                totalvotes="TOTAL MOBILITY AIDS: 49,908" 
                onAddPress={() => handleAddPress("Cherangany Constituency")}
              />
            ) : (
              <ConstLabel 
                percent="86%" 
                constituency="Cherangany Constituency" 
                item_sum1="30,500" 
                onAddPress={() => handleAddPress("Cherangany Constituency")}
              />
            )}
          </View>

          <View style={styles.constLabelPosition}>
            {selectedConstituency === "Saboti Constituency" ? (
              <ConstDetailTable 
                avatarIcon1={require("../assets/wheelchair1.png")} 
                avatarIcon2={require("../assets/cart.png")} 
                avatarIcon3={require("../assets/crutches.png")} 
                avatarIcon4={require("../assets/mobilityaids.png")} 
                const_stats="Total Devices: 12,069" 
                constituency="Saboti Constituency"
                item_name1="Wheelchairs" 
                item_name2="Mobility Carts" 
                item_name3="Crutches" 
                item_name4="Other Aids"
                item_sum1="30,500" 
                item_sum2="14,238" 
                item_sum3="5,170"
                item_sum4="3,200"
                totalvotes="TOTAL MOBILITY AIDS: 49,908" 
                onAddPress={() => handleAddPress("Saboti Constituency")}
              />
            ) : (
              <ConstLabel 
                percent="86%" 
                constituency="Saboti Constituency" 
                item_sum1="22,998" 
                onAddPress={() => handleAddPress("Saboti Constituency")}
              />
            )}
          </View>

          <View style={styles.constLabelPosition}>
            {selectedConstituency === "Endebess Constituency" ? (
              <ConstDetailTable 
                avatarIcon1={require("../assets/wheelchair1.png")} 
                avatarIcon2={require("../assets/cart.png")} 
                avatarIcon3={require("../assets/crutches.png")} 
                avatarIcon4={require("../assets/mobilityaids.png")} 
                const_stats="Total Devices: 12,069" 
                constituency="Endebess Constituency"
                item_name1="Wheelchairs" 
                item_name2="Mobility Carts" 
                item_name3="Crutches" 
                item_name4="Other Aids"
                item_sum1="30,500" 
                item_sum2="14,238" 
                item_sum3="5,170"
                item_sum4="3,200"
                totalvotes="TOTAL MOBILITY AIDS: 49,908" 
                onAddPress={() => handleAddPress("Endebess Constituency")}
              />
            ) : (
              <ConstLabel 
                percent="86%" 
                constituency="Endebess Constituency" 
                item_sum1="18,235" 
                onAddPress={() => handleAddPress("Endebess Constituency")}
              />
            )}
          </View>

          <View style={styles.constLabelPosition}>
            {selectedConstituency === "Kiminini Constituency" ? (
              <ConstDetailTable 
                avatarIcon1={require("../assets/wheelchair1.png")} 
                avatarIcon2={require("../assets/cart.png")} 
                avatarIcon3={require("../assets/crutches.png")} 
                avatarIcon4={require("../assets/mobilityaids.png")} 
                const_stats="Total Devices: 12,069" 
                constituency="Kiminini Constituency"
                item_name1="Wheelchairs" 
                item_name2="Mobility Carts" 
                item_name3="Crutches" 
                item_name4="Other Aids"
                item_sum1="30,500" 
                item_sum2="14,238" 
                item_sum3="5,170"
                item_sum4="3,200"
                totalvotes="TOTAL MOBILITY AIDS: 49,908" 
                onAddPress={() => handleAddPress("Kiminini Constituency")}
              />
            ) : (
              <ConstLabel 
                percent="86%" 
                constituency="Kiminini Constituency" 
                item_sum1="15,627" 
                onAddPress={() => handleAddPress("Kiminini Constituency")}
              />
            )}
          </View>

          <View style={styles.constLabelPosition}>
            {selectedConstituency === "Kwanza Constituency" ? (
              <ConstDetailTable 
                avatarIcon1={require("../assets/wheelchair1.png")} 
                avatarIcon2={require("../assets/cart.png")} 
                avatarIcon3={require("../assets/crutches.png")} 
                avatarIcon4={require("../assets/mobilityaids.png")} 
                const_stats="Total Devices: 12,069" 
                constituency="Kwanza Constituency"
                item_name1="Wheelchairs" 
                item_name2="Mobility Carts" 
                item_name3="Crutches" 
                item_name4="Other Aids"
                item_sum1="30,500" 
                item_sum2="14,238" 
                item_sum3="5,170"
                item_sum4="3,200"
                totalvotes="TOTAL MOBILITY AIDS: 49,908" 
                onAddPress={() => handleAddPress("Kwanza Constituency")}
              />
            ) : (
              <ConstLabel 
                percent="86%" 
                constituency="Kwanza Constituency" 
                item_sum1="15,552" 
                onAddPress={() => handleAddPress("Kwanza Constituency")}
              />
            )}
          </View>

          <View style={styles.resultTablePosition}>
            <ResultTable results={results} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorHoneydew_100,
  },
  header: {
    zIndex: 100,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  content: {
    padding: 20,
  },
  tagsGroupPosition: {
    marginBottom: 20,
  },
  barChartPosition: {
    marginBottom: 20,
    alignSelf:"center",
  },
  legendPosition:{
    paddingBottom:40,
    // backgroundColor:"red",
    maxHeight:100,
  },
  constLabelPosition: {
    marginBottom: 20,
    alignItems: "center",
  },
  constDetailTablePosition: {
    marginBottom: 20,
    alignSelf:"center",
  },
  resultTablePosition: {
    marginBottom: 20,
    padding:5,
    backgroundColor:"green",
  },
  queryTablePosition: {
    marginBottom: 20,
    marginTop: -20,
    backgroundColor: "transparent",
  },
});

export default Pwds;
