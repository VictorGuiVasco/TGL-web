import styled from 'styled-components'

export const Card = styled.div`
  height: 5.875rem;
  position: relative;
  padding-left: 1rem;
  margin-bottom: 1.875rem;

  display: flex;
  flex-direction: column;

  justify-content: space-evenly;

  span {
    font: 400 1.0625rem sans-serif;
    color: #868686;
  }
`

export const Bar = styled.div`
  height: 5.875rem;
  width: 0.375rem;
  border-radius: 100px;
  position: absolute;
  left: 0;
`

export const Text = styled.div`
  display: flex;
  font: italic 700 1.25rem sans-serif;
  color: #868686;
  align-items: center;

  p {
    font: 400 1rem sans-serif;
    margin-left: 0.875rem;
  }
`
