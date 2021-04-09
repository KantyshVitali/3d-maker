import { Button, Grid } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import React from 'react';
import { NavLink } from 'react-router-dom';

import { publicRoutes } from '../../routes';

import './NavBar.scss';

const NavBar = (): JSX.Element => (
  <AppBar color="default" position="absolute">
    <Toolbar variant="dense">
      <Grid container justify="flex-end">
        <div className="buttonGroup">
          {publicRoutes.map(x => (
            <NavLink key={x.path} to={x.path}>
              <Button variant="outlined">{x.path}</Button>
            </NavLink>
          ))}
        </div>
      </Grid>
    </Toolbar>
  </AppBar>
);

export default NavBar;
