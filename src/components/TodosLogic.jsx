import InputTodo from "./InputTodo";
import TodosList from "./TodosList";
import { useState } from "react";

const TodosLogic = () => {
  const [todos, setTodos] = useState([
  {
    id: 1,
    title: 'Setup development environment',
    completed: true,
  },
  {
    id: 2,
    title: 'Develop website and add content',
    completed: false,
  },
  {
    id: 3,
    title: 'Deploy to live server',
    completed: false,
  },
]);
const delTodo = (id) => {
  console.log('deleted', id);
};
  return (
    <div>
      <InputTodo />
      <TodosList todosProps={todos} setTodos={setTodos} delTodo={delTodo}/>
    </div>
  );
};
export default TodosLogic;
