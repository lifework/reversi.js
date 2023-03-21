import { render, screen, fireEvent, RenderResult } from '@testing-library/react'
import Disk from '.'

describe('Disk', () => {
  let renderResult: RenderResult
  let handleClick: jest.Mock

  beforeEach(() => {
    handleClick = jest.fn()
    renderResult = render(
      <Disk variant="black" onClick={handleClick}>
        Button
      </Disk>,
    )
  })

  afterEach(() => {
    renderResult.unmount()
  })

  it('ボタンを押した時にonClickが呼ばれる', () => {
    fireEvent.click(screen.getByText('Button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
