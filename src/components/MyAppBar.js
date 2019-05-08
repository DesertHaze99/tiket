import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import '../App.css'
import {Link} from "react-router-dom";
import Main from '../components/page/Main';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          
            <Link to='/home' >
                <Typography variant="h6" color="inherit" className={classes.grow}>
                    Home
                </Typography>
            </Link>&nbsp;&nbsp;
            <Link to='/profile' >
                <Button>Profile</Button>
            </Link>&nbsp;&nbsp;

            <Link to='/portofolio' >
                <Button>Portofolio</Button>
            </Link>&nbsp;&nbsp;

            <Link to='/contact' >
                <Button>Contact</Button>
            </Link>&nbsp;&nbsp;
            

          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);