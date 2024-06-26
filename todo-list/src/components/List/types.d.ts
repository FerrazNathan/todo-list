import { ITask } from '../../interfaces/Tasks'
  
export interface ListProps {
  taskList: ITask[]
  handleEditTask: (task: ITask) => void
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>> // Dispachando um evento, que vai ser um setState, que vai ser um array de ITask
}