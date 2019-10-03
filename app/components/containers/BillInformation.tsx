import React, { ReactElement, memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Divider, Button } from '@material-ui/core';
import { Link, LinkProps } from 'react-router-dom';

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
  formDiv: {
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
  labelDiv: {
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
          <div className={classes.formDiv}>
            <label className={classes.labelDiv} htmlFor="cardName">Name on Card</label>
            <input className={classes.textInput} type="text" name="cardName" id="cardName" defaultValue="Name on Card" />
          </div>
          <div className={classes.formDiv}>
            <label className={classes.labelDiv} htmlFor="cardNumber">Card Number</label>
            <input className={classes.textInput} type="password" name="cardNumber" id="cardNumber" defaultValue="XXXX XXXX XXXX XXXX" />
          </div>
          <div className={classes.formDiv}>
            <label className={classes.labelDiv} htmlFor="cardDate">Card Number</label>
            <input className={classes.textInput} type="date" name="cardDate" id="cardDate" defaultValue="MM/YYYY" />
          </div>
          <div className={classes.formDiv}>
            <label className={classes.labelDiv} htmlFor="cardCVV">CVV</label>
            <input className={classes.textInput} type="text" name="cardCVV" id="cardCVV" defaultValue="CVV" />
          </div>
        </div>

        <div className={classes.info}>
          <div className={classes.titleDiv}>Shipping Address</div>
          <div className={classes.formDiv}>
            <label className={classes.labelDiv} htmlFor="name">Name</label>
            <input className={classes.textInput} type="text" name="name" id="name" defaultValue="Full name" />
          </div>
          <div className={classes.formDiv}>
            <label className={classes.labelDiv} htmlFor="address">Address</label>
            <input className={classes.textInput} type="text" name="address" id="address" defaultValue="Address" />
          </div>
          <div className={classes.formDiv}>
            <label className={classes.labelDiv} htmlFor="apt">Apt/suite/etc</label>
            <input className={classes.textInput} type="text" name="apt" id="apt" defaultValue="Apt/suite/etc" />
          </div>
          <div className={classes.formDiv}>
            <label className={classes.labelDiv} htmlFor="city">City</label>
            <input className={classes.textInput} type="text" name="city" id="city" defaultValue="City" />
          </div>
          <div className={classes.formDiv}>
            <label className={classes.labelDiv} htmlFor="country">Country</label>
            <select name="country">
              <option value="United State">United State</option>
            </select>
          </div>
          <div className={classes.formDiv}>
            <label className={classes.labelDiv} htmlFor="state">Country</label>
            <select name="state">
              <option value="State">State</option>
            </select>
          </div>
          <div className={classes.formDiv}>
            <label className={classes.labelDiv} htmlFor="zipcode">Zipcode</label>
            <input className={classes.textInput} type="text" name="zipcode" id="zipcode" defaultValue="ZIP Code" />
          </div>
          <div className={`${classes.right} ${classes.smallDarkerFont}`}><input type="checkbox" />Billing address same as shipping</div>
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
