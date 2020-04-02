import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Hidden from '@material-ui/core/Hidden';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CallIcon from '@material-ui/icons/Call';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import VideocamIcon from '@material-ui/icons/Videocam';

const useStyles = makeStyles(() => ({
  toolbar: {
    justifyContent: 'space-between',
  },

  leftBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  contactBox: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

function ChatHeader({ contactName, contactAvatar, contactStatus }) {
  const classes = useStyles();
  return (
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
        <Box className={classes.leftBox}>
          <IconButton color="inherit" disabled>
            <ArrowBackIcon />
          </IconButton>
          <IconButton color="inherit">
            <Avatar src={contactAvatar} />
          </IconButton>
          <Box className={classes.contactBox}>
            <Hidden smDown>
              <Typography variant="h6">{contactName}</Typography>
            </Hidden>
            <Hidden mdUp>
              <Typography>{contactName}</Typography>
            </Hidden>
            <Typography>{contactStatus}</Typography>
          </Box>
        </Box>

        <Box>
          <Hidden smDown>
            <IconButton color="inherit" disabled>
              <VideocamIcon />
            </IconButton>
            <IconButton color="inherit" disabled>
              <CallIcon />
            </IconButton>
          </Hidden>
          <IconButton color="inherit" disabled>
            <MoreVertIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default ChatHeader;
