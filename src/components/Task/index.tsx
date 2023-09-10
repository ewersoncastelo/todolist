import React, { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

type TaskProps = {
  taskComplete: boolean;
  toDoText: string; 
  onDeleteTask: () => void;
}

export function Task({ taskComplete, toDoText, onDeleteTask} : TaskProps) {
return (
  <View style={styles.container}>
    <View style={styles.taskComplete}>
      <Text style={styles.taskCompleteText}>
        {taskComplete ? "S" : "N"}
      </Text>
    </View>

    <Text style={styles.taskToDo}>
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