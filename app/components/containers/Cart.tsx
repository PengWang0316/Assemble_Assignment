import React, { memo, useCallback, useState, useEffect, ReactElement } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import {
  Table, TableHead, TableRow, TableCell, TableBody,
} from '@material-ui/core';

import { fetchCart as fetchCartAction } from '../../store/Cart/actions';
import { CartType } from '../../store/Cart/types';

const useStyles = makeStyles({
  root: {
    margin: '50px auto 10px auto',
    width: '80%',
    height: '100%',
    padding: 15,
    backgroundColor: '#e6e6e6',
  },
  table: {
    minWidth: 450,
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
});

type PropType = {
  cart: CartType;
  fetchCart: Function;
};

export const Cart = ({ fetchCart, cart }: PropType): ReactElement => {
  const classes = useStyles({});
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
            <TableCell align="left" className={classes.smallFont}>QUANTITY</TableCell>
            <TableCell align="left" className={classes.smallFont}>PRICE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart && cart.map((product) => (
            <TableRow key={product.sku}>
              <TableCell component="th" scope="row">
                <img src={product.image} alt={product.name} className={classes.productImg} />
              </TableCell>
              <TableCell align="left">
                <p className={classes.smallDarkerFont}>{product.name}</p>
                <p className={classes.smallFont}>
                   SKU#
                  {product.sku}
                </p>
              </TableCell>
              <TableCell className={classes.smallDarkerFont} align="left">{product.quantity}</TableCell>
              <TableCell className={classes.smallDarkerFont} align="left">
                $
                {((product.unitPrice * 100 * product.quantity) / 100).toFixed(2)}
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell>&nbsp;</TableCell>
            <TableCell>&nbsp;</TableCell>
            <TableCell className={classes.smallFont}>SUBTOTAL</TableCell>
            <TableCell className={classes.smallDarkerFont}>
              $
              {cart && cart.reduce((total, product) => (total * 100 + product.unitPrice * 100 * product.quantity) / 100, 0).toFixed(2)}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};
const mapStateToProps = ({ cart }) => ({
  cart,
});
const mapDispatchToProps = { fetchCart: fetchCartAction };
export default connect(mapStateToProps, mapDispatchToProps)(memo(Cart));
