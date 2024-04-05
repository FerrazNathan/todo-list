import React from 'react'
import { ListProps } from './types'

import * as S from './styles'

const List = ({taskList, setTaskList, handleEditTask}: ListProps) => {

  function handleDeleteTask(id: number) {
    setTaskList!(taskList.filter(task => task.id !== id))
  }
  
  return (
    <React.Fragment>
      {taskList.length > 0 && (
        taskList.map((task) => {
          return (
            <S.ContainerGeneral key={task.id}>
              <S.ContainerTitleDifficullty>
                <h2>{task.title}</h2>
                <p>Dificuldade: {task.difficulty}</p>
              </S.ContainerTitleDifficullty>

              <S.ContainerIcons>
                <i className='bi bi-pencil' onClick={() => handleEditTask(task)}></i>
                <i className='bi bi-trash' onClick={() => handleDeleteTask(task.id)}></i>
              </S.ContainerIcons>
            </S.ContainerGeneral>
          )
        })
      )}
    </React.Fragment>
  )
}

export default List