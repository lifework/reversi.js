import { GridEntity } from './Grid'
import { PlayerEntity } from './Player'
import { PointEntity } from './Point'
import { BoardType, DiskType, GridType } from 'types'

export class BoardEntity {
  readonly columns: number
  readonly rows: number
  grids: GridEntity[]
  players: PlayerEntity[]
  currentPlayer: number

  constructor({ columns, rows, grids, players, currentPlayer }: BoardType) {
    if (players) {
      this.players = players
    } else {
      this.players = new Array<PlayerEntity>(2)
      this.players[0] = new PlayerEntity('black')
      this.players[1] = new PlayerEntity('white')
    }

    this.columns = columns
    this.rows = rows
    this.grids = grids || this.initialGrids(columns, rows)

    this.currentPlayer = currentPlayer || 0
  }

  clone(): BoardEntity {
    return new BoardEntity({
      columns: this.columns,
      rows: this.rows,
      grids: this.grids,
      players: this.players,
      currentPlayer: this.currentPlayer,
    })
  }

  put(point: PointEntity): boolean {
    const n = point.x + this.rows * point.y
    if (this.grids[n].disk) {
      console.log(`BoardEntity.put - SKIP`)
      return false
    }

    this.grids[n].disk = this.player().color

    this.setNextPlayer()
    console.log(`BoardEntity.put - currentPlayer=${this.currentPlayer}`)

    return true
  }

  setNextPlayer() {
    this.currentPlayer = this.currentPlayer === 0 ? 1 : 0
  }

  player(n?: number): PlayerEntity {
    return n ? this.players[n] : this.players[this.currentPlayer]
  }

  initialGrids(columns: number, rows: number): GridEntity[] {
    console.log(`BoardEntity.initialGrids - columns=${columns}, rows=${rows}`)

    const grids = new Array<GridEntity>(columns * rows)
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < columns; x++) {
        const n = x + rows * y
        //console.log(`BoardEntity.initialGrids - x=${x}, y=${y}, n=${n}`)

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
        grids[n] = new GridEntity({ point, disk })
      }
    }
    return grids
  }
}
