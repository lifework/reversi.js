import { GridEntity } from 'entities/Grid'

export type DiskType = 'black' | 'white'

export type DirectionType =
  | { x: 0; y: 1 } // 上
  | { x: 1; y: 1 } // 右上
  | { x: 1; y: 0 } // 右
  | { x: 1; y: -1 } // 右下
  | { x: 0; y: -1 } // 下
  | { x: -1; y: -1 } // 左下
  | { x: -1; y: 0 } // 左
  | { x: -1; y: 1 } // 左上

//export type DirectionType = typeof AllDirections

export const AllDirections: DirectionType[] = [0, 1, -1]
  .map((x) => {
    return [0, 1, -1].map((y) => {
      return { x: x, y: y }
    })
  })
  .flat()
  .filter((d) => !(d.x == 0 && d.y == 0))

export type PointType = {
  x: number
  y: number
}

export type GridType = {
  point: PointType
  disk?: DiskType
}

export type BoardType = {
  columns: number
  rows: number
  grids?: GridEntity[]
  players?: PlayerEntity[]
  currentPlayer?: number
}
