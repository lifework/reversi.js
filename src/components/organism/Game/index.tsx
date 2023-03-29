import { FC, ComponentProps } from 'react'
import styled from 'styled-components'
import { BoardContainer, BoardColor } from 'components/organism/Board'
import { BoardEntity } from 'entities/Board'

export type GameProps = {
  color?: BoardColor
  columns: number
  rows: number
  gridSize?: number
}

const StyledGame = styled.div<GameProps>`
  border-color: black;
  border-width: 1px;
  border-style: solid;
  padding: 2px;
`

export const GameContainer: FC<GameProps> = ({
  color,
  columns,
  rows,
  gridSize,
}) => {
  const boardRows = rows || 8
  const boardColumns = columns || 8

  return (
    <StyledGame color={color} columns={columns} rows={rows}>
      <BoardContainer
        color={color || 'green'}
        columns={boardColumns}
        rows={boardRows}
        gridSize={gridSize || 80}
      />
    </StyledGame>
  )
}
