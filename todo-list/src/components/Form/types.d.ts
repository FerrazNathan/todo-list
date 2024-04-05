import { ITask } from '../../interfaces/Tasks'

export interface FormProps {
  textButton: string
  taskList: ITask[]
  titleSection?: string
  closeModal?: () => void
  task?: ITask | null
  handleUpdate?(id: number, title: string, difficulty: number): void
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>> // Dispachando um evento, que vai ser um setState, que vai ser um array de ITask
}