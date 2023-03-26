import { FC, ComponentProps } from 'react'
import styled from 'styled-components'
import { Disk } from 'components/atoms/Disk'

export type GridColor = 'green' | 'blue' | 'gray'
export type DiskColor = 'black' | 'white'

export type GridProps = {
  color?: GridColor
  disk?: DiskColor
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

export const Grid: FC<GridProps> = ({ color, disk: disk }) => {
  return (
    <StyledGrid color={color || 'green'}>
      {!!disk && <Disk color={disk} />}
    </StyledGrid>
  )
}
