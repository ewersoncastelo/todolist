import { StyleSheet } from "react-native";
import theme from "../../global/theme";

export const styles = StyleSheet.create({
  container : {
    flexDirection: "row",
    backgroundColor: theme.colors.gray500,

    alignItems: "center",
    justifyContent: "center",

    height: 64,
    marginBottom: 8,

    borderRadius: 8,

    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: theme.colors.gray400,
    borderStyle: "solid"
  },

  taskComplete : {
    width: 24,
    height: 24,

    justifyContent: "center",
    alignItems: "center"
  },

  taskCompleteText: {
    color: theme.colors.blue
  },

  taskToDo : {
    flex: 1,
    color: theme.colors.gray100,
    fontSize: 14,
    lineHeight: 20
  },

  taskDelete : {
    width: 32,
    height: 32,

    justifyContent: "center",
    alignItems: "center",
  },

  taskDeleteText: {
    color: theme.colors.gray300
  },
});