import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../Components/TodoCounter";
import { TodoSearch } from "../Components/TodoSearch";
import { TodoList } from "../Components/TodoList";
import { TodoItem } from "../Components/TodoItem";
import { TodoForm } from "../Components/TodoForm";
import { CreateTodoButton } from "../Components/CreateTodoButton";
import { TodosLoading } from "../Components/TodosLoading";
import { TodosError } from "../Components/TodosError";
import { EmptyTodos } from "../Components/EmptyTodos";
import { Modal } from "../Modal";
import "../index.css";
import ToDoIcon from '../Icons/002-done.png'


function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <main className="container">
        <div className="top-section">
          <img
            className="top-section__img"
            src={ToDoIcon}
            alt="Imagen de to do"
          ></img>
          <h1 className="top-section__h1">My To-Do</h1>
        </div>

        <TodoCounter />

        <TodoSearch />

        <TodoList>
          {error && <TodosError error={error} />}
          {loading && <TodosLoading />}
          {(!loading && !searchedTodos.length) && <EmptyTodos />}

          {searchedTodos.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>

        {!!openModal && (
          <Modal>
            <TodoForm />
          </Modal>
        )}

        <CreateTodoButton
          setOpenModal={setOpenModal}
        />
      </main>
    </React.Fragment>
  );
}

export { AppUI };
