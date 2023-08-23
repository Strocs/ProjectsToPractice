import { type Filters } from '../types'

type Buttons = Record<string, { literal: string, href: string }>

export const createButtons = (filters: Filters): Buttons => {
  const values = Object.values(filters)
  let buttons: Buttons = {}
  for (const button of values) {
    buttons = {
      ...buttons,
      [button]: {
        literal: button[0].toUpperCase() + button.slice(1),
        href: `/?filter=${button}`
      }
    }
  }
  return buttons
}
