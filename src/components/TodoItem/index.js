// Write your code here

import './index.css'

const TodoItem = props => {
  const {todosDetails, onDeleteTodo} = props
  const {title, id} = todosDetails

  const deletingTodo = () => {
    onDeleteTodo(id)
  }

  return (
    <li className="list-container">
      <p className="title">{title}</p>
      <button onClick={deletingTodo} type="button" className="deleteBtn">
        Delete
      </button>
    </li>
  )
}

export default TodoItem
