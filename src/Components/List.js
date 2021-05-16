import React from 'react';
import { useFirestoreCollectionData } from 'reactfire';

const List = ({ collection, handleClick }) => {
  const {data: chats, status} = useFirestoreCollectionData(collection, {
    idField: 'id'
  });

  if(status === 'loading') {
    return <h1>loading</h1>
  }

  return <ul className="list">
    {chats.map((chat) =><li className="list__user" id={chat.id} key={chat.id} onClick={() => handleClick(chat.id)}>{chat.name}</li>)}
  </ul>
}

export default List;
