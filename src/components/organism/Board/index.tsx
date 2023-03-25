import { FC, ComponentProps } from 'react'
import styled from 'styled-components'
import { Grid, GridColor } from 'components/molecules/Grid'

export type BoardColor = 'green'

export type BoardProps = {
  color?: BoardColor
  columns: number
  rows: number
  boardSize: number
}

const StyledBoard = styled.div<BoardProps>`
  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns}, 1fr);
  width: ${({ boardSize }) => boardSize + 'px'};
  height: ${({ boardSize }) => boardSize + 'px'};
  border-color: black;
  border-width: 5px;
  border-style: solid;
  padding: 2px;
  background-color: ${({ color }) => color};
`

export const Board: FC<BoardProps> = ({ color, columns, rows, boardSize }) => {
  const grids = []
  for (let i = 0; i < columns * rows; i++) {
    grids.push(<Grid color={color} />)
  }

  return (
    <StyledBoard
      color={color}
      columns={columns}
      rows={rows}
      boardSize={boardSize}
    >
      {grids}
    </StyledBoard>
  )
}
