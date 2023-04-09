import styled, { css } from 'styled-components'

export const MarginPaddingWrapper = styled.div<{
  marginTop?: number
  marginRight?: number
  marginBottom?: number
  marginLeft?: number
  paddingTop?: number
  paddingRight?: number
  paddingBottom?: number
  paddingLeft?: number
  marginX?: number
  marginY?: number
  paddingX?: number
  paddingY?: number
}>`
  margin-top: ${({ marginTop }) => marginTop && `${marginTop}px`};
  margin-right: ${({ marginRight }) => marginRight && `${marginRight}px`};
  margin-bottom: ${({ marginBottom }) => marginBottom && `${marginBottom}px`};
  margin-left: ${({ marginLeft }) => marginLeft && `${marginLeft}px`};
  padding-top: ${({ paddingTop }) => paddingTop && `${paddingTop}px`};
  padding-right: ${({ paddingRight }) => paddingRight && `${paddingRight}px`};
  padding-bottom: ${({ paddingBottom }) =>
    paddingBottom && `${paddingBottom}px`};
  padding-left: ${({ paddingLeft }) => paddingLeft && `${paddingLeft}px`};
  ${({ marginX }) =>
    marginX &&
    css`
      margin-left: ${marginX}px;
      margin-right: ${marginX}px;
    `};
  ${({ marginY }) =>
    marginY &&
    css`
      margin-top: ${marginY}px;
      margin-bottom: ${marginY}px;
    `};
  ${({ paddingX }) =>
    paddingX &&
    css`
      padding-right: ${paddingX}px;
      padding-left: ${paddingX}px;
    `};
  ${({ paddingY }) =>
    paddingY &&
    css`
      padding-top: ${paddingY}px;
      padding-bottom: ${paddingY}px;
    `};
`
