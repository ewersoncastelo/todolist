import React, { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

type TaskProps = {
  taskComplete: number;
  toDoText: string; 
  onDeleteTask: () => void;
  onCompleteTask: () => void;
}

export function Task({ taskComplete, toDoText, onDeleteTask, onCompleteTask} : TaskProps) {
return (
  <View style={styles.container}>
    <TouchableOpacity 
      onPress={onCompleteTask}
      style={styles.taskComplete}
    >
      <Text style={styles.taskCompleteText}>
        {(taskComplete == 1) ? "S" : "N"}
      </Text>
    </TouchableOpacity>

    <Text 
      style={
        (taskComplete == 1) ? 
        styles.taskToDoComplete 
        : 
        styles.taskToDo}
    >
      {toDoText}
    </Text>

    <TouchableOpacity 
      style={styles.taskDelete}
      onPress={onDeleteTask}
    >
      <Text style={styles.taskDeleteText}>
        D
      </Text>
    </TouchableOpacity>
  </View>
);
}