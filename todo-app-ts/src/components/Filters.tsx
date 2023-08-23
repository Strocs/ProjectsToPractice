import { TODO_FILTERS } from '../constants'
import { type FilterValue as FiltersType } from '../types'
import { createButtons } from '../utils/createButtons'
import { useTodos } from '../store/useTodos'

const FILTER_BUTTONS = createButtons(TODO_FILTERS)

export const Filters: React.FC = () => {
  const filterSelected = useTodos(state => state.filterSelected)
  const handleFilterChange = useTodos(state => state.handleFilterChange)

  const handleClick =
    (filter: FiltersType) =>
      (event: React.MouseEvent<HTMLAnchorElement>): void => {
        event.preventDefault()
        handleFilterChange(filter)
      }

  return (
    <ul className='filters'>
      {Object.entries(FILTER_BUTTONS).map(([key, { literal, href }]) => (
        <li key={key}>
          <a
            href={href}
            className={`${filterSelected === key ? 'selected' : ''}`}
            onClick={handleClick(key as FiltersType)}>
            {literal}
          </a>
        </li>
      ))}
    </ul>
  )
}
