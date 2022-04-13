import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, deleteTodo, toggleComplete, setTodoEdit }) => {
    return (
        <>
            <h2 className="text-center">Lista de pendientes</h2>
            {
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
            }
        </>
    );
}

export default TodoList;