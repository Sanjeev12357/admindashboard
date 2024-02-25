

import React, { useEffect, useState } from "react";
import { CreateTodo } from "./CreateTodo";
import { Todos } from "./Todos";

const Announcment = () => {
  const [todos, setTodos] = useState([]);

  const func1 = async () => {
    // Corrected the placement of 'async'
    try {
      const res = await fetch("http://localhost:3000/todos", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      });
      const json = await res.json();
      console.log(json);
      setTodos(json.todos);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  useEffect(() => {
    func1();
  }, []); // Removed 'todos' from the dependency array to avoid an infinite loop

  return (
    <div>
      <CreateTodo></CreateTodo>
      {/**<Todos todos={todos}></Todos> */}
    </div>
  );
};

export default Announcment;
