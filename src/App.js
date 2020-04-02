import React, { useEffect, useCallback, useState } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';

import Header from './components/Header';
import ChatMessage from './components/ChatMessage';

import ChatEngine from './ChatEngine';
import covidDialog from './dialogs/covid19';

const useStyles = makeStyles(() => ({
  chatContainer: {
    paddingTop: '20px',
    marginBottom: '10px;',
  },
}));

function App() {
  const [contactName] = useState('ATENDENTE VIRTUAL COVID-19');
  const [contactAvatar] = useState('https://i.pravatar.cc/200?img=1');

  const [engine] = useState(new ChatEngine(covidDialog));
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (engine) {
      setMessages([engine.renderDialog()]);
    }
  }, [engine]);

  const handleChooseOption = useCallback(async (option) => {
    const validOption = await engine.chooseOption(option.id);
    if (validOption) {
      const userMessage = engine.renderUserDialog(option.label);
      setMessages([...messages, userMessage, engine.renderDialog()]);
    }
  }, [engine, messages]);

  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Header
        contactName={contactName}
        contactAvatar={contactAvatar}
      />
      <Container className={classes.chatContainer}>
        {messages.map((message) => (
          <ChatMessage
            key={message.id}
            contactName={contactName}
            contactAvatar={contactAvatar}
            message={message}
            onChoose={handleChooseOption}
          />
        ))}
      </Container>
    </>
  );
}

export default App;
