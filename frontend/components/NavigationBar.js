import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Border, FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const NavigationBar = ({
  leftItem = true,
  title = true,
  right2M = false,
  right1L = false,
  right3R = true,
}) => {
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
      <View style={styles.rightActions}>
        {right1L && (
          <View style={styles.rightAction}>
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/lefticon.png")}
            />
          </View>
        )}
        {right2M && (
          <View style={styles.rightAction}>
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/lefticon.png")}
            />
          </View>
        )}
        {right3R && (
          <View style={styles.rightAction}>
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/lefticon1.png")}
            />
          </View>
        )}
      </View>
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
});

export default NavigationBar;
