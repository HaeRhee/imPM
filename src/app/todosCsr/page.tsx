"use client";
import useInput from "@/hook/useInput";
import useSetMutation from "@/hook/useSetMutation";
// import { postJson } from "@/mutation/mutation";
import { TTodo } from "@/types/type";
import React, { useEffect, useRef } from "react";

const TodoPageCsr = () => {
  const init: TTodo = {
    id: crypto.randomUUID(),
    title: "",
    comment: "",
    isDone: false,
  };
  // const { mutation } = useSetMutation(postJson, "todos");
  const {
    form: todoInput,
    setForm: setTodoInput,
    onChange,
    reset,
  } = useInput(init);
  const refTitle = useRef<HTMLInputElement>(null);
  const titleInput = todoInput.title || "";
  const commentInput = todoInput.comment || "";
  const blankPattern = /^\s+|\s+$/g;

  useEffect(() => {
    if (refTitle.current !== null) {
      refTitle.current.focus();
    }
  }, []);

  // 들어온 값으로 교체해주기
  const onSubmitHand = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("titleInput,commentInput", titleInput, commentInput);
    const titleBlank = (titleInput || "").replace(blankPattern, "");
    const commentBlank = (commentInput || "").replace(blankPattern, "");

    // 공백이면 아무 것도 리턴하지 않게 해줘.
    if (titleBlank === "" && commentBlank === "") {
      alert("빈칸을 전부 채워주세요.");
      return;
    }
    if (titleBlank === "" || commentBlank === "") {
      alert("빈칸을 전부 채워주세요.");
      return;
    }
    // mutation.mutate(todoInput);
    alert("글이 등록되었습니다.");
    setTodoInput(init);
    reset();
    refTitle.current?.focus();
  };

  return (
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
        <label htmlFor="comment">내용</label>
        <input
          id="comment"
          type="text"
          name="comment"
          value={commentInput}
          onChange={onChange}
        />

        <button>추가</button>
      </form>
    </section>
  );
};

export default TodoPageCsr;
