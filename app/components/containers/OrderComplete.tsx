import React, { ReactElement, memo } from 'react';
import { Button, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    margin: '50px auto 10px auto',
    width: '80%',
    height: '100%',
    padding: 15,
    backgroundColor: '#e6e6e6',
    textAlign: 'center',
  },
  title: {
    fontSize: 16,
    textAlign: 'left',
  },
});

export const OrderComplete = (): ReactElement => {
  const classes = useStyles({});
  return (
    <div className={classes.root}>
      <p className={classes.title}>Order Complete</p>
      <Divider />
      <p>Hooray! Way to order those products.</p>
      <div>
        <Button variant="contained" color="primary">GO HOME</Button>
      </div>
    </div>
  );
};
export default memo(OrderComplete);
