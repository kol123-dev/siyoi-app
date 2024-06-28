import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const CheckYourEmail = () => {
  return (
    <View style={styles.checkYourEmail}>
      <View style={[styles.save, styles.saveLayout]}>
        <View style={[styles.saveChild, styles.childLayout]} />
        <Text style={[styles.openYourEmail, styles.yourTypo]}>
          Open Your Email
        </Text>
      </View>
      <View style={[styles.signUpWithGoogle, styles.saveLayout]}>
        <View style={[styles.signUpWithGoogleChild, styles.childLayout]} />
        <Text style={[styles.backToLogin, styles.yourTypo]}>Back to Login</Text>
      </View>
      <Text style={[styles.weHaveSentContainer, styles.haveContainerTypo]}>
        <Text
          style={styles.weHaveSent}
        >{`We have sent the reset password to the email address `}</Text>
        <Text style={styles.brandonelouisgmialcom}>
          brandonelouis@gmial.com
        </Text>
      </Text>
      <Text style={[styles.youHaveNotContainer, styles.haveContainerTypo]}>
        <Text
          style={styles.brandonelouisgmialcom}
        >{`You have not received the email?  `}</Text>
        <Text style={styles.resend}>Resend</Text>
      </Text>
      <Text style={[styles.checkYourEmail1, styles.yourTypo]}>
        Check Your Email
      </Text>
      <Image
        style={styles.undrawMessageSentReQ2kl1Icon}
        contentFit="cover"
        source={require("../assets/undraw-message-sent-re-q2kl-11.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  saveLayout: {
    height: 50,
    width: 317,
    left: 28,
    position: "absolute",
  },
  childLayout: {
    borderRadius: Border.br_7xs,
    left: 0,
    top: 0,
    height: 50,
    width: 317,
    position: "absolute",
  },
  yourTypo: {
    textAlign: "left",
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  haveContainerTypo: {
    textAlign: "center",
    fontFamily: FontFamily.footnote,
    lineHeight: 19,
    fontSize: FontSize.smallSmall2_size,
    position: "absolute",
  },
  saveChild: {
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
  openYourEmail: {
    left: 91,
    color: Color.surfaceLevel1,
    textTransform: "uppercase",
    letterSpacing: 0.8,
    fontSize: FontSize.footnote_size,
    top: 16,
    textAlign: "left",
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
  },
  save: {
    top: 429,
  },
  signUpWithGoogleChild: {
    backgroundColor: Color.colorDarkseagreen,
  },
  backToLogin: {
    left: 95,
    width: 128,
    color: Color.surfaceLevel1,
    textTransform: "uppercase",
    letterSpacing: 0.8,
    fontSize: FontSize.footnote_size,
    top: 16,
    textAlign: "left",
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
  },
  signUpWithGoogle: {
    top: 494,
  },
  weHaveSent: {
    color: Color.colorDimgray_100,
  },
  brandonelouisgmialcom: {
    color: Color.colorMidnightblue_100,
  },
  weHaveSentContainer: {
    top: 138,
    left: 31,
    width: 314,
  },
  resend: {
    textDecoration: "underline",
    color: Color.colorDarkorange,
  },
  youHaveNotContainer: {
    top: 574,
    left: 73,
  },
  checkYourEmail1: {
    top: 92,
    left: 62,
    fontSize: FontSize.size_11xl,
    color: Color.colorMidnightblue_300,
    textAlign: "left",
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
  },
  undrawMessageSentReQ2kl1Icon: {
    top: 226,
    left: 125,
    width: 125,
    height: 109,
    position: "absolute",
    overflow: "hidden",
  },
  checkYourEmail: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorHoneydew_100,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default CheckYourEmail;
