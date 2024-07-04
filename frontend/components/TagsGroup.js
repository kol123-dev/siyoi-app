import * as React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const TagsGroup = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.tagsGroup}
    >
      <Tag label="Youths" />
      <Tag label="PWDs" />
      <Tag label="Scholarship" />
      <Tag label="Bursary" />
      <Tag label="Women" />
    </ScrollView>
  );
};

const Tag = ({ label }) => (
  <View style={styles.tag}>
    <View style={[styles.tagBackground, styles.childBg]} />
    <Text style={styles.tagText}>{label}</Text>
  </View>
);

const styles = StyleSheet.create({
  tag: {
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
    width: 100, // Adjust width as needed
    height: 40,
    position: "relative", // Added for positioning children
  },
  tagBackground: {
    width: "100%",
    height: "100%",
    position: "absolute",
    opacity: 0.2,
    backgroundColor: Color.colorLightgray_200,
    borderRadius: Border.br_5xs,
  },
  tagText: {
    textAlign: "center", // Center text horizontally
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.footnote,
    fontSize: FontSize.smallSmall2_size,
  },
  tagsGroup: {
    paddingHorizontal: 10,
    alignItems: "center", // Center items horizontally
    height: 40,
  },
  childBg: {
    borderRadius: Border.br_5xs,
    left: 0,
    top: 0,
  },
});

export default TagsGroup;
