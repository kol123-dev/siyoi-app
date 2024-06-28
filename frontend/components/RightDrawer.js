import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Modal, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { Color, FontSize, FontFamily, Border } from '../GlobalStyles';
import profileImage from '../assets/avatar.png'; // Replace with actual profile image path

const RightDrawer = ({ drawerVisible, toggleDrawer }) => {
  return (
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
              <Text style={styles.profileName}>Ashfak Sayem</Text>
              <Text style={styles.profileEmail}>ashfaksayem@gmail.com</Text>
              <ScrollView>
                <TouchableOpacity style={styles.drawerItem}>
                  <Image source={require('../assets/star-2.png')} style={styles.drawerItemIcon} />
                  <Text style={styles.drawerItemText}>Calendar</Text>
                  <View style={styles.drawerItemBadge}><Text style={styles.drawerItemBadgeText}>2</Text></View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.drawerItem}>
                  <Image source={require('../assets/star-2.png')} style={styles.drawerItemIcon} />
                  <Text style={styles.drawerItemText}>Rewards</Text>
                  <View style={[styles.drawerItemBadge, { backgroundColor: '#FF6F61' }]}><Text style={styles.drawerItemBadgeText}>2</Text></View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.drawerItem}>
                  <Image source={require('../assets/star-2.png')} style={styles.drawerItemIcon} />
                  <Text style={styles.drawerItemText}>Address</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.drawerItem}>
                  <Image source={require('../assets/star-2.png')} style={styles.drawerItemIcon} />
                  <Text style={styles.drawerItemText}>Payments Methods</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.drawerItem}>
                  <Image source={require('../assets/star-2.png')} style={styles.drawerItemIcon} />
                  <Text style={styles.drawerItemText}>Offers</Text>
                  <View style={styles.drawerItemBadge}><Text style={styles.drawerItemBadgeText}>2</Text></View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.drawerItem}>
                  <Image source={require('../assets/star-2.png')} style={styles.drawerItemIcon} />
                  <Text style={styles.drawerItemText}>Refer a Friend</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.drawerItem}>
                  <Image source={require('../assets/star-2.png')} style={styles.drawerItemIcon} />
                  <Text style={styles.drawerItemText}>Support</Text>
                </TouchableOpacity>
              </ScrollView>
              <View style={styles.footer}>
                <Text style={styles.footerText}>Colour Scheme</Text>
                <View style={styles.colorSchemeToggle}>
                  <TouchableOpacity style={[styles.colorSchemeOption, styles.colorSchemeOptionSelected]}>
                    <Text style={styles.colorSchemeOptionText}>Light</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.colorSchemeOption}>
                    <Text style={styles.colorSchemeOptionText}>Dark</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    flexDirection: 'row-reverse',
  },
  drawerContent: {
    backgroundColor: 'white',
    width: 250,
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

export default RightDrawer;
