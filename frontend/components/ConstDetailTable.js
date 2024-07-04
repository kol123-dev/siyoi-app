import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { FontFamily, FontSize, Padding, Color, Border } from "../GlobalStyles";

const ConstDetailTable = ({
  const_stats, 
  constituency,
  item_sum1, 
  item_sum2, 
  item_sum3, 
  item_sum4, 
  totalvotes, 
  avatarIcon,  
  avatarIcon1,  
  avatarIcon2,  
  avatarIcon3,  
  avatarIcon4,
  item_name1,
  item_name2,
  item_name3,
  item_name4,   
  onAddPress }) => {
  return (
    <View style={styles.constDetailTable}>
      <View style={styles.title}>
      <TouchableOpacity onPress={onAddPress}>
          <Image
            style={styles.addIcon}
            contentFit="cover"
            source={require("../assets/add.png")}
          />
        </TouchableOpacity>

        <Text style={styles.registeredVoters}>{const_stats}</Text>
        <Text
          style={[styles.kimininiConstituency, styles.totalVotesCastedTypo]}>
          {constituency}
        </Text>
        <Image
          style={styles.iconAboutMe}
          contentFit="cover"
          source={require("../assets/icon-about-me.png")}
        />
      </View>
      <View style={styles.rowStylesParent}>
        <View style={[styles.rowStyles, styles.rowBorder]}>
          
          <View style={styles.gridStyles}>
            <View style={[styles.cells, styles.cellsLayout]}>
              <View style={[styles.lockup, styles.lockupSpaceBlock]}>
                <Image
                  style={styles.avatarIcon}
                  contentFit="cover"
                  source={avatarIcon1}
                />
                <View style={styles.neilParent}>
                  <Text style={[styles.neil, styles.neilFlexBox]}>
                    {item_name1}
                  </Text>
                  
                </View>
              </View>
            </View>
            
            <View style={[styles.cells2, styles.lockupSpaceBlock]}>
              <View style={styles.textFlexBox}>
                <Text style={[styles.value, styles.valueFlexBox]}>
                  {item_sum1}
                </Text>
              </View>
            </View>
           
          </View>
        </View>
        <View style={[styles.rowStyles, styles.rowBorder]}>
          
          <View style={styles.gridStyles}>
            <View style={[styles.cells, styles.cellsLayout]}>
              <View style={[styles.lockup, styles.lockupSpaceBlock]}>
                <Image
                  style={styles.avatarIcon}
                  contentFit="cover"
                  source={avatarIcon2}
                />
                <View style={styles.neilParent}>
                  <Text style={[styles.neil, styles.neilFlexBox]}>
                    {item_name2}
                  </Text>
                  
                </View>
              </View>
            </View>
            
            <View style={[styles.cells2, styles.lockupSpaceBlock]}>
              <View style={styles.textFlexBox}>
                <Text style={[styles.value, styles.valueFlexBox]}>
                  {item_sum2}
                </Text>
              </View>
            </View>
           
          </View>
        </View>
        <View style={[styles.rowStyles, styles.rowBorder]}>
          
          <View style={styles.gridStyles}>
            <View style={[styles.cells, styles.cellsLayout]}>
              <View style={[styles.lockup, styles.lockupSpaceBlock]}>
                <Image
                  style={styles.avatarIcon}
                  contentFit="cover"
                  source={avatarIcon3}
                />
                <View style={styles.neilParent}>
                  <Text style={[styles.neil, styles.neilFlexBox]}>
                    {item_name3}
                  </Text>
                  
                </View>
              </View>
            </View>
            
            <View style={[styles.cells2, styles.lockupSpaceBlock]}>
              <View style={styles.textFlexBox}>
                <Text style={[styles.value, styles.valueFlexBox]}>
                  {item_sum3}
                </Text>
              </View>
            </View>
           
          </View>
        </View>
        <View style={[styles.rowStyles, styles.rowBorder]}>
          
          <View style={styles.gridStyles}>
            <View style={[styles.cells, styles.cellsLayout]}>
              <View style={[styles.lockup, styles.lockupSpaceBlock]}>
                <Image
                  style={styles.avatarIcon}
                  contentFit="cover"
                  source={avatarIcon4}
                />
                <View style={styles.neilParent}>
                  <Text style={[styles.neil, styles.neilFlexBox]}>
                    {item_name4}
                  </Text>
                  
                </View>
              </View>
            </View>
            
            <View style={[styles.cells2, styles.lockupSpaceBlock]}>
              <View style={styles.textFlexBox}>
                <Text style={[styles.value, styles.valueFlexBox]}>
                  {item_sum4}
                </Text>
              </View>
            </View>
           
          </View>
        </View>
      </View>
      <Text
        style={[styles.totalVotesCasted, styles.totalVotesCastedTypo]}>
        {totalvotes} 
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  totalVotesCastedTypo: {
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    fontSize: FontSize.footnote_size,
    textAlign: "left",
  },
  
  backgroundPosition: {
    height: 20,
    width: 20,
    borderWidth: 2,
    borderRadius: Border.br_7xs,
    marginLeft: -10,
    marginTop: -10,
    left: "50%",
    top: "50%",
    borderStyle: "solid",
    position: "absolute",
  },
  cellsLayout: {
    height: 50,
    flex: 1,
  },
  lockupSpaceBlock: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_5xs,
    flex: 1,

  },
  neilFlexBox: {
    color: Color.colorBlack,
    lineHeight: 20,
    letterSpacing: 0,
    alignSelf: "stretch",
    textAlign: "left",
    fontFamily: FontFamily.footnote,
  },
  pillsFlexBox: {
    backgroundColor: Color.colorLavender_100,
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_xs,
    height: 30,
    borderRadius: Border.br_xl,
    justifyContent: "center",
    overflow: "hidden",
    alignItems: "center",
    flexDirection: "row",
  },
  valueFlexBox: {
    display: "flex",
    lineHeight: 20,
    letterSpacing: 0,
    height: 50,
    flex: 1,
    alignItems: "center",
    fontSize: FontSize.footnote_size,
    textAlign: "left",
    fontFamily: FontFamily.footnote,
  },
  textFlexBox: {
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  addIcon: {
    top: 4,
    left: 269,
    height: 25,
    width: 25,
    position: "absolute",
  },
  registeredVoters: {
    top: 20,
    color: Color.colorDimgray_100,
    textAlign: "left",
    fontFamily: FontFamily.footnote,
    fontSize: FontSize.smallSmall2_size,
    left: 58,
    position: "absolute",
  },
  kimininiConstituency: {
    top: 0,
    color: Color.colorMidnightblue_100,
    width: 170,
    height: 20,
    left: 58,
    position: "absolute",
    fontWeight: "700",
     
  },
  iconAboutMe: {
    top: 2,
    left: 0,
    height: 25,
    width: 25,
    position: "absolute",
  },
  title: {
    width: 294,
    height: 36,
  },
  background: {
    borderColor: Color.colorGainsboro_100,
    height: 20,
    width: 20,
    borderWidth: 2,
    borderRadius: Border.br_7xs,
    marginLeft: -10,
    marginTop: -10,
    backgroundColor: Color.surfaceLevel1,
    display: "none",
  },
  checkbox: {
    borderRadius: Border.br_5xs,
    width: 24,
    height: 24,
    display: "none",
    overflow: "hidden",
  },
  avatarIcon: {
    borderRadius: Border.br_81xl,
    width: 36,
    height: 36,
  },
  neil: {
    fontSize: FontSize.footnote_size,
    color: Color.colorBlack,
  },
  iNeglectedTo: {
    lineHeight: 16,
    color: Color.colorGray_100,
    height: 19,
    marginTop: 4,
    letterSpacing: 0,
    alignSelf: "stretch",
    display: "none",
    overflow: "hidden",
    alignItems: "center",
    textAlign: "left",
    fontFamily: FontFamily.footnote,
    fontSize: FontSize.smallSmall2_size,
  },
  neilParent: {
    marginLeft: 8,
    flex: 1,
  },
  lockup: {
    marginTop: -18,
    right: 0,
    paddingHorizontal: Padding.p_5xs,
    top: "50%",
    alignItems: "center",
    flexDirection: "row",
    left: 0,
    position: "absolute",
  },
  cells: {
    overflow: "hidden",
  },
  pills1: {
    color: Color.layout800,
    lineHeight: 20,
    letterSpacing: 0,
    fontSize: FontSize.footnote_size,
    textAlign: "left",
    fontFamily: FontFamily.footnote,
  },
  pills: {
    backgroundColor: Color.colorLightgoldenrodyellow,
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_xs,
    height: 30,
    borderRadius: Border.br_xl,
    justifyContent: "center",
    overflow: "hidden",
    alignItems: "center",
    flexDirection: "row",
  },
  pills2: {
    marginLeft: 10,
    display: "none",
  },
  cells1: {
    height: 50,
    flex: 1,
    display: "none",
    alignItems: "center",
    flexDirection: "row",
  },
  value: {
    color: Color.colorDarkslategray,
    alignSelf:"center",
  },
  cells2: {
    flex: 1,
    alignItems:"center",
    justifyContent:"center",
    paddingTop:46,
    
    
  },
  value1: {
    color: Color.pastelBlue,
  },
  cells3: {
    height: 50,
    flex: 1,
    display: "none",
  },
  gridStyles: {
    marginLeft: 6,
    justifyContent: "center",
    flex: 1,
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  rowStyles: {
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    
      // paddingVertical: Padding.p_5xs,
      // paddingHorizontal: Padding.p_base,
      height: 65,
      borderBottomWidth: 1,
      borderTopWidth: 1,
      borderColor: Color.colorLightgray_100,
      borderStyle: "solid",
    
  },
  background1: {
    borderColor: Color.colorGainsboro_100,
    height: 20,
    width: 20,
    borderWidth: 2,
    borderRadius: Border.br_7xs,
    marginLeft: -10,
    marginTop: -10,
    backgroundColor: Color.surfaceLevel1,
  },
  lockup1: {
    marginTop: -20,
    right: 0,
    paddingHorizontal: Padding.p_5xs,
    top: "50%",
    alignItems: "center",
    flexDirection: "row",
    left: 0,
    position: "absolute",
  },
  cells6: {
    height: 50,
    flex: 1,
  },
  rowStyles1: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    height: 65,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: Color.colorLightgray_100,
    borderStyle: "solid",
  },
  background2: {
    backgroundColor: Color.pastelBlue,
    borderColor: Color.pastelBlue,
    height: 20,
    width: 20,
    borderWidth: 2,
    borderRadius: Border.br_7xs,
    marginLeft: -10,
    marginTop: -10,
  },
  icon: {
    marginTop: -3,
    marginLeft: -4,
    width: 8,
    height: 6,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  neil2: {
    fontSize: FontSize.size_smi,
  },
  rowStylesParent: {
    height: 281,
    marginTop: 10,
    width: 312,
  },
  totalVotesCasted: {
    color: Color.colorGray_300,
    marginTop: 10,
  },
  constDetailTable: {
    width: 336,
    height: 409,
    padding: Padding.p_5xl,
    backgroundColor: Color.surfaceLevel1,
  },
});

export default ConstDetailTable;
