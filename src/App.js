import React, { useEffect, useState, } from 'react';
import { Button, FormControl, InputLabel, Input, IconButton } from '@mui/material';
import { createFilterOptions } from '@mui/material/Autocomplete';

import SendIcon from '@mui/icons-material/Send';
import Message from './components/Message';
import firebase from "firebase/compat/app"
import './App.css';
import db from './firebase';
import FlipMove from 'react-flip-move';
function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const a = prompt('Please enter your name here');
    setUsername(a);


    db.collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setMessages(
        snapshot.docs.map(doc => ({
          id: doc.id,
          message: doc.data()
        })))
    })
  }, [])

  const sendMessage = (event) => {
    event.preventDefault();

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    setInput('');
  }

  return (
    <div className="App">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Facebook_Messenger_logo_2020.svg/2048px-Facebook_Messenger_logo_2020.svg.png" alt="" />

      <h2>Welcome {username}</h2>
      <form className='app__form'>
        <FormControl className="app__formControl">
          <InputLabel>Enter a Message... </InputLabel>
          <Input className='app__input' value={input} onChange={event => setInput(event.target.value)} />
          <IconButton className='app__iconBtn' disabled={!input} variant="contained" type='submit' color='primary' onClick={sendMessage} >
          <SendIcon />
          </IconButton>
        </FormControl>
      </form>
      <FlipMove>
        {
          messages.map(({ id, message }) => (
            <Message key={id} username={username} message={message} />

          ))
        }
      </FlipMove>

    </div>
  );
}


export default App;
