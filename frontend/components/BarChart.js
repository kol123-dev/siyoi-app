import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const BarChart = () => {
  return (
    <View style={styles.barchart}>
      
      <View style={styles.frameParent}>
        <View style={styles.janParent}>
          <Text style={[styles.jan, styles.janTypo]}>KIM</Text>
          <Text style={[styles.feb, styles.janTypo]}>CHER</Text>
          <Text style={[styles.mar, styles.janTypo]}>SABA</Text>
          <Text style={[styles.apr, styles.janTypo]}>KWNZ</Text>
          <Text style={[styles.may, styles.janTypo]}>END</Text>
          <Text style={[styles.jun, styles.janTypo]}>GEN</Text>
        </View>
        <Image
          style={[styles.path5Copy2, styles.path5Layout]}
          contentFit="cover"
          source={require("../assets/path-5-copy-2.png")}
        />
        <Image
          style={[styles.path5Icon, styles.path5Layout]}
          contentFit="cover"
          source={require("../assets/path-5.png")}
        />
        <Image
          style={[styles.path5Copy, styles.path5Layout]}
          contentFit="cover"
          source={require("../assets/path-5.png")}
        />
        <View style={[styles.rectangleParent, styles.group14Position]}>
          <View style={[styles.rectangle, styles.rectanglePosition1]} />
          <View style={[styles.rectangleCopy, styles.rectanglePosition]} />
        </View>
        <View style={[styles.group14Copy, styles.group14Position]}>
          <View style={[styles.rectangle, styles.rectanglePosition1]} />
          <View style={[styles.rectangleCopy1, styles.rectanglePosition]} />
        </View>
        <View style={[styles.group14Copy2, styles.group14Position]}>
          <View style={[styles.rectangle2, styles.rectanglePosition1]} />
          <View style={[styles.rectangleCopy2, styles.rectanglePosition]} />
        </View>
        <View style={[styles.group14Copy3, styles.group14Position]}>
          <View style={[styles.rectangle3, styles.rectanglePosition1]} />
          <View style={[styles.rectangleCopy2, styles.rectanglePosition]} />
        </View>
        <View style={[styles.group14Copy4, styles.group14Position]}>
          <View style={[styles.rectangle4, styles.rectanglePosition1]} />
          <View style={[styles.rectangleCopy2, styles.rectanglePosition]} />
        </View>
      </View>
      <Image
        style={[styles.ovalIcon, styles.ovalIconLayout]}
        contentFit="cover"
        source={require("../assets/oval1.png")}
      />
      <Text style={[styles.siyoi, styles.siyoiTypo]}>Hon. Siyoi</Text>
      <Image
        style={[styles.ovalIcon1, styles.ovalIconLayout]}
        contentFit="cover"
        source={require("../assets/oval2.png")}
      />
      <Text style={[styles.khatundi, styles.siyoiTypo]}>Hon. Khatundi</Text>
      <Text style={[styles.ward, styles.wardTypo]}>TNC</Text>
      <Image
        style={[styles.pathIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/path1.png")}
      />
      <Text style={[styles.title, styles.wardTypo]}>Compare</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  janTypo: {
    textAlign: "left",
    fontFamily: FontFamily.nunitoSans12ptRegular,
    letterSpacing: 0,
    top: "50%",
    marginTop: -8,
    color: Color.colorLightslategray,
    fontSize: FontSize.smallSmall2_size,
    position: "absolute",
  },
  path5Layout: {
    height: "0.55%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    left: "0%",
    right: "0%",
    width: "100%",
    position: "absolute",
  },
  group14Position: {
    bottom: "10.5%",
    width: "4.73%",
    position: "absolute",
  },
  rectanglePosition1: {
    backgroundColor: Color.colorDarkturquoise,
    borderTopRightRadius: Border.br_10xs_5,
    borderTopLeftRadius: Border.br_10xs_5,
    right: "64.29%",
    width: "35.71%",
    left: "0%",
    bottom: "0%",
    position: "absolute",
  },
  rectanglePosition: {
    backgroundColor: Color.colorSandybrown,
    left: "64.29%",
    borderTopRightRadius: Border.br_10xs_5,
    borderTopLeftRadius: Border.br_10xs_5,
    width: "35.71%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
  },
  ovalIconLayout: {
    bottom: "75.08%",
    top: "20.62%",
    width: "4.17%",
    height: "4.31%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  siyoiTypo: {
    fontSize: FontSize.footnote_size,
    marginTop: -97.5,
    textAlign: "left",
    color: Color.colorLightslategray,
    fontFamily: FontFamily.nunitoSans12ptRegular,
    letterSpacing: 0,
    top: "50%",
    position: "absolute",
  },
  wardTypo: {
    fontFamily: FontFamily.nunitoSans12ptSemiBold,
    fontWeight: "600",
    textAlign: "left",
    letterSpacing: 0,
    top: "50%",
    position: "absolute",
  },
 
  jan: {
    left: "0%",
  },
  feb: {
    left: "14.86%",
  },
  mar: {
    left: "30.74%",
  },
  apr: {
    left: "47.3%",
  },
  may: {
    left: "63.18%",
  },
  jun: {
    left: "80.07%",
    display: "none",
  },
  janParent: {
    height: "8.84%",
    top: "91.16%",
    overflow: "hidden",
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
    position: "absolute",
  },
  path5Copy2: {
    top: "6.35%",
    bottom: "93.09%",
  },
  path5Icon: {
    top: "48.07%",
    bottom: "51.38%",
  },
  path5Copy: {
    top: "89.5%",
    bottom: "9.94%",
  },
  rectangle: {
    top: "0%",
    height: "100%",
  },
  rectangleCopy: {
    height: "44.44%",
    top: "55.56%",
  },
  rectangleParent: {
    height: "89.5%",
    right: "94.93%",
    left: "0.34%",
    top: "0%",
  },
  rectangleCopy1: {
    height: "38%",
    top: "62%",
  },
  group14Copy: {
    height: "55.25%",
    top: "34.25%",
    right: "79.73%",
    left: "15.54%",
  },
  rectangle2: {
    height: "55.83%",
    top: "44.17%",
  },
  rectangleCopy2: {
    top: "40%",
    height: "60%",
  },
  group14Copy2: {
    height: "66.3%",
    top: "23.2%",
    right: "63.51%",
    left: "31.76%",
  },
  rectangle3: {
    height: "46.21%",
    top: "53.79%",
  },
  group14Copy3: {
    height: "72.93%",
    top: "16.57%",
    right: "47.3%",
    left: "47.97%",
  },
  rectangle4: {
    height: "77.24%",
    top: "22.76%",
  },
  group14Copy4: {
    height: "67.96%",
    top: "21.55%",
    right: "30.74%",
    left: "64.53%",
  },
  frameParent: {
    height: "55.69%",
    width: "88.1%",
    top: "35.08%",
    right: "5.95%",
    bottom: "9.23%",
    left: "5.95%",
    position: "absolute",
  },
  ovalIcon: {
    right: "89.88%",
    left: "5.95%",
  },
  siyoi: {
    left: "11.9%",
  },
  ovalIcon1: {
    right: "56.55%",
    left: "39.29%",
  },
  khatundi: {
    left: "45.24%",
  },
  ward: {
    marginTop: -142.5,
    left: "76.49%",
    color: Color.colorLightslategray,
    fontSize: FontSize.smallSmall2_size,
    fontFamily: FontFamily.nunitoSans12ptSemiBold,
    fontWeight: "600",
  },
  pathIcon: {
    height: "2.18%",
    width: "2.11%",
    top: "7.38%",
    right: "6.22%",
    bottom: "90.43%",
    left: "91.67%",
  },
  title: {
    marginTop: -147.5,
    left: "5.65%",
    fontSize: FontSize.body1Bold_size,
    color: Color.colorDarkslateblue,
  },
  barchart: {
    width: 336,
    height: 325,
    backgroundColor:"#fff",
  },
});

export default BarChart;
