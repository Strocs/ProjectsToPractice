import { ActiveCount } from './ActiveCount'
import { ClearCompleted } from './ClearCompleted'
import { Filters } from './Filters'

export const Footer: React.FC = () => {
  return (
    <footer className='footer'>
      <ActiveCount />
      <Filters />
      <ClearCompleted />
    </footer>
  )
}
