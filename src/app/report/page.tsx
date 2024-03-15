import { TTodo } from "@/types/type";
import React from "react";

const ReportPage = async () => {
  const url = "http://localhost:4000";
  const response = await fetch(`${url}/todos`, {
    method: "GET",
    next: { revalidate: 10 },
  });

  const todos = await response.json();

  const filterDoneLength = todos.filter(
    (todoItem: TTodo) => todoItem.isDone === true
  ).length;

  const filterWorkingLength = todos.filter(
    (todoItem: TTodo) => todoItem.isDone === false
  ).length;

  if (!todos) {
    <div>정보를 가져오지 못하고 있습니다..</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center mt-[1.2rem] gap-[2rem]">
      <p>
        <span className="text-xl font-bold">{"-할 일 통계-"}</span>
      </p>
      <ul>
        <li>
          <p>
            <span>현재까지 {todos.length}개의 todolist가 등록되었습니다.</span>
          </p>
        </li>
      </ul>
      <ul>
        <li>
          <p>
            <span>
              현재까지 {filterDoneLength}개의 완료 리스트, {filterWorkingLength}
              개의 할일 리스트가 존재합니다.
            </span>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default ReportPage;
