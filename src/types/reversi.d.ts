export type GridStateType = 'black' | 'white' | null

export type PointType = {
  x: number
  y: number
}

export type GridType = {
  point: PointType
  state: GridStateType
}

export type BoardType = {
  columns: number
  rows: number
  grids: GridType[]
}
