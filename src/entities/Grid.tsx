import { PointEntity } from './Point'
import { DiskType, GridType } from 'types'

export class GridEntity {
  readonly point: PointEntity
  readonly disk?: DiskType

  constructor({ point, disk: disk }: GridType) {
    this.point = point
    this.disk = disk
  }
}
