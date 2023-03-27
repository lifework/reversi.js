import { FC } from 'react'

export type DiskColor = 'black' | 'white'

export type DiskProps = {
  color: DiskColor
  size?: string
  padding?: string
}

export const DiskContainer: FC<DiskProps> = ({ color, size, padding }) => {
  return (
    <div style={{ padding: padding || '2px' }}>
      <svg
        width={size || '100%'}
        height={size || '100%'}
        viewBox="0 0 100 100"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="50"
          cy="50"
          r="48"
          fill={color}
          stroke="black"
          strokeWidth="2"
        />
      </svg>
    </div>
  )
}
