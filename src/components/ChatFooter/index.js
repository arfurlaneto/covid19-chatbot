import React, { useCallback, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles(() => ({
  appBar: {
    top: 'auto',
    bottom: 0,
    background: 'transparent',
    boxShadow: 'none',
    border: 0,
  },

  toolbar: {
    display: 'flex',
    flexDirection: 'row',
  },

  textFieldPaper: {
    flexGrow: 1,
    marginRight: '10px',
    padding: '8px 20px',
    borderRadius: '10px',
  },

  textField: {
    width: '100%',
  },

  button: {
    height: '100%',
  },
}));

function ChatFooter({ onText }) {
  const [text, setText] = useState('');

  const handleSendText = useCallback((e) => {
    e.preventDefault();
    if (onText) {
      onText(text);
      setText('');
    }
  }, [text, onText]);

  const classes = useStyles();
  return (
    <form onSubmit={handleSendText}>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Paper className={classes.textFieldPaper}>
            <TextField
              className={classes.textField}
              placeholder="Digite uma mensagem"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </Paper>

          <Button
            type="submit"
            className={classes.button}
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
    </form>
  );
}

export default ChatFooter;
