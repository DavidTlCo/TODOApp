import React from 'react';
import Todo from './Todo';

const todos = [
    {
      id: 1,
      title: 'Aprender React',
      description: 'Terminar el tutorial práctico de React en YouTube',
      completed: false
    },
    {
      id: 2,
      title: 'Tareas RAMA',
      description: 'Atender las tareas pendientes de práctica profesional',
      completed: true
    },
    {
      id: 3,
      title: 'Comer con el chavito',
      description: 'Regresar a casa y calentar comida para comer',
      completed: false
    }
];

const TodoList = () => {
    return (
        <>
            <h2 className="text-end">Lista de pendientes</h2>
            {
                todos.map( todo => <Todo key={todo.id} todo={todo}/> )
            }
        </>
    );
}

export default TodoList;