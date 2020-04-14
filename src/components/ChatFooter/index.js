import React, { useCallback, useState, useRef } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import {
  AppBar,
  Toolbar,
  Paper,
  TextField,
  Button,
  Icon,
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  appBar: {
    top: 'auto',
    bottom: 0,
    background: 'transparent',
    border: 0,
    boxShadow: 'none',
  },

  textFieldContainer: {
    flexGrow: 1,
    display: 'flex',
    marginRight: '10px',
    padding: '8px 20px',
    borderRadius: '10px',
  },

  textField: {
    flexGrow: 1,
  },

  button: {
    paddingTop: '11px',
    paddingBottom: '11px',
    borderRadius: '10px',
  },
}));

function ChatFooter({ onText }) {
  const [text, setText] = useState('');

  const inputEl = useRef(null);

  const handleSendText = useCallback((e) => {
    e.preventDefault();
    inputEl.current.blur();
    if (onText) {
      onText(text);
      setText('');
    }
  }, [text, onText]);

  const classes = useStyles();

  return (
    <form onSubmit={handleSendText}>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>

          <Paper className={classes.textFieldContainer}>
            <TextField
              className={classes.textField}
              placeholder="Digite uma mensagem"
              value={text}
              onChange={(e) => setText(e.target.value)}
              inputRef={inputEl}
            />
          </Paper>

          <Button
            className={classes.button}
            type="submit"
            disabled={!(text && text.trim())}
            size="large"
            variant="contained"
            color="primary"
            endIcon={<Icon>send</Icon>}
          >
            Enviar
          </Button>

        </Toolbar>
      </AppBar>
      <Toolbar />
    </form>
  );
}

export default ChatFooter;
