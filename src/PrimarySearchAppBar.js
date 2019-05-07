import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';

import Button from '@material-ui/core/Button';

import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';
import SvgIcon from '@material-ui/core/SvgIcon';
import { fdatasync } from 'fs';


const styles = theme => ({
  icon: {
    margin: theme.spacing.unit * 2,
  },
  iconHover: {
    margin: theme.spacing.unit * 2,
    '&:hover': {
      color: red[800],
    },
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
});

function PesawatIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
      <path d="M0 0h24v24H0z" fill="none" color="primary" />
    </SvgIcon>
  );
}

function HotelIcon(props) {
  return (
    <SvgIcon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z"/>
      <path d="M7 13c1.65 0 3-1.35 3-3S8.65 7 7 7s-3 1.35-3 3 1.35 3 3 3zm12-6h-8v7H3V7H1v10h22v-6c0-2.21-1.79-4-4-4z"/>
    </SvgIcon>
  );
}

function KeretaIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M12 2c-4 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h2.23l2-2H14l2 2h2v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4zM7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm3.5-7H6V6h5v4zm2 0V6h5v4h-5zm3.5 7c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
      <path fill="none" d="M0 0h24v24H0V0z"/>
    </SvgIcon>
  );
}

function MobilIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
      <path d="M0 0h24v24H0z" fill="none"/>
    </SvgIcon>
  );
}

function TiketIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M0 0h24v24H0z" fill="none"/>
      <path d="M20 12c0-1.1.9-2 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2zm-4.42 4.8L12 14.5l-3.58 2.3 1.08-4.12-3.29-2.69 4.24-.25L12 5.8l1.54 3.95 4.24.25-3.29 2.69 1.09 4.11z"/>
    </SvgIcon>
  );
}

function Dialog(props) {
  return (
    <SvgIcon {...props}>
      <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z"/>
      <path d="M0 0h24v24H0z" fill="none"/>
    </SvgIcon>
  );
}

function Profile(props) {
  return (
    <SvgIcon {...props}>
      <path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"/>
      <path d="M0 0h24v24H0z" fill="none"/>
    </SvgIcon>
  );
}




