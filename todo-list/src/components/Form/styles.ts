import styled from "styled-components";

export const ContainerGeneral = styled.footer`
 
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 0 auto;  

  & input {
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
  }

  & .submit {
    background: #61dafb;
    border: 1px solid #61dafb;
    color: #000;
    transition: 0.5s;
    cursor: pointer;
  }

  & .submit:hover {
    background: #fff;
    border-color: #282c34;
  }
`

export const ContentInputLabel = styled.div`
  gap: 0.5rem;
  display: flex;
  flex-direction: column;
  text-align: left;

  & input {
    margin-bottom: 1.5rem;
    border: 1px solid #282c34;
    cursor: pointer;
    outline: 0;
  }

  & label {
    font-weight: 700;
  }
`