import { useEffect, useRef, useState } from 'react'
import { useTodos } from '../store/useTodos'
import { type Todo as TodoType } from '../types'

export const Todo: React.FC<TodoType> = ({ id, title, completed }) => {
  const [editedTitle, setEditedTitle] = useState(title)
  const [isEditing, setIsEditing] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleToggle = useTodos(state => state.handleToggle)
  const handleRemove = useTodos(state => state.handleRemove)
  const handleEditTodo = useTodos(state => state.handleEditTodo)

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      if (editedTitle === '') handleRemove({ id })
      if (editedTitle !== title) {
        handleEditTodo({ id, title: editedTitle })
        setIsEditing(false)
      }
    }
    if (event.key === 'Escape') {
      setEditedTitle(title)
      setIsEditing(false)
    }
  }

  useEffect(() => {
    inputRef.current?.focus()
  }, [isEditing])

  return (
    <>
      <li
        className={`${completed ? 'completed' : ''} ${isEditing ? 'editing' : ''}`}
        onDoubleClick={() => {
          setIsEditing(true)
        }}>
        <div className='view'>
          <input
            className='toggle'
            type='checkbox'
            checked={completed}
            onChange={() => {
              handleToggle({ id })
            }}
          />
          <label>{title}</label>
          <button
            className='destroy'
            onClick={() => {
              handleRemove({ id })
            }}
          />
        </div>

        <input
          className='edit'
          value={editedTitle}
          onChange={e => {
            setEditedTitle(e.target.value)
          }}
          onBlur={() => {
            setIsEditing(false)
          }}
          onKeyDown={handleKeyDown}
          ref={inputRef}
        />
      </li>
    </>
  )
}
