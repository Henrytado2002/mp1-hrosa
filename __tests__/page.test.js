import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from '@/app/page'
 
describe('Home', () => {
  it('renders a paragraph', () => {
    render(<Home />)
 
    const p = screen.getByText("teste")
 
    expect(p).toBeInTheDocument()
  })
})