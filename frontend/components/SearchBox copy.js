import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, Modal, ScrollView, TouchableWithoutFeedback, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { Color, FontSize, FontFamily, Border } from '../GlobalStyles';
import LeftArrowIcon from '../assets/left_arrow.png';
import hamburger from '../assets/hamburger.png';
import SearchIcon from '../assets/search_icon.png';
import profileImage from '../assets/avatar.png'; // Replace with actual profile image path

const SearchBox = ({ setResults }) => {
  const navigation = useNavigation();
  const [query, setQuery] = useState("");
  const [drawerVisible, setDrawerVisible] = useState(false);

  const fetchResults = async () => {
    try {
      const response = await fetch(`http://192.168.100.2:3000/search?q=${query}`);
      
      // Check if response is successful (HTTP status in the range 200-299)
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      // Check content type
      const contentType = response.headers.get('content-type');
      
      if (contentType && contentType.includes('application/json')) {
        const data = await response.json();
        setResults(data);
      } else {
        const text = await response.text();
        console.error('Unexpected response:', text);
        Alert.alert('Error', 'Unexpected response from the server.');
      }
    } catch (error) {
      console.error('Fetch error:', error);
      Alert.alert('Error', 'Failed to fetch results.');
    }
  };

  const handleSearchPress = () => {
    fetchResults();
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      fetchResults();
    }
  };

  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  return (
    <>
      <LinearGradient
        colors={['#FFFFFF', 'hsla(129, 83%, 24%, 1)']}
        style={styles.container}
      >
        <View style={styles.titleSection}>
          <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
            <Image source={LeftArrowIcon} style={styles.leftArrowIcon} />
          </TouchableOpacity>
          <View style={styles.titleItem}>
            <Text style={styles.text}>Election Results</Text>
            <Text style={styles.subtitle}>102,912 Votes</Text>
          </View>
          <TouchableOpacity onPress={toggleDrawer}>
            <Image source={hamburger} style={styles.hamburger} />
          </TouchableOpacity>
        </View>
        <View style={styles.searchArea}>
          <TextInput
            style={styles.input}
            placeholder="Search..."
            placeholderTextColor={Color.colorDimgray_100}
            value={query}
            onChangeText={setQuery}
            onSubmitEditing={fetchResults}
            returnKeyType="search"
          />
          <TouchableOpacity style={styles.searchIconContainer} onPress={handleSearchPress}>
            <Image source={SearchIcon} style={styles.searchIcon} />
          </TouchableOpacity>
        </View>
      </LinearGradient>

      <Modal
        animationType="slide"
        transparent={true}
        visible={drawerVisible}
        onRequestClose={toggleDrawer}
      >
        <TouchableWithoutFeedback onPress={toggleDrawer}>
          <View style={styles.modalOverlay}>
            <TouchableWithoutFeedback>
              <View style={styles.drawerContent}>
                <Image source={profileImage} style={styles.profileImage} />
                <Text style={styles.profileName}>Collins Imboha</Text>
                <Text style={styles.profileEmail}>ashfaksayem@gmail.com</Text>
                <ScrollView>
                  <TouchableOpacity style={styles.drawerItem}>
                    <Image source={require('../assets/wheelchair.png')} style={styles.drawerItemIcon} />
                    <Text style={styles.drawerItemText}>PWDs</Text>
                    {/* <View style={styles.drawerItemBadge}><Text style={styles.drawerItemBadgeText}>2</Text></View> */}
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.drawerItem}>
                    <Image source={require('../assets/scholarship.png')} style={styles.drawerItemIcon} />
                    <Text style={styles.drawerItemText}>Scholarship & Bursary</Text>
                    {/* <View style={[styles.drawerItemBadge, { backgroundColor: '#FF6F61' }]}><Text style={styles.drawerItemBadgeText}>2</Text></View> */}
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.drawerItem}>
                    <Image source={require('../assets/jobs.png')} style={styles.drawerItemIcon} />
                    <Text style={styles.drawerItemText}>Jobs</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.drawerItem}>
                    <Image source={require('../assets/vote.png')} style={styles.drawerItemIcon} />
                    <Text style={styles.drawerItemText}>2022 Iebc Results</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.drawerItem}>
                    <Image source={require('../assets/groups.png')} style={styles.drawerItemIcon} />
                    <Text style={styles.drawerItemText}>Groups</Text>
                    {/* <View style={styles.drawerItemBadge}><Text style={styles.drawerItemBadgeText}>2</Text></View> */}
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.drawerItem}>
                    <Image source={require('../assets/churches.png')} style={styles.drawerItemIcon} />
                    <Text style={styles.drawerItemText}>Churches</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.drawerItem}>
                    <Image source={require('../assets/youths.png')} style={styles.drawerItemIcon} />
                    <Text style={styles.drawerItemText}>Youths</Text>
                  </TouchableOpacity>
                </ScrollView>
                
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    padding: 20,
    borderRadius: Border.br_11xl,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    width: "100%",
    height:170,
  },
  titleSection: {
    flex: 1,
    flexDirection: 'row',
    alignItems: "center",
    gap: 60,
  },
  leftArrowIcon: {
    width: 25,
    height: 20,
    marginRight: 10,
  },
  hamburger: {
    width: 40,
    height: 40,
  },
  titleItem: {
    alignItems: "center",
  },
  text: {
    fontSize: FontSize.body1Bold_size,
    fontWeight: "900",
    fontFamily: FontFamily.body1Bold,
    color: "#0d0901",
  },
  subtitle: {
    fontSize: FontSize.footnote_size,
    fontWeight: "800",
    fontFamily: FontFamily.footnote,
    color: "#0d0901",
  },
  input: {
    height: 40,
    width: "100%",
    backgroundColor: "#EDFEF0",
    borderRadius: Border.br_7xs,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.footnote,
    color: Color.colorDimgray_100,
    borderWidth: 1,
    borderColor: Color.colorLightgray_200,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  searchArea: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
  },
  searchIconContainer: {
    padding: 10,
    width: 40,
    height: 40,
    marginLeft: -40,
    borderRadius: Border.br_7xs,
    backgroundColor: '#2E86C1',
  },
  searchIcon: {
    width: 20,
    height: 20,
  },
  modalOverlay: {
    flex: 1,
    flexDirection: 'row-reverse',
  },
  drawerContent: {
    backgroundColor: '#EDFEF0',
    width: 250,
    height:"70%",
    padding: 20,
    paddingTop: 40,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  profileEmail: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 20,
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  drawerItemIcon: {
    width: 24,
    height: 24,
    marginRight: 15,
  },
  drawerItemText: {
    fontSize: 16,
  },
  drawerItemBadge: {
    marginLeft: 'auto',
    backgroundColor: '#2E86C1',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  drawerItemBadgeText: {
    color: 'white',
    fontSize: 12,
  },
  footer: {
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingTop: 20,
  },
  footerText: {
    fontSize: 16,
    marginBottom: 10,
  },
  colorSchemeToggle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  colorSchemeOption: {
    padding: 10,
    borderRadius: 20,
  },
  colorSchemeOptionSelected: {
    backgroundColor: '#2E86C1',
  },
  colorSchemeOptionText: {
    color: 'white',
  },
});

export default SearchBox;
