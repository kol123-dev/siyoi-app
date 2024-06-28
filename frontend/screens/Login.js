import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const Login = () => {
  return (
    <View style={styles.login}>
      <View style={[styles.email, styles.emailLayout]}>
        <Image
          style={styles.emailChild}
          contentFit="cover"
          source={require("../assets/rectangle-59.png")}
        />
        <Text
          style={[styles.brandonelouisgmailcom, styles.password1Typo]}
        >{`Brandonelouis@gmail.com `}</Text>
        <Text style={[styles.email1, styles.email1Typo]}>Email</Text>
      </View>
      <View style={[styles.password, styles.emailLayout]}>
        <Image
          style={styles.emailChild}
          contentFit="cover"
          source={require("../assets/rectangle-59.png")}
        />
        <Image
          style={[styles.iconEye, styles.iconEyeLayout]}
          contentFit="cover"
          source={require("../assets/icon-eye.png")}
        />
        <Image
          style={styles.hiddenPasswordIcon}
          contentFit="cover"
          source={require("../assets/hidden-password.png")}
        />
        <Text style={[styles.password1, styles.framePosition]}>Password</Text>
      </View>
      <View style={[styles.save, styles.saveLayout]}>
        <Text style={[styles.login1, styles.login1Typo]}>Login</Text>
      </View>
      <View style={[styles.signInWithGoogle, styles.saveLayout]}>
        <Text style={[styles.signInWith, styles.login1Typo]}>
          Sign in with Google
        </Text>
        <Image
          style={[styles.google2Icon, styles.saveLayout]}
          contentFit="cover"
          source={require("../assets/google-2.png")}
        />
      </View>
      <Text style={[styles.youDontHaveContainer, styles.password1Typo]}>
        <Text
          style={styles.youDontHave}
        >{`You don't have an account yet?  `}</Text>
        <Text style={styles.signUp}>Sign up</Text>
      </Text>
      <Text style={[styles.loremIpsumDolor, styles.loremIpsumDolorTypo]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor
      </Text>
      <Text style={[styles.welcomeBack, styles.email1Typo]}>Welcome Back</Text>
      <View style={[styles.frame, styles.framePosition]}>
        <View style={styles.rememberMe}>
          <Image
            style={[styles.rememberMeChild, styles.iconEyeLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-591.png")}
          />
          <Text style={[styles.rememberMe1, styles.rememberMe1Typo]}>
            Remember me
          </Text>
        </View>
        <Text style={[styles.forgotPassword, styles.rememberMe1Typo]}>
          Forgot Password ?
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  emailLayout: {
    height: 76,
    width: 317,
    left: 29,
    position: "absolute",
  },
  password1Typo: {
    textAlign: "left",
    fontSize: FontSize.smallSmall2_size,
  },
  email1Typo: {
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    color: Color.colorMidnightblue_300,
    textAlign: "left",
    position: "absolute",
  },
  iconEyeLayout: {
    width: 24,
    height: 24,
    position: "absolute",
  },
  framePosition: {
    left: 32,
    position: "absolute",
  },
  saveLayout: {
    borderRadius: Border.br_7xs,
    position: "absolute",
  },
  login1Typo: {
    textTransform: "uppercase",
    letterSpacing: 0.8,
    fontSize: FontSize.footnote_size,
    top: 16,
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  loremIpsumDolorTypo: {
    fontFamily: FontFamily.footnote,
    position: "absolute",
  },
  rememberMe1Typo: {
    top: 4,
    textAlign: "left",
    fontFamily: FontFamily.footnote,
    fontSize: FontSize.smallSmall2_size,
    position: "absolute",
  },
  emailChild: {
    top: 26,
    borderRadius: Border.br_3xs,
    height: 50,
    left: 0,
    width: 317,
    position: "absolute",
  },
  brandonelouisgmailcom: {
    top: 43,
    left: 45,
    color: Color.colorMidnightblue_400,
    fontFamily: FontFamily.footnote,
    position: "absolute",
  },
  email1: {
    left: 16,
    color: Color.colorMidnightblue_300,
    top: 0,
    fontSize: FontSize.smallSmall2_size,
  },
  email: {
    top: 254,
  },
  iconEye: {
    top: 39,
    left: 282,
    height: 24,
  },
  hiddenPasswordIcon: {
    top: 49,
    left: 18,
    width: 104,
    height: 5,
    position: "absolute",
  },
  password1: {
    fontWeight: "600",
    fontFamily: FontFamily.openSansSemiBold,
    color: Color.colorMidnightblue_300,
    top: 0,
    textAlign: "left",
    fontSize: FontSize.smallSmall2_size,
  },
  password: {
    top: 345,
  },
  login1: {
    left: 110,
    color: Color.surfaceLevel1,
  },
  save: {
    top: 497,
    left: 57,
    shadowColor: "rgba(153, 171, 198, 0.18)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 62,
    elevation: 62,
    shadowOpacity: 1,
    backgroundColor: Color.colorMediumseagreen_100,
    width: 266,
    height: 50,
  },
  signInWith: {
    left: 53,
    color: "#130160",
    width: 180,
  },
  google2Icon: {
    top: 15,
    width: 16,
    height: 20,
    left: 29,
    borderRadius: Border.br_7xs,
  },
  signInWithGoogle: {
    top: 566,
    left: 59,
    backgroundColor: Color.colorDarkseagreen,
    width: 264,
    height: 50,
  },
  youDontHave: {
    color: Color.colorDimgray_100,
  },
  signUp: {
    textDecoration: "underline",
    color: Color.colorDarkorange,
  },
  youDontHaveContainer: {
    top: 632,
    left: 77,
    fontFamily: FontFamily.footnote,
    position: "absolute",
  },
  loremIpsumDolor: {
    top: 152,
    left: 42,
    lineHeight: 19,
    textAlign: "center",
    width: 291,
    color: Color.colorDimgray_100,
    fontSize: FontSize.smallSmall2_size,
  },
  welcomeBack: {
    top: 102,
    left: 79,
    fontSize: FontSize.size_11xl,
    color: Color.colorMidnightblue_300,
  },
  rememberMeChild: {
    borderRadius: Border.br_8xs,
    height: 24,
    top: 0,
    left: 0,
  },
  rememberMe1: {
    left: 71,
    color: Color.colorDarkgray,
  },
  rememberMe: {
    width: 121,
    height: 24,
    top: 0,
    left: 0,
    position: "absolute",
  },
  forgotPassword: {
    left: 221,
    color: Color.colorMidnightblue_300,
  },
  frame: {
    top: 441,
    width: 322,
    height: 24,
    overflow: "hidden",
  },
  login: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorHoneydew_100,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Login;
