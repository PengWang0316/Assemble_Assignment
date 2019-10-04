import React, { memo } from 'react';
import { Link, LinkProps } from 'react-router-dom';

const AdapterLink = React.forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => (
  <Link innerRef={ref as any} {...props} />
));
export default memo(AdapterLink);
