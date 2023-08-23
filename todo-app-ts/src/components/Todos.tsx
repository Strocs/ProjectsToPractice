import { useTodos } from '../store/useTodos'
import { Todo } from './Todo'

export const Todos: React.FC = () => {
  const filteredTodos = useTodos(state => state.filteredTodos)
  console.log(filteredTodos)
  return (
    <ul className='todo-list'>
      {filteredTodos.map(todo => (
        <Todo key={todo.id} {...todo} />
      ))}
    </ul>
  )
}
