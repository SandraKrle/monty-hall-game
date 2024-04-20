import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Header from '../app/header'
 
test('Page', () => {
  render(<Header />)
  expect(screen.getByRole('heading', { level: 1, name: 'Play the Monty Hall game' })).toBeDefined()
})