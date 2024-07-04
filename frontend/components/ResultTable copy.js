import * as React from "react";
import { Text, StyleSheet, View, } from "react-native";
import { Image } from "expo-image";
import {
  StyleVariable,
  Color,
  Padding,
  Border,
  FontSize,
  FontFamily,
} from "../GlobalStyles";

const ResultTable = () => {
  return (
    <View style={styles.resultTable}>
      <View style={[styles.tableHeader, styles.icontextsetFlexBox]}>
        <View style={[styles.icontextset, styles.icontextsetFlexBox]}>
          <View>
            <View>
              <Text style={styles.text}>Kinyoro Ward</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.tableContent}>
        <View style={styles.column1}>
          <View style={[styles.tableCell, styles.tableBorder]}>
            <View style={[styles.toggle, styles.toggleFlexBox]}>
              <Image
                style={styles.buttonIcon}
                contentFit="cover"
                source={require("../assets/button.png")}
              />
              <Image
                style={styles.iconbase}
                contentFit="cover"
                source={require("../assets/iconbase.png")}
              />
            </View>
            <Image
              style={[styles.tableCellChild, styles.checkboxIconLayout]}
              contentFit="cover"
              source={require("../assets/star-2.png")}
            />
            <View style={[styles.row, styles.icontextsetFlexBox]}>
              <View>
                <View>
                  <Text style={[styles.pollingCentre, styles.text4Typo]}>
                    Polling Centre
                  </Text>
                </View>
              </View>
              <Image
                style={[styles.iconbase1, styles.iconbaseLayout]}
                contentFit="cover"
                source={require("../assets/iconbase1.png")}
              />
              <Image
                style={styles.iconbaseLayout}
                contentFit="cover"
                source={require("../assets/iconbase2.png")}
              />
              <Image
                style={[styles.iconbase1, styles.iconbaseLayout]}
                contentFit="cover"
                source={require("../assets/iconbase3.png")}
              />
            </View>
          </View>
          <View style={[styles.tableCell1, styles.tableLayout1]}>
            <View style={[styles.toggle, styles.toggleFlexBox]}>
              <Image
                style={styles.buttonIcon}
                contentFit="cover"
                source={require("../assets/button.png")}
              />
              <Image
                style={styles.iconbase}
                contentFit="cover"
                source={require("../assets/iconbase.png")}
              />
            </View>
            <Image
              style={[styles.tableCellChild, styles.checkboxIconLayout]}
              contentFit="cover"
              source={require("../assets/star-21.png")}
            />
            <View style={[styles.row, styles.icontextsetFlexBox]}>
              <View style={styles.icontextsetFlexBox}>
                <View>
                  <View>
                    <Text style={[styles.pollingCentre, styles.text4Typo]}>
                      Pango Primary
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.tableCell2nd, styles.tableLayout1]}>
            <View style={[styles.toggle, styles.toggleFlexBox]}>
              <Image
                style={styles.buttonIcon}
                contentFit="cover"
                source={require("../assets/button.png")}
              />
              <Image
                style={styles.iconbase}
                contentFit="cover"
                source={require("../assets/iconbase.png")}
              />
            </View>
            <Image
              style={[styles.tableCellChild, styles.checkboxIconLayout]}
              contentFit="cover"
              source={require("../assets/star-2.png")}
            />
            <View style={[styles.row, styles.icontextsetFlexBox]}>
              <View style={styles.icontextsetFlexBox}>
                <View>
                  <View>
                    <Text style={[styles.pollingCentre, styles.text4Typo]}>
                      Cheptumbelio Primary
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.tableCell1, styles.tableLayout1]}>
            <View style={[styles.toggle, styles.toggleFlexBox]}>
              <Image
                style={styles.buttonIcon}
                contentFit="cover"
                source={require("../assets/button.png")}
              />
              <Image
                style={styles.iconbase}
                contentFit="cover"
                source={require("../assets/iconbase.png")}
              />
            </View>
            <Image
              style={[styles.tableCellChild, styles.checkboxIconLayout]}
              contentFit="cover"
              source={require("../assets/star-22.png")}
            />
            <View style={[styles.row, styles.icontextsetFlexBox]}>
              <View style={styles.icontextsetFlexBox}>
                <View>
                  <View>
                    <Text style={[styles.pollingCentre, styles.text4Typo]}>
                      S.T Barnabas Primary
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.column2}>
          <View style={[styles.tableCell, styles.tableBorder]}>
            <Image
              style={[styles.checkboxIcon, styles.checkboxIconLayout]}
              contentFit="cover"
              source={require("../assets/checkbox.png")}
            />
            <View style={[styles.toggle4, styles.toggleFlexBox]}>
              <Image
                style={styles.buttonIcon}
                contentFit="cover"
                source={require("../assets/button.png")}
              />
              <Image
                style={styles.iconbase}
                contentFit="cover"
                source={require("../assets/iconbase.png")}
              />
            </View>
            <View style={[styles.row, styles.icontextsetFlexBox]}>
              <View>
                <View>
                  <Text style={[styles.pollingCentre, styles.text4Typo]}>
                    Hon. Siyoi
                  </Text>
                </View>
              </View>
              <Image
                style={[styles.iconbase1, styles.iconbaseLayout]}
                contentFit="cover"
                source={require("../assets/iconbase1.png")}
              />
              <Image
                style={styles.iconbaseLayout}
                contentFit="cover"
                source={require("../assets/iconbase2.png")}
              />
              <Image
                style={[styles.iconbase1, styles.iconbaseLayout]}
                contentFit="cover"
                source={require("../assets/iconbase3.png")}
              />
            </View>
          </View>
          <View style={[styles.tableCell4, styles.tableBorder]}>
            <Image
              style={[styles.checkboxIcon, styles.checkboxIconLayout]}
              contentFit="cover"
              source={require("../assets/checkbox.png")}
            />
            <View style={[styles.toggle5, styles.toggleFlexBox]}>
              <Image
                style={styles.buttonIcon}
                contentFit="cover"
                source={require("../assets/button.png")}
              />
              <Image
                style={styles.iconbase}
                contentFit="cover"
                source={require("../assets/iconbase.png")}
              />
            </View>
            <View style={styles.textbase6}>
              <View>
                <Text style={[styles.text4, styles.text4Typo]}>#132456</Text>
              </View>
            </View>
          </View>
          <View style={[styles.tableCell5, styles.tableBorder]}>
            <Image
              style={[styles.checkboxIcon, styles.checkboxIconLayout]}
              contentFit="cover"
              source={require("../assets/checkbox.png")}
            />
            <View style={[styles.toggle5, styles.toggleFlexBox]}>
              <Image
                style={styles.buttonIcon}
                contentFit="cover"
                source={require("../assets/button.png")}
              />
              <Image
                style={styles.iconbase}
                contentFit="cover"
                source={require("../assets/iconbase.png")}
              />
            </View>
            <View style={styles.textbase6}>
              <View>
                <Text style={[styles.text4, styles.text4Typo]}>#132456</Text>
              </View>
            </View>
          </View>
          <View style={[styles.tableCell4, styles.tableBorder]}>
            <Image
              style={[styles.checkboxIcon, styles.checkboxIconLayout]}
              contentFit="cover"
              source={require("../assets/checkbox.png")}
            />
            <View style={[styles.toggle5, styles.toggleFlexBox]}>
              <Image
                style={styles.buttonIcon}
                contentFit="cover"
                source={require("../assets/button.png")}
              />
              <Image
                style={styles.iconbase}
                contentFit="cover"
                source={require("../assets/iconbase.png")}
              />
            </View>
            <View style={styles.textbase6}>
              <View>
                <Text style={[styles.text4, styles.text4Typo]}>#132456</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.column21}>
          <View style={[styles.tableCell, styles.tableBorder]}>
            <Image
              style={[styles.checkboxIcon, styles.checkboxIconLayout]}
              contentFit="cover"
              source={require("../assets/checkbox.png")}
            />
            <View style={[styles.toggle4, styles.toggleFlexBox]}>
              <Image
                style={styles.buttonIcon}
                contentFit="cover"
                source={require("../assets/button.png")}
              />
              <Image
                style={styles.iconbase}
                contentFit="cover"
                source={require("../assets/iconbase.png")}
              />
            </View>
            <View style={[styles.row, styles.icontextsetFlexBox]}>
              <View>
                <View>
                  <Text style={[styles.pollingCentre, styles.text4Typo]}>
                    Reg. Voters
                  </Text>
                </View>
              </View>
              <Image
                style={[styles.iconbase1, styles.iconbaseLayout]}
                contentFit="cover"
                source={require("../assets/iconbase1.png")}
              />
              <Image
                style={styles.iconbaseLayout}
                contentFit="cover"
                source={require("../assets/iconbase2.png")}
              />
              <Image
                style={[styles.iconbase1, styles.iconbaseLayout]}
                contentFit="cover"
                source={require("../assets/iconbase3.png")}
              />
            </View>
          </View>
          <View style={[styles.tableCell8, styles.tableLayout]}>
            <Image
              style={[styles.checkboxIcon, styles.checkboxIconLayout]}
              contentFit="cover"
              source={require("../assets/checkbox.png")}
            />
            <View style={[styles.toggle5, styles.toggleFlexBox]}>
              <Image
                style={styles.buttonIcon}
                contentFit="cover"
                source={require("../assets/button.png")}
              />
              <Image
                style={styles.iconbase}
                contentFit="cover"
                source={require("../assets/iconbase.png")}
              />
            </View>
            <View style={styles.textbase6}>
              <View>
                <Text style={[styles.text4, styles.text4Typo]}>#132456</Text>
              </View>
            </View>
          </View>
          <View style={[styles.tableCell2nd1, styles.tableLayout]}>
            <Image
              style={[styles.checkboxIcon, styles.checkboxIconLayout]}
              contentFit="cover"
              source={require("../assets/checkbox.png")}
            />
            <View style={[styles.toggle5, styles.toggleFlexBox]}>
              <Image
                style={styles.buttonIcon}
                contentFit="cover"
                source={require("../assets/button.png")}
              />
              <Image
                style={styles.iconbase}
                contentFit="cover"
                source={require("../assets/iconbase.png")}
              />
            </View>
            <View style={styles.textbase6}>
              <View>
                <Text style={[styles.text4, styles.text4Typo]}>#132456</Text>
              </View>
            </View>
          </View>
          <View style={[styles.tableCell8, styles.tableLayout]}>
            <Image
              style={[styles.checkboxIcon, styles.checkboxIconLayout]}
              contentFit="cover"
              source={require("../assets/checkbox.png")}
            />
            <View style={[styles.toggle5, styles.toggleFlexBox]}>
              <Image
                style={styles.buttonIcon}
                contentFit="cover"
                source={require("../assets/button.png")}
              />
              <Image
                style={styles.iconbase}
                contentFit="cover"
                source={require("../assets/iconbase.png")}
              />
            </View>
            <View style={styles.textbase6}>
              <View>
                <Text style={[styles.text4, styles.text4Typo]}>#132456</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.column3}>
          <View style={[styles.tableCell, styles.tableBorder]}>
            <Image
              style={[styles.checkboxIcon, styles.checkboxIconLayout]}
              contentFit="cover"
              source={require("../assets/checkbox.png")}
            />
            <View style={[styles.toggle4, styles.toggleFlexBox]}>
              <Image
                style={styles.buttonIcon}
                contentFit="cover"
                source={require("../assets/button.png")}
              />
              <Image
                style={styles.iconbase}
                contentFit="cover"
                source={require("../assets/iconbase.png")}
              />
            </View>
            <View style={[styles.row, styles.icontextsetFlexBox]}>
              <View>
                <View>
                  <Text style={[styles.pollingCentre, styles.text4Typo]}>
                    Hon.Khatundi
                  </Text>
                </View>
              </View>
              <Image
                style={[styles.iconbase1, styles.iconbaseLayout]}
                contentFit="cover"
                source={require("../assets/iconbase1.png")}
              />
              <Image
                style={styles.iconbaseLayout}
                contentFit="cover"
                source={require("../assets/iconbase2.png")}
              />
              <Image
                style={[styles.iconbase1, styles.iconbaseLayout]}
                contentFit="cover"
                source={require("../assets/iconbase3.png")}
              />
            </View>
          </View>
          <View style={[styles.tableCell4, styles.tableBorder]}>
            <Image
              style={[styles.checkboxIcon, styles.checkboxIconLayout]}
              contentFit="cover"
              source={require("../assets/checkbox.png")}
            />
            <View style={[styles.toggle5, styles.toggleFlexBox]}>
              <Image
                style={styles.buttonIcon}
                contentFit="cover"
                source={require("../assets/button.png")}
              />
              <Image
                style={styles.iconbase}
                contentFit="cover"
                source={require("../assets/iconbase.png")}
              />
            </View>
            <View style={styles.textbase6}>
              <View>
                <Text style={[styles.text4, styles.text4Typo]}>#132456</Text>
              </View>
            </View>
          </View>
          <View style={[styles.tableCell, styles.tableBorder]}>
            <Image
              style={[styles.checkboxIcon, styles.checkboxIconLayout]}
              contentFit="cover"
              source={require("../assets/checkbox.png")}
            />
            <View style={[styles.toggle5, styles.toggleFlexBox]}>
              <Image
                style={styles.buttonIcon}
                contentFit="cover"
                source={require("../assets/button.png")}
              />
              <Image
                style={styles.iconbase}
                contentFit="cover"
                source={require("../assets/iconbase.png")}
              />
            </View>
            <View style={styles.textbase6}>
              <View>
                <Text style={[styles.text4, styles.text4Typo]}>#132456</Text>
              </View>
            </View>
          </View>
          <View style={[styles.tableCell4, styles.tableBorder]}>
            <Image
              style={[styles.checkboxIcon, styles.checkboxIconLayout]}
              contentFit="cover"
              source={require("../assets/checkbox.png")}
            />
            <View style={[styles.toggle5, styles.toggleFlexBox]}>
              <Image
                style={styles.buttonIcon}
                contentFit="cover"
                source={require("../assets/button.png")}
              />
              <Image
                style={styles.iconbase}
                contentFit="cover"
                source={require("../assets/iconbase.png")}
              />
            </View>
            <View style={styles.textbase6}>
              <View>
                <Text style={[styles.text4, styles.text4Typo]}>#132456</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.column4}>
          <View style={[styles.tableCell, styles.tableBorder]}>
            <Image
              style={[styles.checkboxIcon, styles.checkboxIconLayout]}
              contentFit="cover"
              source={require("../assets/checkbox.png")}
            />
            <View style={[styles.toggle4, styles.toggleFlexBox]}>
              <Image
                style={styles.buttonIcon}
                contentFit="cover"
                source={require("../assets/button.png")}
              />
              <Image
                style={styles.iconbase}
                contentFit="cover"
                source={require("../assets/iconbase.png")}
              />
            </View>
            <View style={[styles.row, styles.icontextsetFlexBox]}>
              <View>
                <View>
                  <Text style={[styles.pollingCentre, styles.text4Typo]}>
                    Hon. Nakhumicha
                  </Text>
                </View>
              </View>
              <Image
                style={[styles.iconbase1, styles.iconbaseLayout]}
                contentFit="cover"
                source={require("../assets/iconbase1.png")}
              />
              <Image
                style={styles.iconbaseLayout}
                contentFit="cover"
                source={require("../assets/iconbase2.png")}
              />
              <Image
                style={[styles.iconbase1, styles.iconbaseLayout]}
                contentFit="cover"
                source={require("../assets/iconbase3.png")}
              />
            </View>
          </View>
          <View style={[styles.tableCell14, styles.tableBorder]}>
            <Image
              style={[styles.checkboxIcon, styles.checkboxIconLayout]}
              contentFit="cover"
              source={require("../assets/checkbox.png")}
            />
            <View style={[styles.toggle5, styles.toggleFlexBox]}>
              <Image
                style={styles.buttonIcon}
                contentFit="cover"
                source={require("../assets/button.png")}
              />
              <Image
                style={styles.iconbase}
                contentFit="cover"
                source={require("../assets/iconbase.png")}
              />
            </View>
            <View style={styles.textbase6}>
              <View>
                <Text style={[styles.text4, styles.text4Typo]}>#132456</Text>
              </View>
            </View>
          </View>
          <View style={[styles.tableCell2nd3, styles.tableBorder]}>
            <Image
              style={[styles.checkboxIcon, styles.checkboxIconLayout]}
              contentFit="cover"
              source={require("../assets/checkbox.png")}
            />
            <View style={[styles.toggle5, styles.toggleFlexBox]}>
              <Image
                style={styles.buttonIcon}
                contentFit="cover"
                source={require("../assets/button.png")}
              />
              <Image
                style={styles.iconbase}
                contentFit="cover"
                source={require("../assets/iconbase.png")}
              />
            </View>
            <View style={styles.textbase6}>
              <View>
                <Text style={[styles.text4, styles.text4Typo]}>#132456</Text>
              </View>
            </View>
          </View>
          <View style={[styles.tableCell15, styles.tableBorder]}>
            <Image
              style={[styles.checkboxIcon, styles.checkboxIconLayout]}
              contentFit="cover"
              source={require("../assets/checkbox.png")}
            />
            <View style={[styles.toggle5, styles.toggleFlexBox]}>
              <Image
                style={styles.buttonIcon}
                contentFit="cover"
                source={require("../assets/button.png")}
              />
              <Image
                style={styles.iconbase}
                contentFit="cover"
                source={require("../assets/iconbase.png")}
              />
            </View>
            <View style={styles.textbase6}>
              <View>
                <Text style={[styles.text4, styles.text4Typo]}>#132456</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  icontextsetFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  tableBorder: {
    paddingVertical: StyleVariable.spacingPaddingSpacing10,
    paddingHorizontal: StyleVariable.spacingPaddingSpacing16,
    height: 60,
    alignItems: "center",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: Color.primarySoft,
    borderStyle: "solid",
  },
  toggleFlexBox: {
    padding: Padding.p_11xs,
    justifyContent: "flex-end",
    height: 20,
    width: 36,
    backgroundColor: Color.primaryGreen,
    borderRadius: Border.br_xs,
    display: "none",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  checkboxIconLayout: {
    height: 18,
    width: 18,
  },
  text4Typo: {
    color: Color.colorDimgray_200,
    lineHeight: 20,
    fontSize: FontSize.footnote_size,
    textAlign: "left",
  },
  iconbaseLayout: {
    marginLeft: 4,
    height: StyleVariable.spacingIconSizeIconSize16,
    width: StyleVariable.spacingIconSizeIconSize16,
    borderRadius: StyleVariable.spacingRadiusRadius8,
  },
  tableLayout1: {
    width: 230,
    paddingVertical: StyleVariable.spacingPaddingSpacing10,
    paddingHorizontal: StyleVariable.spacingPaddingSpacing16,
    height: 60,
    alignItems: "center",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: Color.primarySoft,
    borderStyle: "solid",
  },
  tableLayout: {
    width: 140,
    paddingVertical: StyleVariable.spacingPaddingSpacing10,
    paddingHorizontal: StyleVariable.spacingPaddingSpacing16,
    height: 60,
    alignItems: "center",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: Color.primarySoft,
    borderStyle: "solid",
  },
  text: {
    fontSize: FontSize.fontSize4Medium_size,
    lineHeight: 30,
    fontWeight: "500",
    fontFamily: FontFamily.fontSize4Medium,
    color: Color.primaryBlack,
    textAlign: "left",
  },
  icontextset: {
    flex: 1,
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  tableHeader: {
    padding: StyleVariable.spacingPaddingSpacing24,
    borderBottomWidth: 1,
    alignItems: "center",
    width: 699,
    borderColor: Color.primarySoft,
    borderStyle: "solid",
  },
  buttonIcon: {
    width: 16,
    height: 16,
    zIndex: 0,
  },
  iconbase: {
    position: "absolute",
    top: 4,
    left: 20,
    width: StyleVariable.spacingIconSizeIconSize12,
    height: StyleVariable.spacingIconSizeIconSize12,
    zIndex: 1,
    borderRadius: StyleVariable.spacingRadiusRadius8,
    display: "none",
  },
  toggle: {
    display: "none",
  },
  tableCellChild: {
    marginLeft: 8,
  },
  pollingCentre: {
    fontFamily: FontFamily.fontSize7Regular,
  },
  iconbase1: {
    display: "none",
  },
  row: {
    marginLeft: 8,
  },
  tableCell: {
    backgroundColor: Color.colorWhitesmoke,
    alignSelf: "stretch",
    paddingHorizontal: StyleVariable.spacingPaddingSpacing16,
    height: 60,
  },
  tableCell1: {
    backgroundColor: Color.primaryWhite,
  },
  tableCell2nd: {
    backgroundColor: Color.colorWhitesmoke,
  },
  column1: {
    width: 204,
  },
  checkboxIcon: {
    borderRadius: StyleVariable.spacingRadiusRadius4,
    display: "none",
    overflow: "hidden",
  },
  toggle4: {
    marginLeft: 8,
    display: "none",
  },
  toggle5: {
    marginLeft: 12,
    display: "none",
  },
  text4: {
    fontWeight: "700",
    fontFamily: FontFamily.fontSize7Bold,
  },
  textbase6: {
    marginLeft: 12,
  },
  tableCell4: {
    alignSelf: "stretch",
    paddingHorizontal: StyleVariable.spacingPaddingSpacing16,
    height: 60,
    backgroundColor: Color.primaryWhite,
  },
  tableCell5: {
    width: 160,
    backgroundColor: Color.colorWhitesmoke,
  },
  column2: {
    width: 103,
  },
  tableCell8: {
    backgroundColor: Color.primaryWhite,
  },
  tableCell2nd1: {
    backgroundColor: Color.colorWhitesmoke,
  },
  column21: {
    width: 113,
  },
  column3: {
    width: 126,
  },
  tableCell14: {
    width: 150,
    backgroundColor: Color.primaryWhite,
  },
  tableCell2nd3: {
    width: 153,
    backgroundColor: Color.colorWhitesmoke,
  },
  tableCell15: {
    width: 200,
    backgroundColor: Color.primaryWhite,
  },
  column4: {
    width: 153,
  },
  tableContent: {
    flexDirection: "row",
    overflow: "hidden",
    width: 699,
  },
  resultTable: {
    shadowColor: "rgba(36, 36, 36, 0.08)",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowRadius: 16,
    elevation: 16,
    shadowOpacity: 1,
    borderRadius: StyleVariable.spacingRadiusRadius16,
    borderWidth: 1,
    overflow: "hidden",
    width: 699,
    borderColor: Color.primarySoft,
    borderStyle: "solid",
    backgroundColor: Color.primaryWhite,
  },
});

export default ResultTable;
