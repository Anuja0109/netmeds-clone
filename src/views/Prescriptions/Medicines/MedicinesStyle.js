import { makeStyles } from '@material-ui/core/styles';

const medicinesStyle = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  pressTitle: {
    marginBottom: '30px',
    color: '#151b39',
    '&::after, ::before': {
      boxSizing: 'border-box',
    },
  },
  innerContent: {
    boxSizing: 'border-box',
    marginLeft: 'auto',
    marginRight: 'auto',
    minWidth: '1030px',
    maxWidth: '1680px',
    padding: '10px 16px 0',
    width: 'auto',
    fontSize: '14px',
    '& h1': {
      fontFamily: 'Lato',
      fontWeight: 700,
      margin: 0,
      color: '#24aeb1',
    },
    '& span': {
      fontStyle: 'italic',
      display: 'block',
      color: '#24aeb1',
    },
  },
  listNav: {
    overflow: 'hidden',
    marginBottom: '15px',
  },
  inLetters: {
    width: '100%',
    borderTop: '#ddd solid 1px',
    borderBottom: '#ddd solid 1px',
    padding: '8px 0',
    textAlign: 'center',
    background: '#fff',
    fontFamily: 'Lato',
    fontWeight: 700,
    display: 'flex',
    margin: 0,
    justifyContent: 'space-between',
  },
  lettersLink: {
    fontSize: '14px',
    display: 'inline-block',
    padding: '0 11.5px',
    borderRight: '1px solid #ddd',
    borderLeft: 'none',
    textDecoration: 'none',
    margin: '0 3px 0 0',
    textTransform: 'uppercase',
    color: '#151b39',
    fontWeight: 700,
    background: '#fff',
  },
  selected: {
    backgroundColor: '#ffffff',
    color: '#00b6c1 !important',
  },
  disabledLink: {
    pointerEvents: 'none',
    color: '#ccc !important',
    backgroundColor: '#fff',
    textDecoration: 'none',
  },
  drugList: {
    columnCount: 4,
  },
  drugListCol: {
    '&::after, ::before': {
      boxSizing: 'border-box',
    },
  },
  drugPrefix: {
    color: '#151b39 !important',
    fontSize: '19px !important',
    display: 'inline-block',
    marginTop: 0,
  },
  drugPrefixList: {
    padding: 0,
    marginTop: 0,
    marginBottom: '1rem',
  },
  drugListItem: {
    margin: '0 0 8px',
    padding: '0 11px 0 0',
    verticalAlign: 'top',
    listStyle: 'none',
    fontWeight: '200',
    '&::marker': {
      listStyle: 'none',
      fontWeight: 200,
    },
  },
  itemLink: {
    color: '#151b39',
    fontSize: '15px',
    textDecoration: 'none',
    wordWrap: 'break-word',
    display: 'inline-block',
    backgroundColor: 'transparent',
    outline: 0,
  },
}));

export default medicinesStyle;
