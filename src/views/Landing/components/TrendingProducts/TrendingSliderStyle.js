import { makeStyles } from '@material-ui/core/styles';

const trendingProductsStyle = makeStyles({
  tProSection: {
    clear: 'both',
    width: '100%',
    margin: '8px 0',
    overflow: 'hidden',
    position: 'relative',
    padding: '0 18px',
    '& h2': {
      color: '#6f7284',
      margin: 0,
      fontSize: '12px',
      letterSpacing: '1px',
      padding: '16px 24px',
    },
  },
});

export default trendingProductsStyle;
