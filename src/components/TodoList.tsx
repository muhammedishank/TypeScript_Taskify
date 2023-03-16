import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { Todo } from "../models/models";
import SingleTodo from "./SingleTodo";
import "./style.css";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({
  todos,
  setTodos,
  completedTodos,
  setCompletedTodos,
}) => {
  return (
    <div className="container">
      <Droppable droppableId="TodosList">
        {(provided, snapshot) => (
          <div
            className={`todos ${snapshot.isDraggingOver ? "drag_active" : ""}`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todos_heading">Active Tasks</span>
            {todos.map((item, index) => (
              <SingleTodo
                index={index}
                todo={item}
                key={item.id}
                todos={todos}
                setTodos={setTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      <Droppable droppableId="TodosRemove">
        {(provided, snapshot) => (
          <div
            className={`todos remove ${
              snapshot.isDraggingOver ? "drag_remove" : ""
            }`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todos_heading">Completed Tasks</span>
            {completedTodos.map((item, index) => (
              <SingleTodo
                index={index}
                todo={item}
                key={item.id}
                todos={completedTodos}
                setTodos={setCompletedTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TodoList;
