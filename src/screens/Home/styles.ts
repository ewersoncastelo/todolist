import { StyleSheet } from "react-native";
import theme from "../../global/theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.gray600,
    flex: 1,
  },

  header: {
    backgroundColor: theme.colors.gray700,
    height: 170,
    width: "100%",

    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    width: 110.34,
    height: 32,

    marginTop: 24,
  },

  form: {
    flexDirection: "row",
    paddingHorizontal: 24,
    marginTop: -25
  },

  input: {
    backgroundColor: theme.colors.gray500,
    height: 54,
    padding: 16,
    flex: 1,
    marginRight: 4,

    borderRadius: 8,
  },

  button: {
    width: 52,
    height: 52,

    backgroundColor: theme.colors.blueDark,
    borderRadius: 8,

    justifyContent: "center",
    alignItems: "center"
  },

  buttonText : {
    color: "#FFF",
    fontSize: 24
  },

  subHeader : {
    height: 40, 
    flexDirection: "row",

    justifyContent: "space-between",
    marginTop: 32,
    marginHorizontal: 24,

    borderBottomWidth: 1,
    borderColor: theme.colors.gray400,
    borderStyle: "solid"
  },

  subHeaderLeft : {
    flexDirection: "row",
  },

  subHeaderRight : {
    flexDirection: "row",
  },

  tasksDone : {
    color: theme.colors.purple,
    fontSize: 14,

    fontFamily: theme.fonts.bold,
  },

  tasksDoneTotal : {
    backgroundColor: theme.colors.gray400,
    borderRadius: 12,

    width: 29,
    height: 19,

    alignItems: "center",
    justifyContent: "center",

    marginLeft: 8
  },

  tasksDoneText: {
    color: theme.colors.gray200,
    fontSize: 12,
    fontFamily: theme.fonts.bold,
  },

  content : {
    flex: 1,

    paddingHorizontal: 24,
    paddingVertical: 48,
  },

  emptyTodo : {
    alignItems: "center",
  },

  logoEmpty : {
    width: 56,
    height: 56
  },

  textTitleEmpty : {
    color: theme.colors.gray300,
    fontFamily: theme.fonts.bold,
    fontSize: 14,

    marginTop: 14
  },

  textSubTitleEmpty : {
    color: theme.colors.gray300,
    fontSize: 14,
  }
});