import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, Border, FontFamily, Color } from "../GlobalStyles";

const ConstLabel = () => {
  return (
    <View style={styles.constLayout}>
      <Image
        style={[styles.constLabelChild, styles.constLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-162.png")}
      />
      <Image
        style={styles.addIcon}
        contentFit="cover"
        source={require("../assets/add1.png")}
      />
      <View style={styles.nabungJangImahDekParent}>
        <Text style={styles.nabungJangImah}>Hon. Siyoi - 74,000 Votes</Text>
        <Text style={[styles.kimininiConstituency, styles.textTypo]}>
          Kiminini Constituency
        </Text>
      </View>
      <View style={styles.ovalParent}>
        <Image
          style={styles.ovalIcon}
          contentFit="cover"
          source={require("../assets/oval.png")}
        />
        <Text style={[styles.text, styles.textTypo]}>92%</Text>
        <Image
          style={styles.ovalIcon}
          contentFit="cover"
          source={require("../assets/path.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  constLayout: {
    height: 74,
    width: 331,
  },
  textTypo: {
    fontSize: FontSize.footnote_size,
    textAlign: "left",
    position: "absolute",
  },
  constLabelChild: {
    top: 0,
    borderRadius: Border.br_mini,
    left: 0,
    position: "absolute",
  },
  addIcon: {
    top: 24,
    left: 288,
    width: 25,
    height: 25,
    position: "absolute",
  },
  nabungJangImah: {
    marginTop: 1,
    width: "90.92%",
    fontSize: FontSize.smallSmall2_size,
    fontFamily: FontFamily.nunitoSans12ptRegular,
    color: Color.colorGray_200,
    textAlign: "left",
    letterSpacing: 0,
    left: "0%",
    top: "50%",
    position: "absolute",
  },
  kimininiConstituency: {
    top: 1,
    fontWeight: "700",
    fontFamily: FontFamily.dMSansBold,
    color: Color.colorMidnightblue_200,
    width: 155,
    height: 19,
    left: 0,
  },
  nabungJangImahDekParent: {
    top: 17,
    left: 73,
    width: 163,
    height: 40,
    overflow: "hidden",
    position: "absolute",
  },
  ovalIcon: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    left: "0%",
    overflow: "hidden",
    position: "absolute",
  },
  text: {
    marginTop: -9.5,
    width: "56.35%",
    left: "23.57%",
    fontWeight: "600",
    fontFamily: FontFamily.nunitoSans12ptSemiBold,
    color: Color.colorDarkslateblue,
    letterSpacing: 0,
    top: "50%",
    fontSize: FontSize.footnote_size,
  },
  ovalParent: {
    height: "74.32%",
    width: "16.4%",
    top: "12.16%",
    right: "80.3%",
    bottom: "13.51%",
    left: "3.29%",
    position: "absolute",
  },
});

export default ConstLabel;
