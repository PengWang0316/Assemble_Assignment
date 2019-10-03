import React, { ReactElement, memo } from 'react';
import {
  TableRow, TableCell, Hidden,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import ProductType from '../../store/Product/types';

type PropType = {
  product: ProductType;
};

const useStyles = makeStyles({
  productImg: {
    width: 100,
    height: 100,
    borderRadius: 100,
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

export const Product = ({ product }: PropType): ReactElement => {
  const classes = useStyles({});
  return (
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
        <Hidden smUp>
          <p className={classes.smallDarkerFont}>
            QTY:
            &nbsp;
            {product.quantity}
            &nbsp;&nbsp;
            PRICE: $
            {((product.unitPrice * 100 * product.quantity) / 100).toFixed(2)}
          </p>
        </Hidden>
      </TableCell>
      <Hidden xsDown>
        <TableCell className={classes.smallDarkerFont} align="left">{product.quantity}</TableCell>
        <TableCell className={classes.smallDarkerFont} align="left">
          $
          {((product.unitPrice * 100 * product.quantity) / 100).toFixed(2)}
        </TableCell>
      </Hidden>
    </TableRow>
  );
};
export default memo(Product);
