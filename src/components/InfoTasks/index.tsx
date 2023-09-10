import React, { Text, View } from 'react-native';

import { styles } from './styles';

type InfoTasksProps = {
  title: string;
  total: string;
  isComplete: boolean;
}

export function InfoTasks({ title, total, isComplete }: InfoTasksProps) {
  return (
    <View style={styles.container}>
      <Text 
        style={[
          styles.taskStageInfo, 
          isComplete ? styles.purpleTask : styles.blueTask
        ]}
      >
        {title}
      </Text>

      <View style={styles.taskStageInfoTotal}>
        <Text style={styles.taskStageInfoTotalText}>
          {total}
        </Text>
      </View>
    </View>
  );
}