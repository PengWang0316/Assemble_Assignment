import React, { memo,useEffect, ReactElement } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import {
  Table, TableHead, TableRow, TableCell, TableBody, Hidden, Button,
} from '@material-ui/core';
import { Link, LinkProps } from 'react-router-dom';

import { fetchCart as fetchCartAction } from '../../store/Cart/actions';
import { CartType } from '../../store/Cart/types';
import Product from '../Product';

const useStyles = makeStyles({
  root: {
    margin: '50px auto 10px auto',
    width: '80%',
    height: '100%',
    padding: 15,
    backgroundColor: '#e6e6e6',
  },
  table: {
    minWidth: 250,
  },
  productImg: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  title: {
    fontSize: 20,
  },
  smallFont: {
    fontSize: 11,
    color: '#919191',
  },
  smallDarkerFont: {
    fontSize: 11,
    color: '#4f4f4f',
  },
  btnDiv: {
    textAlign: 'right',
    marginTop: 40,
  },
});

type PropType = {
  cart: CartType;
  fetchCart: Function;
};

let totalAmount = null;

const AdapterLink = React.forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => (
  <Link innerRef={ref as any} {...props} />
));

export const Cart = ({ fetchCart, cart }: PropType): ReactElement => {
  const classes = useStyles({});
  if (totalAmount === null && cart) totalAmount = cart.reduce((total, product) => (total * 100 + product.unitPrice * 100 * product.quantity) / 100, 0).toFixed(2);

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <div className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell className={classes.title}>Your Cart</TableCell>
            <TableCell align="left">&nbsp;</TableCell>
            <Hidden xsDown>
              <TableCell align="left" className={classes.smallFont}>QUANTITY</TableCell>
              <TableCell align="left" className={classes.smallFont}>PRICE</TableCell>
            </Hidden>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart && cart.map((product) => <Product product={product} />)}
          <TableRow>
            <TableCell className={classes.smallFont}>
              <Hidden smUp>SUBTOTAL</Hidden>
            </TableCell>
            <TableCell className={classes.smallDarkerFont}>
              <Hidden smUp>
                $
                {totalAmount !== null && totalAmount}
              </Hidden>
            </TableCell>
            <TableCell className={classes.smallFont}>
              <Hidden xsDown>SUBTOTAL</Hidden>
            </TableCell>
            <TableCell className={classes.smallDarkerFont}>
              <Hidden xsDown>
                $
                {totalAmount !== null && totalAmount}
              </Hidden>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div className={classes.btnDiv}>
        <Button variant="contained" color="primary" component={AdapterLink} to="/bill">CHECK OUT</Button>
      </div>
    </div>
  );
};
const mapStateToProps = ({ cart }) => ({
  cart,
});
const mapDispatchToProps = { fetchCart: fetchCartAction };
export default connect(mapStateToProps, mapDispatchToProps)(memo(Cart));
