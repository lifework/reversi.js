import { FC, ComponentProps } from 'react'
import styled from 'styled-components'
import { Board, BoardColor } from 'components/organism/Board'

export type GameProps = {
  color?: BoardColor
  columns?: number
  rows?: number
  boardSize?: number
}

const StyledGame = styled.div<GameProps>`
  border-color: black;
  border-width: 1px;
  border-style: solid;
  padding: 2px;
`

export const Game: FC<GameProps> = ({ color, columns, rows, boardSize }) => {
  return (
    <StyledGame>
      <Board
        color={color || 'green'}
        columns={columns || 8}
        rows={rows || 8}
        boardSize={boardSize || 500}
      />
    </StyledGame>
  )
}
