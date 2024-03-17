import { changeJson, deleteJson } from "@/mutation/mutationFn";
import { TTodo } from "@/types/type";
import useSetMutation from "@/hook/useSetMutation";
import { queryKey } from "@/mutation/queryKey";

const Todo = ({ todoItem }: { todoItem: TTodo }) => {
  const { mutation: deleteMutation } = useSetMutation(
    deleteJson,
    queryKey.todos
  );
  const { mutation: changeMutation } = useSetMutation(
    changeJson,
    queryKey.todos
  );
  const { id, title, contents, isDone } = todoItem;

  //삭제 버튼
  const onDelete = async () => {
    // 삭제 유효성
    if (window.confirm("삭제하시겠습니까?") === true) {
      const changeStateTodo = {
        id,
        title,
        contents,
        isDone: !isDone,
      };
      deleteMutation.mutate(changeStateTodo);
      alert("삭제되었습니다.");
    } else {
      alert("삭제를 취소하셨습니다.");
      return;
    }
  };

  //완료 버튼
  const onComplete = () => {
    const changeStateTodo = {
      id,
      title,
      contents,
      isDone: !isDone,
    };
    changeMutation.mutate(changeStateTodo);

    if (isDone) {
      alert("취소했습니다! 다시 일을 진행해보죠!");
    } else {
      alert("완료했습니다! 다음 일을 진행해보죠!");
    }
  };

  return (
    <article className="m-[2rem] p-[2rem] py-2 rounded-lg shadow-md text-center text-lg hover:transform hover:transition-[all] hover:duration-500 hover:scale-[1.06]">
      <div>
        <div className="flex flex-col justify-left gap-[0.4rem]">
          <h4>{title}</h4>
          <p>{contents}</p>
        </div>

        <div className="flex justify-between p-[1rem]">
          <button
            onClick={onComplete}
            className={`btn btn-outline pl-[1.8rem] pr-[1.8rem] text-[17px] ${
              isDone
                ? "text-neutral"
                : "text-success hover:border-success hover:bg-success hover:text-white"
            }`}
          >
            {isDone ? "취소" : "완료"}
          </button>
          <button
            onClick={onDelete}
            className="btn btn-outline btn-error p-[1rem] text-[17px] "
          >
            삭제하기
          </button>
        </div>
      </div>
    </article>
  );
};

export default Todo;
