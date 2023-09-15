import { useState, ChangeEvent, FormEvent } from 'react'

import { FormProps } from './types'
import { ITask } from '../../interfaces/Tasks'


import * as S from './styles'

const Form = ({ textButton, taskList, setTaskList }: FormProps) => {

  // const [id, setId] = useState<number>(0)
  const [title, setTitle] = useState<string>('')
  const [difficulty, setDifficulty] = useState<number>(0)

  const addTaskHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const id = Math.floor(Math.random() * 1000) // Criação de um id aleatório ou randômico

    const newTask: ITask = {id, title, difficulty}

    setTaskList!([...taskList, newTask])
    setTitle('')
    setDifficulty(0)

    console.log(taskList, 'taskList <==')
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if(event.target.name === 'title') setTitle(event.target.value)
    if(event.target.name === 'difficulty') setDifficulty(Number(event.target.value))
  }

  return (
    <S.ContainerGeneral>
      <h2>O que você vai fazer?</h2>
      <S.Form onSubmit={addTaskHandler}>
        <S.ContentInputLabel>
          <label htmlFor="title">Título:</label>
          <input 
            type="text" 
            name='title' 
            placeholder='Título da tarefa' 
            onChange={handleChange} 
            value={title} 
          />
        </S.ContentInputLabel>
        <S.ContentInputLabel>
          <label htmlFor="difficulty">Dificuldade:</label>
          <input 
            type="number" 
            name='difficulty' 
            placeholder='Dificuldade da tarefa' 
            onChange={handleChange} 
            value={difficulty} 
          />
        </S.ContentInputLabel>
        <input type="submit" className='submit' value={textButton} />
      </S.Form>
    </S.ContainerGeneral>
  )
}

export default Form