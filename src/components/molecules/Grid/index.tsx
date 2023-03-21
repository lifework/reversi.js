import styled from 'styled-components'
import { toPropValue } from 'utils/styles'

export type GridProps = {
  backgroundColor: string
  size: string
}

const Grid = styled.div<GridProps>`
  width: 100px;
  height: 100px;
  border-color: black;
  border-width: 1px;
  background-color: green;
`

export default Grid
