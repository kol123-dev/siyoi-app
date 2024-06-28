import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const SignUp = () => {
  return (
    <View style={styles.signUp}>
      <View style={[styles.email, styles.emailLayout]}>
        <Image
          style={styles.emailChild}
          contentFit="cover"
          source={require("../assets/rectangle-59.png")}
        />
        <Text
          style={[styles.brandonelouisgmailcom, styles.password1Typo]}
        >{`Brandonelouis@gmail.com `}</Text>
        <Text style={[styles.email1, styles.email1Clr]}>Email</Text>
      </View>
      <View style={[styles.fullName, styles.emailLayout]}>
        <Image
          style={styles.emailChild}
          contentFit="cover"
          source={require("../assets/rectangle-59.png")}
        />
        <Text
          style={[styles.brandoneLouis, styles.password1Typo]}
        >{`Brandone Louis `}</Text>
        <Text style={[styles.fullName1, styles.fullName1Position]}>
          Full name
        </Text>
      </View>
      <View style={[styles.password, styles.emailLayout]}>
        <Image
          style={styles.emailChild}
          contentFit="cover"
          source={require("../assets/rectangle-59.png")}
        />
        <Image
          style={[styles.iconEye, styles.rememberLayout]}
          contentFit="cover"
          source={require("../assets/icon-eye.png")}
        />
        <Image
          style={[styles.hiddenPasswordIcon, styles.fullName1Position]}
          contentFit="cover"
          source={require("../assets/hidden-password.png")}
        />
        <Text style={[styles.password1, styles.email1Typo]}>Password</Text>
      </View>
      <View style={[styles.rememberMe, styles.rememberLayout]}>
        <Image
          style={[styles.rememberMeChild, styles.rememberLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-591.png")}
        />
        <Text style={[styles.rememberMe1, styles.password1Typo]}>
          Remember me
        </Text>
      </View>
      <View style={[styles.save, styles.saveLayout]}>
        <Text style={[styles.signUp1, styles.signTypo]}>Sign up</Text>
      </View>
      <View style={[styles.signUpWithGoogle, styles.saveLayout]}>
        <Text style={[styles.signUpWith, styles.signTypo]}>
          Sign up with Google
        </Text>
        <Image
          style={styles.google2Icon}
          contentFit="cover"
          source={require("../assets/google-21.png")}
        />
      </View>
      <Text style={[styles.forgotPassword, styles.email1Clr]}>
        Forgot Password ?
      </Text>
      <Text style={[styles.youDontHaveContainer, styles.password1Typo]}>
        <Text
          style={styles.youDontHave}
        >{`You don't have an account yet?  `}</Text>
        <Text style={styles.signIn}>Sign in</Text>
      </Text>
      <Text style={styles.loremIpsumDolor}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor
      </Text>
      <Text style={[styles.createAnAccount, styles.email1Clr]}>
        Create an Account
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  emailLayout: {
    height: 76,
    width: 317,
    position: "absolute",
  },
  password1Typo: {
    textAlign: "left",
    fontSize: FontSize.smallSmall2_size,
    position: "absolute",
  },
  email1Clr: {
    color: Color.colorMidnightblue_300,
    textAlign: "left",
  },
  fullName1Position: {
    left: 25,
    position: "absolute",
  },
  rememberLayout: {
    height: 24,
    position: "absolute",
  },
  email1Typo: {
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
  },
  saveLayout: {
    borderRadius: Border.br_7xs,
    height: 50,
    position: "absolute",
  },
  signTypo: {
    color: Color.surfaceLevel1,
    textTransform: "uppercase",
    letterSpacing: 0.8,
    fontSize: FontSize.footnote_size,
    top: 16,
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    textAlign: "left",
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
    left: 45,
    color: Color.colorMidnightblue_400,
    top: 43,
    textAlign: "left",
    fontFamily: FontFamily.footnote,
  },
  email1: {
    left: 15,
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    top: 0,
    fontSize: FontSize.smallSmall2_size,
    position: "absolute",
  },
  email: {
    top: 344,
    left: 30,
  },
  brandoneLouis: {
    left: 54,
    color: Color.colorMidnightblue_400,
    top: 43,
    textAlign: "left",
    fontFamily: FontFamily.footnote,
  },
  fullName1: {
    color: Color.colorMidnightblue_300,
    textAlign: "left",
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    top: 0,
    fontSize: FontSize.smallSmall2_size,
  },
  fullName: {
    top: 254,
    left: 29,
  },
  iconEye: {
    top: 39,
    left: 271,
    width: 24,
    height: 24,
  },
  hiddenPasswordIcon: {
    top: 49,
    width: 104,
    height: 5,
  },
  password1: {
    color: Color.colorMidnightblue_100,
    top: 0,
    textAlign: "left",
    fontSize: FontSize.smallSmall2_size,
    position: "absolute",
    left: 30,
  },
  password: {
    top: 435,
    left: 30,
  },
  rememberMeChild: {
    borderRadius: Border.br_8xs,
    width: 24,
    height: 24,
    top: 0,
    left: 0,
  },
  rememberMe1: {
    top: 4,
    left: 70,
    color: Color.colorDarkgray,
    fontFamily: FontFamily.footnote,
  },
  rememberMe: {
    top: 531,
    width: 123,
    left: 29,
  },
  signUp1: {
    left: 100,
    width: 66,
  },
  save: {
    top: 575,
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
    left: 54,
  },
  signUpWith: {
    left: 57,
    width: 179,
  },
  google2Icon: {
    top: 15,
    left: 34,
    width: 16,
    height: 20,
    position: "absolute",
  },
  signUpWithGoogle: {
    top: 640,
    left: 55,
    backgroundColor: Color.colorDarkseagreen,
    width: 264,
  },
  forgotPassword: {
    top: 535,
    left: 243,
    fontFamily: FontFamily.footnote,
    fontSize: FontSize.smallSmall2_size,
    position: "absolute",
  },
  youDontHave: {
    color: Color.colorDimgray_100,
  },
  signIn: {
    textDecoration: "underline",
    color: Color.colorDarkorange,
  },
  youDontHaveContainer: {
    top: 706,
    left: 79,
    fontFamily: FontFamily.footnote,
  },
  loremIpsumDolor: {
    top: 152,
    left: 42,
    lineHeight: 19,
    textAlign: "center",
    width: 291,
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.footnote,
    fontSize: FontSize.smallSmall2_size,
    position: "absolute",
  },
  createAnAccount: {
    top: 102,
    left: 51,
    fontSize: FontSize.size_11xl,
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  signUp: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorHoneydew_100,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default SignUp;
