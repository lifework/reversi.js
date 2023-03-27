import { FC, ComponentProps, useReducer, Reducer } from 'react'
import styled from 'styled-components'
import { GridContainer } from 'components/molecules/Grid'
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

export const BoardContainer: FC<BoardProps> = ({
  columns,
  rows,
  gridSize,
  color,
}) => {
  const initialState = new BoardEntity({ columns, rows })
  const [state, dispatch] = useReducer(boardReducer, initialState)

  let gridComponents: Array<JSX.Element> = []
  const grids = state.grids
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < columns; x++) {
      const n = x + rows * y
      const grid = grids[n]
      console.log(`GridContainer[${n}]: (${x}, ${y}) = ${grid.disk}`)
      gridComponents = gridComponents.concat(
        <GridContainer
          key={n}
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

  return (
    <StyledBoard columns={columns} rows={rows} gridSize={gridSize}>
      {gridComponents}
    </StyledBoard>
  )
}
