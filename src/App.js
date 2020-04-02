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
      setMessages([engine.renderDialog()]);
    }
  }, [engine]);

  // const handleChooseOption = useCallback(async (option) => {
  //   const validOption = await engine.chooseOption(option.id);
  //   if (validOption) {
  //     const userMessage = engine.renderUserDialog(option.label);
  //     setMessages([...messages, userMessage, engine.renderDialog()]);
  //   }
  // }, [engine, messages]);

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
      />
      <ChatFooter />
    </>
  );
}

export default App;
