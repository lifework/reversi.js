import { useCallback, useReducer } from 'react'
import { PointEntity } from 'entities/Point'

type ReturnType = {
  state: UserInviteFormStateType
  onGridClicked: (value: PointEntity) => void
}