class PrimarySearchAppBar extends React.Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
    Hotels  : [

    ]
  };

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  render() {
    const { anchorEl, mobileMoreAnchorEl } = this.state;
    const { classes } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
      </Menu>
    );

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMobileMenuClose}>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <MailIcon />
            </Badge>
          </IconButton>
          <p>Messages</p>
        </MenuItem>
        <MenuItem onClick={this.handleMobileMenuClose}>
          <IconButton color="inherit">
            <Badge badgeContent={11} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={this.handleProfileMenuOpen}>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Menu>
    );

    return (

      <div className={classes.root} >
        <AppBar position="static" color="white" >
          <Toolbar>
            {/* <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer">
              <MenuIcon />
            </IconButton> */}
            <Typography className={classes.title} variant="h6" color="inherit" noWrap >
              <svg xmlns="http://www.w3.org/2000/svg" width="151" height="33" marginTop="10px"><g fill-rule="evenodd"><path d="M11 23.076a1.85 1.85 0 0 1-.153.746 1.49 1.49 0 0 1-.527.614c-.25.177-.6.315-1.053.415S8.24 25 7.537 25c-1.507 0-2.653-.37-3.437-1.1s-1.18-1.83-1.18-3.268v-8.36H1.87a1.79 1.79 0 0 1-1.323-.548A1.83 1.83 0 0 1 0 10.369a1.7 1.7 0 0 1 .544-1.261 1.82 1.82 0 0 1 1.323-.531H2.92V6.1c0-.575.208-1.066.624-1.476S4.48 4 5.1 4c.583 0 1.083.204 1.498.613s.624.9.624 1.476v2.488H8.93c.498 0 .927.183 1.3.548s.543.802.543 1.3a1.74 1.74 0 0 1-.543 1.294 1.78 1.78 0 0 1-1.29.531H7.232v7.233c0 .64.162 1.095.5 1.36s.663.398 1 .398h.374c.6 0 1.08.178 1.408.53s.494.786.494 1.294m6.002-.23c0 .596-.243 1.105-.73 1.53s-1.082.634-1.8.634c-.682 0-1.265-.212-1.75-.635s-.73-.933-.73-1.53V10.13c0-.595.243-1.098.73-1.5S13.824 8 14.56 8c.683 0 1.26.206 1.733.62s.708.916.708 1.5v12.707zm16 .1c0 .498-.198.968-.593 1.4A2.03 2.03 0 0 1 30.87 25a2.49 2.49 0 0 1-.996-.211c-.328-.14-.593-.36-.796-.664l-3.82-5.346-1.96 2.008v2.17a1.93 1.93 0 0 1-.626 1.442 2.14 2.14 0 0 1-1.539.6c-.587 0-1.088-.2-1.505-.6S19 23.52 19 22.958V5a1.87 1.87 0 0 1 .625-1.425c.417-.4.942-.584 1.572-.584.586 0 1.083.195 1.5.584A1.9 1.9 0 0 1 23.305 5v11.113l5.782-6.544a1.86 1.86 0 0 1 1.455-.648 1.99 1.99 0 0 1 1.42.583c.406.4.6.842.6 1.36a1.84 1.84 0 0 1-.474 1.232L28.3 16.252l4.294 5.508a1.94 1.94 0 0 1 .407 1.166m12.05-7.952a4.01 4.01 0 0 0-.262-1.207 3.58 3.58 0 0 0-.686-1.157c-.304-.346-.7-.637-1.2-.87s-1.072-.353-1.747-.353c-.653 0-1.214.112-1.682.335a3.58 3.58 0 0 0-1.159.855 4.09 4.09 0 0 0-.718 1.156 4.55 4.55 0 0 0-.326 1.241h7.772zm3.95.94a1.92 1.92 0 0 1-.555 1.358 1.81 1.81 0 0 1-1.371.587h-9.73a4.5 4.5 0 0 0 .44 1.459 3.86 3.86 0 0 0 .914 1.19 4.43 4.43 0 0 0 1.37.805c.53.2 1.138.302 1.813.302.434 0 .93-.067 1.485-.2s1.083-.335 1.584-.604a1.78 1.78 0 0 1 .817-.2c.435 0 .837.156 1.208.47a1.54 1.54 0 0 1 .555 1.24 1.4 1.4 0 0 1-.718 1.274 8.57 8.57 0 0 1-2.565 1.072 11.99 11.99 0 0 1-2.824.335c-1.198 0-2.313-.2-3.347-.603s-1.927-.973-2.68-1.7-1.338-1.632-1.763-2.682S33 17.78 33 16.484a9.04 9.04 0 0 1 .604-3.303c.402-1.04.962-1.94 1.682-2.7a7.97 7.97 0 0 1 2.579-1.81c1-.447 2.102-.67 3.298-.67.893 0 1.724.13 2.498.385a7.16 7.16 0 0 1 2.107 1.1 7.24 7.24 0 0 1 1.649 1.727 9.33 9.33 0 0 1 1.126 2.263l.3 1.207a5.49 5.49 0 0 1 .147 1.23zm11 7.162a1.84 1.84 0 0 1-.153.746 1.49 1.49 0 0 1-.525.614c-.25.177-.6.315-1.053.415s-1.03.15-1.732.15c-1.507 0-2.653-.37-3.44-1.112s-1.178-1.83-1.178-3.268v-8.36h-1.052c-.52 0-.963-.183-1.325-.548A1.83 1.83 0 0 1 49 10.369c0-.486.18-.907.543-1.26a1.83 1.83 0 0 1 1.325-.53h1.052V6.1c0-.575.207-1.066.623-1.476S53.48 4 54.1 4c.583 0 1.084.204 1.498.613a2 2 0 0 1 .624 1.476v2.488h1.697c.498 0 .927.183 1.3.548a1.79 1.79 0 0 1 .543 1.31 1.75 1.75 0 0 1-.543 1.294 1.78 1.78 0 0 1-1.29.531h-1.697v7.233c0 .64.163 1.095.492 1.36s.662.398 1 .398h.373c.613 0 1.08.178 1.4.53s.492.786.492 1.294M111 22.15a1.3 1.3 0 0 1-.084.436c-.057.156-.165.302-.322.436-.6.604-1.342 1.085-2.2 1.442s-1.893.536-3.1.536c-1.24 0-2.367-.212-3.382-.637a7.57 7.57 0 0 1-2.604-1.777 8.24 8.24 0 0 1-1.69-2.699c-.405-1.04-.6-2.174-.6-3.404 0-1.207.204-2.33.6-3.37s.97-1.94 1.7-2.7a7.74 7.74 0 0 1 2.604-1.776c1.004-.424 2.123-.637 3.363-.637.608 0 1.184.05 1.725.15a7.22 7.22 0 0 1 1.488.436 6.27 6.27 0 0 1 1.234.687 6.89 6.89 0 0 1 .998.872 1.21 1.21 0 0 1 .237.704 1.24 1.24 0 0 1-.424.956c-.282.256-.6.385-.963.385a1.36 1.36 0 0 1-.946-.369 4.72 4.72 0 0 0-1.472-.9c-.53-.202-1.1-.285-1.707-.285-.834 0-1.573.146-2.214.436a5.02 5.02 0 0 0-1.674 1.223c-.474.525-.835 1.14-1.082 1.845s-.374 1.48-.374 2.33.124 1.632.374 2.347.608 1.336 1.082 1.86a5.02 5.02 0 0 0 1.674 1.224c.644.29 1.38.436 2.214.436 1.24 0 2.3-.402 3.18-1.207a1.55 1.55 0 0 1 .946-.302c.36 0 .688.124.98.37a1.17 1.17 0 0 1 .44.939m12.944-5.654c0-.782-.1-1.52-.33-2.213a5.67 5.67 0 0 0-.969-1.845c-.427-.536-.942-.966-1.545-1.3s-1.3-.487-2.12-.487c-.8 0-1.5.162-2.103.487a4.92 4.92 0 0 0-1.56 1.3 5.8 5.8 0 0 0-.97 1.845 7.27 7.27 0 0 0-.33 2.213c0 .783.1 1.526.33 2.23s.542 1.325.97 1.86a4.9 4.9 0 0 0 1.56 1.29c.614.323 1.315.486 2.103.486.8 0 1.517-.16 2.12-.486a4.96 4.96 0 0 0 1.545-1.291 5.63 5.63 0 0 0 .969-1.861c.22-.704.33-1.448.33-2.23m3.055 0c0 1.185-.185 2.292-.56 3.32s-.903 1.928-1.593 2.7a7.46 7.46 0 0 1-2.514 1.827c-.986.448-2.103.67-3.35.67-1.227 0-2.333-.223-3.318-.67a7.65 7.65 0 0 1-2.53-1.827 7.82 7.82 0 0 1-1.593-2.7c-.36-1.03-.542-2.135-.542-3.32 0-1.162.18-2.258.542-3.286a7.84 7.84 0 0 1 1.593-2.7c.7-.772 1.546-1.38 2.53-1.827s2.1-.67 3.318-.67c1.248 0 2.365.223 3.35.67s1.824 1.056 2.514 1.827a8.17 8.17 0 0 1 1.593 2.7 9.57 9.57 0 0 1 .56 3.286m23.577 8.08a1.39 1.39 0 0 1-1.042.441c-.4 0-.726-.147-1.008-.44s-.423-.645-.423-1.052v-9.64c0-.972-.217-1.747-.65-2.324s-1.128-.865-2.083-.865c-.803 0-1.562.243-2.278.73s-1.27 1.034-1.66 1.646v10.45c0 .407-.14.76-.424 1.052s-.63.44-1.04.44a1.35 1.35 0 0 1-1.01-.44c-.28-.293-.422-.645-.422-1.052V13.87c0-.972-.212-1.747-.634-2.324s-1.136-.865-2.132-.865c-.76 0-1.496.25-2.213.746s-1.268 1.05-1.66 1.663v10.416a1.47 1.47 0 0 1-.424 1.052c-.283.294-.63.44-1.042.44a1.35 1.35 0 0 1-1.007-.441 1.47 1.47 0 0 1-.424-1.052v-13.842a1.43 1.43 0 0 1 .424-1.018c.28-.294.64-.442 1.074-.442.37 0 .694.147.976.442a1.43 1.43 0 0 1 .424 1.018v1.05c.15-.27.395-.56.73-.865s.732-.6 1.188-.883a7.25 7.25 0 0 1 1.481-.695 5.18 5.18 0 0 1 1.675-.27c1.215 0 2.17.283 2.865.848a4.12 4.12 0 0 1 1.399 2.172 5.12 5.12 0 0 1 .88-1.086c.38-.362.786-.684 1.253-.967a7.49 7.49 0 0 1 1.512-.695c.543-.18 1.097-.272 1.66-.272 1.453 0 2.56.407 3.32 1.22s1.14 2.06 1.14 3.733v10.552a1.47 1.47 0 0 1-.423 1.052" fill="#0064D2"/><path d="M95 16.5C95 25.613 87.613 33 78.5 33S62 25.613 62 16.5 69.388 0 78.5 0 95 7.387 95 16.5" fill="#FEDD00"/></g></svg>
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <Button className={classes.button}>
                <Dialog color="primary">
                  <Badge badgeContent={4} color="primary">
                    <MailIcon />
                  </Badge>
                </Dialog>
              </Button>
              <Button className={classes.button}>
                <h4>Cek Order</h4>
              </Button>
              <Button className={classes.button}>
                <Profile color="primary">
                  <Badge badgeContent={4} color="primary">
                    <MailIcon />
                  </Badge>
                  
                </Profile>
                <h4 >LOGIN</h4>
              </Button>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                <MoreIcon />
              </IconButton>
            </div>
            
          </Toolbar>
          <div className="col-md-6">
            <Button className={classes.button}><PesawatIcon className={classes.icon} color="primary"/>Pesawat</Button>
            <Button className={classes.button}><HotelIcon className={classes.icon} color="primary"/>Hotel</Button>
            <Button className={classes.button}><KeretaIcon className={classes.icon} color="primary"/> Kereta Api</Button>
            <Button className={classes.button}><MobilIcon className={classes.icon} color="primary"/>Sewa Mobil</Button>
            <Button className={classes.button}><TiketIcon className={classes.icon} color="primary"/>Entertainment</Button>
          </div>
        </AppBar>
        
        {renderMenu}
        {renderMobileMenu}
        </div>
    );

  }
  
}

PrimarySearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PrimarySearchAppBar);