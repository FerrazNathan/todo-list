import { ModalProps } from './types'

import * as S from './styles'

const Modal = ({children, closeModal}: ModalProps) => {

  return (
    <S.ContainerGeneral>
      <S.ContainerBackground onClick={closeModal}></S.ContainerBackground>
      <S.ContainerModal>
        <h2>Editar Tarefas</h2>
        {children}
      </S.ContainerModal>
    </S.ContainerGeneral>
  )
}

export default Modal