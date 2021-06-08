import { fade, makeStyles } from '@material-ui/core/styles';

const AppHeaderStyle = makeStyles((theme) => ({
  grow: {
    backgroundColor: '#32aeb1',
  },
  noShadow: {
    boxShadow: 'none !important',
  },
  panelWrapper: {
    minWidth: '1030px',
    maxWidth: '1280px',
    margin: '0px auto',
    boxSizing: 'border-box',
    padding: '0px 10px',
    marginTop: '20px',
  },
  panelHeader: {
    display: 'flex',
    height: '90px',
    lineHeight: '90px',
  },
  logo: {
    maxWidth: '168px',
    margin: '0 32px 0 0',
  },
  logoLink: {
    textDecoration: 'none',
  },
  logoImg: {
    width: '168px',
    height: '60px',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default AppHeaderStyle;
