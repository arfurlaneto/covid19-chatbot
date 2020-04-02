import React, { useEffect, useCallback, useState } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';

import ChatHeader from './components/ChatHeader';
import ChatBody from './components/ChatBody';
import ChatFooter from './components/ChatFooter';

import ChatEngine from './ChatEngine';
import covidDialog from './dialogs/covid19';

function App() {
  const [botName] = useState('ATENDENTE VIRTUAL COVID-19');
  const [botAvatar] = useState('https://i.pravatar.cc/200?img=1');
  const [userName] = useState('Você');
  const [userAvatar] = useState('https://i.pravatar.cc/200?img=2');

  const [engine] = useState(new ChatEngine(covidDialog));
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (engine) {
      setMessages(engine.start());
    }
  }, [engine]);

  const handleUserText = useCallback(async (data) => {
    const userText = typeof (data) === 'string' ? data : data.label;
    const newMessages = await engine.handleUserText(userText);
    setMessages([...messages, ...newMessages]);
  }, [engine, messages]);

  return (
    <>
      <CssBaseline />
      <ChatHeader
        contactName={botName}
        contactAvatar={botAvatar}
        contactStatus="online"
      />
      <ChatBody
        messages={messages}
        contactName={botName}
        contactAvatar={botAvatar}
        userName={userName}
        userAvatar={userAvatar}
        onOption={handleUserText}
      />
      <ChatFooter
        onText={handleUserText}
      />
    </>
  );
}

export default App;
