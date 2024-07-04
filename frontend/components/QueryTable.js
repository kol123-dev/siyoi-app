import React from 'react';
import { StyleSheet, ScrollView, View, Text, Dimensions } from 'react-native';

const QueryTable = ({ headers, results }) => {
  // Prepare tableBody from results received
  const tableBody = results.map((result, index) => (
    <View key={index} style={styles.row}>
      {headers.map((header, idx) => (
        <Text key={idx} style={styles.cell}>{result[header]}</Text>
      ))}
    </View>
  ));

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View>
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
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    borderColor: 'gray',
    borderRadius: 5,
    borderWidth: 1,
    margin: 0,
  },
  headerContainer: {
    flexDirection: 'row',
    backgroundColor: 'green',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  header: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRightWidth: 1,
    borderRightColor: 'white',
    width:100,
  },
  headerText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  scrollView: {
    maxHeight: Dimensions.get('window').height / 2, // Adjust the max height as needed
    flexGrow: 1,
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  cell: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 5,
    fontSize: 11,
    textAlign: 'center',
    width:80,
  },
});

export default QueryTable;
