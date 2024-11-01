import {Component} from 'react'
import './index.css'

class TodoItem extends Component {
  handleDelete = () => {
    const {deleteFun, todoDetails} = this.props
    const {id} = todoDetails
    deleteFun(id)
  }

  render() {
    const {todoDetails} = this.props
    const {title} = todoDetails

    return (
      <li className="todo-container">
        <p className="todo">{title}</p>
        <button onClick={this.handleDelete} className="btn" type="button">
          Delete
        </button>
      </li>
    )
  }
}

export default TodoItem
