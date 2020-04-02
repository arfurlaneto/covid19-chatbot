import React, { useCallback } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';

import FaceIcon from '@material-ui/icons/Face';

const useStyles = makeStyles(() => ({
  chatCard: {
    maxWidth: 345,
  },

  chatCardUser: {
    maxWidth: 345,
    background: 'rgb(220, 248, 198)',
    marginLeft: 'auto',
  },
}));

function App({
  contactName, contactAvatar, message, onChoose,
}) {
  const handleChooseOption = useCallback((option) => {
    if (onChoose) {
      onChoose(option);
    }
  }, [onChoose]);

  const classes = useStyles();

  return (
    <>
      <Card variant="outlined" className={message.user ? classes.chatCardUser : classes.chatCard}>
        {message.user
          ? (
            <CardHeader
              title="Você"
              avatar={<FaceIcon />}
              subheader={message.date.toLocaleString()}
            />
          )
          : (
            <CardHeader
              title={contactName}
              avatar={<Avatar src={contactAvatar} />}
              subheader={message.date.toLocaleString()}
            />
          )}

        {message.attachment && (<CardMedia component="img" src={message.attachment.source} />)}

        <CardContent>
          <Typography variant="body1" color="textSecondary" component="p">
            {message.text}
          </Typography>
        </CardContent>

        <CardActions>
          {message.options.map((option) => (
            <Button key={option.id} onClick={() => handleChooseOption(option)}>
              {option.label}
            </Button>
          ))}
        </CardActions>
      </Card>
    </>
  );
}

export default App;
