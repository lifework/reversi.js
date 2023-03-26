import { PointEntity } from './Point'
import { GridStateType, GridType } from 'types'

export class GridEntity {
  readonly point: PointEntity
  readonly state: GridStateType

  constructor({ point, state }: GridType) {
    this.point = point
    this.state = state
  }
}
