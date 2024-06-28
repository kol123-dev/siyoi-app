import React, { useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Color, Border } from "../GlobalStyles";
import ResultTable from "../components/ResultTable";
import ConstDetailTable from "../components/ConstDetailTable";
import ConstLabel from "../components/ConstLabel";
import TagsGroup from "../components/TagsGroup";
import SearchBox from "../components/SearchBox";
import BarChart from "../components/BarChart";
import QueryTable from "../components/QueryTable";


const Iebc = () => {
  const [results, setResults] = useState([]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SearchBox setResults={setResults} />
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.content}>
          <View style={styles.queryTablePosition}>
            <QueryTable results={results} />
          </View>
          <View style={styles.tagsGroupPosition}>
            <TagsGroup />
          </View>
          <View style={styles.barChartPosition}>
            <BarChart />
          </View>
          <View style={styles.constLabelPosition}>
            <ConstLabel />
          </View>
          <View style={styles.constDetailTablePosition}>
            <ConstDetailTable />
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
  },
  constLabelPosition: {
    marginBottom: 20,
    alignItems: "center",
  },
  constDetailTablePosition: {
    marginBottom: 20,
  },
  resultTablePosition: {
    marginBottom: 20,
  },
  queryTablePosition: {
    marginBottom: 20,
    marginTop: -20,
    backgroundColor: "transparent",
  },
});

export default Iebc;
