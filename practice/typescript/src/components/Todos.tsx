import { useState } from "react";
interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

const Todos = () => {
  const [todo, setTodos] = useState<Todo[]>([]);

  const addTodos = (task: string) => {
    const newTodo: Todo = {
      id: todo.length + 1,
      task,
      completed: false,
    };
    setTodos((prev) => [...prev, newTodo]);
  };
  return (
    <div>
      <h2>Todos</h2>
      <button onClick={() => addTodos("New Todo")}>Add Todo</button>
      <ul>
        {todo.map((task) => (
          <li key={task.id}>{task.task}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
