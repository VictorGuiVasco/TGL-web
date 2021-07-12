import styled from 'styled-components'

export const Main = styled.div`
  margin-top: 4.6875rem;
  padding: 0 12.5rem 0 8.125rem;
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 800px) {
    padding: 0 5rem;
  }
`

export const UserDataText = styled.h2`
  text-align: left;
  font: italic 700 1rem sans-serif;
  color: #707070;
  margin: 0 0 2.1875rem;
`
