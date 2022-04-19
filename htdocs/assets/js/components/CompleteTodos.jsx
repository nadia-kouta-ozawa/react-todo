import React from "react";

export const CompleteTodos = (props) => {
  const { todos, onClickBack} = props;

  return (
    <>
      <p>完了のTODO</p>
      <div className="sec complete-area">

        <ul>
          {todos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickBack(index)}>戻す</button>

              </div>
            );
          })}
        </ul>
      </div>

    </>
  );
};
