import { useState } from 'react'
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Form from "../components/Form/Form"
import List from "../components/List/List"

import { ITask } from '../interfaces/Tasks'
function App() {

  const [tasks, setTasks] = useState<ITask[]>([])

  return (
    <div>
     <Header />
     <main>
      <Form textButton='Criar Tarefa' taskList={tasks} setTaskList={setTasks} />
      <List />
     </main>
     <Footer />
    </div>
  )
}

export default App
