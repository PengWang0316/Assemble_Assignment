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
  margin35: {
    marginBottom: 35,
  },
});

export const OrderComplete = (): ReactElement => {
  const classes = useStyles({});
  return (
    <div className={classes.root}>
      <p className={classes.title}>Order Complete</p>
      <Divider className={classes.margin35} />
      <p className={classes.margin35}>Hooray! Way to order those products.</p>
      <div className={classes.margin35}>
        <Button variant="contained" color="primary">GO HOME</Button>
      </div>
    </div>
  );
};
export default memo(OrderComplete);
