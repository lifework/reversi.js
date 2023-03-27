import { FC, ComponentProps } from 'react'
import styled from 'styled-components'
import { Grid } from 'components/molecules/Grid'
import { BoardEntity } from 'entities/Board'

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
  let gridComponents: Array<JSX.Element> = []
  const grids = state.grids
  for (let i = 0; i < columns * rows; i++) {
    gridComponents = gridComponents.concat(
      <Grid color={color} diskColor={!!grids[i] && grids[i].disk} />,
    )
  }

  return (
    <StyledBoard
      state={state}
      color={color}
      columns={columns}
      rows={rows}
      boardSize={boardSize}
    >
      {gridComponents}
    </StyledBoard>
  )
}
