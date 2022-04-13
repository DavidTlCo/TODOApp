import React from 'react';

const Todo = ({ todo, deleteTodo, toggleComplete, setTodoEdit }) => {
  return (
    <div className="shadow rounded-3 px-5 py-3 m-5">
        <div className="card-body">
                <h3 className="card-title text-end">
                    { todo.title }
                    <button 
                        onClick={ () => toggleComplete(todo.id) }
                        className={`btn btn-sm ${todo.completed ? 'btn-outline-success' : 'btn-success'} ms-2`}
                    >
                        { todo.completed ? 'Terminada' : 'Terminar'}
                    </button>
                </h3>
            <p className="card-text text-end">{ todo.description }</p>
            <hr />
            <div className="d-flex justify-content-end">
                <button 
                    className="btn btn-sm btn-outline-primary me-2"
                    onClick={ () => setTodoEdit(todo) }
                >
                    Editar
                </button>
                <button
                    onClick={ () => deleteTodo(todo.id) }
                    className="btn btn-sm btn-outline-danger"
                >
                    Eliminar
                </button>
            </div>
        </div>
    </div>
  );
}

export default Todo;