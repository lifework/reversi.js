import { PointType } from 'types'

export class PointEntity {
  readonly x: number
  readonly y: number

  constructor({ x, y }: PointType) {
    this.x = x
    this.y = y
  }
}
