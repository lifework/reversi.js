import { DiskType } from 'types'

export class PlayerEntity {
  readonly color: DiskType

  constructor(color: DiskType) {
    this.color = color
  }

  opponentDisk(): DiskType {
    return this.color === 'white' ? 'black' : 'white'
  }
}
