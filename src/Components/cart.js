import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Card, CardActions, CardContent, CardHeader, IconButton, Typography ,Grid} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { removeFromCart, placeOrder } from '../Redux/action';

const Cart = () => {
  const cartItems = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const handlePlaceOrder = () => {
    dispatch(placeOrder(cartItems));
  };

  return (
    <>
      {/* <h2>Cart Page</h2> */}
     
      {cartItems.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <div>
           <Grid container margin={5} spacing={2}>
          {cartItems.map(item => (
            <Grid  item xs={12} sm={6} md={4} sx={{ maxWidth: 300, margin: 5 }}>
            <Card key={item.id}  >
              <CardHeader title={item.name} />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Quantity: {item.quantity}
                </Typography>
              </CardContent>
              <CardActions>
                <IconButton onClick={() => handleRemoveFromCart(item.id)}>
                  <DeleteIcon />
                </IconButton>
              </CardActions>
            </Card>
             </Grid>
          ))}
          </Grid>
          <Button  variant="contained" onClick={handlePlaceOrder}>
            Place Order
          </Button>
          
        </div>
      )}
      
    </>
  );
};

export default Cart;