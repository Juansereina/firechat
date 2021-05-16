import React from 'react';
import { useFirestoreCollectionData } from 'reactfire';

const Chat = ({ collection, currentChat }) => {
  const messageCollection = currentChat ? collection.doc(currentChat).collection('messages') : collection;
  const query = messageCollection.orderBy("date", "asc")
  const {data: messages, status} = useFirestoreCollectionData(query, {
    idField: 'id'
  });

  if(status === 'loading') {
    return <h1>loading</h1>
  }

  const selectChat = <h2>Select a chat</h2>;
  const chatContent = (
    <>
      <h1>chat 1</h1>
      <div className="messages">
      {messages.map(({message}, index) =><p key={`${index}-${message}`}>{message}</p>)}
      </div>
    </>
  )

  return <section className="chat">
    {currentChat ? chatContent : selectChat}
  </section>
}

export default Chat;
