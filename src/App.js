import React, { useRef } from "react";
import { useFirestoreCollectionData, useFirestore, useFirestoreDocData } from 'reactfire';
import Button from './Components/Button';
import Chat from './Components/Chat';
import List from './Components/List';

const App = () => {
  const input = useRef();
  const collection = useFirestore()
  .collection('chats').doc('X0pHYHf1iqfEaeymRf8H').collection('messages');
  const query = collection.orderBy("date", "asc")
  const {data: messages, status} = useFirestoreCollectionData(query, {
    idField: 'id'
  });

  const handleClick = () => {
    saveMessage(input.current.value);
  }

  const handlePress = ({ target, keyCode }) => {
    if(keyCode === 13) saveMessage(target.value);
  }

  const saveMessage = (value) => {
    if(value) {
      const message = {
        user: 1,
        message: value,
        date: new Date()
      }
      collection.add(message);
      input.current.value = '';
    }
  }

  if(status === 'loading') {
    return <h1>loading</h1>
  }

  return <div className="container">
    <Chat messages={messages}/>
    <List messages={["test"]} />
    {/* <Button name="send" handleClick={handleClick} /> */}
    <input className="input" type="text" onKeyUp={handlePress} ref={input}/>
  </div>;
}

export default App;
