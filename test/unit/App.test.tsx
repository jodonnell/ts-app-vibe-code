import { render, screen } from '@testing-library/react'
import App from '../../src/App'

describe('App shell', () => {
  it('shows the placeholder copy', () => {
    render(<App />)
    expect(screen.getByText(/replace this section with your own/i)).toBeInTheDocument()
  })
})
