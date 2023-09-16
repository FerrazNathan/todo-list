import styled from "styled-components";

export const ContainerGeneral = styled.div`
  max-width: 500px;
  margin: 1rem auto;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;

  & :last-child {
    border-bottom: none;
  }
`

export const ContainerTitleDifficullty = styled.div`
  text-align: left;

  & h2 {
    text-transform: capitalize;
  }
`

export const ContainerIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 1rem 0;

  & i {
    cursor: pointer;
    font-size: 1.2em;
    background: #282C34;
    color: #fff;
    padding: 0.4rem;
    transition: 0.5s;
    border-radius: 0.5rem;
  }

  & i:hover {
    color: #61dafb;
  }
`

export const ContainerDefault = styled.div`
  max-width: 500px;
  margin: 1rem auto;
  padding: 1rem 0;
`