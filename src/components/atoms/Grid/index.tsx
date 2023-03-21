import styled from 'styled-components'

export type GridProps = {
  size: string
}

const Grid = styled.div`
  width: 100px;
  height: 100px;
  border-color: black;
  border-width: 1px;
  background-color: 'green;
`
// const Grid = styled.div<GridProps>`
//   width: ${(props) => props.size || '100px'};
//   height: ${(props) => props.size || '100px'};
//   border-color: black;
//   border-width: 1px;
//   background-color: 'green;
// `

export default Grid
