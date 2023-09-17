import { useState } from 'react'

import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Form from "../components/Form/Form"
import List from "../components/List/List"
import Modal from '../components/Modal/Modal'

import { ITask } from '../interfaces/Tasks'

function App() {

  const [tasks, setTasks] = useState<ITask[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      { isModalOpen && 
        <Modal 
          children={
            <Form 
              textButton='Editar Tarefa' 
              taskList={tasks} 
              setTaskList={setTasks} 
              closeModal={closeModal} 
            />
          } 
          closeModal={closeModal} 
        />    
      }
     <Header />
     <main>
      <Form 
        textButton='Criar Tarefa' 
        taskList={tasks} 
        setTaskList={setTasks} 
        titleSection="O que você vai fazer?" 
      />
      <List taskList={tasks} setTaskList={setTasks} openModal={openModal} />
     </main>
     <Footer />
    </div>
  )
}

export default App
