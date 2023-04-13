import { DirectionType, PointType } from 'types'

export class PointEntity {
  readonly x: number
  readonly y: number

  constructor({ x, y }: PointType) {
    this.x = x
    this.y = y
  }

  offset(direction: DirectionType): PointEntity {
    return new PointEntity({ x: this.x + direction.x, y: this.y + direction.y })
  }
}
