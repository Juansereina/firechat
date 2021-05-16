import React from 'react';

const List = ({ messages }) => {
  return <ul className="list">
    {messages.map((message, index) =><li key={`${index}-${message}`}>{message}</li>)}
  </ul>
}

export default List;
