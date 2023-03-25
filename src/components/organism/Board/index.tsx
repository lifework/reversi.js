import { FC, ComponentProps } from 'react'
import styled from 'styled-components'
import { Grid, GridColor } from 'components/molecules/Grid'

export type BoardProps = {
  color?: GridColor
  columns: number
  rows: number
}

const StyledBoard = styled.div<BoardProps>`
  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns}, 1fr);
  width: 400px;
  height: 400px;
  border-color: black;
  border-width: 1px;
  background-color: ${({ color }) => color};
`

export const Board: FC<BoardProps> = ({ color, columns, rows }) => {
  const grids = []
  for (let i = 0; i < columns * rows; i++) {
    grids.push(<Grid color={color} />)
  }
  return (
    <StyledBoard color={color} columns={columns} rows={rows}>
      {grids}
    </StyledBoard>
  )
}
