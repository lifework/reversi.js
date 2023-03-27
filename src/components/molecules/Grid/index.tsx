import { FC, ComponentProps } from 'react'
import styled from 'styled-components'
import { DiskContainer } from 'components/atoms/Disk'

export type GridColor = 'green' | 'blue' | 'gray'
export type DiskColor = 'black' | 'white'

export type GridProps = {
  color?: GridColor
  diskColor?: DiskColor
}

const StyledGrid = styled.div<{ color?: string }>`
  width: 100%;
  height: 100%;
  border-color: black;
  border-width: 1px;
  border-style: solid;
  padding: 1px;
  background-color: ${({ color }) => color};
`

export const GridContainer: FC<GridProps> = ({ color, diskColor }) => {
  return (
    <StyledGrid color={color || 'green'}>
      {!!diskColor && <DiskContainer color={diskColor} />}
    </StyledGrid>
  )
}
