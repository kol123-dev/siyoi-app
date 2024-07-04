import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Border, FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const NavigationBar = ({
  leftItem = true,
  title = true,
  right2M = false,
  right1L = false,
  right3R = true,
}) => {
  return (
    <View style={[styles.navigationBar, styles.headlineFlexBox]}>
      {leftItem && (
        <View style={[styles.leftSection, styles.right1LLayout]}>
          <Image
            style={styles.avatarIcon}
            contentFit="cover"
            source={require("../assets/avatar.png")}
          />
        </View>
      )}
      <View style={[styles.titleSection, styles.titleFlexBox]}>
        {title && (
          <View style={[styles.titleItem, styles.titleFlexBox]}>
            <View style={styles.headlineFlexBox}>
              <Text style={styles.text}>Hello Kariuki,</Text>
              <Image
                style={styles.disclosureIcon}
                contentFit="cover"
                source={require("../assets/disclosure-icon.png")}
              />
            </View>
            <Text style={styles.subtitle}>Welcome to SiyoiApp</Text>
          </View>
        )}
      </View>
      <View style={[styles.rightActions, styles.headlineFlexBox]}>
        {right1L && (
          <View style={[styles.right1L, styles.right1LLayout]}>
            <Image
              style={styles.lefticon}
              contentFit="cover"
              source={require("../assets/lefticon.png")}
            />
            <View style={[styles.marker, styles.markerPosition]}>
              <View style={styles.round} />
            </View>
          </View>
        )}
        {right2M && (
          <View style={[styles.right2M, styles.right2MFlexBox]}>
            <Image
              style={styles.lefticon}
              contentFit="cover"
              source={require("../assets/lefticon.png")}
            />
            <View style={styles.markerPosition}>
              <View style={styles.round} />
            </View>
          </View>
        )}
        {right3R && (
          <View style={styles.right2MFlexBox}>
            <Image
              style={styles.lefticon}
              contentFit="cover"
              source={require("../assets/lefticon1.png")}
            />
            <View style={[styles.marker, styles.markerPosition]}>
              <View style={styles.round} />
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headlineFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  right1LLayout: {
    height: 40,
    width: 40,
    borderRadius: Border.br_xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  titleFlexBox: {
    flex: 1,
    height: 40,
    alignItems: "center",
  },
  markerPosition: {
    zIndex: 1,
    overflow: "hidden",
    borderRadius: Border.br_7xs,
    right: -2,
    top: -2,
    position: "absolute",
    height: 16,
    width: 16,
  },
  right2MFlexBox: {
    marginLeft: 4,
    justifyContent: "center",
    height: 40,
    width: 40,
    borderRadius: Border.br_xl,
    alignItems: "center",
    flexDirection: "row",
  },
  avatarIcon: {
    width: 32,
    height: 32,
  },
  leftSection: {
    justifyContent: "center",
  },
  text: {
    fontSize: FontSize.body1Bold_size,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.body1Bold,
    color: Color.textPrimary,
    textAlign: "center",
  },
  disclosureIcon: {
    marginLeft: 2,
    display: "none",
    height: 16,
    width: 16,
  },
  subtitle: {
    fontSize: FontSize.footnote_size,
    lineHeight: 18,
    fontFamily: FontFamily.footnote,
    color: Color.textSecondary,
    textAlign: "center",
  },
  titleItem: {
    paddingHorizontal: Padding.p_xs,
    paddingVertical: 0,
    justifyContent: "center",
  },
  titleSection: {
    flexDirection: "row",
    flex: 1,
  },
  lefticon: {
    width: 24,
    height: 24,
    zIndex: 0,
  },
  round: {
    marginTop: -3,
    marginLeft: -3,
    top: "50%",
    left: "50%",
    borderRadius: Border.br_9xs,
    backgroundColor: Color.iconsNegative,
    width: 6,
    height: 6,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  marker: {
    display: "none",
  },
  right1L: {
    display: "none",
    justifyContent: "center",
  },
  right2M: {
    display: "none",
  },
  rightActions: {
    justifyContent: "flex-end",
  },
  navigationBar: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.surfaceLevel1,
    width: 334,
    height: 47,
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_base,
  },
});

export default NavigationBar;
