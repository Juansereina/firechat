import React, { useRef, useState } from "react";
import { useFirestore } from 'reactfire';
import Chat from './Components/Chat';
import List from './Components/List';

const App = () => {
  const [currentChat, setCurrentChat] = useState('');
  const input = useRef();
  const collection = useFirestore()
  .collection('chats');

  const handlePress = ({ target, keyCode }) => {
    console.log('heyyy');
    if(keyCode === 13) saveMessage(target.value);
  }

  const saveMessage = (value) => {
    if(value && currentChat) {
      const message = {
        user: 1,
        message: value,
        date: new Date()
      }
      const messageCollection = collection.doc(currentChat).collection('messages');
      messageCollection.add(message);
      input.current.value = '';
    }
  }

  if(status === 'loading') {
    return <h1>loading</h1>
  }

  const handleClickList = (value) => {
    setCurrentChat(value);
  }

  return <div className="container">
    <Chat collection={collection} currentChat={currentChat} />
    <List collection={collection} handleClick={handleClickList} />
    {currentChat && <input className="input" type="text" onKeyUp={handlePress} ref={input}/>}
  </div>;
}

export default App;
