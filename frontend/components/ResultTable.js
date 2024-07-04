import React, { useState } from 'react';
import { StyleSheet, ScrollView, View, Text, TouchableOpacity } from 'react-native';

const ResultTable = () => {
  const headers = [
    'Ward',
    'Hon. Siyoi',
    'Reg. Voters',
    'Hon. Khatundi',
    'Hon. Nakhumicha',
  ];

  const data = [
    { Ward_ID: 1, Ward_Name: 'KIMININI WARD', Reg_Voters: '17,303', Siyoi_Lillian: '2,171', Khatundi_Phanice: '3,001', Nakhumicha_Susan: '2,340', Polling_Centers: [{ Center_Name: 'MAKHELE PRIMARY', Siyoi_Lillian: '1,071', Khatundi_Phanice: '1,501', Nakhumicha_Susan: '1,040' }, { Center_Name: 'Center 2', Siyoi_Lillian: '1,100', Khatundi_Phanice: '1,500', Nakhumicha_Susan: '1,300' }] },
    { Ward_ID: 2, Ward_Name: 'SIKHENDU WARD', Reg_Voters: '11,573', Siyoi_Lillian: '1,152', Khatundi_Phanice: '2,188', Nakhumicha_Susan: '2,424', Polling_Centers: [{ Center_Name: 'SHIMO LA TEWA PRIMARY', Siyoi_Lillian: '552', Khatundi_Phanice: '1,188', Nakhumicha_Susan: '1,124' }, { Center_Name: 'Center 2', Siyoi_Lillian: '600', Khatundi_Phanice: '1,000', Nakhumicha_Susan: '1,300' }] },
    { Ward_ID: 3, Ward_Name: 'NABISWA WARD', Reg_Voters: '18,730', Siyoi_Lillian: '2,356', Khatundi_Phanice: '3,318', Nakhumicha_Susan: '2,639', Polling_Centers: [{ Center_Name: 'BIDII PRIMARY', Siyoi_Lillian: '1,356', Khatundi_Phanice: '1,718', Nakhumicha_Susan: '1,339' }, { Center_Name: 'Center 2', Siyoi_Lillian: '1,000', Khatundi_Phanice: '1,600', Nakhumicha_Susan: '1,300' }] },
    { Ward_ID: 4, Ward_Name: 'WAITALUK WARD', Reg_Voters: '18,754', Siyoi_Lillian: '4,039', Khatundi_Phanice: '3,163', Nakhumicha_Susan: '2,120', Polling_Centers: [{ Center_Name: 'MATUNDA PRIMARY', Siyoi_Lillian: '2,039', Khatundi_Phanice: '1,663', Nakhumicha_Susan: '1,120' }, { Center_Name: 'Center 2', Siyoi_Lillian: '2,000', Khatundi_Phanice: '1,500', Nakhumicha_Susan: '1,000' }] },
    { Ward_ID: 5, Ward_Name: 'HOSPITAL WARD', Reg_Voters: '14,356', Siyoi_Lillian: '3,674', Khatundi_Phanice: '1,810', Nakhumicha_Susan: '1,118', Polling_Centers: [{ Center_Name: 'LESSOS PRIMARY', Siyoi_Lillian: '1,674', Khatundi_Phanice: '810', Nakhumicha_Susan: '618' }, { Center_Name: 'Center 2', Siyoi_Lillian: '2,000', Khatundi_Phanice: '1,000', Nakhumicha_Susan: '500' }] },
  ];

  const [expandedRow, setExpandedRow] = useState(null);

  const toggleRow = (wardId) => {
    setExpandedRow(expandedRow === wardId ? null : wardId);
  };

  const tableBody = data.map((row, index) => (
    <View key={index}>
      <TouchableOpacity onPress={() => toggleRow(row.Ward_ID)}>
        <View style={[styles.row, index % 2 === 0 ? styles.evenRow : styles.oddRow]}>
          <Text style={styles.cell}>{row.Ward_Name}</Text>
          <Text style={styles.cell}>{row.Siyoi_Lillian}</Text>
          <Text style={styles.cell}>{row.Reg_Voters}</Text>
          <Text style={styles.cell}>{row.Khatundi_Phanice}</Text>
          <Text style={styles.cell}>{row.Nakhumicha_Susan}</Text>
        </View>
      </TouchableOpacity>
      {expandedRow === row.Ward_ID && (
        <View style={styles.dropdown}>
          {row.Polling_Centers.map((center, idx) => (
            <View key={idx} style={styles.dropdownRow}>
              <Text style={styles.cell}>{center.Center_Name}</Text>
              <Text style={styles.cell}>{center.Siyoi_Lillian}</Text>
              <Text style={styles.cell}>{center.Reg_Voters}</Text>
              <Text style={styles.cell}>{center.Khatundi_Phanice}</Text>
              <Text style={styles.cell}>{center.Nakhumicha_Susan}</Text>
            </View>
          ))}
        </View>
      )}
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
    paddingTop: 10,
    borderColor: '#a9d9ab',
    borderRadius: 5,
  },
  headerContainer: {
    flexDirection: 'row',
    backgroundColor: '#a9d9ab',
  },
  header: {
    flex: 1,
    padding: 10,
    borderRightWidth: 1,
    borderRightColor: 'white',
  },
  headerText: {
    color: 'black',
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  scrollView: {
    flexGrow: 1,
    backgroundColor: 'white',
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    padding: 10,
  },
  evenRow: {
    backgroundColor: '#e6e8e6',
  },
  oddRow: {
    backgroundColor: '#e6e8e6',
  },
  cell: {
    flex: 1,
    fontSize: 10,
    color: 'black',
    textAlign: 'center',
    paddingVertical: 5,
  },
  dropdown: {
    backgroundColor: '#d3d3d3',
    
    
  },
  dropdownRow: {
    flexDirection: 'row',
    padding: 5,
  },
});

export default ResultTable;
