import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';

import theme from '../../global/theme';
import { styles } from './styles';

import imageEmpty from '../../assets/images/empty-logo.png';
import logoTodo from '../../assets/images/todo-logo.png';
import { InfoTasks } from '../../components/InfoTasks';

export function Home() {
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
        <View style={styles.subHeaderLeft}>
          <InfoTasks 
            title='Criadas'
            total='0'
            isComplete={false}
          />
        </View>


        <View style={styles.subHeaderRight}>
          <InfoTasks 
            title='Concluídas'
            total='0'
            isComplete
          />
        </View>     
      </View> 
      
      <View style={styles.content}>
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
      </View>
    </View>
  );  
}
