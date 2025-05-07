import React from 'react';

function User({ user, onRemove, onToggle }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <span
        onClick={() => onToggle(user.id)}
        style={{
          cursor: 'pointer',
          textDecoration: user.active ? 'none' : 'line-through'  
        }}
      >
        {user.todo}
      </span>
      <button onClick={() => onToggle(user.id)}>
        {user.active ? '완료' : '취소'}  {}
      </button>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
}

function UserList({ users, onRemove, onToggle }) {
  return (
    <div>
      {users.map(user => (
        <User
          key={user.id}
          user={user}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default UserList;
