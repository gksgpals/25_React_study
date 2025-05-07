import React, { useRef, useState } from 'react';
import CreateUser from './CreateUser';
import UserList from './UserList';

function App() {
  const [inputs, setInputs] = useState({ todo: '' });
  const { todo } = inputs;

  const onChange = e => {
    const { name, value } = e.target;
    setInputs(prev => ({ ...prev, [name]: value }));
  };

  const [users, setUsers] = useState([
    { id: 1, todo: '밥 먹기', active: true },
    { id: 2, todo: '학교 가기', active: false },
    { id: 3, todo: '운동하기', active: false },
  ]);

  const nextId = useRef(4);
  const onCreate = () => {
    if (!todo.trim()) return;
    const newItem = { id: nextId.current, todo, active: false };
    setUsers(prev => prev.concat(newItem));
    setInputs({ todo: '' });
    nextId.current += 1;
  };

  const onRemove = id => {
    setUsers(prev => prev.filter(item => item.id !== id));
  };

  const onToggle = id => {
    setUsers(prev =>
      prev.map(item =>
        item.id === id ? { ...item, active: !item.active } : item
      )
    );
  };

  return (
    <div>
      <CreateUser
        todo={todo}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList
        users={users}
        onRemove={onRemove}
        onToggle={onToggle}
      />
    </div>
  );
}

export default App;
