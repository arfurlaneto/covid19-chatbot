import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import {
  Hidden,
  Box,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Avatar,
} from '@material-ui/core';

import {
  ArrowBack as ArrowBackIcon,
  Call as CallIcon,
  MoreVert as MoreVertIcon,
  Videocam as VideocamIcon,
} from '@material-ui/icons';

const useStyles = makeStyles(() => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  contactBox: {
    display: 'flex',
    alignItems: 'center',
  },
}));

function ChatHeader({ contactName, contactAvatar, contactStatus }) {
  const classes = useStyles();
  return (
    <>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>

          <Box className={classes.contactBox}>
            <IconButton color="inherit" disabled>
              <ArrowBackIcon />
            </IconButton>
            <IconButton color="inherit">
              <Avatar src={contactAvatar} />
            </IconButton>
            <Box>
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
      <Toolbar />
    </>
  );
}

export default ChatHeader;
