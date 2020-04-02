import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

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
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  contactInfo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
}));

function App({ contactName, contactAvatar }) {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>

        <Box display="flex" flexDirection="row">
          <IconButton color="inherit" disabled>
            <ArrowBackIcon />
          </IconButton>
          <IconButton color="inherit">
            <Avatar src={contactAvatar} />
          </IconButton>
          <Box className={classes.contactInfo}>
            <Typography variant="h6">{contactName}</Typography>
            <Typography>online</Typography>
          </Box>
        </Box>

        <Box>
          <IconButton color="inherit" disabled>
            <VideocamIcon />
          </IconButton>
          <IconButton color="inherit" disabled>
            <CallIcon />
          </IconButton>
          <IconButton color="inherit" disabled>
            <MoreVertIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default App;
