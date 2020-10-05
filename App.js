import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, Button ,TextInput , ScrollView,FlatList} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals,setCourseGoals] = useState([]);
  const [InputOpen,toggleInput] = useState(false);

  const addGoalHandler = (enteredGoal)=>{
    console.log(enteredGoal);
    setCourseGoals(currentGoals=>[
      ...currentGoals,
      {key : enteredGoal,value : enteredGoal}]
      )
      toggleInput(false);
    }
  const removeGoalHandler = (goalKey)=>{
    setCourseGoals(currentGoals=> currentGoals.filter((goal)=>goal.key !== goalKey));
  }
  const onGoalCanceled = ()=>{
    toggleInput(false);
  }
  return (
      <View style={styles.container}>
        <Button title = "Add new Goal" onPress={()=>toggleInput(true)}/>
        <GoalInput visible = {InputOpen} onAddGoal = {addGoalHandler} onCancel={onGoalCanceled}/>
        <FlatList 
        keyExtractor = {(item,index)=>item.key}
        data = {courseGoals} 
          renderItem={itemData=><GoalItem id={itemData.item.key} 
          onDelete = {removeGoalHandler.bind(itemData.item.key)} title = {itemData.item.value}/>}/>
      </View> 
  );
}

const styles = StyleSheet.create({
 container : {
   padding : 30,
   justifyContent : "center"
 }
});
