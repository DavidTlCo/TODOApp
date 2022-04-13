import React, { useEffect, useState } from 'react';

// Se inicializan los inputs del formulario como vacíos
const initialFormValues = {
  title: '',
  description: ''
};

const TodoForm = ({ addTodo, todoEdit, setTodoEdit, updateTodo }) => {
  // Se inicializa el estado de los inputs del formulario
  const [ formValues, setFormValues ] = useState(initialFormValues);
  // Se inicializa el estado de los mensajes mostrados
  const [messageError, setMessageError] = useState(null)
  const [messageSuccess, setMessageSuccess] = useState(null)
  // Se recuperan los valores del estado actual de formValues
  const { title, description } = formValues;

  // Se cargan los valores en el formulario cuando se tiene un objeto para edición
  useEffect(() => {
    // Si todoEdit no es null asigna al formValues el todoEdit para editarlo
    todoEdit
    ? setFormValues(todoEdit)
    : setFormValues(initialFormValues)
  }, [todoEdit])
  

  // Método para reflejar las acciones del usuario en inputs
  const handleInputChanges = e => {
    const updatedFormValues = {
      ...formValues,
      // [] =  variable del input que será afectado con el atributo name
      [e.target.name]: e.target.value
    };
    // Se actualiza el valor del input con el evento del usuario
    setFormValues(updatedFormValues);
  }

  // Manejo del evento submit
  const handleSubmit = e => {
    e.preventDefault();

    // Comprobando que los inputs no estén vacíos
    if( title.trim() === '' ){
      setMessageError('El nombre de la tarea no puede estar vacío'); 
      return;
    }
    if( description.trim() === '' ){
      setMessageError('La descripción no puede estar vacía');
      return;
    }

    if( todoEdit ){
      // Se actualiza la tarea
      updateTodo(formValues);
      setMessageSuccess('Tarea actualizada correctamente');
      setTodoEdit(null);
    }else{
      // Se agrega la nueva tarea
      addTodo(formValues);
      setMessageSuccess('Tarea agregada correctamente');
    }

    setMessageError(null);
    setFormValues(initialFormValues);

    // Eliminando el mensaje de éxito transcurrido 2.5 seg.
    setTimeout(() => {
      setMessageSuccess(null);
    }, 3000);
  }

  // Método para cancelar la edición de una edición mediante el botón
  const cancelEdition = () => {
    setTodoEdit(null);
    setFormValues(initialFormValues);
    setMessageSuccess('La tarea no fue modificada');
    setTimeout(() => {
      setMessageSuccess(null);
    }, 3000);
  }

  return (
    <div>
      <h2 className="text-center">
        { todoEdit
          ? 'Editar tarea'
          : 'Agregar nueva tarea'
        }
      </h2>
      <form
        onSubmit={ handleSubmit }
        className="shadow rounded-3 p-5 my-5 mx-4"
      >
        <div class="form-floating mb-3">
          <input
            name="title"
            type="text"
            class="form-control"
            id="floatingTask"
            placeholder="Tarea"
            value={ title }
            // Llama al método de actualización de input con el evento key_up
            onChange={ handleInputChanges }
            />
          <label for="floatingTask">Nombre de tarea</label>
        </div>
        <div class="form-floating">
          <textarea
            name="description"
            class="form-control"
            placeholder="Descripción"
            id="floatingDescription"
            value={ description }
            // Llama al método de actualización de input con el evento key_up
            onChange={ handleInputChanges }
            ></textarea>
          <label for="floatingDescription">Descripción</label>
        </div>
        <div className="d-flex justify-content-end">
          <button className="btn btn-sm btn-primary mt-4 d-flex align-items-center">
            {
              todoEdit
                ? <i class="material-icons me-2">loop</i>
                : <i class="material-icons me-2">library_add</i>
            }
            {
              todoEdit
                ? 'Actualizar tarea'
                : 'Agregar tarea'
            }
          </button>
          {
            todoEdit &&
            <button
            onClick={cancelEdition}
              className="btn btn-sm btn-warning mt-4 ms-3 d-flex align-items-center"
            >
              <i class="material-icons me-2">cancel</i>
              Cancelar
            </button>
          }
        </div>
      </form>
        {
          // Mostrando mensaje de error
          messageError && (
            <div class="alert alert-danger mt-4 p-2 d-flex align-items-center justify-content-center" role="alert">
              <i class="material-icons me-2">warning</i>
              { messageError }
            </div>
          )
        }
        {
          // Mostrando mensaje de éxito
          messageSuccess && (
            <div class="alert alert-success mt-4 p-2 d-flex align-items-center justify-content-center" role="alert">
              <i class="material-icons me-1">task_alt</i>
              { messageSuccess }
            </div>
          )
        }
    </div>
  );
}

export default TodoForm;