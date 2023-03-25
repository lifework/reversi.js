import { FC, ComponentProps } from 'react'
import styled from 'styled-components'
import { Disk } from 'components/atoms/Disk'

export type GridColor = 'green'
export type DiskColor = 'black' | 'white'

export type GridProps = {
  color?: GridColor
  diskColor?: DiskColor
}

const StyledGrid = styled.div<{ color?: string }>`
  width: 100%;
  height: 100%;
  max-width: 100px;
  max-height: 100px;
  min-width: 10px;
  min-height: 10px;
  border-color: black;
  border-width: 1px;
  background-color: ${({ color }) => color};
`

export const Grid: FC<GridProps> = ({ color, diskColor }) => {
  return (
    <StyledGrid color={color}>
      {!!diskColor && <Disk color={diskColor} />}
    </StyledGrid>
  )
}
