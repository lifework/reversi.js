/* eslint-disable prettier/prettier */
import styled from 'styled-components'
import { Responsive } from 'types'
import { toPropValue, FontSize, Space } from 'utils/styles'

// ボタンのバリアント
export type StoneVariant = 'black' | 'white'

export type StoneProps = {
  variant?: StoneVariant
  fontSize?: Responsive<FontSize>
  margin?: Responsive<Space>
  padding?: Responsive<Space>
}

const variants = {
  black: {
    color: 'black',
    fontSize: 'extraLarge',
  },
  white: {
    color: 'black',
    fontSize: 'large',
  },
}

/**
 * ボタン
 * バリアント、色、タイポグラフィ、レイアウト、スペース関連のPropsを追加
 */
const Stone = styled.span<StoneProps>`
  ${({ variant, color, fontSize, theme }) => {
    // バリアントのスタイルの適用
    if (variant && variants[variant]) {
      const styles = []
      !color && styles.push(toPropValue('color', variants[variant].color, theme))

      !fontSize && styles.push(toPropValue('font-size', variants[variant].fontSize, theme))
      return styles.join('\n')
    }
  }}
  ${(props) => toPropValue('color', props.color, props.theme)}
  ${(props) => toPropValue('font-size', props.fontSize, props.theme)}
  ${(props) => toPropValue('margin', props.margin, props.theme)}
  ${(props) => toPropValue('padding', props.padding, props.theme)}
`

Stone.defaultProps = {
  variant: 'black',
  color: 'black',
  fontSize: 'extraLarge',
}

export default Stone
