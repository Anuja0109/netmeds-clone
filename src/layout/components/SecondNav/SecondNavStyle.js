import { makeStyles } from '@material-ui/core/styles';

const secondNavStyle = makeStyles({
  secondNav: {
    background: '#ffffff',
    marginBottom: '0px',
    marginTop: '0px',
    borderTop: '#02b7c2 solid 0px',
  },
  navigation: {
    background: 'none',
    boxSizing: 'border-box',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '1030px',
    padding: '0px 10px',
  },
  uiMenu: {
    listStyle: 'none',
    margin: '0px',
    padding: '0px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  listItem: {
    boxSizing: 'border-box',
    color: '#151b39',
    display: 'inline-block',
    fontFamily: 'Lato',
    fontSize: '13px',
    fontWeight: 'normal',
    position: 'relative',
    textDecoration: 'none',
    textTransform: 'uppercase',
  },
  levelTop: {
    boxSizing: 'border-box',
    color: '#151b39',
    lineHeight: '53px',
    paddingRight: '23px',
    padding: '0px',
    position: 'relative',
    textDecoration: 'none',
    textTransform: 'capitalize',
    outline: 0,
    fontWeight: 500,
  },
});

export default secondNavStyle;
