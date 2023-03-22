import { Circle, CircleOutlined } from '@mui/icons-material'
import { FC, ComponentProps } from 'react'

export type DiskColor = 'black' | 'white'
export type DiskSize = '16px' | '24px'

export type DiskProps = {
  color: DiskColor
  size: ComponentProps<typeof Circle>['fontSize']
}

export const Disk: FC<DiskProps> = ({ color, size }) => {
  return color === 'black' ? (
    <Circle fontSize={size} color="inherit" />
  ) : (
    <CircleOutlined fontSize={size} color="inherit" />
  )
}
