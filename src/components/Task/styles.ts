import { StyleSheet } from "react-native";
import theme from "../../global/theme";

export const styles = StyleSheet.create({
  container: {
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
    borderStyle: "solid",
  },

  taskComplete: {
    width: 24,
    height: 24,

    marginLeft: 12,
  },

  taskToDoView: {
    flex: 1,
    marginVertical: 6,

    marginHorizontal: 8,
  },

  taskToDo: {
    color: theme.colors.gray100,
    fontSize: 14,
    lineHeight: 20,
  },

  taskToDoComplete: {
    color: theme.colors.gray300,
    fontSize: 14,
    lineHeight: 20,

    textAlign: "justify",

    textDecorationLine: "line-through",
  },

  taskDelete: {
    paddingRight: 20,
  },
});
