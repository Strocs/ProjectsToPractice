import { useTodos } from '../store/useTodos'

export const ActiveCount: React.FC = () => {
  const activeCount = useTodos(state => state.todos.filter(todo => !todo.completed).length)
  return (
    <span className='todo-count'>
      <strong>{activeCount}</strong> Todos Actives
    </span>
  )
}
