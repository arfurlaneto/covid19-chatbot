import React, { useEffect, useCallback, useRef } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(() => ({
  container: {
    paddingTop: '100px',
    paddingBottom: '60px',
  },

  contactCard: {
    maxWidth: 345,
    marginBottom: '15px',
  },

  userCard: {
    maxWidth: 345,
    marginBottom: '10px',
    background: 'rgb(220, 248, 198)',
    marginLeft: 'auto',
  },
}));

function App({
  contactName, contactAvatar, userName, userAvatar, messages, onOption,
}) {
  const endElRef = useRef(null);

  useEffect(() => {
    endElRef.current.scrollIntoView({ behavior: 'instant' });
  }, [messages]);

  const handleChooseOption = useCallback((option) => {
    if (onOption) {
      onOption(option);
    }
  }, [onOption]);

  const classes = useStyles();

  return (
    <Container maxWidth="md" className={classes.container}>
      {messages.map((message) => {
        const isLast = (message === messages[messages.length - 1]);
        return (
          <Card
            key={message.key}
            variant="outlined"
            className={message.user ? classes.userCard : classes.contactCard}
          >
            <CardHeader
              title={message.user ? userName : contactName}
              avatar={<Avatar src={message.user ? userAvatar : contactAvatar} />}
              subheader={message.date.toLocaleString()}
            />

            {message.attachment && message.attachment.type === 'image'
            && (<CardMedia component="img" src={message.attachment.source} />)}

            <CardContent>
              <Typography variant="body1" color="textSecondary" component="p">
                <span style={{ whiteSpace: 'pre-line' }}>
                  {message.text}
                </span>
              </Typography>
            </CardContent>

            <CardActions>
              {message.options.map((option) => (
                <Button
                  key={option.id}
                  disabled={!isLast}
                  onClick={() => handleChooseOption(option)}
                >
                  {option.label}
                </Button>
              ))}
            </CardActions>
          </Card>
        );
      })}
      <div style={{ float: 'left', clear: 'both' }} ref={endElRef} />
    </Container>
  );
}

export default App;
