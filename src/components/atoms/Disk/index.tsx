import { Circle, CircleOutlined } from '@mui/icons-material'
import { FC, ComponentProps } from 'react'

export type DiskColor = 'black' | 'white'
export type DiskSize = '100%'

export type DiskProps = {
  color: DiskColor
  size: ComponentProps<typeof Circle>['fontSize']
}

export const Disk: FC<DiskProps> = ({ color, size }) => {
  return color === 'black' ? (
    <Circle width={size} height={size} color="inherit" />
  ) : (
    <CircleOutlined width={size} height={size} color="inherit" />
  )
}
