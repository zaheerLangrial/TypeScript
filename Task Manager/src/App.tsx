import { Input } from 'antd'
import { useState } from 'react'
import { Button, List, DatePicker } from 'antd';
import moment, { Moment } from 'moment';


interface Task {
  id : number ;
  text : string;
  dueDate : Moment | null
}

function App() {
  const [tasks , setTasks] = useState<Task[]>([])
  const [newTask , setNewTask] = useState<string>('')
  const [dueDate , setDueDate] = useState<Moment | null>(null)

  const removeTask = (id : number) => {
    const updatedTasks = tasks.filter((task) => task.id !== id)
    setTasks(updatedTasks)
  }

  const addTask = () => {
    if(newTask.trim() !== '') {
      setTasks([...tasks , {id : Date.now(), text : newTask , dueDate}])
      setNewTask('');
      setDueDate(null)
    }
  }

  return (
    <>
      <h1>Task Manager</h1>
      <Input type='text' value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder='Enter a New Task...' />

      <DatePicker 
      placeholder='Enter Date..' onChange={(date) => setDueDate(date as Moment | null)} value={dueDate} />


      <Button type='primary' onClick={addTask}>
        Add Task
      </Button>

      <List 
        dataSource={tasks} 
        renderItem={(task) => (
          <List.Item key={task.id}>
            <span>{task.text}</span>
            <span>{task.dueDate ? `Due: ${task.dueDate.format('MMMM Do YYYYY')}` : ''}</span>
            <Button type='primary' danger onClick={() => removeTask(task.id)}>Remove</Button>
          </List.Item>
        )}
      />
    </>
  )
}

export default App
