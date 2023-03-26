import { GridEntity } from './Grid'
import { PointEntity } from './Point'
import { BoardType, GridStateType, GridType } from 'types'

export class BoardEntity {
  readonly columns: number
  readonly rows: number
  grids: GridEntity[]

  constructor({ columns, rows }: BoardType) {
    this.columns = columns
    this.rows = rows
    this.grids = new Array(columns * rows)

    for (let x = 0; x < columns; x++) {
      for (let y = 0; y < rows; y++) {
        const point = new PointEntity({ x, y })
        const n = x + x * y
        const state = 'black'
        this.grids[n] = new GridEntity({ point, 'black' })
      }
    }
  }
}
