import { Alert, FlatList, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';

import theme from '../../global/theme';
import { styles } from './styles';

import imageEmpty from '../../assets/images/empty-logo.png';
import logoTodo from '../../assets/images/todo-logo.png';

import { InfoTasks } from '../../components/InfoTasks';
import { Task } from '../../components/Task';
import { useEffect, useState } from 'react';

interface HomeProps {
  todoItem: string;
  complete: number;
}

export function Home() {
  const [task, setTask] = useState<HomeProps[]>([]);
  const [newTask, setNewTask] = useState<string>("");
  const [totalTaskCreated, setTotalTaskCreated] = useState<number>();
  const [totalTaskDone, setTotalTaskDone] = useState<number>();
  
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
      const updatedTaskList = [...task, newTaskItem];

      if(newTaskItem.complete === 0) {
        setTask(updatedTaskList);
      }

      setNewTask("");
      handleInfoCreateTask()

      if (newTaskItem.complete === 1){
        handleInfoNewCompleteTask();
      }

      // Call the sort function when necessary
      const orderTasks = updatedTaskList.sort((a, b) => {
        if (a.complete < b.complete) {
          return -1;
        } else {
          return 1;
        }
      });

      setTask(orderTasks);

      return;
    }

    return Alert.alert(
      "Adicionar Tarefa",
      "Opa...parece que você já cadastrou essa tarefa ou esqueceu de digitá-la 😁"
    );

  }

  function handleTaksComplete(todoItem: string){
    const updateTaskCompleted = task.map(item => {
      if(item.todoItem === todoItem){
        return {
          ...item, 
          complete: item.complete === 0 ? 1 : 0,
        };
      }

      return item;
    });

    const orderTasks = [...updateTaskCompleted].sort((a, b) => {
      if (a.complete < b.complete) {
        return -1;
      } else {
        return 1;
      }
    });

    setTask(orderTasks);

    const updatedTask = orderTasks.find(item => item.todoItem === todoItem);
    if (updatedTask) {
      if (updatedTask.complete === 1) {
        handleInfoNewCompleteTask();
      } else {
        handleInfoRevertCompleteTask();
      }
    }
  }

  function handleTaskDelete(todoItem: string) {
    const taskToDelete = task.find(item => item.todoItem === todoItem);

    // If the task is not found, do nothing
    if (!taskToDelete) {
      return; 
    }

    return Alert.alert(
      "Confirmação de Exclusão",
      "Tem certeza de que deseja excluir a tarefa selecionada?",
      [
        {
          text: "Sim",
          onPress: () => {
            setTask(prevState => prevState.filter(task => task.todoItem !== todoItem));

            // Check if the task is complete (1) before decreasing the count
            if (taskToDelete.complete === 1) {
              handleInfoDeleteTask();
              handleInfoRevertCompleteTask();
            }

            Alert.alert(`A tarefa "${todoItem}" foi excluída.`);
          }
        },
        { text: "Não" },
      ]
    );
  }

  function handleInfoTasks() {
    const totalTaskCreated = task.filter(task => task.todoItem).length
    setTotalTaskCreated(totalTaskCreated);

    const totalTaskCompleted = task.filter(task => task.complete).length
    setTotalTaskDone(totalTaskCompleted);

    return;
  }

  function handleInfoCreateTask() {
    const totalTaskCreated = task.filter(task => task.todoItem).length + 1
    return setTotalTaskCreated(totalTaskCreated);
  }

  function handleInfoDeleteTask() {
    const totalTaskCreated = task.filter(task => task.todoItem).length - 1
    return setTotalTaskCreated(totalTaskCreated);
  }

  function handleInfoNewCompleteTask() {
    const totalTaskCompleted = task.filter(task => task.complete).length + 1
    setTotalTaskDone(totalTaskCompleted);
  }

  function handleInfoRevertCompleteTask(){
    const totalTaskCompleted = task.filter(task => task.complete).length - 1
    
    if (totalTaskCompleted < 0){
      return;
    }

    setTotalTaskDone(totalTaskCompleted);
  }

  useEffect(() => {
    handleInfoTasks();
  }, [])
  
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
          total={`${totalTaskCreated}`}
          isComplete={false}
        />

        <InfoTasks 
          title='Concluídas'
          total={`${totalTaskDone}`}
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
              onCompleteTask={() => handleTaksComplete(item.todoItem)}
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
        />
      </View>
    </View>
  );  
}
