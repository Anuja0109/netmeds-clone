/* eslint-disable prettier/prettier */
import { makeStyles } from '@material-ui/core/styles';

const breadcrumbsStyle = makeStyles(() => ({
  root: {
    boxSizing: 'border-box !important',
    clear: 'both',
    fontFamily: 'Lato !important',
    margin: '0 auto !important',
    minWidth: '1030px',
    maxWidth: '1680px',
    padding: '12px 16px !important',
    width: '100%',
    '& ul': {
      color: '#000',
      fontSize: '12px',
      listStyle: 'none none',
      margin: 0,
      padding: 0,
      '& li': {
        display: 'inline-block',
        textDecoration: 'none',
        '&:not(:last-child)::after': {
          color: '#58595b !important',
          content: '"\\e608"',
          display: 'inline-block',
          fontFamily: 'blank-theme-icons',
          fontSize: '24px',
          fontWeight: 400,
          lineHeight: '18px',
          margin: '0 -7px',
          overflow: 'hidden',
          speak: 'none',
          textAlign: 'center',
          verticalAlign: 'top',
        },
        '& span': {
          color: '#24aeb1',
          fontFamily: 'Lato',
          fontWeight: 700,
        },
      },
    },
  },
  breadcrumbsLink: {
    color: '#0b7e81 !important',
    textDecoration: 'none',
  },
}));

export default breadcrumbsStyle;
