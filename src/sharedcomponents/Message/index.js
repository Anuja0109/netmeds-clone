import { Grid } from '@material-ui/core';
import messageStyle from './MessageStyle';

function Message() {
  const classes = messageStyle();
  return (
    <Grid conatiner item className={classes.messageBlock}>
      <Grid item xs={12} md={12} className={classes.messageContainer}>
        <h1>Netmeds Updates: </h1>
        <p>
          • Medicine: We are presently delivering to over 14000+ pin codes and
          this number will increase in the days to come. However, due to the
          COVID-19 lockdown, there may be a delay in deliveries.
        </p>
      </Grid>
    </Grid>
  );
}

export default Message;
