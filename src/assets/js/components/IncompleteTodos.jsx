import React from "react";

export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete} = props;

  return (
    <>
      <p>未完了のTODO</p>
      <div className="sec incomplete-area">
        <ul>
          {todos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
