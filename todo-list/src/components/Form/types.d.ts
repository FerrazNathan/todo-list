import { ITask } from '../../interfaces/Tasks'

export interface FormProps {
  textButton: string
  taskList: ITask[]
  titleSection?: string
  closeModal?: () => void
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>> // Dispachando um evento, que vai ser um setState, que vai ser um array de ITask
}