"use client";
import React, { useEffect, useRef } from "react";
import { postJson } from "@/mutation/mutationFn";
import { TTodo } from "@/types/type";
import useSetMutation from "@/hook/useSetMutation";
import useInput from "@/hook/useInput";

const FormTodo = () => {
  const init: TTodo = {
    id: crypto.randomUUID(),
    title: "",
    contents: "",
    isDone: false,
  };

  const { mutation } = useSetMutation(postJson, "todos");
  const {
    form: todoInput,
    setForm: setTodoInput,
    onChange,
    reset,
  } = useInput(init);

  const refTitle = useRef<HTMLInputElement>(null);
  const titleInput = todoInput.title || "";
  const contentsInput = todoInput.contents || "";
  const blankPattern = /^\s+|\s+$/g;

  useEffect(() => {
    if (refTitle.current !== null) {
      refTitle.current.focus();
    }
  }, []);

  // 들어온 값으로 교체해주기
  const onSubmitHand = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const titleBlank = (titleInput || "").replace(blankPattern, "");
    const contentsBlank = (contentsInput || "").replace(blankPattern, "");

    // 공백이면 아무 것도 리턴하지 않게 해줘.
    if (titleBlank === "" && contentsBlank === "") {
      alert("빈칸을 전부 채워주세요.");
      return;
    }
    if (titleBlank === "" || contentsBlank === "") {
      alert("빈칸을 전부 채워주세요.");
      return;
    }
    mutation.mutate(todoInput);
    alert("글이 등록되었습니다.");
    setTodoInput(init);
    reset();
    refTitle.current?.focus();
  };

  return (
    <div>
      <section>
        <form onSubmit={onSubmitHand} className="form-wrap">
          <label htmlFor="title">제목</label>
          <input
            id="title"
            type="text"
            name="title"
            value={titleInput}
            ref={refTitle}
            maxLength={20}
            onChange={onChange}
            autoFocus
          />
          <label htmlFor="contents">내용</label>
          <input
            id="contents"
            type="text"
            name="contents"
            value={contentsInput}
            onChange={onChange}
          />

          <button>추가</button>
        </form>
      </section>
    </div>
  );
};

export default FormTodo;
