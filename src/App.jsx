import React from 'react';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-8">
          <TodoList />
        </div>
        <div className="col-4">
          <h2>TodoForm</h2>
        </div>
      </div>
    </div>
  );
}

export default App;