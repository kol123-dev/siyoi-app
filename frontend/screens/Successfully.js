import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Successfully = () => {
  return (
    <View style={styles.successfully}>
      <View style={styles.frame}>
        <Text style={styles.successfully1}>Successfully</Text>
        <View style={styles.frame1}>
          <Text
            style={[styles.yourPasswordHas, styles.yourPasswordHasPosition]}
          >
            Your password has been updated, please change your password
            regularly to avoid this happening
          </Text>
        </View>
      </View>
      <View style={styles.frame2}>
        <Image
          style={[
            styles.undrawMessageSentReQ2kl1Icon,
            styles.yourPasswordHasPosition,
          ]}
          contentFit="cover"
          source={require("../assets/undraw-message-sent-re-q2kl-1.png")}
        />
        <View style={[styles.signUpWithGoogle, styles.saveLayout]}>
          <Text style={[styles.backToLogin, styles.continueTypo]}>
            Back to Login
          </Text>
        </View>
        <View style={[styles.save, styles.saveLayout]}>
          <Text style={[styles.continue, styles.continueTypo]}>Continue</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  yourPasswordHasPosition: {
    top: 0,
    position: "absolute",
  },
  saveLayout: {
    height: 50,
    borderRadius: Border.br_7xs,
    width: 317,
    left: 0,
    position: "absolute",
  },
  continueTypo: {
    color: Color.surfaceLevel1,
    textTransform: "uppercase",
    letterSpacing: 0.8,
    fontSize: FontSize.footnote_size,
    top: 16,
    textAlign: "left",
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  successfully1: {
    left: 78,
    fontSize: FontSize.size_11xl,
    color: Color.colorMidnightblue_300,
    textAlign: "left",
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    top: 0,
    position: "absolute",
  },
  yourPasswordHas: {
    left: 36,
    fontSize: FontSize.smallSmall2_size,
    lineHeight: 19,
    fontFamily: FontFamily.footnote,
    color: Color.colorDimgray_100,
    textAlign: "center",
    width: 305,
  },
  frame1: {
    top: 43,
    height: 38,
    left: 0,
    width: 341,
    position: "absolute",
    overflow: "hidden",
  },
  frame: {
    top: 94,
    left: 17,
    height: 81,
    width: 341,
    position: "absolute",
    overflow: "hidden",
  },
  undrawMessageSentReQ2kl1Icon: {
    left: 89,
    width: 139,
    height: 117,
    overflow: "hidden",
  },
  backToLogin: {
    left: 98,
    width: 122,
  },
  signUpWithGoogle: {
    top: 293,
    backgroundColor: Color.colorDarkseagreen,
  },
  continue: {
    left: 117,
    width: 83,
  },
  save: {
    top: 228,
    shadowColor: "rgba(153, 171, 198, 0.18)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 62,
    elevation: 62,
    shadowOpacity: 1,
    backgroundColor: Color.colorMediumseagreen_100,
  },
  frame2: {
    top: 226,
    left: 29,
    height: 343,
    width: 317,
    position: "absolute",
    overflow: "hidden",
  },
  successfully: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorHoneydew_100,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Successfully;
