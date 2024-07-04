import React, { useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Color, Border } from "../GlobalStyles";
import ResultTable from "../components/ResultTable";
import ConstDetailTable from "../components/ConstDetailTable";
import ConstLabel from "../components/ConstLabel";
import TagsGroup from "../components/TagsGroup";
import SearchBox from "../components/searchBox";
import BarChart from "../components/BarChart";
import QueryTable from "../components/QueryTable";



const Iebc = () => {
  const [results, setResults] = useState([]);
  const [showDetailTable, setShowDetailTable] = useState(false);

  const handleAddPress = () => {
    setShowDetailTable(!showDetailTable);
    
  };
  const headers = [
    'Polling Centre',
    'Hon. Siyoi',
    'Reg. Voters',
    'Hon. Khatundi',
    'Hon. Susan N',
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SearchBox setResults={setResults} title="Election Results" subtitle="102,912 Votes" api="http://192.168.209.1:3000/search/iebc?q=${query}" />
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
            <BarChart />
          </View>

          <View style={styles.constLabelPosition}>
          {showDetailTable ? (
           <ConstDetailTable 
           avatarIcon1={require("../assets/siyoi.png")} 
           avatarIcon2={require("../assets/khatundi.png")} 
           avatarIcon3={require("../assets/nakhumicha.png")} 
           avatarIcon4={require("../assets/patrick.png")} 
           const_stats="Registered Voters: 91,765" 
           constituency="Cherangany Constituency" 
           item_name1="Hon. Siyoi" 
           item_name2="Hon. Khatundi" 
           item_name3="Hon. Nakhumicha" 
           item_name4="Hon. Patrick"
           item_sum1="30,500 Votes"
           item_sum2="14,238 Votes"
           item_sum3="5,170 Votes"
           totalvotes="TOTAL VOTES CASTED: 49,908"            
           item_sum4="26,743 Votes"
           onAddPress={handleAddPress} />
             ) : (
            <ConstLabel percent="86%" constituency="Cherangany Constituency" item_sum1="30,500" onAddPress={handleAddPress} />
             )}
          </View>
          <View style={styles.constLabelPosition}>
          {showDetailTable ? (
           <ConstDetailTable 
           avatarIcon1={require("../assets/siyoi.png")} 
           avatarIcon2={require("../assets/khatundi.png")} 
           avatarIcon3={require("../assets/nakhumicha.png")} 
           avatarIcon4={require("../assets/caleb.png")} 
           const_stats="Registered Voters: 87,382" 
           constituency="Saboti Constituency" 
           item_sum1="22,998 Votes" 
           item_sum2="12,427 Votes" 
           item_sum3="7,468 Votes" 
           totalvotes="TOTAL VOTES CASTED: 42,893" 
           item_name1="Hon. Siyoi" 
           item_name2="Hon. Khatundi" 
           item_name3="Hon. Nakhumicha" 
           item_name4="Hon. Caleb" 
           item_sum4="25,469" 
           onAddPress={handleAddPress} />
             ) : (
            <ConstLabel percent="86%" constituency="Saboti Constituency" item_sum1="22,998" onAddPress={handleAddPress} />
             )}
          </View>
          <View style={styles.constLabelPosition}>
          {showDetailTable ? (
           <ConstDetailTable 
           avatarIcon1={require("../assets/siyoi.png")} 
           avatarIcon2={require("../assets/khatundi.png")} 
           avatarIcon3={require("../assets/nakhumicha.png")} 
           avatarIcon4={require("../assets/pukose.png")} 
           const_stats="Registered Voters: 50,729" 
           constituency="Endebess Constituency" 
           item_sum1="18,235 Votes"
           item_sum2="9,392 Votes"
           item_sum3="1,896 Votes"
           totalvotes="TOTAL VOTES CASTED: 29,523"
           item_name1="Hon. Siyoi" 
           item_name2="Hon. Khatundi" 
           item_name3="Hon. Nakhumicha" 
           item_name4="Hon. Pukose Votes"
           item_sum4="sijajua" 
           onAddPress={handleAddPress} />
             ) : (
            <ConstLabel percent="86%" 
            constituency="Endebess Constituency" 
            item_sum1="18,235" 
            onAddPress={handleAddPress} />
             )}
          </View>
          <View style={styles.constLabelPosition}>
          {showDetailTable ? (
           <ConstDetailTable 
           avatarIcon1={require("../assets/siyoi.png")} 
           avatarIcon2={require("../assets/khatundi.png")} 
           avatarIcon3={require("../assets/nakhumicha.png")} 
           avatarIcon4={require("../assets/bissau.png")}
           const_stats="Registered Voters: 92,898" 
           constituency="Kiminini Constituency" 
           item_sum1="15,627 Votes"
           item_sum2="15,766 Votes"
           item_sum3="2,340 Votes"
           totalvotes="TOTAL VOTES CASTED: 33,733"
           item_name1="Hon. Siyoi" 
           item_name2="Hon. Khatundi" 
           item_name3="Hon. Nakhumicha" 
           item_name4="Hon. Bissau" 
           item_sum4="sijajua" 
           onAddPress={handleAddPress} />
             ) : (
            <ConstLabel percent="86%" constituency="Kiminini Constituency" item_sum1="15,627" onAddPress={handleAddPress} />
             )}
          </View>
          <View style={styles.constLabelPosition}>
          {showDetailTable ? (
           <ConstDetailTable 
           avatarIcon1={require("../assets/siyoi.png")} 
           avatarIcon2={require("../assets/khatundi.png")} 
           avatarIcon3={require("../assets/nakhumicha.png")} 
           avatarIcon4={require("../assets/kevin.png")}
           const_stats="Registered Voters: 75,843" constituency="Kwanza Constituency" 
           item_sum1="15,552 Votes"
           item_sum2="13,013 Votes"
           item_sum3="5,643 Votes"
           item_name1="Hon. Siyoi" 
           item_name2="Hon. Khatundi" 
           item_name3="Hon. Nakhumicha"
           totalvotes="TOTAL VOTES CASTED: 34,208" 
           item_name4="Hon. Fedyy" 
           item_sum4="sijajua" onAddPress={handleAddPress} />
             ) : (
            <ConstLabel percent="86%" constituency="Kwanza Constituency" item_sum1="15,552" onAddPress={handleAddPress} />
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

export default Iebc;