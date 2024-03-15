import TodoList from "@/components/TodoList";
import Link from "next/link";

const TodoPageSsr = async () => {
  const url = "http://localhost:4000";

  const response = await fetch(`${url}/todos`, {
    method: "GET",
    cache: "no-cache",
  });
  const todos = await response.json();
  console.log(todos);

  return (
    <div className="flex flex-col items-center mt-[1.2rem] gap-[2rem]">
      <Link href="/report">할 일 통계 보러가기</Link>
      <article className="flex flex-col gap-[2rem]">
        <section>
          <TodoList isActive={false} formTodoData={todos} />
          <TodoList isActive={true} formTodoData={todos} />
        </section>
      </article>
    </div>
  );
};

export default TodoPageSsr;
