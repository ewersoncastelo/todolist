import React, { Text, TouchableOpacity, View, Image } from "react-native";
import { styles } from "./styles";

import trashIcon from "../../assets/images/trash.png";
import checkFalse from "../../assets/images/checkFalse.png";
import checkTrue from "../../assets/images/checkTrue.png";

type TaskProps = {
  taskComplete: number;
  toDoText: string;
  onDeleteTask: () => void;
  onCompleteTask: () => void;
};

export function Task({
  taskComplete,
  toDoText,
  onDeleteTask,
  onCompleteTask,
}: TaskProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onCompleteTask} style={styles.taskComplete}>
        {taskComplete == 1 ? (
          <Image source={checkTrue} />
        ) : (
          <Image source={checkFalse} />
        )}
      </TouchableOpacity>

      <TouchableOpacity style={styles.taskToDoView} onPress={onCompleteTask}>
        <Text
          style={taskComplete == 1 ? styles.taskToDoComplete : styles.taskToDo}>
          {toDoText}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.taskDelete} onPress={onDeleteTask}>
        <Image source={trashIcon} />
      </TouchableOpacity>
    </View>
  );
}
