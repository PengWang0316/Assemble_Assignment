import React, { memo, useCallback, useState, useEffect, ReactElement } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

import { fetchCart as fetchCartAction } from '../../store/Cart/actions';
import { CartType } from '../../store/Cart/types';
// import { Paper } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    margin: '50px auto 10px auto',
    width: '80%',
    padding: 15,
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
      Home Page
    </div>
  );
};
const mapStateToProps = ({ cart }) => ({
  cart,
});
const mapDispatchToProps = { fetchCart: fetchCartAction };
export default connect(mapStateToProps, mapDispatchToProps)(memo(Cart));
