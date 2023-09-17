import styled from "styled-components";

export const ContainerGeneral = styled.div`

& .hide {
    display: none !important;
  }
`

export const ContainerBackground = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: #000;
  opacity: 0.3;
`

export const ContainerModal = styled.div`
  position: absolute;
  top: 20%;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 500px;
  height: 450px;
  z-index: 1;
  background: #FFF;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  border-radius: 0.5rem;
  
  & h2 {
    text-transform: capitalize;
    margin-bottom: 1rem;
  }

  & form {
    width: 400px;
  }
`

export const ButtonClose = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  position: absolute;
  top: 1rem;
  right: 1rem;

  & p {
    font-size: 0.75rem;
  }
`