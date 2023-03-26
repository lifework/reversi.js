import { GridEntity } from './Grid'
import { PointEntity } from './Point'
import { BoardType, DiskType, GridType } from 'types'

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
        const n = x + x * y

        const point = new PointEntity({ x, y })
        const disk = n % 3 == 0 ? 'black' : n % 3 == 1 ? 'white' : undefined
        this.grids[n] = new GridEntity({ point, disk: disk })
      }
    }
  }
}
