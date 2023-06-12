import React from 'react'
import {  Link } from 'react-router-dom';
import { AppBar, Badge, IconButton, Toolbar, Typography,Box } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const cartDetail = useSelector(state=> state.cart)
  return (
    
    <AppBar position="static">
            <Toolbar  style={{ justifyContent: 'space-between' }} >
                <Box display="flex"  justifyContent= 'flex-start'>
              <Typography component={Link} to="/products" variant="h6"  style={{ textDecoration: 'none', color: 'inherit',marginRight: '10px' }}>
              Products
              </Typography>
              <Typography component={Link} to="/history" variant="h6"  style={{ textDecoration: 'none', color: 'inherit' }}>
               History
              </Typography>
              </Box>
              <Box display="flex" justifyContent='flex-end'>
              <IconButton component={Link} to="/cart" color="inherit"style={{justifyContent: 'flex-end' }}>
                <Badge badgeContent={cartDetail.length} color="error">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
              </Box>
            </Toolbar>
          </AppBar>
        
  )
}

export default Navbar