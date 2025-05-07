import React from 'react';

function CreateUser({ todo, onChange, onCreate }) {
  return (
    <div>
      <input
        name="todo"
        placeholder="할 일을 입력하세요"
        value={todo}
        onChange={onChange}
      />
      <button onClick={onCreate}>입력</button>
    </div>
  );
}

export default CreateUser;
