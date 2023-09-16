import { ListProps } from './types'
import * as S from './styles'

const List = ({taskList, setTaskList, openModal}: ListProps) => {

  function handleDeleteTask(id: number) {
    setTaskList!(taskList.filter(task => task.id !== id))
  }
  
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => {
          return (
            <S.ContainerGeneral key={task.id}>
              <S.ContainerTitleDifficullty>
                <h2>{task.title}</h2>
                <p>Dificuldade: {task.difficulty}</p>
              </S.ContainerTitleDifficullty>

              <S.ContainerIcons>
                <i className='bi bi-pencil' onClick={openModal}></i>
                <i className='bi bi-trash' onClick={() => {handleDeleteTask(task.id)}}></i>
              </S.ContainerIcons>
            </S.ContainerGeneral>
          )
        })
      ) : (
        <S.ContainerDefault>
          <h2>Não há tarefas a serem exibidas!</h2>
        </S.ContainerDefault>
      )
      }
    </>
  )
}

export default List