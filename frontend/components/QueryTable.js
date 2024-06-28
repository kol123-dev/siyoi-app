import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';

const QueryTable = ({ results }) => {
  const headers = [
    'Polling Centre',
    'Hon. Siyoi',
    'Reg. Voters',
    'Hon. Khatundi',
    'Hon. Nakhumicha',
  ];

  // Prepare tableBody from results received
  const tableBody = results.map((result, index) => (
    <View key={index} style={styles.row}>
      <Text style={styles.cell}>{result.Polling_Centre_Name}</Text>
      <Text style={styles.cell}>{result.Siyoi_Lillian}</Text>
      <Text style={styles.cell}>{result.Reg_Voters}</Text>
      <Text style={styles.cell}>{result.Khatundi_Phanice}</Text>
      <Text style={styles.cell}>{result.Nakhumicha_Susan}</Text>
    </View>
  ));

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        {headers.map((header, index) => (
          <View key={index} style={styles.header}>
            <Text style={styles.headerText}>{header}</Text>
          </View>
        ))}
      </View>
      <ScrollView style={styles.scrollView}>
        {tableBody}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    paddingTop:10,
    borderColor: 'gray',
    borderRadius: 5,
  },
  headerContainer: {
    flexDirection: 'row',
    backgroundColor: 'green',
  },
  header: {
    flex: 1,
    padding: 10,
    borderRightWidth: 1,
    borderRightColor: 'white',
  },
  headerText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  scrollView: {
    flexGrow: 1,
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    padding: 10,
  },
  cell: {
    flex: 1,
    fontSize: 13,
    color: 'black',
    textAlign: 'center',
    paddingVertical: 5,
  },
});

export default QueryTable;
