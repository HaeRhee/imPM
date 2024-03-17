"use client";
import { useRouter } from "next/navigation";
import { getJson } from "@/mutation/mutationFn";
import { useQuery } from "@tanstack/react-query";
import { queryKey } from "@/mutation/queryKey";
import TodoList from "@/components/TodoList";
import FormTodo from "@/components/FormTodo";

const TodoPageCsr = () => {
  const router = useRouter();

  const {
    isLoading: formTodoLoading,
    data: formTodoData,
    isError: formTodoError,
  } = useQuery({ queryKey: [queryKey.todos], queryFn: getJson });

  const onMoveReport = () => {
    router.push("/report");
  };
  if (formTodoLoading) {
    return <div>로딩중입니다...</div>;
  }

  if (formTodoError) {
    return <div> 정보를 불러오지 못하고 있습니다...</div>;
  }

  return (
    <section className="flex flex-col items-center mt-[1.2rem] gap-[2rem]">
      <button onClick={onMoveReport}>할 일 통계 보러가기</button>
      <article className="flex flex-col gap-[2rem]">
        <FormTodo />
        <section>
          <TodoList isActive={false} formTodoData={formTodoData} />
          <TodoList isActive={true} formTodoData={formTodoData} />
        </section>
      </article>
    </section>
  );
};

export default TodoPageCsr;
