import { GridEntity } from './Grid'
import { PlayerEntity } from './Player'
import { PointEntity } from './Point'
import { BoardType, DirectionType, DiskType, GridType } from 'types'

export class BoardEntity {
  readonly columns: number
  readonly rows: number
  grids: GridEntity[]
  players: PlayerEntity[]
  currentPlayerIndex: number

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

    this.currentPlayerIndex = currentPlayer || 0
  }

  clone(): BoardEntity {
    return new BoardEntity({
      columns: this.columns,
      rows: this.rows,
      grids: this.grids,
      players: this.players,
      currentPlayer: this.currentPlayerIndex,
    })
  }

  move(point: PointEntity): boolean {
    const n = point.x + this.rows * point.y

    // すでにDISKがあったら何もしない
    if (this.grids[n].disk) {
      console.log(`BoardEntity.move - SKIP`)
      return false
    }

    // 手番のプレイヤーで置けない場所だったら何もしない
    const currentPlayer = this.currentPlayer()
    if (!this.IsMovable(point, currentPlayer)) {
      console.log(`BoardEntity.move: Not Movable`)
      return false
    }

    this.grids[n].disk = this.currentPlayer().color
    this.setNextPlayer()
    console.log(`BoardEntity.move - currentPlayer=${this.currentPlayerIndex}`)

    return true
  }

  IsMovable(basePoint: PointEntity, player: PlayerEntity): boolean {
    // すでにDISKが存在する場合は置けない。
    if (this.disk(basePoint)) {
      console.log(`BoardEntity: Not Movable - Already Exists`)
      return false
    }

    for (const direction of this.allDirections()) {
      console.log(
        `BoardEntity.IsMovable - direction = [${direction.x}, ${direction.y}]`,
      )
      if (this.IsMovableDirection(basePoint, player, direction)) {
        return true
      }
    }
    return false
  }

  IsMovableDirection(
    basePoint: PointEntity,
    player: PlayerEntity,
    direction: DirectionType,
  ): boolean {
    let point = basePoint.offset(direction)
    // 隣が相手のDISKでなかったら置けない
    if (this.disk(point) !== player.opponentDisk()) {
      console.log(` (${point.x},${point.y}) Not Movable - Not OpponentDisk`)
      return false
    }

    for (
      point = point.offset(direction);
      this.disk(point) !== player.opponentDisk();
      point = point.offset(direction)
    ) {
      // 自分のDISKに到達せずに外に出たときは置けない
      if (!this.isWithinBoard(point)) {
        return false
      }

      // 自分のDISKに到達して、相手を挟めるときは置ける
      if (this.disk(point) === player.color) {
        return true
      }
    }

    return false
  }

  disk(point: PointEntity): DiskType | undefined {
    return this.grid(point)?.disk
  }

  grid(point: PointEntity): GridEntity {
    return this.grids[point.x + this.rows * point.y]
  }

  setNextPlayer() {
    this.currentPlayerIndex = this.currentPlayerIndex === 0 ? 1 : 0
  }

  currentPlayer(): PlayerEntity {
    return this.players[this.currentPlayerIndex]
  }

  isWithinBoard(point: PointEntity): boolean {
    return (
      point.x >= 0 &&
      point.x < this.columns &&
      point.y >= 0 &&
      point.y < this.rows
    )
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

  allDirections(): DirectionType[] {
    return [0, 1, -1]
      .map((x) => {
        return [0, 1, -1].map((y) => {
          return { x: x, y: y } as DirectionType
        })
      })
      .flat()
      .filter((d) => !(d.x === d.y && d.x === 0)) // 0,0 を除外したいけど、Type Error になるのでこの書き方
  }
}
