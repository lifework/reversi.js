import { FC } from 'react'
import { BoardContainer, BoardProps } from 'components/organism/Board'

const BoardPage: FC = () => {
  return (
    <div style={{ width: '100px', height: '100px' }}>
      <BoardContainer color="green" columns={4} rows={4} gridSize={80} />
    </div>
  )
}

export default BoardPage
