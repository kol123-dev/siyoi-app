import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const TagsGroup = () => {
  return (
    <View style={styles.tagsGroup}>
      <View style={[styles.youths, styles.youthsLayout]}>
        <View style={[styles.youthsChild, styles.childBg]} />
        <Text style={styles.education}>Youths</Text>
      </View>
      <View style={[styles.pwds, styles.pwdsLayout]}>
        <View style={[styles.pwdsChild, styles.pwdsLayout]} />
        <Text style={[styles.pwds1, styles.pwds1Typo]}>PWDs</Text>
      </View>
      <View style={[styles.education1, styles.youthsLayout]}>
        <View style={[styles.youthsChild, styles.childBg]} />
        <Text style={styles.education}>Education</Text>
      </View>
      <View style={[styles.women, styles.womenLayout]}>
        <View style={[styles.womenChild, styles.womenLayout]} />
        <Text style={[styles.women1, styles.pwds1Typo]}>Women</Text>
      </View>
      <Image
        style={styles.filterIcon}
        contentFit="cover"
        source={require("../assets/filter.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  youthsLayout: {
    width: 77,
    top: 0,
    position: "absolute",
    height: 40,
  },
  childBg: {
    opacity: 0.2,
    backgroundColor: Color.colorLightgray_200,
    borderRadius: Border.br_5xs,
    left: 0,
  },
  pwdsLayout: {
    width: 62,
    top: 0,
    position: "absolute",
    height: 40,
  },
  pwds1Typo: {
    top: 12,
    textAlign: "left",
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.footnote,
    fontSize: FontSize.smallSmall2_size,
    position: "absolute",
  },
  womenLayout: {
    width: 67,
    top: 0,
    position: "absolute",
    height: 40,
  },
  youthsChild: {
    width: 77,
    top: 0,
    position: "absolute",
    height: 40,
  },
  education: {
    top: 13,
    textAlign: "left",
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.footnote,
    fontSize: FontSize.smallSmall2_size,
    left: 11,
    position: "absolute",
  },
  youths: {
    left: 294,
  },
  pwdsChild: {
    opacity: 0.2,
    backgroundColor: Color.colorLightgray_200,
    borderRadius: Border.br_5xs,
    left: 0,
  },
  pwds1: {
    left: 17,
  },
  pwds: {
    left: 220,
  },
  education1: {
    left: 131,
  },
  womenChild: {
    opacity: 0.2,
    backgroundColor: Color.colorLightgray_200,
    borderRadius: Border.br_5xs,
    left: 0,
  },
  women1: {
    width: 45,
    left: 11,
    top: 12,
  },
  women: {
    left: 52,
  },
  filterIcon: {
    width: 40,
    left: 0,
    top: 0,
    position: "absolute",
    height: 40,
    backgroundColor: "white",
  },
  tagsGroup: {
    width: 371,
    height: 40,
  },
});

export default TagsGroup;
