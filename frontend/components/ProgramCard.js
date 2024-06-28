import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const ProgramCard = () => {
  return (
    <View style={styles.programcardLayout}>
      {/* <Image
        style={[styles.programRectangleIcon, styles.saveChildPosition]}
        contentFit="cover"
        source={require("../assets/programrectangle.png")}
      /> */}
      <View style={[styles.postsbutton, styles.postsbuttonLayout]}>
        <View style={[styles.postsbuttonChild, styles.childPosition]} />
        <Text style={[styles.checkThePosts, styles.theFlexBox]}>
          Check the Posts
        </Text>
      </View>
      <View
        style={[styles.beneficiariesbutton, styles.beneficiariesbuttonLayout]}
      >
        <View
          style={[
            styles.beneficiariesbuttonChild,
            styles.beneficiariesbuttonLayout,
          ]}
        />
        <Text style={[styles.seeTheBeneficiaries, styles.theFlexBox]}>
          See the Beneficiaries
        </Text>
      </View>
      <Text style={[styles.groupsAttended, styles.ngaafTransClr]}>
        560 Groups Attended
      </Text>
      <View style={[styles.save, styles.saveLayout]}>
        <View style={[styles.saveChild, styles.saveLayout]} />
        <Image
          style={styles.saveItem}
          contentFit="cover"
          source={require("../assets/rectangle-19.png")}
        />
      </View>
      <Text style={[styles.thJuly2024, styles.theLaunchTypo]}>
        12th July, 2024
      </Text>
      <Image
        style={styles.programcardChild}
        contentFit="cover"
        source={require("../assets/ellipse-6.png")}
      />
      <Text style={[styles.theLaunch, styles.theLaunchPosition]}>
        The Launch
      </Text>
      <Text style={[styles.ngaafTrans, styles.theLaunchPosition]}>
        NGAAF - TRANS NZOIA
      </Text>
      <Image
        style={styles.ngaafLogo1}
        contentFit="cover"
        source={require("../assets/ngaaf-logo.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  saveChildPosition: {
    left: 0,
    top: 0,
  },
  postsbuttonLayout: {
    height: 25,
    width: 122,
    position: "absolute",
  },
  childPosition: {
    opacity: 0.2,
    borderRadius: Border.br_5xs,
    left: 0,
    top: 0,
  },
  theFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  beneficiariesbuttonLayout: {
    width: 123,
    height: 25,
    position: "absolute",
  },
  ngaafTransClr: {
    color: Color.colorMidnightblue_100,
    fontSize: FontSize.footnote_size,
  },
  saveLayout: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  theLaunchTypo: {
    fontSize: FontSize.smallSmall2_size,
    top: 43,
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.footnote,
  },
  theLaunchPosition: {
    left: 70,
    textAlign: "left",
    position: "absolute",
  },
  programRectangleIcon: {
    borderRadius: Border.br_xl,
    position: "absolute",
    height: 149,
    width: 335,
  },
  postsbuttonChild: {
    backgroundColor: Color.colorTomato,
    height: 25,
    width: 122,
    position: "absolute",
  },
  checkThePosts: {
    left: 17,
    width: 80,
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.footnote,
    fontSize: FontSize.size_3xs,
    top: 6,
    textAlign: "left",
  },
  postsbutton: {
    left: 180,
    top: 108,
  },
  beneficiariesbuttonChild: {
    backgroundColor: Color.colorLightgray_200,
    opacity: 0.2,
    borderRadius: Border.br_5xs,
    left: 0,
    top: 0,
  },
  seeTheBeneficiaries: {
    left: 15,
    width: 100,
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.footnote,
    fontSize: FontSize.size_3xs,
    top: 6,
    textAlign: "left",
  },
  beneficiariesbutton: {
    left: 19,
    top: 108,
  },
  groupsAttended: {
    top: 80,
    left: 20,
    fontWeight: "600",
    fontFamily: FontFamily.openSansSemiBold,
    textAlign: "left",
    position: "absolute",
  },
  saveChild: {
    left: 0,
    top: 0,
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
    top: 21,
  },
  thJuly2024: {
    left: 141,
    textAlign: "left",
    position: "absolute",
  },
  programcardChild: {
    top: 52,
    left: 137,
    width: 2,
    height: 2,
    position: "absolute",
  },
  theLaunch: {
    fontSize: FontSize.smallSmall2_size,
    top: 43,
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.footnote,
  },
  ngaafTrans: {
    fontWeight: "700",
    fontFamily: FontFamily.dMSansBold,
    top: 21,
    color: Color.colorMidnightblue_100,
    fontSize: FontSize.footnote_size,
  },
  ngaafLogo1: {
    top: 30,
    left: 26,
    width: 25,
    height: 26,
    position: "absolute",
  },
  programcardLayout: {
    backgroundColor: 'white',
    height: 149,
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    alignSelf: 'center', // Center the component horizontally
    width: '100%',
    left: 13,
  },
});

export default ProgramCard;
