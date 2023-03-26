import { Girl } from '@mui/icons-material'
import { FC, ComponentProps } from 'react'
import styled from 'styled-components'
import { Grid, GridColor } from 'components/molecules/Grid'
import { BoardEntity } from 'entities/Board'
import { GridEntity } from 'entities/Grid'

export type BoardColor = 'green'

export type BoardProps = {
  state: BoardEntity
  columns: number
  rows: number
  boardSize: number
  color?: BoardColor
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

export const Board: FC<BoardProps> = ({
  state,
  columns,
  rows,
  boardSize,
  color,
}) => {
  const gridComponents = []
  const grids = state.grids
  for (let i = 0; i < columns * rows; i++) {
    gridComponents.push(
      <Grid color={color} disk={!!grids[i] && grids[i].disk} />,
    )
  }

  return (
    <StyledBoard
      color={color}
      columns={columns}
      rows={rows}
      boardSize={boardSize}
    >
      {gridComponents}
    </StyledBoard>
  )
}
