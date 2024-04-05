import { useState, Fragment } from 'react'

import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Form from "../components/Form/Form"
import List from "../components/List/List"
import Modal from '../components/Modal/Modal'

import { ITask } from '../interfaces/Tasks'

function App() {

  const [tasks, setTasks] = useState<ITask[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updateTask, setUpdateTask] = useState<ITask | null>(null);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleEditTask = (task: ITask) => {
    setIsModalOpen(true);
    setUpdateTask(task);
  }

  const handleUpdateTask = (id: number, title: string, difficulty: number) => {
    const updatedTask: ITask = {id, title, difficulty}

    const updatedItems = tasks.map((task) => {
      return task.id === updatedTask.id ? updatedTask : task
    })
    
    setTasks(updatedItems)
    setIsModalOpen(false)
  }

  return (
    <Fragment>
      { isModalOpen && 
        <Modal 
          children={
            <Form 
              textButton='Editar Tarefa' 
              taskList={tasks} 
              setTaskList={setTasks} 
              closeModal={closeModal} 
              task={updateTask}
              handleUpdate={handleUpdateTask}
            />
          } 
          closeModal={closeModal} 
        />    
      }
      <Header />

      <Form 
        textButton='Criar Tarefa' 
        taskList={tasks} 
        setTaskList={setTasks} 
        titleSection="O que você pretende fazer?" 
      />

      <List 
        taskList={tasks}
        setTaskList={setTasks}
        handleEditTask={handleEditTask}
      />

      <Footer />
    </Fragment>
  )
}

export default App
