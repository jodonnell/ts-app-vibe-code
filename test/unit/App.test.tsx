import { render } from '@testing-library/react'
import App from '../../src/App'

describe('App shell', () => {
  it('shows the placeholder copy', () => {
    const { getByText } = render(<App />)
    expect(getByText(/replace this section with your own/i)).toBeInTheDocument()
  })
})
