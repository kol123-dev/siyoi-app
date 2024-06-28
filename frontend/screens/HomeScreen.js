import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, ScrollView, Animated } from "react-native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ProgramCard from "../components/ProgramCard";
import TagsGroup from "../components/TagsGroup";
import NavigationBar from "../components/NavigationBar";

const HomeScreen = () => {
  const navigation = useNavigation();
  const scrollY = new Animated.Value(0);

  // const handleNavigateToIebc = () => {
  //   navigation.navigate('Iebc');
  // };

  const headerHeight = scrollY.interpolate({
    inputRange: [0, 50],
    outputRange: [80, 50],
    extrapolate: 'clamp'
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.stickyHeader, { height: headerHeight }]}>
        <NavigationBar />
      </Animated.View>
      <ScrollView 
        style={styles.scrollView}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      >
        <View style={styles.homeScreen}>
        <TouchableOpacity style={styles.hero} onPress={() => navigation.navigate('Iebc')}>

          {/* <TouchableOpacity style={styles.hero} onPress={handleNavigateToIebc}> */}
            <Image
              style={styles.maskGroupIcon}
              contentFit="cover"
              source={require("../assets/mask-group.png")}
            />
          </TouchableOpacity>
          <View style={[styles.tagsGroupPosition]}>
            <TagsGroup />
          </View>

          <Text style={[styles.recentProgrammes, styles.kTypo]}>
            Recent Programmes
          </Text>
          <View style={[styles.pwd, styles.pwdLayout]}>
            <View style={[styles.pwdChild, styles.pwdLayout]} />
            <Text style={[styles.wheelChairs, styles.kClr]}>Wheel Chairs</Text>
            <Text style={[styles.k, styles.kClr]}>44.5k</Text>
            <Image
              style={styles.headhuntingIcon}
              contentFit="cover"
              source={require("../assets/headhunting.png")}
            />
          </View>
          <View style={[styles.scholarships, styles.groupsChildLayout]}>
            <View style={[styles.scholarshipsChild, styles.childPosition]} />
            <Text style={[styles.scholarships1, styles.kClr]}>Scholarships</Text>
            <Text style={[styles.text, styles.kClr]}>389</Text>
          </View>
          <View style={[styles.groups, styles.groupsChildLayout]}>
            <View style={[styles.groupsChild, styles.childPosition]} />
            <Text style={[styles.groups1, styles.kClr]}>Groups</Text>
            <Text style={[styles.text, styles.kClr]}>668</Text>
          </View>
          
          <View style={[styles.programcardLayout]}>
            <ProgramCard />
            <ProgramCard />
          </View>
          
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  stickyHeader: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    backgroundColor: Color.surfaceLevel1,
  },
  programcardLayout: {
    height: 149,
    width: 335,
    top: "48%",
  },
  hero: {
    marginTop: "30%",
  },
  maskGroupIcon: {
    top: 0,
    width: 329,
    height: 181,
    left: 23,
    position: "absolute",
  },
  tagsGroupPosition: {
    left: 26,
    position: "absolute",
    top: "30%",
  },
  theTypo: {
    textAlign: "left",
    color: Color.colorDimgray_100,
    fontSize: FontSize.size_3xs,
    top: 6,
    fontFamily: FontFamily.footnote,
    position: "absolute",
  },
  beneficiariesbuttonLayout: {
    width: 123,
    height: 25,
    position: "absolute",
  },
  childBg: {
    backgroundColor: Color.colorLightgray_200,
    opacity: 0.2,
    borderRadius: Border.br_5xs,
    left: 0,
  },
  groupsAttendedPosition: {
    color: Color.colorMidnightblue_100,
    textAlign: "left",
    left: 20,
    position: "absolute",
  },
  saveLayout: {
    height: 24,
    width: 24,
  },
  educationTypo: {
    fontSize: FontSize.smallSmall2_size,
    textAlign: "left",
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.footnote,
    position: "absolute",
  },
  kTypo: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
  },
  groupsChildLayout: {
    height: 75,
    width: 156,
    position: "absolute",
  },
  childPosition: {
    borderRadius: Border.br_7xs,
    left: 0,
    top: 0,
  },
  kClr: {
    color: Color.colorMidnightblue_300,
    textAlign: "left",
    position: "absolute",
  },
  pwdLayout: {
    height: 170,
    width: 150,
    position: "absolute",
  },
  youthsLayout: {
    width: 77,
    height: 40,
    top: 0,
    position: "absolute",
  },
  pwdsLayout: {
    width: 62,
    height: 40,
    top: 0,
    position: "absolute",
  },
  pwds1Typo: {
    top: 12,
    fontSize: FontSize.smallSmall2_size,
    textAlign: "left",
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.footnote,
    position: "absolute",
  },
  womenLayout: {
    width: 67,
    height: 40,
    top: 0,
    position: "absolute",
  },
  headlineFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  roundFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  groups1Typo: {
    fontFamily: FontFamily.footnote,
    fontSize: FontSize.footnote_size,
  },
  markerPosition: {
    zIndex: 1,
    right: -2,
    top: -2,
    height: 16,
    width: 16,
    borderRadius: Border.br_7xs,
    position: "absolute",
    overflow: "hidden",
  },
  right2MFlexBox: {
    marginLeft: 4,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: 40,
    height: 40,
    borderRadius: Border.br_xl,
  },
  programRectangleIcon: {
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
    height: 149,
    width: 335,
    position: "absolute",
  },
  postsbuttonChild: {
    backgroundColor: Color.colorTomato,
    opacity: 0.2,
    borderRadius: Border.br_5xs,
    height: 25,
    width: 122,
    left: 0,
    top: 0,
    position: "absolute",
  },
  checkThePosts: {
    width: 80,
    left: 17,
  },
  postsbutton: {
    left: 180,
    height: 25,
    width: 122,
    top: 108,
    position: "absolute",
  },
  beneficiariesbuttonChild: {
    width: 123,
    height: 25,
    position: "absolute",
    top: 0,
    backgroundColor: Color.colorLightgray_200,
  },
  seeTheBeneficiaries: {
    left: 15,
    width: 100,
  },
  beneficiariesbutton: {
    left: 19,
    top: 108,
    width: 123,
  },
  groupsAttended: {
    top: 80,
    fontWeight: "600",
    fontFamily: FontFamily.openSansSemiBold,
    fontSize: FontSize.footnote_size,
  },
  saveChild: {
    left: 0,
    width: 24,
    top: 0,
    position: "absolute",
  },
  saveItem: {
    top: 2,
    left: 5,
    width: 14,
    height: 20,
    position: "absolute",
  },
  save: {
    left: 291,
    top: 7,
    height: 24,
    width: 24,
    position: "absolute",
  },
  education: {
    top: 54,
    width: 92,
    left: 20,
  },
  text1: {
    left: 302,
    top: 4,
    width: 15,
    height: 28,
    textAlign: "right",
    color: Color.colorGray_100,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.footnote,
    position: "absolute",
  },
  programmeNameParent: {
    height: 82,
    top: 56,
    left: 0,
  },
  programmeCard1Child: {
    borderRadius: Border.br_2xs,
    backgroundColor: Color.colorWhite,
    width: 335,
    height: 149,
    left: 0,
    top: 0,
    position: "absolute",
  },
  roundCheckboxUncheckedIcon: {
    width: 20,
    height: 20,
  },
  text2: {
    color: Color.colorDimgray_100,
    textAlign: "center",
    fontSize: FontSize.smallSmall2_size,
    fontFamily: FontFamily.footnote,
  },
  checkbox: {
    height: 18,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 0,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_5xs,
  },
  save2: {
    height: 12,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  title: {
    color: Color.colorMidnightblue_300,
    textAlign: "center",
    fontSize: FontSize.smallSmall2_size,
    fontFamily: FontFamily.footnote,
  },
  actions: {
    height: 20,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  headline: {
    width: 270,
    height: 32,
    marginLeft: 8,
    alignItems: "center",
    flexDirection: "row",
  },
  marker: {
    height: 16,
    width: 16,
    backgroundColor: Color.colorTomato,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  beneficiariesChild: {
    backgroundColor: Color.colorLightgray_200,
    height: 12,
    width: 12,
  },
  right2M: {
    backgroundColor: Color.colorTomato,
  },
  programmeCard: {
    borderRadius: Border.br_2xs,
    backgroundColor: Color.colorWhite,
    height: 149,
    width: 335,
    left: 0,
    top: 0,
    position: "absolute",
  },
  recentProgrammes: {
    left: 26,
    color: Color.colorDimgray_100,
    textAlign: "left",
    position: "absolute",
    top: "35%",
  },
  scholarshipsChild: {
    backgroundColor: Color.surfaceLevel1,
    height: 75,
    width: 156,
    position: "absolute",
  },
  scholarships1: {
    fontSize: FontSize.largeLarge2_size,
    left: 10,
    top: 41,
  },
  text: {
    top: 15,
    fontSize: FontSize.title1Large_size,
    fontFamily: FontFamily.dMSansMedium,
    fontWeight: "500",
    left: 14,
  },
  scholarships: {
    left: 196,
    top: "40%",
  },
  groupsChild: {
    backgroundColor: Color.surfaceLevel1,
    height: 75,
    width: 156,
    position: "absolute",
  },
  groups1: {
    fontSize: FontSize.largeLarge2_size,
    left: 12,
    top: 42,
    color: Color.colorMidnightblue_300,
    textAlign: "left",
    position: "absolute",
  },
  groups: {
    left: 196,
    top: "49%",
  },
  pwdChild: {
    backgroundColor: Color.surfaceLevel1,
    borderRadius: Border.br_7xs,
    top: 0,
    left: 0,
  },
  wheelChairs: {
    fontSize: FontSize.largeLarge2_size,
    left: 9,
    top: 136,
  },
  k: {
    top: 105,
    fontSize: FontSize.title1Large_size,
    fontFamily: FontFamily.dMSansMedium,
    fontWeight: "500",
    left: 14,
  },
  headhuntingIcon: {
    height: 111,
    width: 150,
    borderRadius: Border.br_11xs,
    left: 0,
    top: 0,
    position: "absolute",
  },
  pwd: {
    left: "5%",
    top: "40%",
  },
  homeScreen: {
    borderRadius: Border.br_11xl,
    backgroundColor: "rgba(237, 254, 240, 0.94)",
    width: "100%",
    height: 1000,
    overflow: "hidden",
    flex: 1,
  },
});

export default HomeScreen;
