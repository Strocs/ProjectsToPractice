import { useRef } from 'react'
import { useTodos } from '../store/useTodos'

export const CreateTodo: React.FC = () => {
  const handleCreateTodo = useTodos(state => state.handleCreateTodo)

  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    if (inputRef.current !== null && inputRef.current.value !== '') {
      handleCreateTodo({ title: inputRef.current.value })
      inputRef.current.value = ''
    }
  }

  return (
    <form action='onSubmit' onSubmit={handleSubmit}>
      <input
        className='new-todo'
        type='text'
        ref={inputRef}
        placeholder='What needs to be done?'
        autoFocus
      />
    </form>
  )
}
