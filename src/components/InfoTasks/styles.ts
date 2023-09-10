import { StyleSheet } from "react-native";
import theme from "../../global/theme";

export const styles = StyleSheet.create({
  taskStageInfo: {
    fontSize: 14,
    fontFamily: theme.fonts.bold,
  },

  blueTask : {
    color: theme.colors.blue
  },

  purpleTask : {
    color: theme.colors.purple
  },

  taskStageInfoTotal : {
    backgroundColor: theme.colors.gray400,
    borderRadius: 12,

    width: 29,
    height: 19,

    alignItems: "center",
    justifyContent: "center",

    marginLeft: 8
  },

  taskStageInfoTotalText: {
    color: theme.colors.gray200,
    fontSize: 12,
    fontFamily: theme.fonts.bold,
  }
  
});