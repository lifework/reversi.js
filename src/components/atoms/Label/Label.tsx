import { FC } from 'react'
import styled from 'styled-components'
import { COLORS, FONT_SIZE } from 'assets/styles'

type Props = {
  text: string
  color?: string
}

export const Label: FC<Props> = ({ text, color = COLORS.BLACK_LIGHT }) => {
  return <Span color={color}>{text}</Span>
}

const Span = styled.span<{ color: string }>`
  border-radius: 1.4px;
  border: 1px solid ${({ color }) => color};
  padding: 2px;
  color: ${({ color }) => color};
  font-size: ${FONT_SIZE.FS_8};
  white-space: nowrap;
`
