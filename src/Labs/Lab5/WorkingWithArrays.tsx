import React, { useState } from "react";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function WorkingWithArrays() {
  const API = `${REMOTE_SERVER}/lab5/todos`;
  const [todo, setTodo] = useState({ id: "1", description: "", completed: false });

  return (
    <div id="wd-working-with-arrays">
      <h3>Working with Arrays</h3>

      <h4>Retrieving Arrays</h4>
      <a id="wd-retrieve-todos" className="btn btn-primary" href={API}>
        Get Todos
      </a>
      <hr />

      <h4>Retrieving an Item from an Array by ID</h4>
      <a
        id="wd-retrieve-todo-by-id"
        className="btn btn-primary float-end"
        href={`${API}/${todo.id}`}
      >
        Get Todo by ID
      </a>
      <input
        id="wd-todo-id"
        value={todo.id}
        className="form-control w-50"
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <hr />

      <h4>Filtering Array Items</h4>
      <a
        id="wd-retrieve-completed-todos"
        className="btn btn-primary"
        href={`${API}?completed=true`}
      >
        Get Completed Todos
      </a>
      <hr />

      <h4>Creating new Items in an Array</h4>
      <a id="wd-create-todo" className="btn btn-primary" href={`${API}/create`}>
        Create Todo
      </a>
      <hr />

      <h4>Editing Todo Description</h4>
      <a
        id="wd-update-todo-description"
        className="btn btn-primary float-end"
        href={`${API}/${todo.id}/description/${todo.description}`}
      >
        Update Description
      </a>
      <input
        id="wd-todo-description"
        value={todo.description}
        className="form-control w-50"
        onChange={(e) => setTodo({ ...todo, description: e.target.value })}
      />
      <hr />

      <h4>Editing Todo Completed Status</h4>
      <a
        id="wd-update-todo-completed"
        className="btn btn-primary float-end"
        href={`${API}/${todo.id}/completed/${todo.completed}`}
      >
        Update Completed
      </a>
      <input
        id="wd-todo-completed"
        type="checkbox"
        checked={todo.completed}
        className="form-check-input"
        onChange={(e) => setTodo({ ...todo, completed: e.target.checked })}
      />
      <hr />
    </div>
  );
}