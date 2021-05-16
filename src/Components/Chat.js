import React from 'react';

const Chat = ({ messages }) => {
  return <section className="chat">
    <h1>chat 1</h1>
    <div className="messages">
     {messages.map(({message}, index) =><p key={`${index}-${message}`}>{message}</p>)}
    </div>
  </section>
}

export default Chat;
