import React, { useState } from 'react'

import { Button, Card, CardActions, CardContent, CardHeader, IconButton, Typography,Grid } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/action';

const Order = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1', quantity: 5 },
    { id: 2, name: 'Item 2', quantity: 3 },
    { id: 3, name: 'Item 3', quantity: 2 },
  ]);

  const dispatch = useDispatch();

  const handleQuantityChange = (id, change) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity + change, 0) }
          : item
      )
    );
  };

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <>
      {/* <h2>Order Page</h2> */}
      <Grid container margin={5}>
        
      {items.map(item => (
      <Grid item xs={12} sm={6} md={4}>
        <Card key={item.id} sx={{ maxWidth: 300, marginBottom: 2 }}>
          <CardHeader title={item.name} />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Available Quantity: {item.quantity}
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton onClick={() => handleQuantityChange(item.id, -1)}>
              <RemoveIcon />
            </IconButton>
            <IconButton onClick={() => handleQuantityChange(item.id, 1)}>
              <AddIcon />
            </IconButton>
            <Button
              onClick={() => handleAddToCart(item)}
              variant="contained"
              endIcon={<ShoppingCartIcon />}
            >
              Add to Cart
            </Button>
          </CardActions>
        </Card>
        </Grid>
      ))}
      
      </Grid>
    </>
  );
};

export default Order