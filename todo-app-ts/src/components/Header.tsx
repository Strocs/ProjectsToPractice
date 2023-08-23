import { CreateTodo } from './CreateTodo'

export const Header: React.FC = () => {
  return (
    <header className='header'>
      <h1>TodoApp</h1>
      <CreateTodo />
    </header>
  )
}
