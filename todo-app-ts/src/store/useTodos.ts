import { create } from 'zustand'
import { type TodoTitle, type FilterValue, type Todo, type TodoId } from '../types'
import { TODO_FILTERS } from '../constants'

interface TodosState {
  todos: Todo[]
  filteredTodos: Todo[]
  filterSelected: FilterValue
  activeCount: number
  handleRemove: ({ id }: TodoId) => void
  handleToggle: ({ id }: TodoId) => void
  handleClearCompleted: () => void
  handleFilterChange: (filter: FilterValue) => void
  handleCreateTodo: ({ title }: TodoTitle) => void
  updateState: () => void
  handleEditTodo: ({ id, title }: Omit<Todo, 'completed'>) => void
}

const initialValue = [
  { id: '1', title: 'Todo 1', completed: false },
  { id: '2', title: 'Todo 2', completed: false },
  { id: '3', title: 'Todo 3', completed: false }
]

export const useTodos = create<TodosState>()((set, get) => ({
  todos: initialValue,
  filterSelected: TODO_FILTERS.ALL,
  filteredTodos: initialValue,
  activeCount: initialValue.filter(todo => !todo.completed).length,

  handleRemove: ({ id }) => {
    set(state => ({
      todos: state.todos.filter(todo => todo.id !== id)
    }))
    get().updateState()
  },

  handleToggle: ({ id }) => {
    set(state => ({
      todos: state.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      })
    }))
    get().updateState()
  },

  handleClearCompleted: () => {
    set(state => ({
      todos: state.todos.filter(todo => !todo.completed)
    }))
    get().updateState()
  },

  handleFilterChange: filter => {
    set({
      filterSelected: filter
    })
    get().updateState()
  },

  handleCreateTodo: ({ title }) => {
    set(state => ({
      todos: [{ id: crypto.randomUUID(), title, completed: false }, ...state.todos]
    }))
    get().updateState()
  },

  handleEditTodo: ({ id, title }) => {
    set(state => ({
      todos: state.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            title
          }
        }
        return todo
      })
    }))
    get().updateState()
  },

  updateState: () => {
    set(state => ({
      filteredTodos: state.todos.filter(todo => {
        if (state.filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
        if (state.filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
        return todo
      }),
      activeCount: state.todos.filter(todo => !todo.completed).length
    }))
  }
}))
