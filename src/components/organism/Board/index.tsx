import styled from 'styled-components'

export type BoardProps = {
  backgroundColor: string
  size: string
}

const Board = styled.div<BoardProps>`
  width: 100px;
  height: 100px;
  border-color: black;
  border-width: 1px;
  background-color: green;
`

export default Board
