import { colors } from '@material-ui/core';

const white = '#FFFFFF';
const black = '#000000';

export default {
  black,
  white,
  primary: {
    contrastText: white,
    dark: '#2fa3a6',
    main: '#32aeb1',
    light: '#53bbbe',
  },
  secondary: {
    contrastText: white,
    dark: colors.blue[900],
    main: colors.blue.A400,
    light: colors.blue.A400,
  },
  success: {
    contrastText: white,
    dark: colors.green[900],
    main: colors.green[600],
    light: colors.green[400],
  },
  info: {
    contrastText: white,
    dark: colors.blue[900],
    main: colors.blue[600],
    light: colors.blue[400],
  },
  warning: {
    contrastText: white,
    dark: colors.orange[900],
    main: colors.orange[600],
    light: colors.orange[400],
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[400],
  },
  text: {
    primary: '#58595b',
    secondary: '#6f7284',
    link: '#6f7284',
  },
  background: {
    default: '#f3f3f3',
    paper: white,
  },
  button: '#24aeb1',
  icon: '#53bbbe',
  divider: colors.grey[200],
};
