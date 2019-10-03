import React, { ReactElement, memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Divider, Button } from '@material-ui/core';
import { Link, LinkProps } from 'react-router-dom';

import StateSelect from '../StateSelect';
import CountrySelect from '../CountrySelect';

const useStyles = makeStyles({
  root: {
    margin: '50px auto 10px auto',
    width: '80%',
    height: '100%',
    padding: 15,
    backgroundColor: '#e6e6e6',
  },
  title: {
    fontSize: 20,
  },
  flexDiv: {
    display: 'flex',
    marginTop: 40,
  },
  label: {
    width: '100%',
    marginBottom: 10,
    display: 'flex',
    justifyContent: 'flex-start',
  },
  textInput: {
    border: 0,
    color: '#999',
    width: '100%',
  },
  info: {
    width: '100%',
    marginRight: 20,
  },
  right: {
    textAlign: 'right',
  },
  bottomDiv: {
    marginTop: 30,
  },
  smallDarkerFont: {
    fontSize: 11,
    color: '#4f4f4f',
  },
  labelSpan: {
    fontSize: 11,
    color: '#4f4f4f',
    minWidth: 100,
  },
  titleDiv: {
    marginBottom: 10,
    fontSize: 16,
  },
  '@media (max-width: 735px)': {
    flexDiv: {
      display: 'block',
    },
  },
});

const AdapterLink = React.forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => (
  <Link innerRef={ref as any} {...props} />
));

export const BillInformation = (): ReactElement => {
  const classes = useStyles({});
  return (
    <div className={classes.root}>
      <p className={classes.title}>Check Out</p>
      <Divider />

      <div className={classes.flexDiv}>
        <div className={classes.info}>
          <div className={classes.titleDiv}>Payment Information</div>
          <label className={classes.label} htmlFor="cardName">
            <span className={classes.labelSpan}>Name on cardCVV</span>
            <input className={classes.textInput} type="text" name="cardName" id="cardName" defaultValue="Name on Card" />
          </label>
          <label className={classes.label} htmlFor="cardNumber">
            <span className={classes.labelSpan}>Card Number</span>
            <input className={classes.textInput} type="password" name="cardNumber" id="cardNumber" defaultValue="XXXX XXXX XXXX XXXX" />
          </label>
          <label className={classes.label} htmlFor="cardDate">
            <span className={classes.labelSpan}>Expiration Date</span>
            <input className={classes.textInput} type="month" name="cardDate" id="cardDate" defaultValue="MM/YYYY" />
          </label>
          <label className={classes.label} htmlFor="cardCVV">
            <span className={classes.labelSpan}>CVV</span>
            <input className={classes.textInput} type="text" name="cardCVV" id="cardCVV" defaultValue="CVV" />
          </label>
        </div>

        <div className={classes.info}>
          <div className={classes.titleDiv}>Shipping Address</div>
          <label className={classes.label} htmlFor="name">
            <span className={classes.labelSpan}>Name</span>
            <input className={classes.textInput} type="text" name="name" id="name" defaultValue="Full name" />
          </label>
          <label className={classes.label} htmlFor="address">
            <span className={classes.labelSpan}>Address</span>
            <input className={classes.textInput} type="text" name="address" id="address" defaultValue="Address" />
          </label>
          <label className={classes.label} htmlFor="apt">
            <span className={classes.labelSpan}>Apt/suite/etc</span>
            <input className={classes.textInput} type="text" name="apt" id="apt" defaultValue="Apt/suite/etc" />
          </label>
          <label className={classes.label} htmlFor="city">
            <span className={classes.labelSpan}>City</span>
            <input className={classes.textInput} type="text" name="city" id="city" defaultValue="City" />
          </label>
          <CountrySelect />
          <StateSelect />
          <label className={classes.label} htmlFor="zipcode">
            <span className={classes.labelSpan}>Zipcode</span>
            <input className={classes.textInput} type="text" name="zipcode" id="zipcode" defaultValue="ZIP Code" />
          </label>
          <div className={`${classes.right} ${classes.smallDarkerFont}`}>
            <input type="checkbox" />
            Billing address same as shipping
          </div>
        </div>

      </div>
      <Divider />

      <div className={`${classes.right} ${classes.bottomDiv}`}>
        <Button variant="contained" color="primary" component={AdapterLink} to="/orderComplete">PLACE ORDER</Button>
      </div>
    </div>
  );
};
export default memo(BillInformation);
