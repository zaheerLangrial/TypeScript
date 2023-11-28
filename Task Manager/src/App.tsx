import { Input, Modal } from 'antd'
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
  const [editTask , setEditTask] = useState<Task | null > (null)
  const [modal , setModal] = useState<boolean>(false)

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

  const handleEditButton = (task : Task) => {
    setModal(true)
    setEditTask(task)
  }
  const saveEditedTask = (task : Task) => {
    const updatedTasks = tasks.map((task) => 
      task.id === editTask?.id ? editTask : task
    );
    setTasks(updatedTasks);
    setModal(false)
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
            <div className=''>
            <Button type='primary' onClick={() => handleEditButton(task)} >Edit</Button>
            <Button type='primary' danger onClick={() => removeTask(task.id)}>Remove</Button>
            </div>
          </List.Item>
        )}
      />

      <Modal 
        title = 'Edit Task'
        visible={modal}
        onCancel={() => setModal(false)}
        onOk={() => saveEditedTask(editTask as Task)}
      >

          <Input
          value={editTask?.text || ''}
          onChange={(e) => setEditTask({ ...editTask, text: e.target.value })}
          placeholder="Enter task text..."
        />

        <DatePicker
          value={editTask?.dueDate}
          onChange={(date) => setEditTask({...editTask , dueDate : date})}
          placeholder='Edit due date...'
        />

      </Modal>
    </>
  )
}

export default App
