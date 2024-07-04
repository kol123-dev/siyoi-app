import React, { useState } from 'react';
import { Border, FontSize, FontFamily, Color, Padding } from "../GlobalStyles";
import hamburger from '../assets/hamburger.png';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, Modal, ScrollView, TouchableWithoutFeedback, Alert } from 'react-native';
import LeftArrowIcon from '../assets/left_arrow.png';
import SearchIcon from '../assets/search_icon.png';
import profileImage from '../assets/avatar.png'; // Replace with actual profile image path



const NavigationBar = ({
  leftItem = true,
  title = true,
  right2M = false,
  right1L = false,
  right3R = true,
}) => {
  const navigation = useNavigation();
  const [drawerVisible, setDrawerVisible] = useState(false);
  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };
  return (
    <View style={styles.navigationBar}>
      {leftItem && (
        <View style={styles.leftSection}>
          <Image
            style={styles.avatarIcon}
            contentFit="cover"
            source={require("../assets/avatar.png")}
          />
        </View>
      )}
      <View style={styles.titleSection}>
        {title && (
          <View style={styles.titleItem}>
            <Text style={styles.text}>Hello Imboha,</Text>
            <Text style={styles.subtitle}>Welcome to SiyoiApp</Text>
          </View>
        )}
      </View>
      {/* <View style={styles.rightActions}> */}
       
      <TouchableOpacity onPress={toggleDrawer}>
      <View style={styles.rightAction}>
            <Image
              style={styles.icon}
              contentFit="cover"
              source={hamburger}
            />
        </View>
        </TouchableOpacity>     

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
                <TouchableOpacity style={styles.drawerItem} onPress={() => navigation.navigate('PWDs')}>
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
    </View>
    
  );
};

const styles = StyleSheet.create({
  navigationBar: {
    position: "sticky",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    backgroundColor: Color.surfaceLevel1,
    height: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: Padding.p_5xs,
    paddingTop: 30,
    // borderBottomWidth: 1,
    borderBottomColor: Color.textSecondary,
  },
  leftSection: {
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    width: 40,
  },
  avatarIcon: {
    width: 32,
    height: 32,
  },
  titleSection: {
    flex: 1,
    alignItems: "center",
  },
  titleItem: {
    alignItems: "center",
  },
  text: {
    fontSize: FontSize.body1Bold_size,
    fontWeight: "500",
    fontFamily: FontFamily.body1Bold,
    color: Color.textPrimary,
  },
  subtitle: {
    fontSize: FontSize.footnote_size,
    fontFamily: FontFamily.footnote,
    color: Color.textSecondary,
  },
  rightActions: {
    flexDirection: "row",
    alignItems: "center",
  },
  rightAction: {
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    width: 40,
    marginLeft: 4,
  },
  icon: {
    width: 24,
    height: 24,
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

export default NavigationBar;
