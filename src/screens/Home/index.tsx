import { Alert, FlatList, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';

import theme from '../../global/theme';
import { styles } from './styles';

import imageEmpty from '../../assets/images/empty-logo.png';
import logoTodo from '../../assets/images/todo-logo.png';

import { InfoTasks } from '../../components/InfoTasks';
import { Task } from '../../components/Task';
import { useState } from 'react';

interface HomeProps {
  todoItem: string;
  complete: number;
}

export function Home() {
  const [task, setTask] = useState<HomeProps[]>([]);
  const [newTask, setNewTask] = useState<string>("");
  
  function handleTaskAdd(){
    // Add new task
    const newTaskItem: HomeProps = {
      todoItem: newTask,
      complete: 0
    }

    // check if task is not empty
    if (!newTask.trim()){
      Alert.alert(
        "Adicionar Tarefa",
        "Você precisa digitar alguma coisa 😁"
      );

      return;
    }

    // Check if the task has already been added
    const existTask = task.find(
      item => 
        item.todoItem.toLocaleLowerCase() === 
        newTaskItem.todoItem.toLocaleLowerCase()
    );

    if(!existTask){
      setTask((prevState) => [...prevState, newTaskItem]);
      setNewTask("");

      return;
    }

    return Alert.alert(
      "Adicionar Tarefa",
      "Opa...parece que você já cadastrou essa tarefa ou esqueceu de digitá-la 😁"
    );

  }

  function handleTaskDelete(todoItem: string) {
    return Alert.alert(
      "Confirmação de Exclusão",
      "Tem certeza de que deseja excluir a tarefa selecionada?",
      [
        { text: "Sim",
          onPress: () => {
            setTask(prevState => prevState.filter(task => task.todoItem !== todoItem));
            Alert.alert(`A tarefa "${todoItem}" foi excluída.`)
          }
        },
        { text: "Não"},
      ]
    )
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
          onChangeText={text => setNewTask(text)}
          value={newTask}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleTaskAdd}
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
        <FlatList 
          keyExtractor={(item) => item.todoItem}
          data={task}
          renderItem={({item}) => (
            <Task 
              taskComplete={item.complete}
              toDoText={item.todoItem}
              onCompleteTask={() => console.log("task completed...")}
              onDeleteTask={() => handleTaskDelete(item.todoItem)}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <View style={styles.emptyTodo}>
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
            </View>
          )}
          onEndReached={() => {
            const sortedTask = [...task].sort((a, b) => {
              if (a.complete < b.complete) {
                return -1;
              } else {
                return 1;
              }
            });

            setTask(sortedTask);
          }}
        />
      </View>
    </View>
  );  
}
