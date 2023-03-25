import { FC, ComponentProps } from 'react'
import styled from 'styled-components'
import { Board } from 'components/organism/Board'

export type GameProps = {
  columns: number
  rows: number
}

const StyledGame = styled.div<GameProps>`
  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns}, 1fr);
  width: 400px;
  height: 400px;
  border-color: black;
  border-width: 1px;
  background-color: ${({ color }) => color};
`

export const Game: FC<GameProps> = ({ color, columns, rows }) => {
  return (
    <StyledGame color={color} columns={columns} rows={rows}>
      <Board color={color} columns={columns} rows={rows} />
    </StyledGame>
  )
}
