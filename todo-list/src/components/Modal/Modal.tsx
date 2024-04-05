import { ModalProps } from './types'

import * as S from './styles'

const Modal = ({children, closeModal}: ModalProps) => {

  return (
    <S.ContainerGeneral>
      <S.ContainerBackground onClick={closeModal}></S.ContainerBackground>
      <S.ContainerModal>
        <S.ButtonClose onClick={closeModal}>Fechar X</S.ButtonClose>
        <h2>Editar Tarefa</h2>
        {children}
      </S.ContainerModal>
    </S.ContainerGeneral>
  )
}

export default Modal