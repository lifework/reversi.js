import { GridEntity } from './Grid'
import { PointEntity } from './Point'
import { BoardType, DiskType, GridType } from 'types'

export class BoardEntity {
  readonly columns: number
  readonly rows: number
  grids: GridEntity[]

  constructor({ columns, rows, grids }: BoardType) {
    this.columns = columns
    this.rows = rows
    if (grids) {
      this.grids = grids
    } else {
      this.grids = new Array<GridEntity>(columns * rows)
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < columns; x++) {
          const n = x + rows * y
          console.log(`BoardEntity.constructor - x=${x}, y=${y}, n=${n}`)

          const point = new PointEntity({ x, y })

          let disk: DiskType | undefined
          if (x == columns / 2 - 1) {
            if (y == rows / 2 - 1) {
              disk = 'white'
            }
            if (y == rows / 2) {
              disk = 'black'
            }
          }
          if (x == columns / 2) {
            if (y == rows / 2 - 1) {
              disk = 'black'
            }
            if (y == rows / 2) {
              disk = 'white'
            }
          }
          this.grids[n] = new GridEntity({ point, disk })
        }
      }
    }
  }

  put(point: PointEntity): boolean {
    const n = point.x + this.rows * point.y
    if (this.grids[n]) {
      return false
    }

    this.grids[n].disk = 'white'
    return true
  }
}
