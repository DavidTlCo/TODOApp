import React from "react";

const Todo = ({ todo, deleteTodo, toggleComplete, setTodoEdit }) => {
  return (
    <div className="shadow rounded-3 px-5 py-3 mt-5 mx-2 mx-lg-5">
      <div className="card-body">
        <div className="d-flex align-items-cecnter justify-content-end">
          <h3
            className={`card-title d-flex justify-content-end ${
              todo.completed && "text-decoration-line-through"
            }`}
          >
            {todo.title}
          </h3>
          <button
            onClick={() => toggleComplete(todo.id)}
            className={`btn btn-sm 
          ${
            todo.completed ? "btn-outline-success" : "btn-success"
          } ms-4 d-flex align-items-center py-1 text-decoration-none`}
          >
            {todo.completed ? (
              <i class="material-icons me-1">task_alt</i>
            ) : (
              <i class="material-icons me-1">task</i>
            )}
            {todo.completed ? "Terminada" : "Terminar"}
          </button>
        </div>
        <p className="card-text text-end">{todo.description}</p>
        <hr />
        <div className="d-flex justify-content-end">
          <button
            className="btn btn-sm btn-outline-primary me-2 d-flex align-items-center"
            onClick={() => setTodoEdit(todo)}
          >
            <i class="material-icons me-1">edit</i>
            Editar
          </button>
          <button
            onClick={() => deleteTodo(todo.id)}
            className="btn btn-sm btn-outline-danger d-flex align-items-center"
          >
            <i class="material-icons me-2">backspace</i>
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
