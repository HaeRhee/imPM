"use client";
import { TTodo } from "@/types/type";
import Todo from "@/components/Todo";

interface TodosProps {
  isActive: boolean;
  formTodoData: TTodo[];
}

const TodoList = ({ isActive, formTodoData }: TodosProps) => {
  const filterFormTodo = formTodoData
    ? formTodoData.filter((todoItem: TTodo) => todoItem.isDone === isActive)
    : [];

  const title = isActive ? "✅Done" : "🔥Working";

  return (
    <section>
      <div>{title}</div>
      <article>
        {filterFormTodo.map((todoItem: TTodo) => {
          return <Todo key={todoItem.id} todoItem={todoItem} />;
        })}
      </article>
    </section>
  );
};

export default TodoList;
