import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';

import theme from '../../global/theme';
import { styles } from './styles';

import imageEmpty from '../../assets/images/empty-logo.png';
import logoTodo from '../../assets/images/todo-logo.png';

import { InfoTasks } from '../../components/InfoTasks';
import { Task } from '../../components/Task';

export function Home() {
  function handleTaskDelete() {
    console.log("Button deleted tapped...")
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={logoTodo} 
        />
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa tarefa"
          placeholderTextColor={theme.colors.gray300} 
        />

        <TouchableOpacity
          style={styles.button}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.subHeader}>
        <InfoTasks 
          title='Criadas'
          total='0'
          isComplete={false}
        />

        <InfoTasks 
          title='Concluídas'
          total='0'
          isComplete
        />
      </View> 
      
      <View style={styles.content}>

        <Task 
          taskComplete={false}
          toDoText='Integer urna interdum massa libero auctor neque turpis turpis semper.'
          onDeleteTask={handleTaskDelete}
        />

        <Task 
          taskComplete={true}
          toDoText='Neque turpis turpis semper.'
          onDeleteTask={handleTaskDelete}
        />

        {/* <View style={styles.emptyTodo}>
          <Image
            style={styles.logoEmpty}
            source={imageEmpty} 
          />
          
          <Text style={styles.textTitleEmpty}>
            Você ainda não tem tarefas cadastradas
          </Text>

          <Text style={styles.textSubTitleEmpty}>
            Crie tarefas e organize seus itens a fazer
          </Text>
        </View> */}
      </View>
    </View>
  );  
}
