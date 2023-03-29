import { FC, ComponentProps, useReducer, Reducer, Dispatch } from 'react'
import styled from 'styled-components'
import { GridColor, GridContainer } from 'components/molecules/Grid'
import { BoardEntity } from 'entities/Board'
import { PointEntity } from 'entities/Point'
import { PointType } from 'types'

export type BoardColor = 'green'

export type BoardProps = {
  columns: number
  rows: number
  gridSize: number
  color?: BoardColor
}

export type BoardStyleProps = {
  columns: number
  rows: number
  gridSize: number
}

const StyledBoard = styled.div<BoardStyleProps>`
  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns}, 1fr);
  grid-template-rows: repeat(${({ rows }) => rows}, 1fr);
  width: ${({ gridSize, columns }) => gridSize * columns + 'px'};
  height: ${({ gridSize, rows }) => gridSize * rows + 'px'};
  border-color: black;
  border-width: 5px;
  border-style: solid;
  padding: 2px;
`

export type BoardActionType = {
  action: 'onClickGrid'
  point: PointEntity
}

const boardReducer: Reducer<BoardEntity, BoardActionType> = (
  state,
  action,
): BoardEntity => {
  switch (action.action) {
    case 'onClickGrid': {
      const point = action.point
      const n = point.x + state.rows * point.y

      const disk = 'white'
      console.log(
        `action - ${action.action}: Grid[${n}]: (${point.x}, ${point.y}) = ${disk}`,
      )
      state.grids[n].disk = disk
    }
  }
  return state
}

const createGridContainers = (
  board: BoardEntity,
  dispatch: Dispatch<BoardActionType>,
  color?: GridColor,
) => {
  const gridComponents: Array<JSX.Element> = []
  const grids = board.grids
  for (let y = 0; y < board.rows; y++) {
    for (let x = 0; x < board.columns; x++) {
      const n = x + board.rows * y
      const grid = grids[n]
      console.log(
        `BoardContainer - create GridContainer[${n}]: (${x}, ${y}) = ${grid.disk}`,
      )
      gridComponents.push(
        <GridContainer
          key={`${n}-${grid.disk || 'space'}`}
          point={grid.point}
          color={color}
          diskColor={grid.disk}
          onClickHandler={(point) =>
            dispatch({ action: 'onClickGrid', point: point })
          }
        />,
      )
    }
  }

  return gridComponents
}

export const BoardContainer: FC<BoardProps> = ({
  columns,
  rows,
  gridSize,
  color,
}) => {
  const initialState = new BoardEntity({ columns, rows })
  const [state, dispatch] = useReducer(boardReducer, initialState)

  return (
    <StyledBoard columns={columns} rows={rows} gridSize={gridSize}>
      {createGridContainers(state, dispatch, color)}
    </StyledBoard>
  )
}
