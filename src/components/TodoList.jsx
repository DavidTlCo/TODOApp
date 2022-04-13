import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, deleteTodo, toggleComplete, setTodoEdit }) => {
    return (
        <>
            <h2 className="text-center">Lista de pendientes</h2>
            {
                todos.length === 0
                ? (
                    <div className="alert alert-success mt-5 d-flex justify-content-center align-items-center" role="alert">
                        <i class="material-icons fs-2">workspace_premium</i>
                        ¡Felicidades! No hay tareas pendientes
                    </div>
                ) : (
                    todos.map( todo => 
                        (
                            <Todo
                                key={ todo.id }
                                todo={ todo }
                                deleteTodo={ deleteTodo }
                                toggleComplete={ toggleComplete }
                                setTodoEdit={ setTodoEdit }
                            />
                        )
                    )
                )
            }
        </>
    );
}

export default TodoList;