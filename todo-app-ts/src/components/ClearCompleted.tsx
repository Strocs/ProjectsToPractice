import { useTodos } from '../store/useTodos'

export const ClearCompleted: React.FC = () => {
  const handleClearCompleted = useTodos(state => state.handleClearCompleted)
  return (
    <button className='clear-completed' onClick={handleClearCompleted}>
      Clear Completed
    </button>
  )
}
