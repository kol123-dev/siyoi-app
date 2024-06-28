import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const ForgotPassword = () => {
  return (
    <View style={styles.forgotPassword}>
      <View style={styles.frame}>
        <View style={styles.frame1}>
          <Text style={styles.forgotPassword1}>Forgot Password?</Text>
          <Text style={styles.toResetYour}>
            To reset your password, you need your email or mobile number that
            can be authenticated
          </Text>
        </View>
        <View style={styles.frame2}>
          <View style={styles.frame3}>
            <View style={styles.frameParent}>
              <View style={styles.frame4}>
                <Text style={styles.text}>?</Text>
              </View>
              <Image
                style={styles.frameIcon}
                contentFit="cover"
                source={require("../assets/frame.png")}
              />
            </View>
          </View>
          <View style={styles.email}>
            <Text style={styles.email1}>Email</Text>
            <View style={styles.frame5}>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/rectangle-592.png")}
              />
              <Text
                style={styles.brandonelouisgmailcom}
              >{`Brandonelouis@gmail.com `}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.frame6}>
        <View style={styles.save}>
          <Text style={styles.resetPassword}>Reset Password</Text>
        </View>
        <View style={styles.signUpWithGoogle}>
          <Text style={styles.backToLogin}>Back to Login</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  forgotPassword1: {
    fontSize: FontSize.size_11xl,
    fontWeight: "700",
    fontFamily: FontFamily.dMSansBold,
    color: Color.colorMidnightblue_300,
    textAlign: "left",
    height: 39,
    marginLeft: 1,
  },
  toResetYour: {
    fontSize: FontSize.smallSmall2_size,
    lineHeight: 19,
    fontFamily: FontFamily.footnote,
    color: Color.colorDimgray_100,
    textAlign: "center",
    width: 314,
    height: 38,
    marginLeft: 1,
    marginTop: 11,
  },
  frame1: {
    width: 315,
    height: 88,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    position: "relative",
    fontSize: FontSize.fontSize4Medium_size,
    fontWeight: "700",
    fontFamily: FontFamily.openSansBold,
    color: Color.surfaceLevel1,
    textAlign: "center",
  },
  frame4: {
    position: "absolute",
    top: 7,
    left: 144,
    width: 10,
    height: 80,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frameIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 118,
    height: 94,
    overflow: "hidden",
  },
  frameParent: {
    position: "relative",
    width: 118,
    height: 94,
  },
  frame3: {
    width: 119,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  email1: {
    fontSize: FontSize.smallSmall2_size,
    fontWeight: "700",
    fontFamily: FontFamily.dMSansBold,
    color: Color.colorMidnightblue_100,
    textAlign: "left",
    height: 16,
    marginLeft: 16,
  },
  frameChild: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: Border.br_7xs,
    width: 317,
    height: 50,
  },
  brandonelouisgmailcom: {
    position: "absolute",
    top: 17,
    left: 36,
    fontSize: FontSize.smallSmall2_size,
    fontFamily: FontFamily.footnote,
    color: Color.colorMidnightblue_400,
    textAlign: "left",
  },
  frame5: {
    position: "relative",
    width: 317,
    height: 50,
    overflow: "hidden",
    marginTop: 10,
  },
  email: {
    width: 326,
    height: 76,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingLeft: 9,
    marginRight: 9,
    marginTop: 72,
  },
  frame2: {
    width: 335,
    height: 242,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 52,
  },
  frame: {
    width: 335,
    height: 382,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  resetPassword: {
    position: "relative",
    fontSize: FontSize.footnote_size,
    letterSpacing: 0.8,
    textTransform: "uppercase",
    fontWeight: "700",
    fontFamily: FontFamily.dMSansBold,
    color: Color.surfaceLevel1,
    textAlign: "left",
    width: 161,
  },
  save: {
    shadowColor: "rgba(153, 171, 198, 0.18)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 62,
    elevation: 62,
    shadowOpacity: 1,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorMediumseagreen_100,
    width: 317,
    height: 50,
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    paddingHorizontal: 36,
    paddingVertical: 15,
  },
  backToLogin: {
    position: "relative",
    fontSize: FontSize.footnote_size,
    letterSpacing: 0.8,
    textTransform: "uppercase",
    fontWeight: "700",
    fontFamily: FontFamily.dMSansBold,
    color: Color.surfaceLevel1,
    textAlign: "left",
    width: 125,
  },
  signUpWithGoogle: {
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorDarkseagreen,
    width: 317,
    height: 50,
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
    paddingHorizontal: 66,
    paddingVertical: 0,
    marginTop: 29,
  },
  frame6: {
    width: 317,
    height: 129,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 29,
  },
  forgotPassword: {
    position: "relative",
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorHoneydew_100,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 20,
    paddingVertical: 90,
  },
});

export default ForgotPassword;
