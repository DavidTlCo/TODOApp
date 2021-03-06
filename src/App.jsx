import React, { useEffect, useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const initialTodos = [];

// Recuperando del localStorage los todos almacenados
const localTodos = JSON.parse(localStorage.getItem('todos'));

const App = () => {
  const [ todos, setTodos ] = useState(localTodos || initialTodos);
  const [todoEdit, settodoEdit] = useState(null);

  // Guardar en localstorage los todos
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

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
    // Se cancela la actualización en caso de eliminación
    if( todoEdit && id === todoEdit.id){
      settodoEdit(null);
    }

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
        <div className=" col-12 col-lg-8 mb-5">
          <TodoList 
            todos={ todos }
            deleteTodo={ deleteTodo }
            toggleComplete={ toggleComplete }
            setTodoEdit={ settodoEdit }
          />
        </div>
        <div className="mx-auto col-sm-8 col-12 col-lg-4">
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