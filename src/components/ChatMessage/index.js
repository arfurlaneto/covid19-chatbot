/* eslint-disable react/prop-types */
import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import {
  Typography,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Avatar,
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  contactCard: {
    maxWidth: 345,
    marginTop: '10px',
  },

  userCard: {
    maxWidth: 345,
    marginTop: '10px',
    background: 'rgb(220, 248, 198)',
    marginLeft: 'auto',
  },
}));

function ChatMessage({
  message, isLast, handleChooseOption, userName, userAvatar, contactName, contactAvatar,
}) {
  const classes = useStyles();

  return (
    <Card
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
}

export default ChatMessage;
