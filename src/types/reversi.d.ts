export type DiskType = 'black' | 'white'

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
  grids?: GridType[]
  players?: PlayerEntity[]
  currentPlayer?: number
}
