import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const initialTodos = [
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
    completed: false
  },
  {
    id: 3,
    title: 'Comer con el chavito',
    description: 'Regresar a casa y calentar comida para comer',
    completed: false
  }
];

const App = () => {
  const [ todos, setTodos ] = useState(initialTodos);
  const [todoEdit, settodoEdit] = useState(null)

  // Agregar una nueva tarea
  const addTodo = todo => {
    // Se crea la nueva tarea
    const newTodo = {
      id: Date.now(),
      ...todo,
      completed: false
    };

    // Se agrega la tarea a la lista
    const updatedTodos = [
      // Se agrega la nueva tarea al inicio de la lista
      newTodo,
      ...todos
    ];

    setTodos(updatedTodos);
  }

  // Método para actualizar un todo
  const updateTodo = todoEdit => {
    const updatedTodos = todos.map(todo => (
      todo.id === todoEdit.id
      ? todoEdit
      : todo
    ));
    setTodos(updatedTodos);
  };

  // Eliminar un todo
  const deleteTodo = id => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  }

  // Cambiar el estado "completed" de un todo
  const toggleComplete = id => {
    // const updatedTodos = todos.map(todo => {
    //   const updateTodo = {
    //     ...todo,
    //     completed: !todo.completed
    //   }
    //   if( todo.id === id )
    //     return updateTodo
    //   return todo
    // });

    const updatedTodos = todos.map(todo => (
      todo.id === id
        ? {...todo, completed: !todo.completed}
        : todo
    ));

    // const updatedTodos = todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo);

    setTodos(updatedTodos);
  }

  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-8">
          <TodoList 
            todos={ todos }
            deleteTodo={ deleteTodo }
            toggleComplete={ toggleComplete }
            setTodoEdit={ settodoEdit }
          />
        </div>
        <div className="col-4">
          <TodoForm
            addTodo={ addTodo }
            todoEdit={ todoEdit }
            setTodoEdit={ settodoEdit }
            updateTodo={ updateTodo }
          />
        </div>
      </div>
    </div>
  );
}

export default App;