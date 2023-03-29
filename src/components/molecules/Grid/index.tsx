import { FC, ComponentProps } from 'react'
import styled from 'styled-components'
import { DiskContainer } from 'components/atoms/Disk'
import { PointEntity } from 'entities/Point'

export type GridColor = 'green' | 'blue' | 'gray'
export type DiskColor = 'black' | 'white'

export type GridProps = {
  point: PointEntity
  onClickHandler: (point: PointEntity) => void
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

export const GridContainer: FC<GridProps> = ({
  point,
  color,
  diskColor,
  onClickHandler,
}) => {
  console.log(`GridContainer: diskColor=${diskColor}, (${point.x}, ${point.y})`)
  return (
    <StyledGrid
      color={color || 'green'}
      role="button"
      onClick={() => onClickHandler(point)}
      data-point={`(${point.x}, ${point.y})`}
    >
      {!!diskColor && <DiskContainer color={diskColor} />}
    </StyledGrid>
  )
}
