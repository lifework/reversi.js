/* eslint-disable prettier/prettier */
import styled from 'styled-components'
import { Responsive } from 'types'
import { toPropValue, FontSize, Space } from 'utils/styles'

// ボタンのバリアント
export type DiskVariant = 'black' | 'white'

export type DiskProps = {
  variant?: DiskVariant
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
    color: 'white',
    fontSize: 'extraLarge',
  },
}

/**
 * ボタン
 * バリアント、色、タイポグラフィ、レイアウト、スペース関連のPropsを追加
 */
const Disk = styled.span<DiskProps>`
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

Disk.defaultProps = {
  variant: 'black',
  color: 'black',
  fontSize: 'extraLarge',
}

export default Disk
